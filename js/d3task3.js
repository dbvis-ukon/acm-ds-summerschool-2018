export class D3Task3 {

    constructor(margins, visWidth, visHeight) {
        console.log("creating task 3");

        this.margins = margins;
        this.visWidth = visWidth;
        this.visHeight = visHeight;

        //get the svg/groups created by the framework
        this.d3svg = d3.select("#d3-vis");
        this.vis = d3.select("#d3-vis-foreground");
        this.visbg = d3.select("#d3-vis-background");
        this.vislegend = d3.select("#d3-vis-legend");

        this.loadData();
    }

    /** loads the data */
    loadData() {
        console.log("loading data...");

        //parsing the data file which is separated by ';' requires the separator to be included
        d3.dsv(";", "Air_Traffic_Landings_Statistics.csv", (row) => {
            //remove spaces from fields
            for(let [field, value] of Object.entries(row)) {
                //replace spaces with an underscore
                let newField = field.replace(/\s+/g, "_");
                //delete old field
                delete row[field];
                //add new field
                row[newField] = value;
            }
            //split Activity_Period to two fields: "Activity_Period_Year" and "Activity_Period_Month"
            if(row.Activity_Period) {
                let year = row.Activity_Period.substr(0, 4);
                let month = row.Activity_Period.substr(4, 6);
                row.Activity_Period_Year = Number.parseInt(year);
                row.Activity_Period_Month = Number.parseInt(month);
            }
            //Total_Landed_Weight is given as string with grouped digits -> remove the grouping
            if(row.Total_Landed_Weight) {
                let value = row.Total_Landed_Weight.replace(/,/g,"");
                row.Total_Landed_Weight = value;
            }
            //parse all numbers to actual numbers
            if(row.Total_Landed_Weight) {
                row.Total_Landed_Weight = Number.parseInt(row.Total_Landed_Weight);
            }
            if(row.Landing_Count) {
                row.Landing_Count = Number.parseInt(row.Landing_Count);
            }
            //return the modified row
            return row;
        }).then(dataset => {
            //d3 adds a columns property to the dataset that also needs to be adjusted
            for(let i in dataset.columns) {
                dataset.columns[i] = dataset.columns[i].replace(/\s+/g, "_");
            }
            //add the two activity period fields
            //as each row is given as an object/map, the order does not matter
            dataset.columns.push("Activity_Period_Year", "Activity_Period_Month");

            this.data = dataset;
            console.log("loaded", this.data.length, "data instances")
        }).then(() => this.createVisualization());
    }

    createVisualization() {
        if(!this.data) return;

        //compute the aggregated value per airline
        let landingCounts = d3.nest()
            //key: year and month of landings
            .key(d => d.Activity_Period)
            //value: sum up the number of landings
            .rollup(v => d3.sum(v, d => d.Landing_Count))
            //make sure to sort the output ascendingly
            .sortKeys(d3.ascending)
            //compute nest on data
            .entries(this.data);

        //complete
    }
}