var React = require("react");

var Photo = React.createClass({
    render : function() {
        var thumbnailStyle = { width: '100%' };
        var imageContainerStyle = {width: '100%', height: '250px', overflow: 'hidden' };
        var imgStyle = { width: '100%' };
        var s4={opacity: '1',float: 'left',height:'250px',overflow: 'hidden',width:'110%', display: 'block', 
            backgroundImage: 'url('+this.props.url+')', backgroundSize: 'cover',backgroundPosition:'25% 0%', backgroundRepeat: 'no-repeat' };
    
        return (<div style={s4}>
                
            </div>);

}

});

module.exports = Photo;