var React = require("react");
var MyDialogButton = require('./MyDialogButton.js');

var CommentList = React.createClass({
  
  
    render: function() {
        var s2 = { 'min-height': '60px', 'overflow': 'hidden','margin': '-5px'};
        var s4 = {'padding-top':'8px'};
        var s5 = {'height': '48px','width': '48px','padding': '4px','border-bottom':'none'};
        var url=this.props.returnurl+ '/Comments?id=' + this.props.id + '&type='+this.props.type+'&page=1&q=';
        var bgg={'background':'#dd4b39'};
        var bgfb={'background':'#3b5998'};
        var bgtw={'background':'#00aced'};
        var forecolor={'color':'white'};
        var bgul={'color':'antiquewhite', 'min-height': '100px','min-width': '100px','margin-left':'-100px'};
        var s6 = { 'position':'relative'};
        var s10 = { 'position':'relative','width':'230px'};
        var s7 = { 'position': 'absolute', 
        'top': '5px',
        'right': '5px',
        'color':'darkgray'};
        var s8 = { 'top': '5px',
            'right': '5px',
            'color':'darkgray'};
        var s9={'padding-bottom' : '2%'};
        // http://, https://, ftp://
        var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;
        debugger;
        var commentNodes = this.props.data.map(function (item) {
           
            return (   
            
            
         <div className="pin">       
             {  item.VideoID ? <div className="fluidvids-youtube" style={s9}>
                    <FluidVid src={"http://www.youtube.com/embed/" + item.VideoID + "?rel=0"} />
                    </div>
                : item.PhotoUrl && item.Datasource=="Instagram" ? 
                     <div style={s6}>
                        <img src={item.PhotoUrl} />
                        <span style={s7} className="fi-social-instagram" ></span>
                     </div>
                : item.PhotoUrl && item.Datasource=="GooglePlus" ? 
                                    <div style={s6}>
                                    <img src={item.PhotoUrl} />
                                    <span style={s7} className="fa fa-google-plus-square" ></span>
                                    </div>
                : item.PhotoUrl && item.Datasource=="Tumblr" ? 
                            <div style={s6}>
                            <img src={item.PhotoUrl} />
                            <span style={s7} className="fa fa-tumblr-square" ></span>
                            </div>
                : item.PhotoUrl && item.Datasource=="Twitter" ? 
                     <div style={s6}>
                        <img src={item.PhotoUrl} />
                        <span style={s7} className="fa fa-twitter-square" ></span>
                     </div>
                : item.PhotoUrl && item.Datasource=="Facebook" ?
                    <div style={s6}>
                        <img src={item.PhotoUrl} />
                        <span style={s7} className="fa fa-facebook-square" ></span>
                     </div>
                : false 
            }
            { item.Datasource=="Twitter" ?
                
              <div >
                <a href={"https://twitter.com/" + item.ProfileID.substr(1)} target="_blank"  className="pull-left">
                   <img src={item.ProfilePhotoUrl} style={s5}/> </a>
                <div style={s2}>
                   <div>
                    <a href={"https://twitter.com/" + item.ProfileID.substr(1)} target="_blank">{item.ProfileName.substr(1)}     
                    </a>
                  <div className="pull-right">
                    {item.PhotoUrl==null ? <span style={s8} className="fa fa-twitter-square" ></span>
                        : false
                    }
                    </div>  
                  </div>                
                  <p>{item.ProfileID} ({item.ProfileFollower})</p>
                </div>
                  
              </div>
                : item.Datasource=="Instagram" ?
                        <div >
                        <a href={"https://instagram.com/" + item.ProfileID} target="_blank" className="pull-left">
                            <img src= {item.ProfilePhotoUrl} style={s5}/> </a>
                        <div style={s2}>
                            <a href={"https://instagram.com/" + item.ProfileID} target="_blank">{item.ProfileName}
                            </a>
                            <div className="pull-right">
                            {item.PhotoUrl==null ? <span style={s8} className="fi-social-instagram" ></span>
                    : false
                    }    
                    </div>
                </div>
              </div>
               : item.Datasource=="GooglePlus" ?
                    <div >
                    <a href={"https://plus.google.com/" + item.ProfileID} target="_blank" className="pull-left">
                        <img src= {item.ProfilePhotoUrl} style={s5}/> </a>
                    <div style={s2}>
                        <a href={"https://plus.google.com/" + item.ProfileID} target="_blank">{item.ProfileName}
                        </a>
                        <div className="pull-right">
                        {item.PhotoUrl==null ? <span style={s8} className="fa fa-google-plus-square" ></span>
                    : false
                    }    
                    </div>
                </div>
              </div>
             : item.Datasource=="Tumblr" ?
                    <div >
                    <a href={"http://" + item.ProfileID + ".tumblr.com"} target="_blank" className="pull-left">
                        <img src= {item.ProfilePhotoUrl} style={s5}/> </a>
                    <div style={s2}>
                        <a href={"http://" + item.ProfileID + ".tumblr.com" } target="_blank">{item.ProfileName}
                        </a>
                        <div className="pull-right">
                        {item.PhotoUrl==null ? <span style={s8} className="fa fa-tumblr-square" ></span>
                    : false
                    }    
                    </div>
                </div>
              </div>
               : item.Datasource=="Facebook" ?
               <div >
                <a href={"https://www.facebook.com/profile.php?id=" + item.ProfileID} target="_blank" className="pull-left">
                   <img src= {item.ProfilePhotoUrl} style={s5}/> </a>
                <div style={s2}>
                    <a href={"https://www.facebook.com/profile.php?id=" + item.ProfileID} target="_blank">{item.ProfileName}
                    </a>
                    <div className="pull-right">
                    {item.PhotoUrl==null ? <span style={s8} className="fa fa-facebook-square" ></span>
                        : false
                        }    
                    </div>
                </div>
              </div>
                    : false
            }
       <br/>     
       <div dangerouslySetInnerHTML={{__html: item.Text != null ? item.Text.replace(urlPattern, '<a href="$&" target="_blank">$&</a>') :false}} >
       </div>
     <br/>     
    <div className="pull-left" style={s4}>
            {Math.round((Date.parse(Date().toString()) - Date.parse(item.DocDate)) * 1.1574074074074E-8) >= 1 ? 
    <span>{Math.round((Date.parse(Date().toString()) - Date.parse(item.DocDate)) * 1.1574074074074E-8)}d</span> 
                        : Math.round((Date.parse(Date().toString()) - Date.parse(item.DocDate)) * 1.1574074074074E-8) < 1 && Math.round((Date.parse(Date().toString()) - Date.parse(item.DocDate)) * 2.7777777777778E-7) > 1 ?
                        <span >{Math.round((Date.parse(Date().toString()) - Date.parse(item.DocDate)) * 2.7777777777778E-7)}h</span> 
                        : Math.round((Date.parse(Date().toString()) - Date.parse(item.DocDate)) * 2.7777777777778E-7) < 1 ?
                        <span >{Math.round((Date.parse(Date().toString()) - Date.parse(item.DocDate)) / 60000)}m</span> 
                        :false          }

    </div>
     
    <div className="pull-right" >        
        <div className="bs-example"> 
            <div className="btn-group dropup">
            <div className="btn-group">
                <a data-toggle="dropdown" className="glyphicon glyphicon-share" href="#"></a>
                <ul className="dropdown-menu" style={bgul}>
                <li  style={bgfb}><a href="http://www.facebook.com/share.php?u=_blank" className="fa fa-facebook-square" target="_blank" style={forecolor}> Facebook</a></li>
                <li  style={bgtw}><a href="http://twitter.com/share?original_referer=&amp;text=" className="fa fa-twitter-square" target="_blank" style={forecolor}> Twitter</a></li>
                <li  style={bgg}><a href="https://plus.google.com/share?url=_blank" className="fa fa-google-plus"  target="_blank"  style={forecolor}> Google</a></li>
                </ul>
            </div>
            </div>
            <MyDialogButton key={item.ID} pageUrl={"http://24x7cards.azurewebsites.net/page.html?source=" + encodeURIComponent(item.Datasource) + "&id=" + encodeURIComponent(item.ProfileID) +  "&text=" +  encodeURIComponent(item.Text) + "&date=" + encodeURIComponent(item.DocDate) +  "&name="  + encodeURIComponent(item.ProfileName) + "&itemid="  + encodeURIComponent(item.ID)}/>
        </div>
       </div>
    
     
        </div>
          );
        });
        return (
          <section className="content-module">
            <header className="content-module-header">
                    <h3><a href={url}>{this.props.title}</a></h3>
            </header>
                 <div  className="content-module-body" id="columns">
                    {commentNodes}
                  </div>
               
                
            </section>
    );
    }
});

module.exports = CommentList;

