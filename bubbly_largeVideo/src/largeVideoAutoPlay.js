var Radium = require('radium');
var React = require("react");


var NameAndComment = require('../../flowly/NameAndComment.js');
var VideoLarge = require('../../flowly/VideoLarge.js');
var VideoCover = require('../../flowly/VideoCover.js');
var player;
var $ = function (id) { return document.getElementById(id); }
var $$ = function (tagname) { return document.getElementsByTagName(tagname); }

var LargeVideo = React.createClass({
    
    getInitialState: function () {
        return {
            hover: false,
            hover1: false,
            hover2: false
        };
    },
    onMouseEnterHandler: function () {
        this.setState({
            hover: true,
        });
        console.log('enter');
    },
    onMouseLeaveHandler: function () {
        this.setState({
            hover: false
        });
        console.log('leave');
    },
    onMouseEnterfb: function () {
        this.setState({
            hover1: true,
            hover: true
        });
        console.log('enter');
        //$("#fbimage").attr('src','images/fb_blue.png');
    },
    onMouseLeavefb: function () {
        this.setState({
            hover1: false
        });
        console.log('leave');
        //$("#fbimage").attr('src','images/fb_black.png');
    },
    onMouseEntertw: function () {
        this.setState({
            hover2: true,
            hover: true
        });
        console.log('enter');
        //$("#twimage").attr('src','images/tw_blue.png');
    },
    onMouseLeavetw: function () {
        this.setState({
            hover2: false
        });
        console.log('leave');
        //$("#twimage").attr('src','images/tw_black.png');
    },

    fbShare: function () {
        debugger;
        var winTop = (screen.height / 2) - (380 / 2);
        var winLeft = (screen.width / 2) - (520 / 2);
        var url = this.props.returnurl +"?id="+ this.props.id +"&storyid="+ this.props.storyid;
        var url1 = 'http://www.facebook.com/sharer.php?s=100&p[title]=Fb Share&p[summary]=Facebook share popup&p[url]=' + encodeURIComponent(url);
        window.open(url1, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=548,height=325');

    },
    onClicktw: function () {
        var winTop = (screen.height / 2) - (380 / 2);
        var winLeft = (screen.width / 2) - (520 / 2);
        var url = this.props.returnurl +"?id="+ this.props.id +"&storyid="+ this.props.storyid;
        window.open("http://twitter.com/share?url=" +
encodeURIComponent(url) + "&count=none/",
"tweet", 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=548,height=325')

    },  
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
         var s2 = {'position': 'absolute', 'list-style-type': 'none', 'margin': '0', 'padding-right': '20px', 'float': 'right', 'overflow': 'hidden', 'display': 'none', 'z-index': '9999 !important' };
         if (this.state.hover)
             s2 = {'position': 'absolute', 'list-style-type': 'none', 'margin': '0', 'padding-right': '20px', 'float': 'right', 'overflow': 'hidden','z-index': '9999  !important'};

         if(this.props.storyLB === true) {

                    return (  
                      <div className="card-panel" style={this.props.styles.panelStyle} onClick={this.openModal}>
                            <ul id="icon" style={s2} >
                                <li style={{'float':'left'}}><img onClick={this.fbShare.bind(this)} onMouseEnter={this.onMouseEnterfb} onMouseLeave={this.onMouseLeavefb} style={{'width':'30px','border-radius': '50%'}} src={this.state.hover1 ? "../Scripts/images/fb_blue.png" : "../Scripts/images/fb_black.png" } /></li>
                                <li style={{'float':'left'}}><img onClick={this.onClicktw.bind(this)} onMouseEnter={this.onMouseEntertw} onMouseLeave={this.onMouseLeavetw} style={{'width': '30px','border-radius': '50%'}} src={this.state.hover2 ? "../Scripts/images/tw_blue.png": "../Scripts/images/tw_black.png" } /></li>
                            </ul>
                              <div className="card-image" onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
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
                            <ul id="icon" style={s2} >
                                <li style={{'float':'left'}}><img onClick={this.fbShare.bind(this)} onMouseEnter={this.onMouseEnterfb} onMouseLeave={this.onMouseLeavefb} style={{'width':'30px','border-radius': '50%'}} src={this.state.hover1 ? "../Scripts/images/fb_blue.png" : "../Scripts/images/fb_black.png" } /></li>
                                <li style={{'float':'left'}}><img onClick={this.onClicktw.bind(this)} onMouseEnter={this.onMouseEntertw} onMouseLeave={this.onMouseLeavetw} style={{'width': '30px','border-radius': '50%'}} src={this.state.hover2 ? "../Scripts/images/tw_blue.png": "../Scripts/images/tw_black.png" } /></li>
                            </ul>
                        <div className="card-image" onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
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