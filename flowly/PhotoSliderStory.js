var React = require("react");

var PhotoSliderStory = React.createClass({
    render : function() {
        var thumbnailStyle = { width: '100%' };
        var imageContainerStyle = {width: '100%', height: '100%', overflow: 'hidden' };
        var imgStyle = { width: '100%' };
        var s4={opacity: '1',float: 'left',height:'540px',overflow: 'hidden',width:'100%', display: 'block', 
        backgroundImage: 'url('+this.props.src+')', backgroundSize: 'cover',backgroundPosition:'center center',
         backgroundRepeat: 'no-repeat',
         '-webkit-box-shadow': 'inset 0px -79px 49px -20px rgba(0,0,0,0.59)',
         '-moz-box-shadow': 'inset 0px -79px 49px -20px rgba(0,0,0,0.59)',
    	 boxShadow: 'inset 0px -79px 49px -20px rgba(0,0,0,0.59)'
    	 };
    
        return (<div style={s4}>
                
            </div>);

}

});

module.exports = PhotoSliderStory;