var React = require("react");

var PieChartSentiment = React.createClass({
    componentDidMount: function() {
        jQuery(this.refs.bulletchart.getDOMNode()).sparkline([this.props.data.PosPercent,this.props.data.NeuPercent,this.props.data.NegPercent], {
            type: 'pie',
            width: '25',
            height: '25',
            sliceColors: ['#32CD99','#C2C2C2','#B22222']});
    },
    render: function() {

        return (<span  className='piechartsentimentref' ref='bulletchart' style={{marginRight: 5}}></span>);
}
});

module.exports = PieChartSentiment;