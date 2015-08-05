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

var PhotoCollage = React.createClass({

	
    render : function() {
    	console.log(this.props.data);
    	return(

    		<div id={this.props.cid} className="owl-slider">

    		{this.props.data.map(function(item, i) {

					  return (
			               
			                <a className="item" href={item.Url} rel="prettyPhoto" title="This is the description">
	            				<img src={item.Url} width="300" height="150" alt="title" />
	        				</a>
			              );
			}, this)}

			</div>

        
	        

	      /*  <a className="item" href="http://lorempixel.com/800/400/food/2/" rel="prettyPhoto" title="This is the description">
	            <img src="http://lorempixel.com/300/150/food/2/" width="300" height="150" alt="title" />
	        </a>

	        <a className="item" href="http://lorempixel.com/800/400/food/3/" rel="prettyPhoto" title="This is the description">
	            <img src="http://lorempixel.com/300/150/food/3/" width="300" height="150" alt="title" />
	        </a>

	        <a className="item" href="http://lorempixel.com/800/400/food/4/" rel="prettyPhoto" title="This is the description">
	            <img src="http://lorempixel.com/300/150/food/4/" width="300" height="150" alt="title" />
	        </a>

	        <a className="item" href="http://lorempixel.com/800/400/food/5/" rel="prettyPhoto" title="This is the description">
	            <img src="http://lorempixel.com/300/150/food/5/" width="300" height="150" alt="title" />
	        </a>*/


   		
   		);

	}

});

module.exports = PhotoCollage;
//React.render(<PhotoCollage/>,document.getElementById('pc'));











        