var React = require("react");
var BulletChart = require('./BulletChart.js');
var PieChartSentiment = require('./PieChartSentiment.js');

var SocialList = React.createClass({
render: function() {
            
    var s2 = { 'margin': '5px'};
  
    var url=this.props.returnurl+ '/Comments?id=' + this.props.id + '&type=source&page=1&q=';
    var total=this.props.total;
    var color="#d0b712"
    console.log(url);
    var socialNodes = this.props.data.map(function (item) {
        console.log(item.Type);
        var icon="";
        var key="";
        if (item.Type=="TW")
        {
            icon="fa fa-twitter fa-1x";
            key="Twitter";
        }
            
        if (item.Type=="FB")
        {
            icon="fa fa-facebook fa-1x";
            key="Facebook";
        }
        if (item.Type=="TM")
        {
            icon="fa fa-tumblr fa-1x";
            key="Tumblr";
        }

        console.log(url+key);
       
        return (
            <tr >
             
                <td> <a href={url+key}><span><i className={icon} ></i></span></a></td>
                <td> <a href={url+key}><BulletChart id="bullet-chart" color={color}  total={total}  data={item}/></a></td>
                <td> <a href={url+key}><PieChartSentiment id="pie-chart" data={item} /></a></td>
                     
            </tr>
              
            );
    });
    console.log(socialNodes);
    return (
         
        <table className="table table-hover">
            <tbody>
                <tr>
             
                 <td></td>
                 <td><small>Volume</small></td>
                 <td><small>Sentiment</small></td>
                     
                </tr>
                
                {socialNodes}
                   
            </tbody>
        </table>
);
}
});

module.exports = SocialList;
