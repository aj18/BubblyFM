var Radium = require('radium');
var React = require("react");




/*var Container = RadiumBootstrap.Container;
var Row = RadiumBootstrap.Row;
var Col = RadiumBootstrap.Col;*/




var ImageGalleryYahoo = require('../../flowly/imageGalleryYahoo.js');



var ImageGalleryThumbNail = React.createClass({
  
	render:function() {
   
   
   
		return (
			
          
                      
            <ImageGalleryYahoo  data={this.props.data.Photos}/>  
                    
                   

		);
	}
	
});


module.exports = ImageGalleryThumbNail;
