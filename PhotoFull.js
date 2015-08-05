var React = require("react");

var PhotoFull = React.createClass({
    render : function() {
        var thumbnailStyle = { width: '100%' };
        var imageContainerStyle = {width: '100%', height: '100%', overflow: 'hidden' };
        var imgStyle = { width: '100%' };
        var s4={opacity: '1',float: 'left',height:'100%',overflow: 'hidden',width:'100%', display: 'block', 
        backgroundImage: 'url('+this.props.url+')', backgroundSize: 'cover',backgroundPosition:'25% 0%', backgroundRepeat: 'no-repeat' };
    
        return (<div style={s4}>
                
            </div>);

}

});

module.exports = PhotoFull;