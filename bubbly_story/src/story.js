var React = require("react");
var jQuery = require("jquery");

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

var Story = React.createClass({
    
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
        var url = window.location.href;
        var url1 = 'http://www.facebook.com/sharer.php?s=100&p[title]=Fb Share&p[summary]=Facebook share popup&p[url]=' + encodeURIComponent(url);
        window.open(url1, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=548,height=325');

    },
    onClicktw: function () {
        var winTop = (screen.height / 2) - (380 / 2);
        var winLeft = (screen.width / 2) - (520 / 2);
        var url = window.location.href;
        window.open("http://twitter.com/share?url=" +
encodeURIComponent(url) + "&count=none/",
"tweet", 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=548,height=325')

    },  
    render: function () {
        var s1 = { 'font-family': 'georgia','font-size':'16px','line-height':'26px','margin-bottom':'4%','margin-left':'10%','margin-right':'9%' };
        var s2 = { 'width': '100%', 'height': '60px' };
        var s3 = { 'width': '100%' };
        var s4 = {'padding-top':'20px','width':'100%'};
        var s5 = {'height': '48px','width': '48px','padding': '4px','border-bottom':'none','margin-right':'5px'};
        var s8 = { 'padding-right': '5px', 'color': 'darkgray' };
        var s10 = {'position': 'absolute', 'list-style-type': 'none', 'margin': '0', 'padding-right': '20px', 'float': 'right', 'overflow': 'hidden'};
    
        var urlTitle = this.props.returnurl;
        // http://, https://, ftp://
        var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;
        var date = Date.parse(Date().toString());
       
        var commentNodes = this.props.data.map(function (item,i) {
            return (
                            
			    <div >
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
                        <div className="card-content">
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
              <div style={{'padding-left':'5px'}} >
                <h3>
                    {this.props.title}
                </h3>
               
               <h5>{this.props.discription}</h5>
              </div>
                <ul id="icon" style={s10} >
                    <li><img onClick={this.fbShare.bind(this)} onMouseEnter={this.onMouseEnterfb} onMouseLeave={this.onMouseLeavefb} style={{'width':'30px','border-radius': '50%'}} src={this.state.hover1 ? "../Scripts/images/fb_blue.png" : "../Scripts/images/fb_black.png" } /></li>
                    <li><img onClick={this.onClicktw.bind(this)} onMouseEnter={this.onMouseEntertw} onMouseLeave={this.onMouseLeavetw} style={{'width': '30px','border-radius': '50%'}} src={this.state.hover2 ? "../Scripts/images/tw_blue.png": "../Scripts/images/tw_black.png" } /></li>
                </ul>
              <div>
                   {commentNodes}
               </div>
          </div>
            
       );
    }
});

module.exports = Story;

