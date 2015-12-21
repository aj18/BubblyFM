var Radium = require('radium');
var React = require("react");
var NameAndComment = require('../../flowly/NameAndComment.js');
var PhotoSmall = require('../../flowly/PhotoSmall.js');
var StorySliderLB = require("../../flowly/StorySliderLB.js");
var Share = require('../../flowly/ShareIcon.js');

var popupS = require('popups');


var SmallMSNStory = React.createClass({
    componentDidMount: function () {

        $(document).ready(function () {
            $("#smallMSNstorylogo").hide();
            $("#divSmallMSNStory").mouseenter(function () {
                $("#smallMSNstorylogo").show();
            });
            $("#divSmallMSNStory").mouseleave(function () {
                $("#smallMSNstorylogo").hide();
            });
        });
    },
	openModal: function() {
        console.log(this.props.data);
        console.log("id " + this.props.id);
        console.log("returnurl " + this.props.returnurl);
        
        popupS.modal({
            content: '<div id="smallstorylb"></div>'
                
        });

        React.render(<StorySliderLB id={this.props.id} storyid = { this.props.data.storyId} data={this.props.data.Data} title={this.props.data.Title} discription={this.props.data.Description} PictureUrl={this.props.data.PictureUrl} returnurl={this.props.returnurl} styles={this.props.styles}/>
                ,document.getElementById('smallstorylb'));
    },
	render() {
		var url = this.props.returnurl +"?id="+ this.props.id +"&storyid="+ this.props.storyid ;
		console.log("storyreturnurl : " + url);
		console.log("storyLB : " +this.props.storyLB);

		 if(this.props.storyLB === true) {

		 	return (
				<div id="divSmallMSNStory" className="card z-depth-1" style={this.props.styles.mainBoxStyle} onClick={this.openModal}>
					<div className="main-box-social-smallmsn">
                    <Share id="smallMSNstorylogo" Shareurl="http://media2.intoday.in/indiatoday/images/stories//2015MAY/shah-rukh-story_650_051715020614.jpg"/>
						<a href={url} style={{'margin':'0px'}} >
							<span>
								<PhotoSmall  url= {this.props.data.PictureUrl} />
							</span>
						</a>
				        
			            <div className="side-contain-social-smallmsn" style={this.props.styles.smallBoxStyle}>
			               
			                <a  href={url} style={this.props.styles.cardTitleAnchoStyle} >{this.props.data.Title}</a>
			            	
			            </div>
				        
				  	</div>
			  	</div>
			);


		 } else {
		
			return (
				<div id="divSmallMSNStory" className="card z-depth-1" style={this.props.styles.mainBoxStyle}>
				<div className="main-box-social-smallmsn">
                    <Share id="smallMSNstorylogo" Shareurl="http://media2.intoday.in/indiatoday/images/stories//2015MAY/shah-rukh-story_650_051715020614.jpg"/>
					<a href={url} style={{'margin':'0px'}} >
						<span>
						<PhotoSmall  url= {this.props.data.PictureUrl} />
						</span>
					</a>
			        
			            <div className="side-contain-social-smallmsn" style={this.props.styles.smallBoxStyle}>
			               
			                <a  href={url} style={this.props.styles.cardTitleAnchoStyle} >{this.props.data.Title}</a>
			            	
			            </div>
			        
			  	</div>
			  	</div>
			);
		}
	}
	
})

module.exports=SmallMSNStory;