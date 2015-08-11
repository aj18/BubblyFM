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
            <div className="card-panel" style={{'padding':'0px;','height':'500px;'}}>
                <div className="card">
                    <div className="card-image">
                       <VideoCover url={imageURL} pictureStyle={{'height':'500px !important'}} />

                      <span className="card-title social-icon-play-center">
                      <a href={videoURL} style={{'color':'rgba(75, 188, 150, 0.85);'}}>
                      <i className="medium material-icons dp48">play_circle_filled</i>
                      </a>
                      </span>
                      <span className="card-title social-main-title1" style={{'background-color': 'rgba(75, 188, 150, 0.85);','font-size': '16px;','color':'#fff;'}}>{this.props.data.Description}</span>
                      <span className="card-title social-main-title2" style={{'background-color': 'rgba(255, 255, 255, 0.65);','font-size': '14px;','color':'#000;'}}>
                      <a href={this.props.returnurl}>{this.props.data.Name} </a>
                      </span>

                    </div>

                </div>
            </div>


            );

 	}

});

/*<div className="card-panel" style={this.props.styles.panelStyle}>
                        <div className="card-image">

                                        <PhotoThumb url={imageURL} />


                                 <div className="caption" style={{'position':'relative'}}>
                                        <a href={videoURL}>
                                        <i className="material-icons medium dp48" style={this.props.styles.iconStyle}>play_circle_filled</i>
                                        </a>
                                        <span className="card-title social-main-title" style={this.props.styles.titleStyle}>
                                            {this.props.data.Description}
                                        </span>
                                        <br></br>
                                          <span className="card-title  social-sub-title" style={this.props.styles.subTitleStyle}>
                                          <a href={this.props.returnurl}>{this.props.data.Name}</a>
                                          </span>
                                 </div>




                        </div>

</div>*/

/*<div className="card-panel" style={this.props.styles.panelStyle}>
                        <div className="card-image">
                                   <img src={imageURL} style={{'height':'295px'}} />

                                  <span className="card-title social-icon-play">
                                  <i className="small material-icons dp48">play_circle_filled</i>
                                  </span>
                                  <span className="card-title social-main-title1">{this.props.data.Description}</span>
                                  <span className="card-title social-main-title2"><a href={this.props.returnurl}>{this.props.data.Name}</a></span>






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

var data = {"ID":"bolly_data235","Name":"Shah Rukh With Abram","Description":"Shah Rukh watches KKR match with AbRam","Category":"","ShowDefaultPicture":true,"SearchQuery":"Shah Rukh Khan watches KKR match with AbRam and Dilwale team","VideosCount":3415,"PhotosCount":68311,"PictureUrl":"http://media2.intoday.in/indiatoday/images/stories//2015MAY/shah-rukh-story_650_051715020614.jpg","Photos":[{"Url":"http://pbs.twimg.com/media/CETh0Q_WYAAVkWL.jpg","Description":null,"Count":0}],"Videos":[{"ID":"","Url":"http://youtu.be/c25GKl5VNeY,RT @SRK_DDLJ_Fan: Dilwale Dulhania Le Jayenge NEW TRAILER. Celebrating 1000 Weeks http://t.co/Jk8Wrz59WC  #DDLJ #SRK @iamsrk @KajolAtUN htt…","Source":"None","Count":0}],"Photo":"http://media2.intoday.in/indiatoday/images/stories//2015MAY/shah-rukh-story_650_051715020614.jpg","Video":"","Total":178387,"Stat":{"Type":"ALL","PosCount":37516,"NegCount":2529,"NeuCount":138342,"PosPercent":21.0,"NegPercent":1.0,"NeuPercent":77.0},"SocialStats":[{"Type":"TW","PosCount":37217,"NegCount":2506,"NeuCount":137280,"PosPercent":21.0,"NegPercent":1.0,"NeuPercent":77.0},{"Type":"FB","PosCount":257,"NegCount":19,"NeuCount":797,"PosPercent":25700.0,"NegPercent":1900.0,"NeuPercent":79700.0},{"Type":"TM","PosCount":42,"NegCount":4,"NeuCount":265,"PosPercent":4200.0,"NegPercent":400.0,"NeuPercent":26500.0}],"GenderStats":[{"Type":"Male","Count":108354,"Percent":61.215911594718733580786766326},{"Type":"Female","Count":60512,"Percent":34.186991180940436037807268803},{"Type":"Others","Count":108354,"Percent":0.0}],"Comments":[{"Source":"Twitter","Comment":"RT @iamsrk: This kid is so cool. May Allah bless him. Dinner time at the Asian Awards. http://t.co/l0gV12n0kv"}],"Tags":[{"key":"shahrukhkhan","value":6900,"valuestr":null,"label":null},{"key":"srk","value":3688,"valuestr":null,"label":null},{"key":"bollywood","value":947,"valuestr":null,"label":null},{"key":"salmankhan","value":475,"valuestr":null,"label":null},{"key":"abram","value":439,"valuestr":null,"label":null}],"Emotions":[{"key":"fan","value":515,"valuestr":null,"label":null},{"key":"love","value":458,"valuestr":null,"label":null},{"key":"good","value":407,"valuestr":null,"label":null},{"key":"best","value":213,"valuestr":null,"label":null},{"key":"like","value":194,"valuestr":null,"label":null}],"Locations":null,"Trends":[{"Source":"TW","Data":"0,41,-1,66,-1,28,78,-3,39,-4,19,47"},{"Source":"FB","Data":"0,1"},{"Source":"TM","Data":"0,1,2,3,-1,1,1,1,1"}],"Decision":"Medium","DecisionImage":"/images/medium.png","ReturnUrl":null,"ContainerID":null};
var returnurl="http://www.cricket24x7.social/news/?id=bolly_data235";
React.render( <LargeVideo data = { data }  returnurl={returnurl} /> , document.getElementById("bolly_data235_LargeVideo"));
//http://s24x7.azurewebsites.net/api/summary/min?id=bolly_data235