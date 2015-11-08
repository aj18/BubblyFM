var React = require("react");

var PhotoDynamic = React.createClass({
	
    render : function() {
      console.log("pic prop " + this.props.pictureStyle);

        var imageContainerStyle = {width: '100%', height: '400', overflow: 'hidden' };
        
        var imgStyle = { width: '100%' };
        var s4={opacity: '1',float: 'left',height:this.props.pictureStyle.height,overflow: 'hidden',width:'100%', display: 'block', 'background-image': 'url('+this.props.url+')', 'background-size': 'cover','background-position':'25% 0%', 'background-repeat': 'no-repeat' };
    
        return (<div style={s4}>
                
            </div>);

   }

});





module.exports = PhotoDynamic;