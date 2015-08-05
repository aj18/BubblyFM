var React = require("react");

var StatisticsTable = React.createClass({

    render : function() {
        var url=this.props.returnurl+ '/Comments?id=' + this.props.id + '&q=&page=1&type=';
        return (
        <table className="table table-hover">
            <tbody>
                <tr>
                   <td ><a href={url+'video'}><i className="mdi-av-videocam" ></i></a></td>
                   <td ><a href={url+'video'}>{this.props.videoCount}</a></td>
                   <td ><a href={url+'photo'}><i className="mdi-action-picture-in-picture" ></i></a></td>
                   <td><a href={url+'photo'}>{this.props.photoCount}</a></td>
                </tr>
                
         </tbody>
      </table>);
    }

});

module.exports = StatisticsTable;
