var React = require("react");

var StatisticsTableVertical = React.createClass({

    render : function() {
        var url=this.props.returnurl+ '?id=' + this.props.id + '&q=&page=1&type=';
        console.log(url);
        return (
        <table className="table table-hover">
            <tbody>
                <tr>
                   <td style={{'padding':'2px'}}><a href={url+'video'}><i className="fa fa-video-camera"></i></a></td>
                </tr>
                <tr>
                   <td style={{'padding':'2px'}}><a href={url+'video'}>{this.props.videoCount}</a></td>
                </tr>
                <tr>
                   <td style={{'padding':'2px'}}><a href={url+'photo'}><i className="fa fa-picture-o"></i></a></td>
                </tr>
                <tr>  
                   <td style={{'padding':'2px'}}><a href={url+'photo'}>{this.props.photoCount}</a></td>
                </tr>
                
          </tbody>
      </table>);
    }

});

module.exports = StatisticsTableVertical;
