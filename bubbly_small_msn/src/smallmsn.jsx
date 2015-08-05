var Radium = require('radium');
var React = require("react");


var SmallMSN = React.createClass({

	render() {
		
		return (
			<div className="social-card z-depth-3">
			<div className="main-box-social-smallmsn">
		        <img src="../images/AAcizRY.jpg" className="main-img-social-smallmsn"></img>
		            <div className="side-contain-social-smallmsn">
		                <h4>Mitchell Johnson accuses Jimmy Anderson of sledging hypocrisy</h4>
		                
		                <p>The Independent</p>
		            </div>
		        <div className="clear"></div>
		  	</div>
		  	</div>
		);
	}
	
})

React.render(<SmallMSN/>,document.getElementById('smallmsn'));