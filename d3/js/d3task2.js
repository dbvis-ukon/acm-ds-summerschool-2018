export class D3Task2 {

    constructor(margins, visWidth, visHeight) {
        console.log("creating task 2");

        this.margins = margins;
        this.visWidth = visWidth;
        this.visHeight = visHeight;

        //get the svg/groups created by the framework
        this.d3svg = d3.select("#d3-vis");
        this.vis = d3.select("#d3-vis-foreground");
        this.visbg = d3.select("#d3-vis-background");
        this.vislegend = d3.select("#d3-vis-legend");

        //some test data
        this.data = [
            [50, 739.3669632891941],
            [150, 342.37698133724916],
            [250, 426.13567408347245],
            [350, 459.182581776817],
            [450, 631.729640357638],
            [550, 510.05954772488064],
            [650, 165.4522933021705],
            [750, 913.9614634292885],
            [850, 508.61397987278747],
            [950, 455.8056314643607]
        ];
    }

    createVisualization() {
        //fill in
    }
}