var React = require("react");

var BulletGenderChart = React.createClass({
    componentDidMount: function() {
        console.log(this.props.data);
        if (this.props.type === 'Male') {
        jQuery(this.refs.gender.getDOMNode()).sparkline([this.props.data,this.props.data,100], {
            type: 'bullet',
            width: '50',
            targetColor: this.props.color,
            performanceColor: this.props.color
            });
        } else if( this.props.type === 'Female') {
            jQuery('.Female').sparkline([this.props.data,this.props.data,100], {
            type: 'bullet',
            width: '50',
            targetColor: this.props.color,
            performanceColor: this.props.color
            });
        }
    },
    render: function() {

        return (<span  className={this.props.type} ref="gender" style={{marginLeft: 5}}></span>);
    }
});
module.exports = BulletGenderChart;