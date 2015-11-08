var Radium = require('radium');
var React = require("react");


var NameAndComment = require('../../flowly/NameAndComment.js');
var VideoLarge = require('../../flowly/VideoLarge.js');
var VideoCover = require('../../flowly/VideoCover.js');
var player;
var $ = function (id) { return document.getElementById(id); }
var $$ = function (tagname) { return document.getElementsByTagName(tagname); }

var LargeVideo = React.createClass({

  openModal: function() {
        console.log(this.props.data);
        console.log("id " + this.props.id);
        console.log("returnurl " + this.props.returnurl);
        
        
        popupS.modal({
            content: '<div id="picturestorylb"></div>'
                
        });

        React.render(<StorySliderLB id={this.props.id} storyid = { this.props.data.storyId} data={this.props.data.Data} title={this.props.data.Title} discription={this.props.data.Description} PictureUrl={this.props.data.PictureUrl}  returnurl={this.props.returnurl} styles={this.props.styles}/>
                ,document.getElementById('picturestorylb'));
    },


  onYouTubeIframeAPIReady: function () {
        
        var videos = $$('iframe'), // the iframes elements
         players = [], // an array where we stock each videos youtube instances class
         playingID = null; // stock the current playing video
        for (var i = 0; i < videos.length; i++) // for each iframes
        {
            var currentIframeID = videos[i].id; // we get the iframe ID
            players[currentIframeID] = new YT.Player(currentIframeID); // we stock in the array the instance
            // note, the key of each array element will be the iframe ID

            videos[i].onmouseover = function (e) { // assigning a callback for this event
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
		
         var imageURL =  getYouTubeVideoImage(this.props.data.Video,'big');
         var videoURL = "http://www.youtube.com/embed/" + this.props.data.Video + "?rel=0&wmode=Opaque&enablejsapi=1;showinfo=0;controls=0";
         console.log(videoURL);
         console.log(this.props.returnurl);

         if(this.props.storyLB === true) {

                    return (  
                      <div className="card-panel" style={this.props.styles.panelStyle} onClick={this.openModal}>
                          
                              <div className="card-image">
                                  <iframe id="player1"  style= {this.props.styles.pictureStyle} src={videoURL} frameborder="none" allowfullscreen></iframe>
                               
                                <span className="card-title social-main-title" style={this.props.styles.titleStyle}>
                                <a  href={this.props.returnurl} style = {{'color':'#ffffff','text-overflow': 'ellipsis;','white-space': 'nowrap;','overflow': 'hidden;','max-width': '65%;'}}>
                                {this.props.data.Description}</a></span>
                                <br></br>
                                <span className="card-title social-sub-title" style={this.props.styles.subTitleStyle}>
                                <a  href={this.props.returnurl} style={this.props.styles.cardTitleAnchoStyle}>{this.props.data.Name} </a>
                                </span>
                               
                              </div>
                          
                         
                    </div>
                          
                          
                );

            

        } else {


         
            return (  
                <div className="card-panel" style={this.props.styles.panelStyle}>
                    
                        <div className="card-image">
                            <iframe id="player1"  style= {this.props.styles.pictureStyle} src={videoURL} frameborder="none" allowfullscreen></iframe>
                         
                          <span className="card-title social-main-title" style={this.props.styles.titleStyle}>
                          <a  href={this.props.returnurl} style = {{'color':'#ffffff','text-overflow': 'ellipsis;','white-space': 'nowrap;','overflow': 'hidden;','max-width': '65%;'}}>
                          {this.props.data.Description}</a></span>
                          <br></br>
                          <span className="card-title social-sub-title" style={this.props.styles.subTitleStyle}>
                          <a  href={this.props.returnurl} style={this.props.styles.cardTitleAnchoStyle}>{this.props.data.Name} </a>
                          </span>
                         
                        </div>
                    
                   
              </div>
                    
                    
                );
        }
   
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