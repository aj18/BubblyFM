var React = require('react');

var Photo = require('../../flowly/Photo.js');
var PhotoLarge = require('../../flowly/PhotoLarge.js');

var ImageCard = React.createClass({

	render(){
		var styles = {
       	 		 
       			 color: '#6B6B6B'
    	}
		return(
				<div className="row">
		        <div className="col s12 m7">
		        	<div className="card z-depth-3">
		                <div className="card-image">
		                <Photo url= {this.props.data.Photo} />
			              
			              <span className="card-title socialTitleColor">{this.props.data.Name}</span>
			            </div>
			            <div className="card-content">
			              <p>{this.props.data.Description}</p>
			            </div>
			            <div className="card-action">
			              <a href={this.props.returnurl}>This is a link</a>
			              <a href={this.props.returnurl}>This is a link</a>
			        	</div>
			          
			        </div>
		        </div>
		        </div>
		    
		);
	}

});

module.exports  = ImageCard;