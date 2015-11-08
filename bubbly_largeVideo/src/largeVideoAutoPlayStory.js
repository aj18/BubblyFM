var Radium = require('radium');
var React = require("react");


var NameAndComment = require('../../flowly/NameAndComment.js');
var VideoLarge = require('../../flowly/VideoLarge.js');
var VideoCover = require('../../flowly/VideoCover.js');
var player;
var $ = function (id) { return document.getElementById(id); }
var $$ = function (tagname) { return document.getElementsByTagName(tagname); }

var LargeVideoStory = React.createClass({


  onYouTubeIframeAPIReady: function () {
        
        var videos = $$('iframe'), // the iframes elements
         players = [], // an array where we stock each videos youtube instances class
         playingID = null; // stock the current playing video
        for (var i = 0; i < videos.length; i++) // for each iframes
        {
            var currentIframeID = videos[i].id; // we get the iframe ID
            players[currentIframeID] = new YT.Player(currentIframeID); // we stock in the array the instance
            // note, the key of each array element will be the iframe ID

            videos[i].onclick = function (e) { // assigning a callback for this event
                var currentHoveredElement = e.target;
                if (playingID) // if a video is currently played
                {
                    players[playingID].pauseVideo();
                }
                players[currentHoveredElement.id].playVideo();
                //players[currentHoveredElement.id].mute();
                //players[currentHoveredElement.id].controls = 1;
                //players[currentHoveredElement.id].showinfo = 1;
                playingID = currentHoveredElement.id;
            };
        }

    },
  componentDidMount: function () {

        this.onYouTubeIframeAPIReady();
    },
  render: function() {
          console.log("videodata " + JSON.stringify(this.props.data));
         var imageURL =  getYouTubeVideoImage(this.props.data.vid,'big');
         var videoURL =  this.props.data.VideoUrl + "?rel=0&wmode=Opaque&enablejsapi=1;showinfo=0;controls=0";
         console.log(videoURL);
         console.log(this.props.returnurl);
         var url = this.props.returnurl +"?id="+ this.props.id +"&storyid="+ this.props.storyid ;
         console.log('clickurl' + url);
        return (  
            <div className="card-panel" style={this.props.styles.panelStyle}>
                
                    <div className="card-image">
                        <iframe id="player1"  style= {this.props.styles.pictureStyle} src={videoURL} frameborder="none" allowfullscreen></iframe>
                     
                      <span className="card-title social-main-title" style={this.props.styles.titleStyle}>
                      <a  href={url} style={this.props.styles.cardTitleAnchoStyle}>
                      {this.props.data.Title}</a>
                      </span>
                      
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

module.exports = LargeVideoStory;