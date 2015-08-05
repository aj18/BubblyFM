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
			            <div className="card-image">
			              <img className="imageSize" src={this.props.data.Photos[0].Url}/>
			              <span className="card-title " ><a className="socialTitleColor" href={this.props.returnUrl}>{this.props.data.Name}</a></span>
			            </div>
			            <div className="card-content">
			              <p>{this.props.data.Description}</p>
			            </div>
			            
		            </div>
		           
		     
		);
	}

});

module.exports  = SmallCardVertical;