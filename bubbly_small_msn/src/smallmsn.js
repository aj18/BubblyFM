var Radium = require('radium');
var React = require("react");
var NameAndComment = require('../../flowly/NameAndComment.js')
var PhotoSmall = require('../../flowly/PhotoSmall.js')


var SmallMSN = React.createClass({

	render() {
		
		return (
			<div className="social-card z-depth-3">
			<div className="main-box-social-smallmsn">
			<PhotoSmall  url= {this.props.data.PictureUrl} />
		        
		            <div className="side-contain-social-smallmsn">
		                <h4>{this.props.data.Description}</h4>
		                
		                <p><a className="socialTitleColor" href={this.props.returnurl} >{this.props.data.Name}</a></p>
		            </div>
		        <div className="clear"></div>
		  	</div>
		  	</div>
		);
	}
	
})

module.exports=SmallMSN;