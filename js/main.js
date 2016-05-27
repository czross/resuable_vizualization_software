/**
 * Created by Christopher on 5/5/2016.
 */

$(function() {
    //Your code to make the chart goes here.
    d3.json("square2.json", function(error, root) {
        if (error) throw error;

        var chart = Squares();

        var div = d3.select("#my-Div").datum(root).call(chart)
    });


});
