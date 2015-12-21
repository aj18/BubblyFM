var Radium = require('radium');
var React = require("react");
var NameAndComment = require('../../flowly/NameAndComment.js');
var PhotoSmall = require('../../flowly/PhotoSmall.js');
var Share = require('../../flowly/ShareIcon.js');

var SmallMSN = React.createClass({

    componentDidMount: function () {

        $(document).ready(function () {
            $("#smallMSNlogo").hide();
            $("#divSmallMSN").mouseenter(function () {
                $("#smallMSNlogo").show();
            });
            $("#divSmallMSN").mouseleave(function () {
                $("#smallMSNlogo").hide();
            });
        });
    },
	render() {
		
		return (
			<div id="divSmallMSN" className="card z-depth-1" style={this.props.styles.cardStyle}>
			<div className="main-box-social-smallmsn" style={this.props.styles.mainBoxStyle}>
            <Share id="smallMSNlogo" Shareurl="http://media2.intoday.in/indiatoday/images/stories//2015MAY/shah-rukh-story_650_051715020614.jpg"/>
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