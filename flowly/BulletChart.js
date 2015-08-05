var React = require("react");
var BulletChart = React.createClass({
    componentDidMount: function() {
        var total=this.props.data.PosCount+this.props.data.NegCount+this.props.data.NeuCount;
        jQuery(this.refs.bulletchartsocial.getDOMNode()).sparkline([total,total,this.props.total], {
            type: 'bullet',
            width: '50',
            targetColor: this.props.color,
            performanceColor: this.props.color
        });
    },
    render: function() {

        return (<span  className='bulletchart' ref='bulletchartsocial' style={{marginLeft: 5}}></span>);
    }
});

module.exports = BulletChart;