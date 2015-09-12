var React = require('react');
var NameAndComment = require('../../flowly/NameAndComment.js');
var StatisticsTable = require('../../flowly/StatisticsTable.js');
var Emotions = require('../../flowly/Emotions.js');
var Tags = require('../../flowly/Tags.js');
var Photo = require('../../flowly/Photo.js');
var PhotoLarge = require('../../flowly/PhotoLarge.js');

var MediumCard = React.createClass({

	render(){

		var styles = {
       	 		 
       			 color: '#6B6B6B'
    	}

		return(
				
		            <div className="card medium z-depth-3">
			            <div className="card-image">

			              <Photo url= {this.props.data.Photo} />
			              <a href={this.props.returnurl}>
			              	<span className="card-title social-main-title" style={{'bottom':'5px !important'}}>
			              		{this.props.data.Name}
			              	</span>
			              </a>
			            </div>
			            <div className="card-content">
			              <p>{this.props.data.Description}</p>
			            </div>
			           
			            <div className="card-action">
			              <StatisticsTable id={this.props.id} returnurl={this.props.returnurl3} videoCount={this.props.data.VideosCount} photoCount={this.props.data.PhotosCount} />
			            </div>
		            </div>
		         	
		     
		);
	}

});

module.exports  = MediumCard;