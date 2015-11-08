var Radium = require('radium');
var React = require("react");
var NameAndComment = require('../../flowly/NameAndComment.js');
var PhotoSmall = require('../../flowly/PhotoSmall.js');
var StorySliderLB = require("../../flowly/StorySliderLB.js");

var popupS = require('popups');


var SmallMSNStory = React.createClass({

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
				<div className="card z-depth-1" style={this.props.styles.mainBoxStyle} onClick={this.openModal}>
					<div className="main-box-social-smallmsn">
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
				<div className="card z-depth-1" style={this.props.styles.mainBoxStyle}>
				<div className="main-box-social-smallmsn">
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