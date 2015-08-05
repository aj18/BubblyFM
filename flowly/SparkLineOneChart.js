var React = require("react");

var SparkLineOneChart = React.createClass({
    
    componentDidMount: function() {
        jQuery('.sparklineOne').sparkline([2,3,5,1,2,5,8,6,7,9,3,5,7,8,3,3,2,9,5,3,2,2,4,6,7,8,9,1,12,14,11,3,4,6,9,17,19,9,5,3,2,2,4,6,7,8,9,10,11,12,14,23,2,3,1,5,6,7,3,2,8,14,12,4,7,14,19,18,22,3,14], {
            type: 'line',
            width: '200',
            height: '40',
            lineColor: '#FADD7F',
            fillColor: 'rgba(250, 221, 127, 0.5)'});
    },
    render : function() {
        return (<div className='sparklineOne'></div>);

    }

});

module.exports = SparkLineOneChart;