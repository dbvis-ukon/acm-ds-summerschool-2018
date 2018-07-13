import { D3Task1 } from "./d3task1.js";
import { D3Task2 } from "./d3task2.js";
import { D3Task3 } from "./d3task3.js";

/** the vis framework */
export class VisFramework {
    /**
     * Creates a new vis framework instance
     *
     * @param {String} svgElementId the id of the element that is used to hold the SVG element
     */
    constructor(svgElementId) {
        console.log(`creating vis framework in parent with id ${svgElementId}`);

        this.svgParentElement = document.getElementById(svgElementId);

        if(!this.svgParentElement)
            throw `failed to find element with id ${svgElementId}`;

        this.initD3();
        this.switchTask();
    }

    /** initializes the d3 framework */
    initD3() {
        //total vis dimension
        this.visDimension = 1000;
        //some margins
        this.margin = {
            "top": 10,
            "right": 10,
            "bottom": 10,
            "left": 10
        };
        
        // svg width
        this.visWidth = this.visDimension - this.margin.left - this.margin.right;
        //svg height
        this.visHeight = this.visDimension - this.margin.top - this.margin.bottom;

        //create the initial svg container, assign width and height
        this.d3svg = d3
            .select("#visualization")
            .append("svg")
                .attr("id", "d3-vis")
                .attr("width", this.visWidth + this.margin.left + this.margin.right)
                .attr("height", this.visHeight + this.margin.bottom + this.margin.top)

        //create background group
        this.visbackground = this.d3svg
            .append("g")
              .attr("id", "d3-vis-background");

        //add rect to background
        this.visbackground
            .append("rect")
                .attr("x", 0)
                .attr("y", 0)
                .attr("width", this.visWidth + this.margin.left + this.margin.right)
                .attr("height", this.visHeight + this.margin.top + this.margin.bottom)
                .attr("fill", "none")
                .attr("stroke", "gray")
                .attr("stroke-width", 1);

        //create foreground group
        this.vis = this.d3svg
            .append("g")
                .attr("id", "d3-vis-foreground")
                //add "automatic" margin
                .attr("transform", `translate(${this.margin.left}, ${this.margin.top})`);

        //create legend group
        this.vislegend = this.d3svg
            .append("g")
                .attr("id", "d3-vis-legend")
                //add "automatic" margin
                .attr("transform", `translate(${this.margin.left}, ${this.margin.top})`);

        //task selector
        d3.select("select")
            .on("change", () => {
                let task = d3.select("select").node().value;
                this.switchTask(task);
            });
    }

    /**
     * Switches to a given task
     * 
     * @param {String} task the task to switch to
     */
    switchTask(task) {
        //takes care that if task is empty a default task is loaded
        if(!task) {
            //load the last task if no task is given and a task has been executed before
            if(sessionStorage && sessionStorage.getItem("lastVisTask")) {
                task = sessionStorage.getItem("lastVisTask");
            } else {
                //fallback to task 1 if no session information is available
                task = "task1";
            }

            //get the selected task from the select element
            let selectedTask = d3.select("select").node().value;

            //if the selected task is not equal to the retrieved task, make the select
            //element reflect the selected task accordingly
            if(selectedTask !== task) {
                d3.select("select option[selected='selected']").attr("selected", null);
                d3.select(`select option[value="${task}"]`).attr("selected", "selected");
            }
        }

        //save the selected task
        if(sessionStorage)
            sessionStorage.setItem("lastVisTask", task);

        console.log(`switching to task ${task}`);

        //clear vis foreground
        this.vis.selectAll("*").remove();
        //clear legend
        this.vislegend.selectAll("*").remove();
        
        //call corresponding task
        let taskToExecute;

        //actual task logic
        switch(task) {
            case "task1":
                taskToExecute = new D3Task1(this.margin, this.visWidth, this.visHeight, this.d3svg);
                break;

            case "task2":
                taskToExecute = new D3Task2(this.margin, this.visWidth, this.visHeight);
                break;

            case "task3":
                taskToExecute = new D3Task3(this.margin, this.visWidth, this.visHeight);
                break;

            default:
                throw `unhandled task: ${task}`
        }

        if(taskToExecute) taskToExecute.createVisualization();
    }
}