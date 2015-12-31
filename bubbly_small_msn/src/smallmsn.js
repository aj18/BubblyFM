var Radium = require('radium');
var React = require("react");
var NameAndComment = require('../../flowly/NameAndComment.js')
var PhotoSmall = require('../../flowly/PhotoSmall.js')


var SmallMSN = React.createClass({

    render() {
		
        return (
			<div className="card z-depth-1" style={this.props.styles.cardStyle}>
			<div className="main-box-social-smallmsn" style={this.props.styles.mainBoxStyle}>
				<a href={this.props.returnurl} style={{'margin':'0px'}} >
					<span>
					<PhotoSmall  url= {this.props.data.PictureUrl} />
					</span>
				</a>
		        
		            <div className="side-contain-social-smallmsn" style={this.props.styles.smallBoxStyle}>
		                <p style={this.props.styles.descriptionStyle}>{this.props.data.Description}</p>
		                
		                <p><a className="socialTitleColor" href={this.props.returnurl+'?id=' + this.props.id} style={this.props.styles.cardTitleAnchoStyle} >{this.props.data.Name}</a></p>
		            </div>
		        
		  	</div>
		  	</div>
		);
}
	
})

module.exports=SmallMSN;