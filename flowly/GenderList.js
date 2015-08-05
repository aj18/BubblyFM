var React = require("react");
var BulletGenderChart = require('./BulletGenderChart.js');

var GenderList = React.createClass({
    render: function() {
            
        var s2 = { 'margin': '5px'};
            
        var url=this.props.returnurl+ '/Comments?id=' + this.props.id + '&type=gender&page=1&q=';
        var genderNodes = this.props.data.map(function (item) {
            var color=""
            var display=true;
            if (item.Type=="Male")
                color="#0170C1";
            if (item.Type=="Female")
                color="#FF679A";
            if (item.Type=="Others")
                display=false;
            return (
               
                <tr>
                 
                    <td > <a href={url+item.Type}><span> {item.Type=="Male"  ? <i className="fa fa-male fa-1x" ></i> : item.Type=="Female" ? <i className="fa fa-female fa-1x" ></i> : false}
                </span></a>
            </td>
                  
                    <td ><a href={url+item.Type}><BulletGenderChart  id="bullet-chart-l" data={item.Percent} type={item.Type}  color={color}/></a></td>
        
                </tr>
          
               
              
                );
        });
return (
                   
    <table className="table table-hover">
        <tbody>
         
               { genderNodes }
           
        </tbody>
    </table>
);
}
});
module.exports = GenderList;