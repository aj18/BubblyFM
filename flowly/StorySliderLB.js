var React = require("react");
var jQuery = require("jquery");
var Slider = require('react-slick');

var PhotoSliderStory = require('./PhotoSliderStory.js');

var FluidVid = React.createClass({
    getDefaultProps: function () {
        return {
            src : '',
            width: 1600,
            height: 900
        }
    },
    getRatio: function (width, height) {
        return ((parseInt(height, 10) / parseInt(width, 10)) * 100) + '%';
    },
    render: function() {
        var ratio = {
            paddingTop: this.getRatio(this.props.width, this.props.height)
        };
        return (
          <div className={ 'fluidvids' } style={ ratio }>
        <iframe src={ this.props.src } width={ this.props.width } height={ this.props.height } frameBorder={ 0 }></iframe>
          </div>
    );
}
});

var StorySliderLB= React.createClass({
    componentDidMount: function() {
        var links = document.getElementsByClassName('gallery-1');

        jQuery('.gallery-1').unbind('click').bind('click', function(event) {
            blueimp.Gallery(links, {
                index: $(this).get(0),
                event: event
            });
        });
    },
    render: function () {
      console.log("flowly "+ this.props.title);
        var settings = {dots: true,infinite: true,speed: 500,fade: true,cssEase: 'linear'}
        return (
        <div>
          <div className="row" style={{'margin-bottom': '0px;'}}>
            <div className="col s12 m4 l2" style={{"overflow":"hidden;"}}>
              <img src={this.props.PictureUrl} />

             </div>

            <div className="col s12 m8 l10" style={{"padding": "0px 5px; overflow:hidden;"}}> 

                   <div className='slick-content'>
                    <Slider {...settings}>
                        {this.props.data.map(function(item, i) {
                        var s1 = { 'font-family': 'georgia','font-size':'16px','line-height':'26px','margin-bottom':'2%','margin-left':'10%','margin-right':'9%' };
                        var s2 = { 'width': '100%', 'height': '60px' };
                        var s3 = { 'width': '100%', 'height':'540px'};
                        var s4 = {'padding-top':'20px','width':'100%',    'padding-left': '5px'};
                        var s5 = {'height': '48px','width': '48px','padding': '4px','border-bottom':'none','margin-right':'5px'};
                        var s8 = { 'padding-right': '5px', 'color': 'darkgray' };

                        var urlTitle = this.props.returnurl +"?id="+ this.props.id +"&storyid="+ this.props.storyid ;
                        // http://, https://, ftp://
                        var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;
                        var date = Date.parse(Date().toString());
                        return (
                            <div>
                                 <div className="col s12 m6 l6" style={{'padding-left':'5px','float':'left','clear': 'left'}}>
                                     {item.VideoID ? <div className="fluidvids-youtube">
                                    <FluidVid src={"http://www.youtube.com/embed/" + item.VideoID + "?rel=0" } />
                                     </div>
                                     : item.PhotoUrl && item.Datasource=="Instagram" ?
                                 <div>
                                 <PhotoSliderStory style={s3} src={item.PhotoUrl} />
                                 </div>
                                     : item.PhotoUrl && item.Datasource=="GooglePlus" ?
                                  <div>
                                  <PhotoSliderStory style={s3} src={item.PhotoUrl} />
                                  </div>
                                     : item.PhotoUrl && item.Datasource=="Tumblr" ?
                                <div>
                                <PhotoSliderStory style={s3} src={item.PhotoUrl} />
                                </div>
                                     : item.PhotoUrl && item.Datasource=="Twitter" ?
                                 <div>
                                 <PhotoSliderStory style={s3} src={item.PhotoUrl} />
                                 </div>
                                     : item.PhotoUrl && item.Datasource=="Facebook" ?
                                <div>
                                <PhotoSliderStory style={s3} src={item.PhotoUrl} />
                                </div>
                                     : false }
                                 </div>
            <div  className="col s12 m6 l6" style={{'float':'left','color':'white'}}>
                {item.Datasource=="Twitter" ?

             <div>
               <a href={"https://twitter.com/" + item.ProfileID.substr(1)} target="_blank" className="pull-left">
                  <img src={item.ProfilePhotoUrl} style={s5} />
               </a>
               <div style={s2}>
                  <div>
                     <a href={"https://twitter.com/" + item.ProfileID.substr(1)} target="_blank">
                         {item.ProfileName ? item.ProfileName.substr(1) : 'No Name'}
                     </a>
                     <div className="pull-right">
                         <span style={s8} className="fa fa-twitter-square"></span>
                     </div>
                  </div>
                 <p>{item.ProfileID} ({item.ProfileFollower})</p>
               </div>
             </div>
                : item.Datasource=="Instagram" ?
             <div>
                       <a href={"https://instagram.com/" + item.ProfileID} target="_blank" className="pull-left">
                           <img src={item.ProfilePhotoUrl} style={s5} />
                       </a>
                       <div style={s2}>
                           <a href={"https://instagram.com/" + item.ProfileID} target="_blank">
                               {item.ProfileName ? item.ProfileName : 'No Name'}
                           </a>
                           <div className="pull-right">
                               <span style={s8} className="fa fa-instagram"></span>
                           </div>
                       </div>
             </div>
                : item.Datasource=="GooglePlus" ?
             <div>
                   <a href={"https://plus.google.com/" + item.ProfileID} target="_blank" className="pull-left">
                       <img src={item.ProfilePhotoUrl} style={s5} />
                   </a>
                   <div style={s2}>
                       <a href={"https://plus.google.com/" + item.ProfileID} target="_blank">
                           {item.ProfileName ? item.ProfileName : 'No Name'}
                       </a>
                       <div className="pull-right">
                           <span style={s8} className="fa fa-google-plus-square"></span>
                       </div>
                   </div>
             </div>
                : item.Datasource=="Tumblr" ?
               <div>
                       <a href={"http://" + item.ProfileID + ".tumblr.com" } target="_blank" className="pull-left">
                       <img src={item.ProfilePhotoUrl} style={s5} />
                       </a>
                   <div style={s2}>
                       <a href={"http://" + item.ProfileID + ".tumblr.com" } target="_blank">
                           {item.ProfileName ? item.ProfileName : 'No Name'}
                       </a>
                       <div className="pull-right">
                           <span style={s8} className="fa fa-tumblr-square"></span>
                       </div>
                   </div>
               </div>
                : item.Datasource=="Facebook" ?
              <div>
               <a href={"https://www.facebook.com/profile.php?id =" + item.ProfileID} target=" _blank" className="pull-left">
                  <img src={item.ProfilePhotoUrl} style={s5} />
               </a>
                 <div style={s2}>
                     <a href={"https://www.facebook.com/profile.php?id =" + item.ProfileID} target=" _blank">
                         {item.ProfileName ? item.ProfileName : 'No Name'}
                     </a>
                     <div className="pull-right">
                         <span style={s8} className="fa fa-facebook-square"></span>
                     </div>
                 </div>
              </div>
                : false}
            <div style={{'padding-bottom':'20px','padding-left':'5px'}} className="card-content">
               <div dangerouslySetInnerHTML={{__html: item.Text != null ? item.Text.replace(urlPattern, '<a style="word-break:break-word;" href="$&" target="_blank">$&</a>') :false}}>
               </div>
            <p className="pull-left" style={s4}>
                { item.Datasource=="Instagram" ?
                Math.round((date/1000 - parseInt(item.DocDate)) * 1.1574074074074E-8) >= 1 ?
            <span>{Math.round((date/1000 - parseInt(item.DocDate)) * 1.1574074074074E-8)}d</span>
                : Math.round((date/1000 - parseInt(item.DocDate)) * 1.1574074074074E-8) < 1 && Math.round((date/1000 - parseInt(item.DocDate)) * 2.7777777777778E-7) > 1 ?
                                <span>{Math.round((date/1000 - parseInt(item.DocDate)) * 2.7777777777778E-7)}h</span>
                : Math.round((date/1000 - item.DocDate) * 2.7777777777778E-7) < 1 ?
                                <span>{Math.round((date/1000 - parseInt(item.DocDate)) / 60000)}m</span>
                :false
                :  Math.round((date - Date.parse(item.DocDate)) * 1.1574074074074E-8) >= 1 ?
                                    <span>{Math.round((date - Date.parse(item.DocDate)) * 1.1574074074074E-8)}d</span>
                : Math.round((date - Date.parse(item.DocDate)) * 1.1574074074074E-8) < 1 && Math.round((date - Date.parse(item.DocDate)) * 2.7777777777778E-7) > 1 ?
                                                        <span>{Math.round((date - Date.parse(item.DocDate)) * 2.7777777777778E-7)}h</span>
                : Math.round((date - Date.parse(item.DocDate)) * 2.7777777777778E-7) < 1 ?
                                                        <span>{Math.round((date - Date.parse(item.DocDate)) / 60000)}m</span>
                :false
                }
            </p>
            </div>
            <p style={s1}>
                {item.Comments}
            </p>

            </div>
                            </div>

                        );
                        }, this)}



                    </Slider>
                   </div>

            
        </div>
        <div className="row" style={{'margin-bottom': '0px;'}}>
                
                <div className="col s12 offset-m4 m8 l4" style={{"padding":"0px 0px 0px 0px;"}}>
                  <div className="leftside" style={{"background":"#0084C7;","font-size":"35px;","padding":"5px 10px;","margin":"0em !important;","color":"#FFF;", 'min-height:': '62px;','overflow': 'hidden;'}}>
                    <p style={{"margin":"0px;"}}>{this.props.title}</p>
                  </div>
                </div>
                <div className="col s12 offset-m4 m8 l8" style={{"padding":"0px;"}}>
                  <div className="rightside" style={{"background":"#272727;","font-size":"20px;","padding":"5px 10px;","margin":"0em !important;","color":"#FFF;","min-height:":"62px;","line-height":"25px !important;"}}>
                    <p style={{"margin":"0px;"}}>{this.props.discription}</p>
                    <a href={this.props.returnurl+'?id='+this.props.id} target="_blank" style={{"float": "right;","position": "relative;", "bottom": "24px;", "right": "0px;", "background": "transparent;", "color": "#f44336;", "border-radius": "10px;", "padding": "0px 10px;", "font-size": "15px;"}}>...Read More</a>
                  </div>
                </div>
            
        </div>
       </div>
     </div>
    );
}
});


module.exports = StorySliderLB;

