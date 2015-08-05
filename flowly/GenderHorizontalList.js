var React = require("react");
var BulletGenderChart = require("./BulletGenderChart.js");

var GenderHorizontalList = React.createClass({
    render: function() {
            
        var s2 = { 'margin': '5px'};
            
        var url=this.props.returnurl+ '/Comments?id=' + this.props.id + '&type=gender&page=1&q=';
        var genderNodes = this.props.data.map(function (item) {
            var gcolor=""
            var display=true;
            if (item.Type=="Male")
                gcolor="#0170C1";
            if (item.Type=="Female")
                gcolor="#FF679A";
            if (item.Type=="Others")
                display=false;
            return (
               
                <td>
                 
                     <a href={url+item.Type}>
                     <span> {item.Type=="Male"  ? <i className="fa fa-male fa-1x" ></i> : item.Type=="Female" ? <i className="fa fa-female fa-1x" ></i> : false}
                        </span>
                    </a>
            
                  
                    <a href={url+item.Type}>
                    <BulletGenderChart id="bullet-chart-hl" data={item.Percent} type={item.Type} color={gcolor}/>
                    </a>
        
                </td>
          
               
              
        );
    });
    return (
                       
        <table className="table table-hover">
            <tbody>
                <tr>
                   { genderNodes }
               </tr>
            </tbody>
        </table>
    );
}
});

module.exports = GenderHorizontalList;