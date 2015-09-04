var Radium = require('radium');
var React = require("react");


var NameAndComment = require('../../flowly/NameAndComment.js');
var VideoLarge = require('../../flowly/VideoLarge.js');
var VideoCover = require('../../flowly/VideoCover.js');

var LargeVideo = React.createClass({


	render: function() {
		
         var imageURL =  getYouTubeVideoImage(this.props.data.Video,'big');
         var videoURL = "http://youtu.be/" + this.props.data.Video;
         console.log(videoURL);
         console.log(this.props.returnurl);
        return (  
            <div className="card-panel" style={this.props.styles.panelStyle}>
                <div className="card">
                    <div className="card-image">
                       <VideoCover url= {this.props.data.Video} pictureStyle={this.props.styles.pictureStyle}/>
                 
                      <span className="card-title social-main-title" style={this.props.styles.titleStyle}>
                          <a  href={this.props.returnurl} style={{'color':'inherit','text-decoration':'inherit'}}>{this.props.data.Description}</a>
                      </span>
                      <br></br>
                      <span className="card-title social-sub-title" style={this.props.styles.subTitleStyle}>
                      <a  href={this.props.returnurl} style={{'color':'inherit','text-decoration':'inherit'}}>{this.props.data.Name} </a>
                      </span>
                     
                    </div>
                
                </div>
          </div>
                
                
            );
   
 	}

});

/*<div className="card-panel" style={this.props.styles.panelStyle}>
                        <div className="card-image">
                               
                                        <PhotoThumb url= {imageURL}/>
                                    
                                       
                                 <div className="caption" style={{'position':'relative'}}> 
                                        <a href={videoURL}>
                                        <i className="material-icons medium dp48" style={this.props.styles.iconStyle}>play_circle_filled</i> 
                                        </a>
                                        <span className="card-title social-main-title" style={this.props.styles.titleStyle}>
                                            {this.props.data.Description}
                                        </span>
                                        <br></br>
                                          <span className="card-title  social-sub-title" style={this.props.styles.subTitleStyle}>
                                          <a  href={this.props.returnurl}>{this.props.data.Name}</a>
                                        </span>
                                   </div> 
                                        
                                
                                     
                                
                        </div>
                        
            </div>*/

/*<div className="card-panel" style={this.props.styles.panelStyle}>
                        <div className="card-image">
                                   <img src= {imageURL} style={{'height':'295px'}}/>

                                 
                                  <span className="card-title social-icon-play">
                                  <i className="small material-icons dp48">play_circle_filled</i>
                                  </span>

                                  <span className="card-title social-main-title1">{this.props.data.Description}</span>
                                  <span className="card-title social-main-title2"><a  href={this.props.returnurl}>{this.props.data.Name}</a></span>
                                    
                                       
                                 
                                
                                     
                                
                        </div>
                        
            </div>
            */

function getYouTubeVideoImage(vid, size) {
    console.log("vidoeurl "+ vid);
    if (vid === null) {
        return '';
    }

    size = (size === null) ? 'big' : size;
    

    if (size == 'small') {
        return 'http://img.youtube.com/vi/' + vid + '/0.jpg';
    } else {
        return 'http://img.youtube.com/vi/' + vid + '/0.jpg';
    }
}

module.exports = LargeVideo;