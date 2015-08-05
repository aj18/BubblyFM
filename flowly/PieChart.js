var React = require("react");
var PieChart = React.createClass({
    componentDidMount: function() {
        jQuery('.piechartref').sparkline([this.props.data[0].Percent,this.props.data[1].Percent,this.props.data[2].Percent], {
            type: 'pie',
            width: '25',
            height: '25',
            sliceColors: ['#dd4477','#0099c6','#990099']});
    },
    render: function() {

        return (<span  className='piechartref' style={{marginLeft: 5}}></span>);
    }
});

module.exports = PieChart;