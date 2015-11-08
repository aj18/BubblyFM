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
				
		            <div className="card small z-depth-3" style={this.props.styles.cardStyle}>
			            <div className="card-image" style={this.props.styles.cardImageStyle}>
			              <img className="imageSize" src={this.props.data.PictureUrl}/>
			              	
				              <span className="card-title social-main-title" style={this.props.styles.cardTitleStyle}>
				              		<a href={this.props.returnurl+'?id=' + this.props.id} style={this.props.styles.cardTitleAnchoStyle}>
				              			{this.props.data.Name}
				              		</a>
				              </span>
			              	
			            </div>
			            <div className="card-content" style={this.props.styles.descriptionStyle}>
			              <p>{this.props.data.Description}</p>
			            </div>
			            
		            </div>
		           
		     
		);
	}

});

module.exports  = SmallCardVertical;