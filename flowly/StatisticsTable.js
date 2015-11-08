var React = require("react");

var StatisticsTable = React.createClass({

    render : function() {
        var url=this.props.returnurl+ '?id=' + this.props.id + '&q=&page=1&type=';
        console.log(url);
        return (
        <table className="table table-hover">
            <tbody>
                <tr>
                   <td style={{'padding':'0px',border:'none !important'}}><a href={url+'video'}><i className="fa fa-video-camera"></i></a></td>
                   <td style={{'padding':'0px',border:'none !important'}}><a href={url+'video'}>{this.props.videoCount}</a></td>
                   <td style={{'padding':'0px',border:'none !important'}}><a href={url+'photo'}><i className="fa fa-picture-o"></i></a></td>
                   <td style={{'padding':'0px',border:'none !important'}}><a href={url+'photo'}>{this.props.photoCount}</a></td>
                </tr>
                
         </tbody>
      </table>);
    }

});

module.exports = StatisticsTable;
