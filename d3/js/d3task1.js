export class D3Task1 {

    constructor(margins, visWidth, visHeight) {
        console.log("creating task 1");
        
        this.margins = margins;
        this.visWidth = visWidth;
        this.visHeight = visHeight;

        //get the svg/groups created by the framework
        this.d3svg = d3.select("#d3-vis");
        this.vis = d3.select("#d3-vis-foreground");
        this.visbg = d3.select("#d3-vis-background");
        this.vislegend = d3.select("#d3-vis-legend");
    }

    createVisualization() {
        //fill in
    }

}