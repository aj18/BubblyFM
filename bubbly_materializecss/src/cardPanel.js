var React = require('react');
var CardPanel = React.createClass({

	render(){

		return(
			
		   
        
	        <div className="card-panel" style={this.props.styles.cardStyle}>
	          <span style={this.props.styles.textcolor}>{this.props.data.Description}</span>
	        </div>
				    
		   
		);
	}

});


module.exports  = CardPanel;