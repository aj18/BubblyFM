var React = require('react');
var BasicCard = React.createClass({

	render(){
		var styles = {
       	 		 
       			 color: '#6B6B6B'
    	}

		return(
			
	          <div className="card blue-grey darken-1 z-depth-3">
	            <d<p>{this.props.data.Description}</p>
	            </div className="card-content white-text">
	              <span className="card-title socialTitleColor">{this.props.data.Name}</span>
	              >
	            <div className="card-action">
	              <a href={this.props.returnurl+'?id=' + this.props.id}>This is a link</a>
	              <a href={this.props.returnurl+'?id=' + this.props.id}>This is a link</a>
	            </div>
	            
	          </div>
	       
	     
		);
	}

});

module.exports  = BasicCard;