var React = require("react");

var PhotoLarge = React.createClass({
    render : function() {
      
        var imageContainerStyle = {width: '100%', height: '400', overflow: 'hidden' };
        
        var imgStyle = { width: '100%' };
        var s4={opacity: '1',float: 'left',height:'400px',overflow: 'hidden',width:'100%', display: 'block', 'background-image': 'url('+this.props.url+')', 'background-size': 'cover','background-position':'25% 0%', 'background-repeat': 'no-repeat' };
    
        return (<img className="materialboxed" style={s4}>
                
            </img>);

}

});


module.exports = PhotoLarge;