var React = require("react");
var jQuery = require("jquery");
var Slider = require('react-slick');

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

var PhotoSlider= React.createClass({
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
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 6,
            autoplay: 1,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]


        }
        return (
       <div className='slick-content'>
        <Slider {...settings}>
            {this.props.data.map(function(item, i) {
            var s1 = { 'font-family': 'georgia','font-size':'16px','line-height':'26px','margin-bottom':'4%','margin-left':'5%','margin-right':'9%' };
            var s2 = { 'width': '100%', 'height': '60px' };
            var s3 = { 'width': '100%' };
            var s4 = {'padding-top':'20px','width':'100%'};
            var s5 = {'height': '48px','width': '48px','padding': '4px','border-bottom':'none','margin-right':'5px'};
            var s8 = { 'padding-right': '5px', 'color': 'darkgray' };

            var urlTitle = this.props.returnurl;
            // http://, https://, ftp://
            var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;
            var date = Date.parse(Date().toString());
            return (
                <div style={{'padding-left':'5px'}}>
                    {item.VideoID ? <div className="fluidvids-youtube">
                        <FluidVid src={"http://www.youtube.com/embed/" + item.VideoID + "?rel=0" } />
                    </div>
                    : item.PhotoUrl && item.Datasource=="Instagram" ?
                     <div>
                     <img style={s3} src={item.PhotoUrl} />
                     </div>
                    : item.PhotoUrl && item.Datasource=="GooglePlus" ?
                      <div>
                      <img style={s3} src={item.PhotoUrl} />
                      </div>
                    : item.PhotoUrl && item.Datasource=="Tumblr" ?
                    <div>
                    <img style={s3} src={item.PhotoUrl} />
                    </div>
                    : item.PhotoUrl && item.Datasource=="Twitter" ?
                     <div>
                     <img style={s3} src={item.PhotoUrl} />
                     </div>
                    : item.PhotoUrl && item.Datasource=="Facebook" ?
                    <div>
                    <img style={s3} src={item.PhotoUrl} />
                    </div>
                    : false }

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
                        <div style={{'padding-left':'5px'}} className="card-content">
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


            );
            }, this)}



        </Slider>
       </div>
    );
}
});

var CommentList = React.createClass({


    render: function () {
        var s1 = { 'font-family': 'georgia','font-size':'16px','line-height':'26px','margin-bottom':'4%','margin-left':'10%','margin-right':'9%' };
        var s2 = { 'width': '100%', 'height': '60px' };
        var s3 = { 'width': '100%' };
        var s4 = {'padding-top':'20px','width':'100%'};
        var s5 = {'height': '48px','width': '48px','padding': '4px','border-bottom':'none','margin-right':'5px'};
        var s8 = { 'padding-right': '5px', 'color': 'darkgray' };

        var urlTitle = this.props.returnurl;
        // http://, https://, ftp://
        var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;
        var date = Date.parse(Date().toString());

        var commentNodes = this.props.data.map(function (item,i) {
            return (
              <div>
                  {item.VideoID ? <div className="fluidvids-youtube">
                        <FluidVid src={"http://www.youtube.com/embed/" + item.VideoID + "?rel=0" } />
                  </div>
                  : item.PhotoUrl && item.Datasource=="Instagram" ?
                     <div>
                     <img style={s3} src={item.PhotoUrl} />
                     </div>
                  : item.PhotoUrl && item.Datasource=="GooglePlus" ?
                      <div>
                      <img style={s3} src={item.PhotoUrl} />
                      </div>
                  : item.PhotoUrl && item.Datasource=="Tumblr" ?
                    <div>
                    <img style={s3} src={item.PhotoUrl} />
                    </div>
                  : item.PhotoUrl && item.Datasource=="Twitter" ?
                     <div>
                     <img style={s3} src={item.PhotoUrl} />
                     </div>
                  : item.PhotoUrl && item.Datasource=="Facebook" ?
                    <div>
                    <img style={s3} src={item.PhotoUrl} />
                    </div>
                  : false }

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
                        <div style={{'padding-left':'5px'}} className="card-content">
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
          );
        });
        return (
          <div className="card">
              <div style={{'padding-left':'5px'}}>
                <h3>
                    {this.props.title}
                </h3>

               <h5>{this.props.discription}</h5>
              </div>
              {commentNodes}
          </div>

       );
    }
});





//var container=document.getElementById('comments');var
//var data= [{"ID":"618392413250416640","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Tue Jul 07 12:13:35 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@raqooq5","ProfileName":"@Наталия Эсперовa","ProfileScreenName":null,"ProfileFollower":"244","ProfileFriends":"1","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/550180904488824833/5L7uKBVu_normal.jpeg","Likes":null,"Retweet":null,"Text":"RT: shafiqu94319914: RT ICC: LATEST: Great news for BCBTigers in the ODI rankings following the #BanvInd series vi… http://t.co/XqdVghz8G6"},{"ID":"618306451648307201","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Tue Jul 07 06:32:00 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"NA","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@vaguely_vague","ProfileName":"@?","ProfileScreenName":null,"ProfileFollower":"1667","ProfileFriends":"300","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/617596057044713472/xOVsr5aG_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @LoKarDi_RT: Anushka: Virat i want you here in 5mins.\nVirat: Ok my love. #INDvsBAN"},{"ID":"618300749626216449","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Tue Jul 07 06:09:20 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@shamimork","ProfileName":"@Shamim Hasan Ork ","ProfileScreenName":null,"ProfileFollower":"20867","ProfileFriends":"21359","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/613032538517340160/_ldwPPO1_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @BCBtigers: FOUR! Liton hits a nice four. He moves to 12* &amp; Bangladesh reaches to 71/2 in 11 overs. #BANvIND #riseofthetigers"},{"ID":"618137325856407552","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Mon Jul 06 19:19:57 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@adhopanto_naim","ProfileName":"@Adhopanto_Naim","ProfileScreenName":null,"ProfileFollower":"78","ProfileFriends":"1540","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/612568846700974080/OddRKu2x_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @letmetweet007: Shabbir Rahman looks like Maxwell of Bangladesh. Similar stance, body language, and attitude. Classy. #INDvBAN #banglade…"},{"ID":"618088468044853248","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Mon Jul 06 16:05:48 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CISWTa7UAAAC7Wx.jpg","ProfileID":"@Parthkacha4","ProfileName":"@Parth Kacha","ProfileScreenName":null,"ProfileFollower":"66","ProfileFriends":"165","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/616583002261360640/1UdjHBBm_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @DHONIism: You can't disrespect Dhoni, he knows his stuff: Raina backs his skipper http://t.co/gGQdrWwLCG #BANvIND http://t.co/t1CD2eMjqE"},{"ID":"618048047436668928","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Mon Jul 06 13:25:11 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@spathak30","ProfileName":"@Sandeep Pathak","ProfileScreenName":null,"ProfileFollower":"147","ProfileFriends":"346","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/1768426719/image_normal.jpg","Likes":null,"Retweet":null,"Text":"@htTweets Rahane &amp; India should not underestimate teams with home turf advantage. #IndvsBan a lesson not to be forgotten in a hurry."},{"ID":"617963104777826304","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Mon Jul 06 07:47:40 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@Smile_plzzz_","ProfileName":"@Smile plzz","ProfileScreenName":null,"ProfileFollower":"118","ProfileFriends":"88","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/617376110737670145/lA027WcL_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @GagFire2015: RT: raqooq5: RT: Njshawon143: congrats BCBtigers to win this series against BCCI ICC. #BanvInd #riseofthetigers #n… http:/…"},{"ID":"617953438823899136","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Mon Jul 06 07:09:15 +0000 2015","Address":"Pakistan","Country":"Pakistan(PK)","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@OneFunnyZone","ProfileName":"@UrDu JokEs","ProfileScreenName":null,"ProfileFollower":"36","ProfileFriends":"29","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/617739261303898112/o6qTt6Dv_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @cricinfo_record: This is the first ever occasion in India's Test history that opening stand is of 200+ runs in match's first innings aw…"},{"ID":"617951960138788864","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Mon Jul 06 07:03:22 +0000 2015","Address":"Pakistan","Country":"Pakistan(PK)","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@OneFunnyZone","ProfileName":"@UrDu JokEs","ProfileScreenName":null,"ProfileFollower":"36","ProfileFriends":"29","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/617739261303898112/o6qTt6Dv_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @cricinfo_record: Most 50+ scores as captain in INTL matches:\n129 Ponting,\n110 GSmith,\n84 SFleming,\n80* MS Dhoni,\n80 ABorder,\n65 Ranatun…"},{"ID":"617947412095578113","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Mon Jul 06 06:45:18 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@AsmVerma","ProfileName":"@बस रिट्वीट करूंगा |","ProfileScreenName":null,"ProfileFollower":"34","ProfileFriends":"57","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/614395059627143168/2f8aL8tk_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @cricBC: Dhoni drops Jadeja. In Bollywood movies such moments are followed by dramatic thunder and lightning effects. #BanvInd"},{"ID":"617945750127820800","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Mon Jul 06 06:38:42 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@AsmVerma","ProfileName":"@बस रिट्वीट करूंगा |","ProfileScreenName":null,"ProfileFollower":"34","ProfileFriends":"57","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/614395059627143168/2f8aL8tk_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @KyaUkhaadLega: Dear Indian Team, please wrap this match up quickly to save the Indian tax payer's money spent on the lights at the stad…"},{"ID":"617775597570293760","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sun Jul 05 19:22:34 +0000 2015","Address":"India","Country":"India(IN)","Sentiment":"Positive","Gender":"NA","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@TheD_Major","ProfileName":"@D Major","ProfileScreenName":null,"ProfileFollower":"53","ProfileFriends":"21","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/603940171323584512/BoHlGWD0_normal.png","Likes":null,"Retweet":null,"Text":"STAR SPORTS created \"Mauka Mauka\" ad we lost #CWC15 dey created \"Bacha Bacha\" we lost #BANvIND #DeshKeLiye didn't fruited we lost #HWL2015 😋"},{"ID":"617647474761728000","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sun Jul 05 10:53:27 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@Shivanii_S","ProfileName":"@Shivanii.","ProfileScreenName":null,"ProfileFollower":"5029","ProfileFriends":"3694","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/593833546466369536/s-LvNvsW_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @Fariha_bd: @Shivanii_S still wounded with #BANvIND defeat! How immature!!"},{"ID":"617645894175883264","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sun Jul 05 10:47:11 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@Fariha_bd","ProfileName":"@Fariha","ProfileScreenName":null,"ProfileFollower":"365","ProfileFriends":"349","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/573350606397575169/BCxcFrRq_normal.jpeg","Likes":null,"Retweet":null,"Text":"@Shivanii_S still wounded with #BANvIND defeat! How immature!!"},{"ID":"617632696483733504","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sun Jul 05 09:54:44 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@AghoneyGodara","ProfileName":"@arun godara","ProfileScreenName":null,"ProfileFollower":"5","ProfileFriends":"10","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/604927900836458497/E88b6O1n_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @KaifSays: When was last time you saw 3 slips in 41st over ? Says how much control #bangladesh has kept during this match #indvsban"},{"ID":"617628903864008704","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sun Jul 05 09:39:40 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@achaldalal","ProfileName":"@ACHAL DALAL","ProfileScreenName":null,"ProfileFollower":"99","ProfileFriends":"198","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/582461665670656000/xJlQfPMV_normal.jpg","Likes":null,"Retweet":null,"Text":"@jpduminy21 shows exactly why we needed @harbhajan_singh in ODI series! #BANvIND"},{"ID":"617412334542163968","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sat Jul 04 19:19:06 +0000 2015","Address":"Pakistan","Country":"Pakistan(PK)","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@Shani_asks","ProfileName":"@USMAN SHANI","ProfileScreenName":null,"ProfileFollower":"18","ProfileFriends":"13","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/603088854615138305/6A4LGWcG_normal.jpg","Likes":null,"Retweet":null,"Text":"@trawler101 u rapis sing mauka when win &amp; when others do the same..u start to cry..#banvind"},{"ID":"617399391427690496","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sat Jul 04 18:27:40 +0000 2015","Address":"Chittagong, Bangladesh","Country":"Bangladesh(BD)","Sentiment":"Positive","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@mamun311293","ProfileName":"@Abdullah Al Mamun","ProfileScreenName":null,"ProfileFollower":"37","ProfileFriends":"14","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/1174960053/Mamun_Vay_normal.jpg","Likes":null,"Retweet":null,"Text":"Star Sports is showing highlights of #BanVsInd ODI.\n\nBut which match????\n\n------3rd ODI..... :D"},{"ID":"617239538352558080","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sat Jul 04 07:52:28 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CI3ZOUqUsAA7-GU.jpg","ProfileID":"@siya_kram","ProfileName":"@Siya Ke Ram OFC","ProfileScreenName":null,"ProfileFollower":"158","ProfileFriends":"42","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/588181122330169344/jt5oB8KG_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @PakCricketPCB: Ban is Playing Really well nowadays &amp; their fans Deserve to celebrate but this Pic has crossed the limits #IndvsBan http…"},{"ID":"617182874207301632","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sat Jul 04 04:07:18 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@cutepraba98","ProfileName":"@cute praba","ProfileScreenName":null,"ProfileFollower":"1","ProfileFriends":"24","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/613692141273878528/cyyWJ2u0_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @cricinfo_record: Most 50+ scores as captain in INTL matches:\n129 Ponting,\n110 GSmith,\n84 SFleming,\n80* MS Dhoni,\n80 ABorder,\n65 Ranatun…"},{"ID":"617155367005327361","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sat Jul 04 02:18:00 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@cricbol","ProfileName":"@cricbol","ProfileScreenName":null,"ProfileFollower":"80","ProfileFriends":"218","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/2786084841/c2f3fe231b29c93fd528a06431a8aefb_normal.png","Likes":null,"Retweet":null,"Text":"3rd ODI, #BanvInd – India 317/6 (50 overs) Bangladesh 240/10 (47 overs) India won by 77 runs. Suresh Raina is the… http://t.co/Uurd4RFRmk"},{"ID":"617095856043524100","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Fri Jul 03 22:21:31 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@raqooq5","ProfileName":"@Наталия Эсперовa","ProfileScreenName":null,"ProfileFollower":"205","ProfileFriends":"1","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/550180904488824833/5L7uKBVu_normal.jpeg","Likes":null,"Retweet":null,"Text":"RT: 7011Celik: RT IamBakkar1: Congrates My Bangladesh ♥\n#INDvBAN \n#BANvIND \n#RiseOfTheTigers\n\nShbd_sohag tArUnNoO … http://t.co/XqdVghz8G6"},{"ID":"617086858007150593","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Fri Jul 03 21:45:46 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CIDCx3YUwAAn3dv.jpg","ProfileID":"@7011Celik","ProfileName":"@yasin çelik","ProfileScreenName":null,"ProfileFollower":"566","ProfileFriends":"1991","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/544955333139894272/0TUE8q4a_normal.jpeg","Likes":null,"Retweet":null,"Text":"RT @IamBakkar1: Congrates My Bangladesh ♥\n#INDvBAN \n#BANvIND \n#RiseOfTheTigers\n\n@Shbd_sohag @tArUnNoO @mrsaddam510  @The_Pure_H3art http://…"},{"ID":"617085045660979200","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Fri Jul 03 21:38:34 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CIDCx3YUwAAn3dv.jpg","ProfileID":"@ansarbasha9866","ProfileName":"@Ansar Basha","ProfileScreenName":null,"ProfileFollower":"587","ProfileFriends":"1999","ProfilePhotoUrl":"http://abs.twimg.com/sticky/default_profile_images/default_profile_1_normal.png","Likes":null,"Retweet":null,"Text":"RT @IamBakkar1: Congrates My Bangladesh ♥\n#INDvBAN \n#BANvIND \n#RiseOfTheTigers\n\n@Shbd_sohag @tArUnNoO @mrsaddam510  @The_Pure_H3art http://…"},{"ID":"617017759776419840","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Fri Jul 03 17:11:12 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CIDCx3YUwAAn3dv.jpg","ProfileID":"@free_hookup","ProfileName":"@cHookup™","ProfileScreenName":null,"ProfileFollower":"1185","ProfileFriends":"2002","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/600775607547334656/0a1oOQps_normal.png","Likes":null,"Retweet":null,"Text":"RT @IamBakkar1: Congrates My Bangladesh ♥\n#INDvBAN \n#BANvIND \n#RiseOfTheTigers\n\n@Shbd_sohag @tArUnNoO @mrsaddam510  @The_Pure_H3art http://…"},{"ID":"617013395212992512","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Fri Jul 03 16:53:51 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CIDCx3YUwAAn3dv.jpg","ProfileID":"@colson7674","ProfileName":"@Richard Colson","ProfileScreenName":null,"ProfileFollower":"347","ProfileFriends":"790","ProfilePhotoUrl":"http://abs.twimg.com/sticky/default_profile_images/default_profile_0_normal.png","Likes":null,"Retweet":null,"Text":"RT @IamBakkar1: Congrates My Bangladesh ♥\n#INDvBAN \n#BANvIND \n#RiseOfTheTigers\n\n@Shbd_sohag @tArUnNoO @mrsaddam510  @The_Pure_H3art http://…"},{"ID":"616902826984222720","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Fri Jul 03 09:34:30 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CISWTa7UAAAC7Wx.jpg","ProfileID":"@MenonvrindaV","ProfileName":"@☺Vrinda☺","ProfileScreenName":null,"ProfileFollower":"212","ProfileFriends":"208","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/615589410843705344/qXAdyrzw_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @DHONIism: You can't disrespect Dhoni, he knows his stuff: Raina backs his skipper http://t.co/gGQdrWwLCG #BANvIND http://t.co/t1CD2eMjqE"},{"ID":"616886599725379584","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Fri Jul 03 08:30:01 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@MikkhailVaswani","ProfileName":"@ThatCricketGuy","ProfileScreenName":null,"ProfileFollower":"3247","ProfileFriends":"183","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/616481538536902657/hUG6xzv2_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @bmsurti11: @ajinkyarahane88: \n@bmsurti11 writes: 10 Amazing Facts About Ajinkya Rahane\nREAD HERE: http://t.co/kU2YtG7gJf #BANvIND #Raha…"},{"ID":"616819986741399553","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Fri Jul 03 04:05:19 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CI9igoTUwAE9luE.png","ProfileID":"@IndiaDefends","ProfileName":"@India Defends","ProfileScreenName":null,"ProfileFollower":"219","ProfileFriends":"676","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/556007794856296448/smmShL8T_normal.png","Likes":null,"Retweet":null,"Text":"#Blog: NBT Sports: #CWC15 #INDvsBAN \nबड़ा झटका!!! विराट कोहली 3 रन बनाकर आ ... - http://t.co/X6L38TQ4DO #IndiaDefends http://t.co/u0KguBSkvx"},{"ID":"616715625449140225","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Thu Jul 02 21:10:37 +0000 2015","Address":"Lahore, Pakistan","Country":"Pakistan(PK)","Sentiment":"Positive","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CI3ZOUqUsAA7-GU.jpg","ProfileID":"@usamahaider12","ProfileName":"@Usama Bukhari","ProfileScreenName":null,"ProfileFollower":"27","ProfileFriends":"295","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/616712466756571141/IUp2Gxgw_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @PakCricketPCB: Ban is Playing Really well nowadays &amp; their fans Deserve to celebrate but this Pic has crossed the limits #IndvsBan http…"},{"ID":"616694179662422018","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Thu Jul 02 19:45:24 +0000 2015","Address":"Dhaka, Bangladesh","Country":"Bangladesh(BD)","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@BelongstoRaya","ProfileName":"@Prottoy Piash Mahmud","ProfileScreenName":null,"ProfileFollower":"86","ProfileFriends":"184","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/616225333285523456/CyboOBKa_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @adidascricket: @BCBtigers win convincingly yesterday. They looked like a good ODI unit playing aggressively and showing they meant busi…"},{"ID":"616691574924296192","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Thu Jul 02 19:35:03 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CI3ZOUqUsAA7-GU.jpg","ProfileID":"@imsdonkey55","ProfileName":"@CricKet55","ProfileScreenName":null,"ProfileFollower":"25","ProfileFriends":"244","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/615375606625214464/gzSdkJNS_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @PakCricketPCB: Ban is Playing Really well nowadays &amp; their fans Deserve to celebrate but this Pic has crossed the limits #IndvsBan http…"},{"ID":"616685972122673153","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Thu Jul 02 19:12:47 +0000 2015","Address":"Gujrat, Pakistan","Country":"Pakistan(PK)","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CI3ZOUqUsAA7-GU.jpg","ProfileID":"@salmanjaved_sj","ProfileName":"@maliksalman","ProfileScreenName":null,"ProfileFollower":"33","ProfileFriends":"166","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/576435780496687104/tFPE-AuU_normal.jpeg","Likes":null,"Retweet":null,"Text":"RT @PakCricketPCB: Ban is Playing Really well nowadays &amp; their fans Deserve to celebrate but this Pic has crossed the limits #IndvsBan http…"},{"ID":"616681177525714946","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Thu Jul 02 18:53:44 +0000 2015","Address":"Pakistan","Country":"Pakistan(PK)","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CI3ZOUqUsAA7-GU.jpg","ProfileID":"@cricket_PK2","ProfileName":"@Green Shirts","ProfileScreenName":null,"ProfileFollower":"922","ProfileFriends":"101","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/615553538291187712/F97X3cGu_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @PakCricketPCB: Ban is Playing Really well nowadays &amp; their fans Deserve to celebrate but this Pic has crossed the limits #IndvsBan http…"},{"ID":"616613380665708544","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Thu Jul 02 14:24:20 +0000 2015","Address":"Narayanganj, Bangladesh","Country":"Bangladesh(BD)","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CIR4-DzUsAAvi2w.jpg","ProfileID":"@PopnessEmran","ProfileName":"@POPNess Emran","ProfileScreenName":null,"ProfileFollower":"28","ProfileFriends":"88","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/615820483582275588/c87i6Gx4_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @BCBtigers: Congratulations to all @BCBtigers for the historical series win against @BCCI. #BANvIND #riseofthetigers http://t.co/x5bcNKz…"},{"ID":"616567804788101120","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Thu Jul 02 11:23:14 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CI3ZOUqUsAA7-GU.jpg","ProfileID":"@farooq_amin30","ProfileName":"@Farooq Amin","ProfileScreenName":null,"ProfileFollower":"62","ProfileFriends":"166","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/553552853030039552/IZUSrXo5_normal.jpeg","Likes":null,"Retweet":null,"Text":"RT @PakCricketPCB: Ban is Playing Really well nowadays &amp; their fans Deserve to celebrate but this Pic has crossed the limits #IndvsBan http…"},{"ID":"616536541314158592","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Thu Jul 02 09:19:00 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CI3ZOUqUsAA7-GU.jpg","ProfileID":"@Moxin_ali3","ProfileName":"@Mohsin Ali","ProfileScreenName":null,"ProfileFollower":"50","ProfileFriends":"359","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/602409634691878912/Jc4HTwnH_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @PakCricketPCB: Ban is Playing Really well nowadays &amp; their fans Deserve to celebrate but this Pic has crossed the limits #IndvsBan http…"},{"ID":"616475748140908544","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Thu Jul 02 05:17:26 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@imRohitian45","ProfileName":"@Sonya R. Sharma ❤","ProfileScreenName":null,"ProfileFollower":"943","ProfileFriends":"118","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/616316688129134592/XqWum9ig_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @adidascricket: @BCBtigers win convincingly yesterday. They looked like a good ODI unit playing aggressively and showing they meant busi…"},{"ID":"616475405357223936","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Thu Jul 02 05:16:04 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@Ankushchoubey_","ProfileName":"@Ankush RG Follower","ProfileScreenName":null,"ProfileFollower":"1087","ProfileFriends":"216","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/614803569187762176/Fcd9jNC6_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @JM_Scindia: Congratulations Team India for a Convincing victory against Bangladesh &amp; advancing to Semi Finals of the @cricketworldcup. …"},{"ID":"616468440136613888","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Thu Jul 02 04:48:24 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CI3ZOUqUsAA7-GU.jpg","ProfileID":"@Hinakhanalive","ProfileName":"@Hina Khan","ProfileScreenName":null,"ProfileFollower":"128","ProfileFriends":"120","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/587203434048176129/cXhVTore_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @PakCricketPCB: Ban is Playing Really well nowadays &amp; their fans Deserve to celebrate but this Pic has crossed the limits #IndvsBan http…"},{"ID":"616454858422517760","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Thu Jul 02 03:54:26 +0000 2015","Address":"Jammu and Kashmir","Country":"None(None)","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CI3ZOUqUsAA7-GU.jpg","ProfileID":"@malikhamid33","ProfileName":"@Hamid malik","ProfileScreenName":null,"ProfileFollower":"3","ProfileFriends":"50","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/613933323388219392/IY3aOtJR_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @PakCricketPCB: Ban is Playing Really well nowadays &amp; their fans Deserve to celebrate but this Pic has crossed the limits #IndvsBan http…"},{"ID":"616426998747955200","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Thu Jul 02 02:03:43 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CI3ZOUqUsAA7-GU.jpg","ProfileID":"@majid786917","ProfileName":"@Cricket back to #Pak","ProfileScreenName":null,"ProfileFollower":"168","ProfileFriends":"54","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/599663537485516800/Ua5arHQe_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @PakCricketPCB: Ban is Playing Really well nowadays &amp; their fans Deserve to celebrate but this Pic has crossed the limits #IndvsBan http…"},{"ID":"616400492516765696","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Thu Jul 02 00:18:24 +0000 2015","Address":"London, UK","Country":"United Kingdom(GB)","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CIRlS4IXAAAGUQ9.jpg","ProfileID":"@zamirtelecom","ProfileName":"@Zamir Telecom Ltd.","ProfileScreenName":null,"ProfileFollower":"270","ProfileFriends":"115","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/2725509698/b3469af141abf66c173ae3985c19e97c_normal.jpeg","Likes":null,"Retweet":null,"Text":"RT @simplecall: Did U get ur #bonus ?\nHurry up!\nTry: http://t.co/4bcWRL3Txk\n\n#cheap #calls #BANvIND #IndiaVsBangladesh #cricketlive http://…"},{"ID":"616398869857832961","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Thu Jul 02 00:11:57 +0000 2015","Address":"Pakistan","Country":"Pakistan(PK)","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CI3ZOUqUsAA7-GU.jpg","ProfileID":"@itsme_ark","ProfileName":"@Aamir Khan","ProfileScreenName":null,"ProfileFollower":"320","ProfileFriends":"201","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/609698835925827585/TtIC5OTZ_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @PakCricketPCB: Ban is Playing Really well nowadays &amp; their fans Deserve to celebrate but this Pic has crossed the limits #IndvsBan http…"},{"ID":"616392873303347200","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Wed Jul 01 23:48:07 +0000 2015","Address":"Chittagong, Bangladesh","Country":"Bangladesh(BD)","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CIR4-DzUsAAvi2w.jpg","ProfileID":"@nazir330","ProfileName":"@Mohammed Oayan","ProfileScreenName":null,"ProfileFollower":"23","ProfileFriends":"133","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/570629592098033664/a8F8gacy_normal.jpeg","Likes":null,"Retweet":null,"Text":"RT @BCBtigers: Congratulations to all @BCBtigers for the historical series win against @BCCI. #BANvIND #riseofthetigers http://t.co/x5bcNKz…"},{"ID":"616390554318848000","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Wed Jul 01 23:38:54 +0000 2015","Address":"Bengaluru, Karnataka, India","Country":"India(IN)","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@Priyanshu7Singh","ProfileName":"@Priyanshu singh","ProfileScreenName":null,"ProfileFollower":"146","ProfileFriends":"1745","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/607114162649493504/LeJntISh_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @cricinfo_record: Most 50+ scores as captain in INTL matches:\n129 Ponting,\n110 GSmith,\n84 SFleming,\n80* MS Dhoni,\n80 ABorder,\n65 Ranatun…"},{"ID":"616388348953915393","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Wed Jul 01 23:30:08 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CI3ZOUqUsAA7-GU.jpg","ProfileID":"@asmarakhan19","ProfileName":"@Asmara","ProfileScreenName":null,"ProfileFollower":"219","ProfileFriends":"187","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/614410828301910016/NW-Xvcxf_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @PakCricketPCB: Ban is Playing Really well nowadays &amp; their fans Deserve to celebrate but this Pic has crossed the limits #IndvsBan http…"},{"ID":"616388073249734656","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Wed Jul 01 23:29:03 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CI3ZOUqUsAA7-GU.jpg","ProfileID":"@MuneebPashtun","ProfileName":"@Muneeb Khan","ProfileScreenName":null,"ProfileFollower":"25","ProfileFriends":"219","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/443294602137595904/dp08Xvwj_normal.jpeg","Likes":null,"Retweet":null,"Text":"RT @PakCricketPCB: Ban is Playing Really well nowadays &amp; their fans Deserve to celebrate but this Pic has crossed the limits #IndvsBan http…"},{"ID":"616387834598002688","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Wed Jul 01 23:28:06 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CI3ZOUqUsAA7-GU.jpg","ProfileID":"@yasolapakos","ProfileName":"@Yaso ✨","ProfileScreenName":null,"ProfileFollower":"247","ProfileFriends":"104","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/614097557933961216/I2_5sRvy_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @PakCricketPCB: Ban is Playing Really well nowadays &amp; their fans Deserve to celebrate but this Pic has crossed the limits #IndvsBan http…"},{"ID":"616387755304599553","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Wed Jul 01 23:27:47 +0000 2015","Address":"Mirpur","Country":"None(None)","Sentiment":"Positive","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CI3ZOUqUsAA7-GU.jpg","ProfileID":"@SabahZafar1","ProfileName":"@Sabah Zafar","ProfileScreenName":null,"ProfileFollower":"86","ProfileFriends":"170","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/615455092569812993/_mX7SY1Z_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @PakCricketPCB: Ban is Playing Really well nowadays &amp; their fans Deserve to celebrate but this Pic has crossed the limits #IndvsBan http…"},{"ID":"616387566183383040","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Wed Jul 01 23:27:02 +0000 2015","Address":"Lahore, Pakistan","Country":"Pakistan(PK)","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CI3ZOUqUsAA7-GU.jpg","ProfileID":"@PakCricketPCB","ProfileName":"@Pakistan Cricket ","ProfileScreenName":null,"ProfileFollower":"1714","ProfileFriends":"1929","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/517251437818961921/pJhkp2dd_normal.jpeg","Likes":null,"Retweet":null,"Text":"Ban is Playing Really well nowadays &amp; their fans Deserve to celebrate but this Pic has crossed the limits #IndvsBan http://t.co/1xVCkjAawK"},{"ID":"616330149865205760","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Wed Jul 01 19:38:53 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"NA","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@imTaohid","ProfileName":"@M THD","ProfileScreenName":null,"ProfileFollower":"21","ProfileFriends":"420","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/447392644667150336/lWMBkMr2_normal.jpeg","Likes":null,"Retweet":null,"Text":"RT @bomanirani: From this day on, may they will never be referred to, as 'minnows', ever again!!! Bravo Bangla Desh! #INDvBAN"},{"ID":"616294536428412932","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Wed Jul 01 17:17:22 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@hwasif60","ProfileName":"@Wasif Hussain","ProfileScreenName":null,"ProfileFollower":"8","ProfileFriends":"226","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/603593435103121408/Osaf7Hi3_normal.jpg","Likes":null,"Retweet":null,"Text":"Making fun of Indain team by publishing such type cartoon is totally childish act.\n#BANvIND"},{"ID":"616209649155600384","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Wed Jul 01 11:40:03 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@virushkalover","ProfileName":"@Nushki ","ProfileScreenName":null,"ProfileFollower":"1862","ProfileFriends":"1918","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/616205648922038273/4ydJQ8vY_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @_hafees: If you want to compare someone with Virat Kohli, come up with his individual records. Don't compare by looking their recent fo…"},{"ID":"616177054296334336","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Wed Jul 01 09:30:32 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@akshay_khanna","ProfileName":"@Akshay Khanna","ProfileScreenName":null,"ProfileFollower":"330","ProfileFriends":"474","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/537603640974770176/fYT4t4NC_normal.jpeg","Likes":null,"Retweet":null,"Text":"#INDvBAN Overall wins. ODI: India 26 Bangladesh 5.Test: #Ind 6 #Ban 0. @ProthomAlo Morons! wat r u gloating about? @BCBtigers #Dolts #gaandu"},{"ID":"616173062870953984","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Wed Jul 01 09:14:40 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@raqooq5","ProfileName":"@Наталия Эсперовa","ProfileScreenName":null,"ProfileFollower":"179","ProfileFriends":"1","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/550180904488824833/5L7uKBVu_normal.jpeg","Likes":null,"Retweet":null,"Text":"RT: raqooq5: RT: MyNameIs007Khan: #INDvBAN Same Idiot's screaming now were OK &amp; even Supported Charlie Hebdo carto… http://t.co/XqdVghz8G6"},{"ID":"616136365416284160","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Wed Jul 01 06:48:51 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@FanOfBangladesh","ProfileName":"@Fan Of Bangladesh ","ProfileScreenName":null,"ProfileFollower":"97","ProfileFriends":"40","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/603807500975022080/QESacso7_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @meh_priata: Mustafizur you made people all over the world recognise our country !! Ours may SMALL but strong #riseofthetigers #BANvIND"},{"ID":"616132532728303617","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Wed Jul 01 06:33:37 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@IamNicck","ProfileName":"@NIkhIL","ProfileScreenName":null,"ProfileFollower":"146","ProfileFriends":"351","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/613997006835417090/WTe-c33S_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @28anand: 19, debut, 5-wkt haul...well done Mustafizur #BANvIND"},{"ID":"616124078181629953","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Wed Jul 01 06:00:01 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CHnP2W5UsAApme4.jpg","ProfileID":"@mindglowingtips","ProfileName":"@cricketer of bihar","ProfileScreenName":null,"ProfileFollower":"1365","ProfileFriends":"2011","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/615345216678002688/w4l6f6tp_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @BCCI: MS Dhoni was back in action. He looked fresh, relaxed and geared up. #BanvsInd http://t.co/yWZCHZ4Ffa"},{"ID":"616122595021172736","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Wed Jul 01 05:54:08 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CIHc0BbUcAEq6Hf.png","ProfileID":"@ngopal050","ProfileName":"@Proudest INDIAN (67)","ProfileScreenName":null,"ProfileFollower":"2061","ProfileFriends":"244","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/563206096106438656/n15U1gdC_normal.jpeg","Likes":null,"Retweet":null,"Text":"RT @greymind43: MS Dhoni has a terrific ODI record, give him respect: Sourav Ganguly \n#IndvsBan http://t.co/m99GlzWnOc"},{"ID":"615999134873579521","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Tue Jun 30 21:43:33 +0000 2015","Address":"Earth, TX 79031, USA","Country":"United States(US)","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CAdPX-CUkAAemzk.jpg","ProfileID":"@tweetordie1","ProfileName":"@Tweet or die","ProfileScreenName":null,"ProfileFollower":"1927","ProfileFriends":"740","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/596323638682525698/hrL_c8wg_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @IndianCricNews: Congratulations to Captain Cool for his 100th ODI win. \nRETWEET and Wish MS DHONI\n#MSD100 #INDvBAN #INDvsBAN #CWC15 htt…"},{"ID":"615965181349339137","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Tue Jun 30 19:28:37 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@andro8ammar","ProfileName":"@Andro8","ProfileScreenName":null,"ProfileFollower":"264","ProfileFriends":"40","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/589648474888540161/nysIZ7Z7_normal.png","Likes":null,"Retweet":null,"Text":"runal_jaju: RT MeraMedicare: Cost of a button at GOOGLE is, US $110 Million #google #USA #BANvIND #HangoutON #mera… http://t.co/Y5YFUibRjJ"},{"ID":"615964338495451136","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Tue Jun 30 19:25:17 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CHydyGRVAAI1VIQ.png","ProfileID":"@runal_jaju","ProfileName":"@runal jaju","ProfileScreenName":null,"ProfileFollower":"40","ProfileFriends":"170","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/555638807878320128/mzf4vAX8_normal.jpeg","Likes":null,"Retweet":null,"Text":"RT @MeraMedicare: Cost of a button at GOOGLE is, US $110 Million #google #USA #BANvIND #HangoutON #meramedicare #Delhi #BBTrailerAt5pm http…"},{"ID":"615923564567367680","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Tue Jun 30 16:43:15 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@antonysavio96","ProfileName":"@Antony Savio","ProfileScreenName":null,"ProfileFollower":"15","ProfileFriends":"105","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/599903627080142848/oWdoVz2q_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @mipaltan: #IND: 26/0 after 5 overs. Steady start by our openers. #BANvIND"},{"ID":"615921192940089344","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Tue Jun 30 16:33:50 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CIwxD3aVEAAS-Ri.jpg","ProfileID":"@MyNameIs007Khan","ProfileName":"@BATMAN","ProfileScreenName":null,"ProfileFollower":"38","ProfileFriends":"175","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/601071393820708864/76-Q4Rd1_normal.jpg","Likes":null,"Retweet":null,"Text":"@OfficialCSA #BANvSA  Look what happen to team #IND after #INDvBAN series! #BDTigers are in mood! #SAvBAN #BANvIND http://t.co/WKcDSWwrM7"},{"ID":"615904236216320001","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Tue Jun 30 15:26:27 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CIwhn9ZUsAAyclY.jpg","ProfileID":"@ashenai","ProfileName":"@ashenai","ProfileScreenName":null,"ProfileFollower":"128","ProfileFriends":"107","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/1630218758/aks_profile_normal.JPG","Likes":null,"Retweet":null,"Text":"Ad in BD newspaper - super trolls these Bangladeshis are. &amp; it looks perfectly normal on Ravindra Jadeja #BanvInd http://t.co/xl0oouvejt"},{"ID":"615897099561885696","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Tue Jun 30 14:58:06 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@snazzyanish","ProfileName":"@AnishLANKYKumar","ProfileScreenName":null,"ProfileFollower":"85","ProfileFriends":"595","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/416749208515784704/0sNzW-R2_normal.jpeg","Likes":null,"Retweet":null,"Text":"RT @hegdepooja: Glad to know #India won! Off to the Semis 💃💃 Now it's MY time to perform ;) #INDvsBAN #MohenjoDaro #victory"},{"ID":"615850448193368064","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Tue Jun 30 11:52:43 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"NA","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@mshivs","ProfileName":"@M Shiv Shankar","ProfileScreenName":null,"ProfileFollower":"70","ProfileFriends":"105","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/609010303397855232/_wAGY1dw_normal.jpg","Likes":null,"Retweet":null,"Text":"LOL,such reactions how show minnowish they r,one win n they go insane\r\"Bangladeshi print mocks Indian team #BanvInd\rhttp://t.co/KoH4vNASdO\""},{"ID":"615835167165280256","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Tue Jun 30 10:52:00 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@salahuddinraz","ProfileName":"@SaLaH UddiN","ProfileScreenName":null,"ProfileFollower":"806","ProfileFriends":"263","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/529731969500733440/4_xTkPYy_normal.jpeg","Likes":null,"Retweet":null,"Text":"Sharfuddoulla #TheTigerUmpire did great umpiring not being stressed by mighty #TeamIndia appeals&amp;taking right decission #JoyBangla #BANvIND"},{"ID":"615821020285399040","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Tue Jun 30 09:55:47 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@jafranfz","ProfileName":"@Jafu","ProfileScreenName":null,"ProfileFollower":"452","ProfileFriends":"304","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/570975889085579264/1mE_xpaG_normal.jpeg","Likes":null,"Retweet":null,"Text":"RT @cricinfo_record: Most 50+ scores as captain in INTL matches:\n129 Ponting,\n110 GSmith,\n84 SFleming,\n80* MS Dhoni,\n80 ABorder,\n65 Ranatun…"},{"ID":"615583849846734848","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Mon Jun 29 18:13:21 +0000 2015","Address":"Dhaka, Bangladesh","Country":"Bangladesh(BD)","Sentiment":"Positive","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@salahuddinraz","ProfileName":"@SaLaH UddiN","ProfileScreenName":null,"ProfileFollower":"806","ProfileFriends":"264","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/529731969500733440/4_xTkPYy_normal.jpeg","Likes":null,"Retweet":null,"Text":".@abpnewstv is trying to create Divide &amp; Rule in creating Indo-Bangla conflict by #SudhirGautam Drama. #INDvBAN #BANvIND"},{"ID":"615556963968122880","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Mon Jun 29 16:26:31 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@prashantkumarns","ProfileName":"@Tum se na ho payega!","ProfileScreenName":null,"ProfileFollower":"140","ProfileFriends":"467","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/532546443408457728/EQewPfXi_normal.jpeg","Likes":null,"Retweet":null,"Text":"RT @HindiSatire: Last best performance of Virat Kohli was in Comedy Nights With Kapil ..  #BANvIND"},{"ID":"615436437882830848","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Mon Jun 29 08:27:35 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"NA","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@rafiqul536700","ProfileName":"@MD Rafiqul Islam ","ProfileScreenName":null,"ProfileFollower":"3","ProfileFriends":"91","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/587992743642697729/yvv3Mm0O_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @bomanirani: From this day on, may they will never be referred to, as 'minnows', ever again!!! Bravo Bangla Desh! #INDvBAN"},{"ID":"615335372030021637","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Mon Jun 29 01:45:59 +0000 2015","Address":"Bhubaneshwar, Odisha, India","Country":"India(IN)","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@deepak_Das01","ProfileName":"@deepak kumar das","ProfileScreenName":null,"ProfileFollower":"53","ProfileFriends":"45","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/378800000741157543/7b73fd77f710d5a2189355180291f08c_normal.jpeg","Likes":null,"Retweet":null,"Text":"RT @RaunakRK: Has Ravi Shastri made the difference here as well? #justgetthefeeling #BanvsInd"},{"ID":"615335345048059904","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Mon Jun 29 01:45:53 +0000 2015","Address":"Bhubaneshwar, Odisha, India","Country":"India(IN)","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@deepak_Das01","ProfileName":"@deepak kumar das","ProfileScreenName":null,"ProfileFollower":"53","ProfileFriends":"45","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/378800000741157543/7b73fd77f710d5a2189355180291f08c_normal.jpeg","Likes":null,"Retweet":null,"Text":"RT @harioombaba: I have always thought of Ravi Shastri as a big mouthed mediocre jackass. This series re-confirms my belief. Sack Ravi Shas…"},{"ID":"615262063846256640","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sun Jun 28 20:54:41 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"NA","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@aljalil17","ProfileName":"@al jalil ","ProfileScreenName":null,"ProfileFollower":"14","ProfileFriends":"162","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/613962212294529024/5hR-LEda_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @bomanirani: From this day on, may they will never be referred to, as 'minnows', ever again!!! Bravo Bangla Desh! #INDvBAN"},{"ID":"615204436864925697","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sun Jun 28 17:05:42 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CIGllVOVEAEK7RX.jpg","ProfileID":"@ramsayz_chintu","ProfileName":"@Ram Pothineni","ProfileScreenName":null,"ProfileFollower":"98","ProfileFriends":"407","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/614994004703227905/y83L3o2V_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @IExpressSports: MS Dhoni looks ruffled, in dire need of ‘Yoga': @BishanBedi http://t.co/l8iAB87gWe #BANvIND #Dhoni http://t.co/g04wQ6n4…"},{"ID":"615070718783549440","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sun Jun 28 08:14:21 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@Andym6769","ProfileName":"@Andrew Mundell","ProfileScreenName":null,"ProfileFollower":"1385","ProfileFriends":"2001","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/612930851874172928/g0Kr1V6X_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @cricbuzz: Dhoni records his 59th ODI fifty. This is his 3rd fifty in his last six innings. #BANvIND"},{"ID":"615023067052441600","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sun Jun 28 05:05:00 +0000 2015","Address":"Bengaluru, Karnataka, India","Country":"India(IN)","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@Priyanshu7Singh","ProfileName":"@Priyanshu singh","ProfileScreenName":null,"ProfileFollower":"133","ProfileFriends":"1707","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/607114162649493504/LeJntISh_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @cricinfo_record: This is the first ever occasion in India's Test history that opening stand is of 200+ runs in match's first innings aw…"},{"ID":"615006665306320897","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sun Jun 28 03:59:49 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CIR4-DzUsAAvi2w.jpg","ProfileID":"@santabul","ProfileName":"@santa bul","ProfileScreenName":null,"ProfileFollower":"32","ProfileFriends":"431","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/588519777817112576/VVeKyUh2_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @BCBtigers: Congratulations to all @BCBtigers for the historical series win against @BCCI. #BANvIND #riseofthetigers http://t.co/x5bcNKz…"},{"ID":"614895021251170304","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sat Jun 27 20:36:11 +0000 2015","Address":"Ludhiana, Punjab, India","Country":"India(IN)","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@Singh3460","ProfileName":"@ਟੁੱਟ ਪੈਨਾ•°•°੩੪੬੦ :p","ProfileScreenName":null,"ProfileFollower":"2066","ProfileFriends":"1531","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/611937859629481984/J6nu9x_O_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @I_ShineNotBurn: And @BCBtigers tigers have the best fans 😍😍 the crowd at the stadium is love ❤ #BANvIND"},{"ID":"614871539339517953","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sat Jun 27 19:02:53 +0000 2015","Address":"New Delhi, Delhi, India","Country":"India(IN)","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CISWTa7UAAAC7Wx.jpg","ProfileID":"@chancha51350078","ProfileName":"@chanchal gupta","ProfileScreenName":null,"ProfileFollower":"417","ProfileFriends":"305","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/563333117901950976/uahnm-5E_normal.jpeg","Likes":null,"Retweet":null,"Text":"RT @jaspreet_sahni: You can't disrespect Dhoni, he knows his stuff: Raina backs his skipper http://t.co/KwZWlj8Vgj #BANvIND http://t.co/Nxm…"},{"ID":"614851908235194368","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sat Jun 27 17:44:52 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@InvincibleSR","ProfileName":"@Rohan Sule  ","ProfileScreenName":null,"ProfileFollower":"177","ProfileFriends":"181","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/418277032888659968/NRKCBZ0x_normal.jpeg","Likes":null,"Retweet":null,"Text":"Its better to have medium pacers who can bowl better line and length rather than bowlers who only have Pace but no brains #BCCI #INDvBAN"},{"ID":"614825181874237440","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sat Jun 27 15:58:40 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CISWTa7UAAAC7Wx.jpg","ProfileID":"@Stone98King","ProfileName":"@Ankit","ProfileScreenName":null,"ProfileFollower":"2","ProfileFriends":"28","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/601439398010322944/tmVAQlHm_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @DHONIism: You can't disrespect Dhoni, he knows his stuff: Raina backs his skipper http://t.co/gGQdrWwLCG #BANvIND http://t.co/t1CD2eMjqE"},{"ID":"614823380282404864","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sat Jun 27 15:51:31 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@kashifbaloch","ProfileName":"@kashif baloch","ProfileScreenName":null,"ProfileFollower":"272","ProfileFriends":"1","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/609599827492519936/CiyOl8Lv_normal.png","Likes":null,"Retweet":null,"Text":"http://t.co/gGlQYw6Y93 I've also become a fan of #Mustafizur,he should end up with at-least 300# ODI wickets.A true star in making.#indvsban"},{"ID":"614821214398189568","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sat Jun 27 15:42:54 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@monjurhasan22","ProfileName":"@monjur hasan","ProfileScreenName":null,"ProfileFollower":"1","ProfileFriends":"26","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/378800000354838746/9199872e6e7bb0cc7159ccb05b187247_normal.jpeg","Likes":null,"Retweet":null,"Text":"\"@jhaveribazaar: Masrafe Mortaza - Runs like Akhtar, bowls like Ganguly #BANvIND\"thanks"},{"ID":"614819469450346499","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sat Jun 27 15:35:58 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@QTvPK","ProfileName":"@#GK #inFO","ProfileScreenName":null,"ProfileFollower":"2831","ProfileFriends":"0","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/568642051018072064/bPJg6Ggr_normal.png","Likes":null,"Retweet":null,"Text":"#CPLt20\n#PAKvSL\n#t20Blast\n#BANvIND\n\nFor Updates &amp; Live Score\n\nFollow\n@PAK_Tour_SL\nNo Add\nNo Bkwas\n1 Try Plz\nOV TO OV UPDATES\n+,\nOn @Azuna_CC"},{"ID":"614812565563179009","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sat Jun 27 15:08:32 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@raqooq5","ProfileName":"@Наталия Эсперовa","ProfileScreenName":null,"ProfileFollower":"144","ProfileFriends":"1","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/550180904488824833/5L7uKBVu_normal.jpeg","Likes":null,"Retweet":null,"Text":"RT: MustafizFanclub: RT ICC: LATEST: Great news for BCBTigers in the ODI rankings following the #BanvInd series vi… http://t.co/XqdVghz8G6"},{"ID":"614809550760226816","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sat Jun 27 14:56:34 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@ramankk92","ProfileName":"@Raman K K","ProfileScreenName":null,"ProfileFollower":"357","ProfileFriends":"2003","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/610605892065624065/CjrMG1c2_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @cricinfo_record: Most 50+ scores as captain in INTL matches:\n129 Ponting,\n110 GSmith,\n84 SFleming,\n80* MS Dhoni,\n80 ABorder,\n65 Ranatun…"},{"ID":"614808927876714496","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sat Jun 27 14:54:05 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CIR4-DzUsAAvi2w.jpg","ProfileID":"@MustafizFanclub","ProfileName":"@Mustafizur Rahman","ProfileScreenName":null,"ProfileFollower":"3","ProfileFriends":"32","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/614809081639866368/HHqkAqFf_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @BCBtigers: Congratulations to all @BCBtigers for the historical series win against @BCCI. #BANvIND #riseofthetigers http://t.co/x5bcNKz…"},{"ID":"614779595699716096","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sat Jun 27 12:57:32 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@RavitGanti","ProfileName":"@Ravit kumar ganti","ProfileScreenName":null,"ProfileFollower":"5","ProfileFriends":"15","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/567637631685505024/2ZHTcfJo_normal.jpeg","Likes":null,"Retweet":null,"Text":"disappointed, @teamind lost the series against bangladesh #indvsban. But some relaxation after the last match win. Congrats @teamban"},{"ID":"614721298996969472","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sat Jun 27 09:05:53 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@erkhalsa","ProfileName":"@Aмвraan da тaara ☆","ProfileScreenName":null,"ProfileFollower":"3477","ProfileFriends":"844","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/605353036718817280/S0fS-kGe_normal.png","Likes":null,"Retweet":null,"Text":"RT @I_ShineNotBurn: And @BCBtigers tigers have the best fans 😍😍 the crowd at the stadium is love ❤ #BANvIND"},{"ID":"614708833353515008","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sat Jun 27 08:16:21 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CIR4-DzUsAAvi2w.jpg","ProfileID":"@ABIDTELECOMTBBD","ProfileName":"@RISLAM TBBD","ProfileScreenName":null,"ProfileFollower":"6","ProfileFriends":"240","ProfilePhotoUrl":"http://abs.twimg.com/sticky/default_profile_images/default_profile_2_normal.png","Likes":null,"Retweet":null,"Text":"RT @BCBtigers: Congratulations to all @BCBtigers for the historical series win against @BCCI. #BANvIND #riseofthetigers http://t.co/x5bcNKz…"},{"ID":"614702117354213376","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sat Jun 27 07:49:40 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@nafisafaruque11","ProfileName":"@Nafisa Faruque","ProfileScreenName":null,"ProfileFollower":"14","ProfileFriends":"31","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/605021705891807232/5qeA0AEj_normal.jpg","Likes":null,"Retweet":null,"Text":"Another great article on the @BCBtigers by @sammielev  \n#BANvIND #Bangladesh #Proud \n\nhttp://t.co/JMhOTXqUxL"},{"ID":"614683243762159616","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sat Jun 27 06:34:40 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CIPxDWrUYAAAhfF.png","ProfileID":"@Gouruvishnu1802","ProfileName":"@Gouru vishnu","ProfileScreenName":null,"ProfileFollower":"1","ProfileFriends":"39","ProfilePhotoUrl":"http://abs.twimg.com/sticky/default_profile_images/default_profile_1_normal.png","Likes":null,"Retweet":null,"Text":"RT @mipaltan: 3rd ODI, #BANvIND, time to back our boys. All the @ImRo45 &amp; @RayuduAmbati. Go #TeamIndia. http://t.co/fuGt0Nb9pn"},{"ID":"614648260901257217","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sat Jun 27 04:15:39 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CIP4H6HWsAA3Xum.png","ProfileID":"@maryjspr3","ProfileName":"@mary","ProfileScreenName":null,"ProfileFollower":"7","ProfileFriends":"172","ProfilePhotoUrl":"http://abs.twimg.com/sticky/default_profile_images/default_profile_0_normal.png","Likes":null,"Retweet":null,"Text":"RT @BCCI: We’ve taken time to introspect, says @ashwinravi99. READ:  http://t.co/9hNLIZBwwj #BANvsIND http://t.co/FKLSkRsPB3"},{"ID":"614645815504560128","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sat Jun 27 04:05:56 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CIepHNGVEAAIQWY.jpg","ProfileID":"@IndiaDefends","ProfileName":"@India Defends","ProfileScreenName":null,"ProfileFollower":"199","ProfileFriends":"675","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/556007794856296448/smmShL8T_normal.png","Likes":null,"Retweet":null,"Text":"#Blog: Nishu : Good comeback by Shami &amp; India #INDvBAN #CWC15 - http://t.co/qdGbkpvIg0 #IndiaDefends http://t.co/bcr6qGmVWu"},{"ID":"614643591277719552","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sat Jun 27 03:57:06 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@zikrulahsan","ProfileName":"@Md. Zikrul Ahsan","ProfileScreenName":null,"ProfileFollower":"1235","ProfileFriends":"440","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/220518655/Shawon_at_Charu_normal.jpg","Likes":null,"Retweet":null,"Text":"@abpnewstv is trying to create Divide &amp; Rule in creating Indo-Bangla conflict by #SudhirGautam Drama. #INDvBAN #BANvIND"},{"ID":"614638299517358084","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sat Jun 27 03:36:04 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CIG5a89WUAAIw7S.jpg","ProfileID":"@Jewelrana96","ProfileName":"@JEWEL RANA","ProfileScreenName":null,"ProfileFollower":"89","ProfileFriends":"177","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/607939037400203264/FS7IxWz0_normal.jpg","Likes":null,"Retweet":null,"Text":"RT @ibnlive: Felt so good to hear Mustafizur's comments: Mohammad Aamir\nhttp://t.co/gpiK7UkWrS #INDvBAN http://t.co/rNQ5udgHlR"},{"ID":"614621777478709248","Bookmark":"g1AAAAJjeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dMf9eL-aJKAhNVkkGJOkACST7FFNumecLgEySYkkkxxAJsWjmnR36vYXIJPMSTIpAWRSPZpJG2x-AE1iv0SKSXksQJKhAUgBDZuPbNrcPUtA7uIi3bQFENP2I4dX3jctkGmipJt2AGLafWS3bf7zDmSaAemmPYCYhhJuuTG3QKbpZ2UBAHN_yRw","Datasource":"Twitter","DocDate":"Sat Jun 27 02:30:25 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@DailyO_","ProfileName":"@DailyO","ProfileScreenName":null,"ProfileFollower":"12904","ProfileFriends":"37","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/507429705155215360/fwOqvAXX_normal.jpeg","Likes":null,"Retweet":null,"Text":"I feel it is time for #Dhoni to give up the ODI captaincy | @vikrantgupta73 | #ViratKohli #IndVsBan | http://t.co/fWPVFSIAiX"}]
//var type="positive";
//var returnurl="http://bharatmovies.social";
//var title="Popular comments on social media";
//var id="cric_data3009";
//var q="Male";

//React.render(<CommentList data={data} id={id} title={title} returnurl={returnurl} type={type} q={q} container={container} />, container);

var BubblyStoryRunner = function() {
    var storyCardWidget = function (id, container, dataFromPage, returnUrl, style, cardType, Limit, Title) {
        var returnurl="http://www.cricket24x7.social";
        var title = "Bubbly Story";
        if (returnUrl)
        {
            returnurl=returnUrl;
        }
        if (Title) {
            title = Title;
        }
        debugger;
        if (dataFromPage == null || dataFromPage == "") {
            var weburl = 'http://s24x7.azurewebsites.net/api/summary/story';
            var url = weburl + '?id=' + id + '&storyid=story_default';

            jQuery.ajax({
                url: url,
                type: 'GET',
                dataType: 'JSON',
                cache: false
            }).done(function (data) {
                jQuery.each(data, function (i, val) {
                    if (val.PhotoUrl === null && (jQuery.trim(val.Text) === '' || val.Text === null)) // delete index -- By Arun on 05/20/2015
                    {
                        delete data[i];
                    }
                });
                React.render(<PhotoSlider data={data.Data} title={data.Title} discription={data.Description} Campaign={data.Campaign} returnurl={returnurl} />, container);

            });
        }
        else{
            React.render(<PhotoSlider data={dataFromPage.Data} title={dataFromPage.Title} discription={dataFromPage.Description} Campaign={dataFromPage.Campaign} returnurl={returnurl} />, container);
        }

};
return {
    storyCardWidget: storyCardWidget
};
}();

//http://s24x7.azurewebsites.net/api/summary/story?id=bolly_data3618&storyid=story_default
//http://s24x7.azurewebsites.net/api/summary/story?id=bolly_data3618&storyid=story_default
//http://s24x7.azurewebsites.net/api/summary/story?id=bolly_data3621&storyid=story_default&_=1441977288781

module.exports = BubblyCard;

function BubblyCard() {

};

BubblyCard.prototype.showCard = function (vlist, dataFromPage, container1) {
    BubblyStoryRunner.storyCardWidget(vlist.campaignId, container1, dataFromPage, vlist.returnUrl, vlist.style, vlist.cardType, vlist.Limit);
}

var data = {
    "ID": "123",
    "Title": "Shaandar - Trailer Launch",
    "Description": "Journey from making to the trailer , Shahid and aalia rocks",
    "Campaign": "Shaandar",
    "Data": [
      {
          "ID": "1062699355727999967_1909053339",
          "Datasource": "Twitter",
          "DocDate": "1440903656.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11821340_391983644344081_511513436_n.jpg",
          "ProfileID": "bollywood__rocks",
          "ProfileName": "",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/1516222_885246851558536_468657096_a.jpg",
          "Text": "#shandaar @shahidkapoor #aliabhatt",
          "Comments": "Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.",
          "Flowlly": ""
      },
      {
          "ID": "1064504306528718804_1636460290",
          "Datasource": "Twitter",
          "DocDate": "1441118823.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11950717_1636556923253787_233382749_n.jpg",
          "ProfileID": "forevershahid",
          "ProfileName": "Shahid Kapoor ❤️ Turkish Fans",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/11849378_1454953098146048_656087323_a.jpg",
          "Text": "@shahidkapoor OMG So Sweet 😍😍\nMr Expression 😚 \n#shahidkapoor \n#JhalakReloaded \n#jhalakdikhlajaa \n#indiancinema #bestactor #india #bollywood #handsome #dashing #great #cool #charisma #pyaar #perfection #shandaar #movie #lovely #boy ❤️",
          "Comments": "Shahid expression along with aalia's cuteness to make public crazy",
          "Flowlly": ""
      },
      {
          "ID": "1062699355727999967_1909053339",
          "Datasource": "Twitter",
          "DocDate": "1440903656.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11821340_391983644344081_511513436_n.jpg",
          "ProfileID": "bollywood__rocks",
          "ProfileName": "",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/1516222_885246851558536_468657096_a.jpg",
          "Text": "#shandaar @shahidkapoor #aliabhatt",
          "Comments": "Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.",
          "Flowlly": ""
      },
      {
          "ID": "1064504306528718804_1636460290",
          "Datasource": "Twitter",
          "DocDate": "1441118823.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11950717_1636556923253787_233382749_n.jpg",
          "ProfileID": "forevershahid",
          "ProfileName": "Shahid Kapoor ❤️ Turkish Fans",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/11849378_1454953098146048_656087323_a.jpg",
          "Text": "@shahidkapoor OMG So Sweet 😍😍\nMr Expression 😚 \n#shahidkapoor \n#JhalakReloaded \n#jhalakdikhlajaa \n#indiancinema #bestactor #india #bollywood #handsome #dashing #great #cool #charisma #pyaar #perfection #shandaar #movie #lovely #boy ❤️",
          "Comments": "Shahid expression along with aalia's cuteness to make public crazy",
          "Flowlly": ""
      },
      {
          "ID": "1062699355727999967_1909053339",
          "Datasource": "Instagram",
          "DocDate": "1440903656.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11821340_391983644344081_511513436_n.jpg",
          "ProfileID": "bollywood__rocks",
          "ProfileName": "",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/1516222_885246851558536_468657096_a.jpg",
          "Text": "#shandaar @shahidkapoor #aliabhatt",
          "Comments": "Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.",
          "Flowlly": ""
      },
      {
          "ID": "1064504306528718804_1636460290",
          "Datasource": "Instagram",
          "DocDate": "1441118823.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11950717_1636556923253787_233382749_n.jpg",
          "ProfileID": "forevershahid",
          "ProfileName": "Shahid Kapoor ❤️ Turkish Fans",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/11849378_1454953098146048_656087323_a.jpg",
          "Text": "@shahidkapoor OMG So Sweet 😍😍\nMr Expression 😚 \n#shahidkapoor \n#JhalakReloaded \n#jhalakdikhlajaa \n#indiancinema #bestactor #india #bollywood #handsome #dashing #great #cool #charisma #pyaar #perfection #shandaar #movie #lovely #boy ❤️",
          "Comments": "Shahid expression along with aalia's cuteness to make public crazy",
          "Flowlly": ""
      },
      {
          "ID": "1062699355727999967_1909053339",
          "Datasource": "Instagram",
          "DocDate": "1440903656.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11821340_391983644344081_511513436_n.jpg",
          "ProfileID": "bollywood__rocks",
          "ProfileName": "",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/1516222_885246851558536_468657096_a.jpg",
          "Text": "#shandaar @shahidkapoor #aliabhatt",
          "Comments": "Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.",
          "Flowlly": ""
      },
      {
          "ID": "1064504306528718804_1636460290",
          "Datasource": "Instagram",
          "DocDate": "1441118823.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11950717_1636556923253787_233382749_n.jpg",
          "ProfileID": "forevershahid",
          "ProfileName": "Shahid Kapoor ❤️ Turkish Fans",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/11849378_1454953098146048_656087323_a.jpg",
          "Text": "@shahidkapoor OMG So Sweet 😍😍\nMr Expression 😚 \n#shahidkapoor \n#JhalakReloaded \n#jhalakdikhlajaa \n#indiancinema #bestactor #india #bollywood #handsome #dashing #great #cool #charisma #pyaar #perfection #shandaar #movie #lovely #boy ❤️",
          "Comments": "Shahid expression along with aalia's cuteness to make public crazy",
          "Flowlly": ""
      },
      {
          "ID": "1062699355727999967_1909053339",
          "Datasource": "Instagram",
          "DocDate": "1440903656.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11821340_391983644344081_511513436_n.jpg",
          "ProfileID": "bollywood__rocks",
          "ProfileName": "",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/1516222_885246851558536_468657096_a.jpg",
          "Text": "#shandaar @shahidkapoor #aliabhatt",
          "Comments": "Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.",
          "Flowlly": ""
      },
      {
          "ID": "1064504306528718804_1636460290",
          "Datasource": "Instagram",
          "DocDate": "1441118823.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11950717_1636556923253787_233382749_n.jpg",
          "ProfileID": "forevershahid",
          "ProfileName": "Shahid Kapoor ❤️ Turkish Fans",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/11849378_1454953098146048_656087323_a.jpg",
          "Text": "@shahidkapoor OMG So Sweet 😍😍\nMr Expression 😚 \n#shahidkapoor \n#JhalakReloaded \n#jhalakdikhlajaa \n#indiancinema #bestactor #india #bollywood #handsome #dashing #great #cool #charisma #pyaar #perfection #shandaar #movie #lovely #boy ❤️",
          "Comments": "Shahid expression along with aalia's cuteness to make public crazy",
          "Flowlly": ""
      },
      {
          "ID": "1062699355727999967_1909053339",
          "Datasource": "Instagram",
          "DocDate": "1440903656.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11821340_391983644344081_511513436_n.jpg",
          "ProfileID": "bollywood__rocks",
          "ProfileName": "",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/1516222_885246851558536_468657096_a.jpg",
          "Text": "#shandaar @shahidkapoor #aliabhatt",
          "Comments": "Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.",
          "Flowlly": ""
      },
      {
          "ID": "1064504306528718804_1636460290",
          "Datasource": "Instagram",
          "DocDate": "1441118823.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11950717_1636556923253787_233382749_n.jpg",
          "ProfileID": "forevershahid",
          "ProfileName": "Shahid Kapoor ❤️ Turkish Fans",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/11849378_1454953098146048_656087323_a.jpg",
          "Text": "@shahidkapoor OMG So Sweet 😍😍\nMr Expression 😚 \n#shahidkapoor \n#JhalakReloaded \n#jhalakdikhlajaa \n#indiancinema #bestactor #india #bollywood #handsome #dashing #great #cool #charisma #pyaar #perfection #shandaar #movie #lovely #boy ❤️",
          "Comments": "Shahid expression along with aalia's cuteness to make public crazy",
          "Flowlly": ""
      },
      {
          "ID": "1062699355727999967_1909053339",
          "Datasource": "Instagram",
          "DocDate": "1440903656.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11821340_391983644344081_511513436_n.jpg",
          "ProfileID": "bollywood__rocks",
          "ProfileName": "",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/1516222_885246851558536_468657096_a.jpg",
          "Text": "#shandaar @shahidkapoor #aliabhatt",
          "Comments": "Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.",
          "Flowlly": ""
      },
      {
          "ID": "1064504306528718804_1636460290",
          "Datasource": "Instagram",
          "DocDate": "1441118823.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11950717_1636556923253787_233382749_n.jpg",
          "ProfileID": "forevershahid",
          "ProfileName": "Shahid Kapoor ❤️ Turkish Fans",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/11849378_1454953098146048_656087323_a.jpg",
          "Text": "@shahidkapoor OMG So Sweet 😍😍\nMr Expression 😚 \n#shahidkapoor \n#JhalakReloaded \n#jhalakdikhlajaa \n#indiancinema #bestactor #india #bollywood #handsome #dashing #great #cool #charisma #pyaar #perfection #shandaar #movie #lovely #boy ❤️",
          "Comments": "Shahid expression along with aalia's cuteness to make public crazy",
          "Flowlly": ""
      },
      {
          "ID": "1062699355727999967_1909053339",
          "Datasource": "Instagram",
          "DocDate": "1440903656.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11821340_391983644344081_511513436_n.jpg",
          "ProfileID": "bollywood__rocks",
          "ProfileName": "",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/1516222_885246851558536_468657096_a.jpg",
          "Text": "#shandaar @shahidkapoor #aliabhatt",
          "Comments": "Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.",
          "Flowlly": ""
      },
      {
          "ID": "1064504306528718804_1636460290",
          "Datasource": "Instagram",
          "DocDate": "1441118823.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11950717_1636556923253787_233382749_n.jpg",
          "ProfileID": "forevershahid",
          "ProfileName": "Shahid Kapoor ❤️ Turkish Fans",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/11849378_1454953098146048_656087323_a.jpg",
          "Text": "@shahidkapoor OMG So Sweet 😍😍\nMr Expression 😚 \n#shahidkapoor \n#JhalakReloaded \n#jhalakdikhlajaa \n#indiancinema #bestactor #india #bollywood #handsome #dashing #great #cool #charisma #pyaar #perfection #shandaar #movie #lovely #boy ❤️",
          "Comments": "Shahid expression along with aalia's cuteness to make public crazy",
          "Flowlly": ""
      },
      {
          "ID": "1062699355727999967_1909053339",
          "Datasource": "Instagram",
          "DocDate": "1440903656.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11821340_391983644344081_511513436_n.jpg",
          "ProfileID": "bollywood__rocks",
          "ProfileName": "",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/1516222_885246851558536_468657096_a.jpg",
          "Text": "#shandaar @shahidkapoor #aliabhatt",
          "Comments": "Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.",
          "Flowlly": ""
      },
      {
          "ID": "1064504306528718804_1636460290",
          "Datasource": "Instagram",
          "DocDate": "1441118823.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11950717_1636556923253787_233382749_n.jpg",
          "ProfileID": "forevershahid",
          "ProfileName": "Shahid Kapoor ❤️ Turkish Fans",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/11849378_1454953098146048_656087323_a.jpg",
          "Text": "@shahidkapoor OMG So Sweet 😍😍\nMr Expression 😚 \n#shahidkapoor \n#JhalakReloaded \n#jhalakdikhlajaa \n#indiancinema #bestactor #india #bollywood #handsome #dashing #great #cool #charisma #pyaar #perfection #shandaar #movie #lovely #boy ❤️",
          "Comments": "Shahid expression along with aalia's cuteness to make public crazy",
          "Flowlly": ""
      },
             {
                  "ID": "634978871973048320",
                  "Datasource": "Twitter",
                  "DocDate": "Sat Aug 22 06:42:15 +0000 2015",
                  "VideoUrl": "https://youtu.be/30fU76o1BuI",
                  "VideoSource": "Youtube",
                  "VideoID": "30fU76o1BuI",
                  "PhotoUrl": null,
                  "ProfileID": "@anuj_vyas",
                  "ProfileName": "@Anuj Vyas",
                  "ProfilePhotoUrl": "http://pbs.twimg.com/profile_images/378800000122305549/819ca8363e920c36215f847ae72a914c_normal.jpeg",
                  "Text": "#shandaar #zabardast #zindabaad #fame @Nawazuddin_S  https://t.co/nf28NznL2U",
                  "Comments": "now lets see the trailer of shaandar to see if the chemistry really clicks.",
                  "Flowlly": ""
              },
      {
          "ID": "1062699355727999967_1909053339",
          "Datasource": "Instagram",
          "DocDate": "1440903656.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11821340_391983644344081_511513436_n.jpg",
          "ProfileID": "bollywood__rocks",
          "ProfileName": "",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/1516222_885246851558536_468657096_a.jpg",
          "Text": "#shandaar @shahidkapoor #aliabhatt",
          "Comments": "Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.",
          "Flowlly": ""
      },
      {
          "ID": "1064504306528718804_1636460290",
          "Datasource": "Instagram",
          "DocDate": "1441118823.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11950717_1636556923253787_233382749_n.jpg",
          "ProfileID": "forevershahid",
          "ProfileName": "Shahid Kapoor ❤️ Turkish Fans",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/11849378_1454953098146048_656087323_a.jpg",
          "Text": "@shahidkapoor OMG So Sweet 😍😍\nMr Expression 😚 \n#shahidkapoor \n#JhalakReloaded \n#jhalakdikhlajaa \n#indiancinema #bestactor #india #bollywood #handsome #dashing #great #cool #charisma #pyaar #perfection #shandaar #movie #lovely #boy ❤️",
          "Comments": "Shahid expression along with aalia's cuteness to make public crazy",
          "Flowlly": ""
      },
      {
          "ID": "1062699355727999967_1909053339",
          "Datasource": "Instagram",
          "DocDate": "1440903656.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11821340_391983644344081_511513436_n.jpg",
          "ProfileID": "bollywood__rocks",
          "ProfileName": "",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/1516222_885246851558536_468657096_a.jpg",
          "Text": "#shandaar @shahidkapoor #aliabhatt",
          "Comments": "Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.",
          "Flowlly": ""
      },
      {
          "ID": "1064504306528718804_1636460290",
          "Datasource": "Instagram",
          "DocDate": "1441118823.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11950717_1636556923253787_233382749_n.jpg",
          "ProfileID": "forevershahid",
          "ProfileName": "Shahid Kapoor ❤️ Turkish Fans",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/11849378_1454953098146048_656087323_a.jpg",
          "Text": "@shahidkapoor OMG So Sweet 😍😍\nMr Expression 😚 \n#shahidkapoor \n#JhalakReloaded \n#jhalakdikhlajaa \n#indiancinema #bestactor #india #bollywood #handsome #dashing #great #cool #charisma #pyaar #perfection #shandaar #movie #lovely #boy ❤️",
          "Comments": "Shahid expression along with aalia's cuteness to make public crazy",
          "Flowlly": ""
      },
      {
          "ID": "1062699355727999967_1909053339",
          "Datasource": "Instagram",
          "DocDate": "1440903656.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11821340_391983644344081_511513436_n.jpg",
          "ProfileID": "bollywood__rocks",
          "ProfileName": "",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/1516222_885246851558536_468657096_a.jpg",
          "Text": "#shandaar @shahidkapoor #aliabhatt",
          "Comments": "Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.",
          "Flowlly": ""
      },
      {
          "ID": "1064504306528718804_1636460290",
          "Datasource": "Instagram",
          "DocDate": "1441118823.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11950717_1636556923253787_233382749_n.jpg",
          "ProfileID": "forevershahid",
          "ProfileName": "Shahid Kapoor ❤️ Turkish Fans",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/11849378_1454953098146048_656087323_a.jpg",
          "Text": "@shahidkapoor OMG So Sweet 😍😍\nMr Expression 😚 \n#shahidkapoor \n#JhalakReloaded \n#jhalakdikhlajaa \n#indiancinema #bestactor #india #bollywood #handsome #dashing #great #cool #charisma #pyaar #perfection #shandaar #movie #lovely #boy ❤️",
          "Comments": "Shahid expression along with aalia's cuteness to make public crazy",
          "Flowlly": ""
      },
      {
          "ID": "1062699355727999967_1909053339",
          "Datasource": "Instagram",
          "DocDate": "1440903656.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11821340_391983644344081_511513436_n.jpg",
          "ProfileID": "bollywood__rocks",
          "ProfileName": "",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/1516222_885246851558536_468657096_a.jpg",
          "Text": "#shandaar @shahidkapoor #aliabhatt",
          "Comments": "Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.",
          "Flowlly": ""
      },
      {
          "ID": "1064504306528718804_1636460290",
          "Datasource": "Instagram",
          "DocDate": "1441118823.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11950717_1636556923253787_233382749_n.jpg",
          "ProfileID": "forevershahid",
          "ProfileName": "Shahid Kapoor ❤️ Turkish Fans",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/11849378_1454953098146048_656087323_a.jpg",
          "Text": "@shahidkapoor OMG So Sweet 😍😍\nMr Expression 😚 \n#shahidkapoor \n#JhalakReloaded \n#jhalakdikhlajaa \n#indiancinema #bestactor #india #bollywood #handsome #dashing #great #cool #charisma #pyaar #perfection #shandaar #movie #lovely #boy ❤️",
          "Comments": "Shahid expression along with aalia's cuteness to make public crazy",
          "Flowlly": ""
      }
    ]
};
var Bubbly = new BubblyCard();
    var containerStory = document.getElementById('story') ;
    var paraStory ={
      "campaignId" : "bolly_data3618",
      "cardType" : "story",
        "returnUrl" : "http://bharatmovies.social",
        "styles" : { 'classnameStyle':'col s12 m7 l7'},
        "clientId" : "100" ,
        "limit" :"50"
    };
    Bubbly.showCard(paraStory,data,containerStory);
