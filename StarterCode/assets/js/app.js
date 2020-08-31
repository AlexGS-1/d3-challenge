// @TODO: YOUR CODE HERE!
//Pre data

Change_x_word();Change_y_word();

d3.csv("./assets/data/data.csv").then(function(data) {visualize(data);});
  
var paddingbottom=30; var paddingleft = 30; var margin = 10; var wordspace = 90;

var width =parseInt(d3.select("#scatter").style("width"));
var height = widt- width / 6;
var svg = d3.select("scatter").append("svg").atrr("width", width).attr("height", height).attr("class","chart");

svg.append("g").attr("class","word_x");
var word_x = d3.select(".word_x");
svg.append("g").attr("class", "word_y");
var word_y = d3.select(".word_y");
//Part 1

function visualize(data_input) {
  
    var x_data = "poverty"; var y_data = "obesity"; var xMin; var xMax; var yMin; var yMax;
  
    
    var toolTip = d3.tip().attr("class", "d3-tip").offset([30, -40])
      .html(function(d) {
        var STATE = "<div>" + d.state + "</div>";
        var y_VALUES = "<div>" + y_data + ": " + d[y_data] + "%</div>";
        var x_VALUES;
        if (x_data === "poverty") {theX = "<div>" + x_data + ": " + d[x_data] + "%</div>";}
        else {x_VALUES = "<div>" +x_data + ": " +parseFloat(d[x_data]).toLocaleString("en") +"</div>";}
        return STATE + x_VALUES + y_VALUES;
      });

    svg.call(toolTip);
  
    }
//x space and y space

function Change_x_word() {
    word_x.attr(
        "transform",
        "translate(" +
          ((width - wordspace) / 2 + wordspace) +
          ", " +
          (height - margin - paddingbottom) +
          ")"
      );
}

function Change_y_word() {
    word_y.attr(
      "transform",
      "translate(" + 
      margin + paddingLeft + 
      ", " + (height + wordspace) / 2 - wordspace + ")rotate(-90)"
    );
  }

word_x
  .append("text")
  .attr("y", 26)
  .attr("data-name", "income")
  .attr("data-axis", "x")
  .attr("class", "inactive x")
  .text("average income");

word_x
  .append("text")
  .attr("y", -26)
  .attr("data-name", "poverty")
  .attr("data-axis", "x")
  .attr("class", "active x")
  .text("poverty percentage");

word_x
  .append("text")
  .attr("y", 0)
  .attr("data-name", "age")
  .attr("data-axis", "x")
  .attr("class", "inactive x")
  .text("average age");

word_y
.append("text")
.attr("y", 26)
.attr("data-name", "healthcare")
.attr("data-axis", "y")
.attr("class", "inactive y")
.text("percentage without healthcare");

word_y
.append("text")
.attr("y", -26)
.attr("data-name", "obesity")
.attr("data-axis", "y")
.attr("class", "active y")
.text("obesity percentage");

word_y
.append("text")
.attr("x", 0)
.attr("data-name", "smokes")
.attr("data-axis", "y")
.attr("class", "inactive y")
.text("smoking percentage");


