var React = require("react");
var jQuery = require('jquery');

/*var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
});
React.render(
  <CommentBox />,
  document.getElementById('content')
);*/

var VideoCollage = React.createClass({

	
    render : function() {
    	console.log("VC" + JSON.stringify(this.props.data));
    	return(

    		  <div id="videos" className="owl-slider">

        		{this.props.data.map(function(item, i) {

    					  return (
    			               
    			           <a className="item" href={item.Url} rel="prettyPhoto" title="This is the description">
    	            				
                          
                         
    	            				<div className="video-play"></div>
    	        				</a>
    			              );
    			   }, this)}

			   </div>

        
	        
   		
   		);

	}

});

module.exports = VideoCollage;
//React.render(<PhotoCollage/>,document.getElementById('pc'));











        