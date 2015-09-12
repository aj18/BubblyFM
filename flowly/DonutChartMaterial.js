
var React = require("react");
var DonutChartMaterial = React.createClass({
    componentDidMount: function() {
    //debugger;

    var doughnutChart = document.getElementById("doughnut-chart-socialinfluance-bm").getContext("2d");
        window.myDoughnut = new Chart(doughnutChart).Doughnut(this.props.donutD, {
            segmentStrokeColor : "#fff",
            tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label        
            percentageInnerCutout : 50,
            animationSteps : 100,
            segmentStrokeWidth : 4,
            animateScale: true,
            responsive : true

        });
    },
    render : function() {
        return (<canvas id="doughnut-chart-socialinfluance-bm" height='150px'></canvas>);

    }

});

module.exports = DonutChartMaterial;
