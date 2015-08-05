var React = require("react");

var SparkLineTwoChart = React.createClass({
    
    componentDidMount: function() {
        jQuery('.sparklineTwo').sparkline([0,1,2,1,2,-0.25,-4,-2,-2,-0.6,-2,-0.5,-0.25], {
            type: 'bar',
            height: '30',
            barWidth: 6,
            zeroAxis: false,
            barColor: '#ff5a5e',
            negBarColor: '#52b27e',
            stackedBarColor: []});
    },
    render : function() {
        return (<div className='sparklineTwo'></div>);

    }

});

module.exports = SparkLineTwoChart;