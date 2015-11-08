var React = require('react');

var Photo = require('../../flowly/Photo.js');
var PhotoLarge = require('../../flowly/PhotoLarge.js');

var ImageCard = React.createClass({

	render(){
		var styles = {
       	 		 
       			 color: '#6B6B6B'
    	}
		return(
				
		        	<div className="card z-depth-3" style={this.props.styles.cardStyle}>
		                <div className="card-image" style={this.props.styles.cardImageStyle}>
		                <Photo url= {this.props.data.Photo} />
			              
			              <span className="card-title socialTitleColor" style={this.props.styles.cardTitleStyle}>{this.props.data.Name}</span>
			            </div>
			            <div className="card-content" style={this.props.styles.descriptionStyle}>
			              <p style={this.props.styles.descriptionStyle}>{this.props.data.Description}</p>
			            </div>
			            <div className="card-action" style={this.props.styles.actionStyle}>
			              <a href={this.props.returnurl}>This is a link</a>
			              <a href={this.props.returnurl}>This is a link</a>
			        	</div>
			          
			        </div>
		       
		);
	}

});

module.exports  = ImageCard;