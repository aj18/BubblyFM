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
				
		            <div className="card medium z-depth-3" style={this.props.styles.cardStyle}>
			            <div className="card-image" style={this.props.styles.cardImageStyle}>

			              <Photo share={this.props.data.Photo} url= {this.props.data.Photo} />
			              
			              	<span className="card-title social-main-title" style={this.props.styles.cardTitleStyle}>
			              		<a href={this.props.returnurl+'?id='+this.props.id} style={this.props.styles.cardTitleAnchoStyle}>
			              		{this.props.data.Name}
			              		</a>
			              	</span>
			              
			            </div>
			            <div className="card-content" style={this.props.styles.descriptionStyle}>
			              <p>{this.props.data.Description}</p>
			            </div>
			           
			            <div className="card-action" style={this.props.styles.actionStyle}>
			              <StatisticsTable id={this.props.id} returnurl={this.props.returnurl3} videoCount={this.props.data.VideosCount} photoCount={this.props.data.PhotosCount} />
			            </div>
		            </div>
		         	
		     
		);
	}

});

module.exports  = MediumCard;