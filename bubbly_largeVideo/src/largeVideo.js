var Radium = require('radium');
var React = require("react");
var NameAndComment = require('../../flowly/NameAndComment.js');
var VideoLarge = require('../../flowly/VideoLarge.js');
var VideoCover = require('../../flowly/VideoCover.js');

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
  onbuttonclick:function(){
        $("#imageCover").hide();
        $("#CoverLink").hide();
        var src = '//www.youtube.com/embed/'+ this.props.data.Video + '?autoplay=1';
        $("#youtube").attr('src', src);
        return false;
    },


	render: function() {
		
         var imageURL =  getYouTubeVideoImage(this.props.data.Video,'big');
         var videoURL = "http://youtu.be/" + this.props.data.Video;
         var imgStyle = { width: '100%',height:this.props.styles.pictureStyle.height };
         console.log(videoURL);
         console.log(this.props.returnurl);
         var s2 = {'position': 'absolute', 'list-style-type': 'none', 'margin': '0', 'padding-right': '20px', 'float': 'right', 'overflow': 'hidden', 'display': 'none', 'z-index': '9999 !important' };
         if (this.state.hover)
             s2 = {'position': 'absolute', 'list-style-type': 'none', 'margin': '0', 'padding-right': '20px', 'float': 'right', 'overflow': 'hidden','z-index': '9999  !important'};

        return (  
            <div className="card-panel" style={this.props.styles.panelStyle}>
                <div className="card">
                    <ul id="icon" style={s2} >
                        <li style={{'float':'left'}}><img onClick={this.fbShare.bind(this)} onMouseEnter={this.onMouseEnterfb} onMouseLeave={this.onMouseLeavefb} style={{'width':'30px','border-radius': '50%'}} src={this.state.hover1 ? "../Scripts/images/fb_blue.png" : "../Scripts/images/fb_black.png" } /></li>
                        <li style={{'float':'left'}}><img onClick={this.onClicktw.bind(this)} onMouseEnter={this.onMouseEntertw} onMouseLeave={this.onMouseLeavetw} style={{'width': '30px','border-radius': '50%'}} src={this.state.hover2 ? "../Scripts/images/tw_blue.png": "../Scripts/images/tw_black.png" } /></li>
                    </ul>
                    <div className="card-image" onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
                      <VideoCover url= {imageURL} pictureStyle={this.props.styles.pictureStyle}/>
                 
                      <span id="CoverLink" className="card-title social-icon-play-center">
                      <a style={this.props.styles.iconStyle}  onClick={this.onbuttonclick.bind(this)}>
                      <i className="medium material-icons dp48">play_circle_filled</i>
                      </a>
                      </span>
                      
                      
                      <span className="card-title social-sub-title" style={this.props.styles.subTitleStyle}>
                      <a  href={this.props.returnurl} style={this.props.styles.cardTitleAnchoStyle}>{this.props.data.Name} </a>
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