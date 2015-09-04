var React = require("react");

var VideoCover = React.createClass({
    render : function() {
        var thumbnailStyle = { width: '100%' };
        var imageContainerStyle = {width: '100%', height:this.props.pictureStyle.height, overflow: 'hidden', padding: '0px' , position: 'relative' };
        var imgStyle = { width: '100%',height:this.props.pictureStyle.height };

        return (<div style={imageContainerStyle}>
                <iframe style={imgStyle} src={"http://www.youtube.com/embed/" + this.props.url  + "?rel=0"}></iframe> 
            </div>);

}

});


module.exports = VideoCover;