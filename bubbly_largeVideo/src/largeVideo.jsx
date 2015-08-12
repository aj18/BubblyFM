var Radium = require('radium');
var React = require("react");


var NameAndComment = require('../../flowly/NameAndComment.js');
var VideoLarge = require('../../flowly/VideoLarge.js');
var VideoCover = require('../../flowly/VideoCover.js');
var player;
var $ = function (id) { return document.getElementById(id); }
var $$ = function (tagname) { return document.getElementsByTagName(tagname); }
var LargeVideo = React.createClass({

    onYouTubeIframeAPIReady: function () {
        debugger;
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
    },    componentWillMount: function () {
        
    },

	render: function() {
	    debugger;
	    var videoURL = "http://www.youtube.com/embed/" + this.props.data.Video + "?rel=0&wmode=Opaque&enablejsapi=1;showinfo=0;controls=0";
         console.log(videoURL);
         console.log(this.props.returnurl);
        return (
            
            <div className="card-panel" style={{'padding':'0px;','height':'500px;'}}>
                    <div className="card-image">
                      <iframe id="player1"  style= {{'width':'100%', 'height':'500px'}} src={videoURL} frameborder="0" allowfullscreen></iframe>
                    <span className="card-title social-main-title1" >{this.props.data.Description.substr(0,70)}</span>     
                    </div>
                     <span className="card-title social-main-title2">
                      <a href={this.props.returnurl}>{this.props.data.Name} </a>
                     </span>  
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

var data = { "ID": "bolly_data327", "Name": "Bajrangi Bhaijaan", "Description": "Bajrangi Bhaijaan is Still Leaving Pakistan in Tears", "Category": "1105", "ShowDefaultPicture": true, "SearchQuery": "bajrangi bhaijaan starring salman khan", "VideosCount": 4, "PhotosCount": 107, "PictureUrl": "http://www.bollywoodtabloid.com/wp-content/uploads/2015/06/CIXB7mlUwAAV-nS1-599x400.jpg", "Photos": [{ "Url": "http://pbs.twimg.com/media/CKpkYbKUYAAWTBP.jpg", "Description": null, "Count": 0 }], "Videos": [{ "ID": "o82eaSZmE1A", "Url": "https://www.youtube.com/watch?v=o82eaSZmE1A", "Source": "Youtube", "Count": 0, "Description": null }], "Photo": "http://www.bollywoodtabloid.com/wp-content/uploads/2015/06/CIXB7mlUwAAV-nS1-599x400.jpg", "Video": "4nwAra0mz_Q", "Total": 211, "Stat": { "Type": "ALL", "PosCount": 119, "NegCount": 2, "NeuCount": 262, "PosPercent": 31.0, "NegPercent": 0.0, "NeuPercent": 68.0 }, "SocialStats": [{ "Type": "TW", "PosCount": 20, "NegCount": 1, "NeuCount": 16, "PosPercent": 54.0, "NegPercent": 2.0, "NeuPercent": 43.0 }, { "Type": "FB", "PosCount": 96, "NegCount": 1, "NeuCount": 72, "PosPercent": 9600.0, "NegPercent": 100.0, "NeuPercent": 7200.0 }, { "Type": "TM", "PosCount": 3, "NegCount": 0, "NeuCount": 2, "PosPercent": 300.0, "NegPercent": 0.0, "NeuPercent": 200.0 }], "GenderStats": [{ "Type": "Male", "Count": 29, "Percent": 63.043478260869565217391304348 }, { "Type": "Female", "Count": 15, "Percent": 32.60869565217391304347826087 }, { "Type": "Others", "Count": 29, "Percent": 0.0 }], "Comments": [{ "Source": "Facebook", "Comment": "Your love is overwhelming guys! Bajrangi Bhaijaan has made 184.6 crores in India! This is incredible! Let's watch #BBAgainThisWeekend? \n\nBook your tickets here: http://bit.ly/BB_BookTickets" }], "Tags": [{ "key": "bajrangibhaijaan", "value": 59, "valuestr": null, "label": null }, { "key": "bajrangi", "value": 6, "valuestr": null, "label": null }, { "key": "bollywood", "value": 4, "valuestr": null, "label": null }, { "key": "39;bajrangi bhaijaan&", "value": 4, "valuestr": null, "label": null }, { "key": "bhaijaan", "value": 4, "valuestr": null, "label": null }], "Emotions": [{ "key": "cute", "value": 1, "valuestr": null, "label": null }], "Locations": null, "Trends": [{ "Source": "TW", "Data": "0" }, { "Source": "FB", "Data": "0,1" }, { "Source": "TM", "Data": "0" }], "Decision": "Mild", "DecisionImage": "/images/mild.png", "ReturnUrl": null, "ContainerID": null };
var returnurl="http://www.cricket24x7.social/news/?id=bolly_data235";
React.render( <LargeVideo data = { data }  returnurl={returnurl} /> , document.getElementById("bolly_data235_LargeVideo"));
//http://s24x7.azurewebsites.net/api/summary/min?id=bolly_data235