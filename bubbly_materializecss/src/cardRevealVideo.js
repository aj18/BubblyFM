var React = require('react');
var Photo = require('../../flowly/Video.js');
var CardReveal = React.createClass({

	render(){
		var styles = {
       	 		 
       			 color: '#6B6B6B'
    	}

		return(
				
			        <div className="card z-depth-3">
				        <div className="card-image waves-effect waves-block waves-light">
				          <Photo className="activator" url= {this.props.data.Photo} />
				        </div>
				        <div className="card-content">
				          <span className="card-title activator grey-text text-darken-4 socialTitleColor" style={styles}>{this.props.data.Name} <i className="mdi-navigation-more-vert right"></i></span>
				          <p><a href={this.props.returnUrl}>{this.props.data.Name}</a></p>
				        </div>
				        <div className="card-reveal">
				          <span className="card-title grey-text text-darken-4">{this.props.data.Name} <i className="mdi-navigation-close right"></i></span>
				          <p>{this.props.data.Description}</p>
				        </div>
				    </div>
			    	
		     
		);
	}

});

module.exports  = CardReveal;