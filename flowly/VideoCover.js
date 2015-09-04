var React = require("react");

var VideoCover = React.createClass({
    render : function() {
        var thumbnailStyle = { width: '100%' };
        var imageContainerStyle = {width: '100%', height:this.props.pictureStyle.height, overflow: 'hidden', padding: '0px' , position: 'relative' };
        var imgStyle = { width: '100%',height:this.props.pictureStyle.height };

        return (<div style={imageContainerStyle}>
                <img id="imageCover" src={this.props.url} style={imgStyle} />
                <iframe id="youtube" style={imgStyle} frameborder="0" allowfullscreen></iframe>
            </div>);

}

});


module.exports = VideoCover;