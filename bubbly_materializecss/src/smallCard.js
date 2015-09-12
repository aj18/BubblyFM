var React = require('react');
var NameAndComment = require('../../flowly/NameAndComment.js');
var StatisticsTable = require('../../flowly/StatisticsTable.js');
var Emotions = require('../../flowly/Emotions.js');
var Tags = require('../../flowly/Tags.js');
var Photo = require('../../flowly/Photo.js');
var SmallCardVertical = React.createClass({

	render(){
		var styles = {
       	 		 
       			 color: '#6B6B6B'
    	}

		return(
				
		            <div className="card small z-depth-3">
			            <div className="card-image" style={{'height':'200px'}}>
			              <img className="imageSize" src={this.props.data.PictureUrl}/>
			              	<a href={this.props.returnurl}>
				              <span className="card-title social-main-title" style={{'bottom':'5px !important'}} >
				              	{this.props.data.Name}
				              </span>
			              	</a>
			            </div>
			            <div className="card-content" style={{'height':'100px'}}>
			              <p>{this.props.data.Description}</p>
			            </div>
			            
		            </div>
		           
		     
		);
	}

});

module.exports  = SmallCardVertical;