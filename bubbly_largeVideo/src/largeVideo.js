var Radium = require('radium');
var React = require("react");


var NameAndComment = require('../../flowly/NameAndComment.js');
var VideoLarge = require('../../flowly/VideoLarge.js');
var PhotoThumb = require('../../flowly/PhotoThumb.js');

var LargeVideo = React.createClass({


	render: function() {
		
         var imageURL =  getYouTubeVideoImage(this.props.data.Video,'big');
         var videoURL = "http://youtu.be/" + this.props.data.Video;
         console.log(videoURL);
         console.log(this.props.returnurl);
        return (  

            <div className="card-panel" style={this.props.styles.panelStyle}>
                        <div className="card-image">
                               <div id="viewer">
                                        <a className="item" href={videoURL}>
                                        <i className="large material-icons dp48" style={{'position': 'absolute;','z-index': '200;','left': '42%;'}}>play_circle_outline</i>
                                     
                                       </a>
                                     <PhotoThumb url= {imageURL}/>
                                     
                                        <span className="card-title social-main-title" style={this.props.styles.titleStyle}>
                                            {this.props.data.Description}
                                        </span>
                                        <br></br>
                                          <span className="card-title  social-sub-title" style={this.props.styles.subTitleStyle}>
                                          <a  href={this.props.returnurl}>{this.props.data.Name}</a>
                                          </span>
              
                                     
                                </div>
                        </div>
                        
            </div>
                
                
            );
   
 	}

});

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