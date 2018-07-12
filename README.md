# Hands-On Session: Interactive Visualization with D3.js

**2nd ACM Europe Summer School on Data Science**

**Prof. Dr. Daniel A. Keim, University of Konstanz, Germany**

_This repository contains the materials for the visual analytics session hands-on part._

## Overview

The hands-on session with d3.js is divided into three different tasks.
All should be implemented in the framework provided in this repository.

### Tasks

Following a short description of each task.

#### Task 1: Simple Shapes

* Create a shape and style it.
  * append a shape to `this.vis`
  * set the coordinates/location of the shape
* Add interaction (effect on hover).
  * add an interaction handler (e.g., `mouseover`)
  * add a callback to the interaction handler
* Add some animation.
  * start a transition on interacting with the shape (e.g., on `click`)

*Sources:* `js/d3task1.js`, `css/d3vis.css`

#### Task 2: Complex Paths

* Explore the D3 [line](https://github.com/d3/d3-shape#lines)/[curve](https://github.com/d3/d3-shape#curves) API.
* Draw different non-interpolated and interpolated lines using the provided data (`this.data`).
  * assign different colors for each path
* Add a legend to the visualization (use the `this.vislegend` group)
  * add a color indicator
  * add a label stating the type of color (e.g., `curveCatmullRom`)
* Add interaction to the legend element(s)
  * register a listener on the legend (e.g., `mouseclick`)
  * toggle the visibility of the line corresponding to the interacted legend element


*Sources:* `js/d3task2.js`, `css/d3vis.css`

#### Task 3: Scatter plot of [Air_Traffic_Landings_Statistics.csv](Air_Traffic_Landings_Statistics.csv)

* Complete the data loading logic, if required (`loadData` function in `d3task3.js`).
  * there are a number of data transformations for easier use of the dataset
* Compute the statistics required.
  * select two attributes to plot in a scatter plot, e.g., `Activity Period` and `Landing Count`
  * `min`/`max` values for min/max normalization
* For each record, append a point to the scatter plot.
  * create a scale for each axis to scale the data into the available drawing space, set the `range` and `domain` accordingly
  * position each record in the plot
* Color the points in the plot.
  * create a suitable color map
  * assign the `fill` of each point using the represented data value
* Add `x` and `y` axes to the plot.

*Sources:* `js/d3task3.js`, `css/d3vis.css`

### Framework Overview

A framework controls the different tasks that can be switched using the selector on top of the visualization.
The initialization required for d3 is already done, the following elements are created:

* An SVG element with the id `d3-vis` with width and height of `1000` pixels.
* The SVG element contains three different groups:
  * a background group with id `d3-vis-background`, the background group contains a `rectangle` that is used to show a rectangular border around the SVG element
  * a visualization canvas with id `d3-vis-foreground`
  * a group to use for legends with id `d3-vis-legend`

If you are interested, see `js/framework.js` and `css/framework.css`.
  
## Data

The [data](Air_Traffic_Landings_Statistics.csv) contains the air traffic landing statistics of the San Francisco International Airport (SFO), starting in 2005 and ranging to March 2018 retrieved in July 2018.
The dataset is delimited by semi-colons, contains 21,105 records and exhibits a field header.

Following an excerpt of the field description.

| Field Name        | Definition           |  Data Type| Examples | Comments |
| ------------- |------------- | ----- | ----- | ----- |
| Activity Period             | The year and month at which passenger, cargo or landings activity took place. | Numeric | `200507` | |
| Operating Airline           | Airline name for the operator of aircraft with passenger, cargo or landings activity. | text | | |
| Operating Airline IATA Code | The International Air Transport Association (IATA) two-letter designation for the Operating Airline. |    text | | |
| Published Airline           | Airline name that issues the ticket and books revenue for passenger, cargo or landings activity. | text | | A Published Airline may be the Operating Airline or it may have one or more Operating Airlines associated with it. For example, United Airlines issues tickets and books revenue for Operating Airlines United Airlines and its regional affiliate Skywest Airlines. Therefore, Operating Airlines are a subset of Published Airlines. |
| Published Airline IATA Code | The International Air Transport Association (IATA) two-letter designation for the Published Airline. | text | Text |  |
| GEO Summary                 | Designates whether the passenger, cargo or landings activity in relation to SFO arrived from or departed to a location within the United States (“domestic”), or outside the United States (“international”) without stops. | text | `International`, `Domestic`  |  |
| GEO Region                  | Provides a more detailed breakdown of the GEO Summary field to designate the region in the world where activity in relation to SFO arrived from or departed to without stops. | text | `US`, `Africa`, `Asia`, `Australia/Oceania`, `Canada`, `Caribbean`, `Central America`, `Europe`, `Mexico`, `Middle East`, `South America` |  |
| Landing Aircraft Type       | A designation for three types of aircraft that landed at SFO, which includes passenger aircraft, cargo-only aircraft ("freighters") or combination aircraft ("combi"). | text | `Passenger`, `Freighter`, `Combi` | _Passenger_: Only passengers in the main deck, with cargo carried below the cabin deck; _Freighter_: carries cargo only; _Combi_: designed to carry both passengers and cargo on the main deck of the airplane. |
| Aircraft Body Type          | A designation that is independent from Landing Aircraft Type, which determines whether commercial aircraft landed at SFO is a wide body jet, narrow body jet, regional jet or a propeller operated aircraft. | text | `Wide Body`, `Narrow Body`, `Regional Jet`, `Turbo Prop` |  |
| Aircraft Manufacturer       | Manufacturer name for the aircraft that landed at SFO. | text | `Boeing`, `Airbus`, etc. |  |
| Aircraft Model              | Model designation of aircraft by the manufacturer | text | `737`, `A320`, etc.  |  |
| Aircraft Version            | Variations of the Aircraft Model, also known as the "dash number", designated by the manufacturer to segregate unique versions of the same model. | text |  | `100`, `200`, etc. |
| Landing Count               | The number of aircraft landings. | numeric |  |  |
| Total Landed Weight (lbs)   | The aircraft landed weight (in pounds). | numeric |  |  |


For detailed information see [data.sf.gov](https://data.sfgov.org/Transportation/Air-Traffic-Landings-Statistics/fpux-q53t), and in particular [DataSF Data Dictionary for Air Traffic LANDINGS Statistics.pdf](https://data.sfgov.org/api/views/fpux-q53t/files/ae29d39f-64b2-49a2-a06e-6b3ab643a331?download=true&filename=DataSF%20Data%20Dictionary%20for%20Air%20Traffic%20LANDINGS%20Statistics.pdf).

## Technical Notes

* D3.js is included in the repository, please see the `d3js` folder for the library, license and further information.
* The provided framework mixes ECMAScript 5 and ECMAScript 6 code, the visualizations can be coded in ECMAScript 6.
* To develop and test your code, please utilize a [suitable editor](https://code.visualstudio.com/) with a [webserver extension supporting live reload](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

## Links

* [D3.js web page.](https://d3js.org/)
* [The d3 tutorial.](https://github.com/d3/d3/wiki/tutorials)
* [A huge collection of d3 examples.](https://github.com/d3/d3/wiki/Gallery)
* [Online editing of d3.](https://beta.observablehq.com/)