var React = require("react");
var DonutChart = React.createClass({

    componentDidMount: function() {
        Morris.Donut({
            element: this.props.id,
            labelColor: '#ccc',
            colors:['#d0b712','#32CD99','#B22222'],
            resize:true,
            data: [
              {label: 'Neutral', value: this.props.Stat.NeuPercent },
              {label: 'Positive', value: this.props.Stat.PosPercent},
              {label: 'Negative', value: this.props.Stat.NegPercent }
            ],
            formatter: function (y) { return y + "%" }
        });
    },
    
    render : function() {
        var s2 = { 'width': '100%','height': '200px'};
   
        return (<div id={this.props.id}  name='Donut Flavours' style={s2} />);
    }


});

module.exports = DonutChart;