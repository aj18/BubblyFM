var Radium = require('radium');
var React = require("react");
var NameAndComment = require('../../flowly/NameAndComment.js')
var PhotoSmall = require('../../flowly/PhotoSmall.js')


var SmallMSN = React.createClass({

	render() {
		
		return (
			<div className="card z-depth-1" style={{'margin':'0px'}}>
			<div className="main-box-social-smallmsn">
				<a href={this.props.returnurl} style={{'margin':'0px'}} >
					<span>
					<PhotoSmall  url= {this.props.data.PictureUrl} />
					</span>
				</a>
		        
		            <div className="side-contain-social-smallmsn">
		                <h4>{this.props.data.Description}</h4>
		                
		                <p><a className="socialTitleColor" href={this.props.returnurl} style={{'width':'140px !important'}} >{this.props.data.Name}</a></p>
		            </div>
		        <div className="clear"></div>
		  	</div>
		  	</div>
		);
	}
	
})

module.exports=SmallMSN;