var React = require('react');
var Photo = require('../../flowly/Photo.js');
var CardReveal = React.createClass({

	render(){
		var styles = {
       	 		 
       			 color: '#6B6B6B'
    	}

		return(
				
			        <div className="card z-depth-3" style={this.props.styles.cardStyle}>
				        <div className="card-image waves-effect waves-block waves-light" style={this.props.styles.cardImageStyle} >
				          <Photo className="activator" url= {this.props.data.Photo} />
				        </div>
				        <div className="card-content" style={this.props.styles.descriptionStyle}>
				          <span className="card-title activator grey-text text-darken-4 socialTitleColor" style={this.props.styles.cardTitleStyle}>{this.props.data.Name} <i className="mdi-navigation-more-vert right"></i></span>
				          <p><a href={this.props.returnurl+'?id=' + this.props.id} style={this.props.styles.cardTitleAnchoStyle}>{this.props.data.Name}</a></p>
				        </div>
				        <div className="card-reveal">
				          <span className="card-title grey-text text-darken-4" style={this.props.styles.cardTitleStyle}>{this.props.data.Name} <i className="mdi-navigation-close right"></i></span>
				          <p style={this.props.styles.descriptionStyle}>{this.props.data.Description}</p>
				        </div>
				    </div>
			    	
		     
		);
	}

});

module.exports  = CardReveal;