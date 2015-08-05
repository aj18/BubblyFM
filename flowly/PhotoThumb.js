var React = require("react");

var PhotoThumb = React.createClass({
    render : function() {
        var thumbnailStyle = { width: '100%' };
        var imageContainerStyle = {width: '100%', height: '300px', overflow: 'hidden', padding: '0px' , position: 'relative' };
        var imgStyle = { width: '100%' };

        return (<div style={imageContainerStyle}>
                <img src={this.props.url} style={imgStyle} />
            </div>);

}

});


module.exports = PhotoThumb;