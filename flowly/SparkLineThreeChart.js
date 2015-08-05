var React = require("react");

var SparkLineThreeChart = React.createClass({
    componentDidMount: function() {
       
        jQuery('.malefemale').sparkline('html', {
            type: 'bar',
            height: '30',
            barWidth: 5,
            barColor: '#79b0ec',
            stackedBarColor: ['#79b0ec','#EA7882']});
    },
    render: function() {
        return ( <div className='malefemale'>1:1,1:2,1:3,2:0.01,1:0.1,0.2:1,2:2,2:1.5,2:1.2,1.2:2,1:3,1:0.25,2:0.02,1:3,3:0.5,2:4,4:1,1:1,1:2,1:4,2:1,2:3,2:1.5,2:0.5,2:0.25,1:0.01,1:0.1,0.2:1,2:2,2:1.5,2:1.2,1.2:2,1:3</div>);
    }
});

module.exports = SparkLineThreeChart;