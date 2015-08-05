
var React = require("react");
var Isotope = require('isotope-layout');
// add cellsByRow layout mode
require('isotope-packery');

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

var MyDialogButton = React.createClass({
          
    componentDidMount: function(){
         
    },
    childHandleClick: function(e) {
      //  debugger;
        alert(this.props.pageUrl);
        
        
    },
    onbuttonclick:function(){
        
    },
    render: function(){
        return (
            <button type="button" id={this.props.pageUrl} onClick={this.onbuttonclick.bind(this)} className="btn btn-link" ><i  className="fa fa-external-link-square"></i></button>
         )
    }
});

var CommentList = React.createClass({
    
    getInitialState: function() {
        return {
            value: 'select'
        }
    },
    componentDidMount: function(){
          

        /*$('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
        }); */

            var iso = new Isotope( '.grid', {
              layoutMode: 'packery',
              packery: {
                columnWidth: '.grid-sizer',
                rowHeight: 500
              },
              itemSelector: '.grid-item',
              percentPosition: true,
              
            });

         
    },
    change: function(event){
        this.setState({value: event.target.value});
      
        switch(event.target.value) {
            case "Instagram":
                DetailWidgetRunner.infiniteCardWidget(this.props.id,this.props.container,"Source",100,"Instagram",null,'http://bharatmovies.social');
                break;
            case "Googleplus":
                DetailWidgetRunner.infiniteCardWidget(this.props.id,this.props.container,"Source",100,"GooglePlus",null,'http://bharatmovies.social');
                break;
            case "select":
                if(this.props.q  == "tumblr"){
                    DetailWidgetRunner.infiniteCardWidget(this.props.id,this.props.container,"Source",100,"tumblr",null,'http://bharatmovies.social');
                }else if(this.props.q  == "Facebook"){
                    DetailWidgetRunner.infiniteCardWidget(this.props.id,this.props.container,"Source",100,"Facebook",null,'http://bharatmovies.social');
                }
                else if(this.props.q  == "Googleplus"){
                    DetailWidgetRunner.infiniteCardWidget(this.props.id,this.props.container,"Source",100,"Googleplus",null,'http://bharatmovies.social');
                }
                else if(this.props.q  == "Instagram"){
                    DetailWidgetRunner.infiniteCardWidget(this.props.id,this.props.container,"Source",100,"Instagram",null,'http://bharatmovies.social');
                }
                break;
            case "Female","Male":
                DetailWidgetRunner.infiniteCardWidget(this.props.id,this.props.container,"gender",100,event.target.value,null,'http://bharatmovies.social');
                break;
            default:
                DetailWidgetRunner.infiniteCardWidget(this.props.id,this.props.container,event.target.value,100,"",null,'http://bharatmovies.social');
        }
    },
    render: function() {
        var s2 = { 'min-height': '60px', 'overflow': 'hidden','margin': '-5px'};
        var s4 = {'padding-top':'1px'};
        var s5 = {'height': '48px','width': '48px','padding': '4px','border-bottom':'none'};
        var url=this.props.returnurl+ '/Comments?id=' + this.props.id + '&type='+this.props.type+'&page=1&q=';
        var bgg={'background':'#dd4b39'};
        var bgfb={'background':'#3b5998'};
        var bgtw={'background':'#00aced'};
        var forecolor={'color':'white'};
        var bgul={'color':'antiquewhite', 'min-height': '100px','min-width': '100px','margin-left':'-100px'};
        var s6 = { 'position':'relative'};
        var s10 = { 'position':'relative','width':'230px'};
        var s7 = { 'position': 'absolute', 'top': '5px', 'right': '5px','color':'darkgray'};
        var s8 = { 'top': '5px', 'right': '5px','color':'darkgray'};
        var s9={'padding-bottom' : '2%'};
        var drpStyle = { display:'flex', 'color': '#23527c','outline': 'none','cursor': 'pointer','font-weight': 'bold',  'font-size': '18px'};

        // http://, https://, ftp://
        var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;
        var date = Date.parse(Date().toString());
       
        var commentNodes = this.props.data.map(function (item) {
           
              return ( 
                       <div className="grid-item">
                            <div className="gridblock">
                            {item.VideoID ? <div className="fluidvids-youtube" style={s9}>
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
                          : false }


                          {item.Datasource=="Twitter" ?
                        
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
                            : false}
                    <br/>     
                       <div dangerouslySetInnerHTML={{__html: item.Text != null ? item.Text.replace(urlPattern, '<a style="word-break:break-word;" href="$&" target="_blank">$&</a>') :false}} >
                       </div>
                  <br/>     
                    <div className="pull-left" style={s4}>
                        { item.Datasource=="Instagram" ? 
                           Math.round((date/1000 - parseInt(item.DocDate)) * 1.1574074074074E-8) >= 1 ? 
                    <span>{Math.round((date/1000 - parseInt(item.DocDate)) * 1.1574074074074E-8)}d</span> 
                                        : Math.round((date/1000 - parseInt(item.DocDate)) * 1.1574074074074E-8) < 1 && Math.round((date/1000 - parseInt(item.DocDate)) * 2.7777777777778E-7) > 1 ?
                                        <span >{Math.round((date/1000 - parseInt(item.DocDate)) * 2.7777777777778E-7)}h</span> 
                    : Math.round((date/1000 - item.DocDate) * 2.7777777777778E-7) < 1 ?
                                        <span >{Math.round((date/1000 - parseInt(item.DocDate)) / 60000)}m</span> 
                                        :false           
                          :  Math.round((date - Date.parse(item.DocDate)) * 1.1574074074074E-8) >= 1 ? 
                    <span>{Math.round((date - Date.parse(item.DocDate)) * 1.1574074074074E-8)}d</span> 
                                        : Math.round((date - Date.parse(item.DocDate)) * 1.1574074074074E-8) < 1 && Math.round((date - Date.parse(item.DocDate)) * 2.7777777777778E-7) > 1 ?
                                        <span >{Math.round((date - Date.parse(item.DocDate)) * 2.7777777777778E-7)}h</span> 
                                        : Math.round((date - Date.parse(item.DocDate)) * 2.7777777777778E-7) < 1 ?
                                        <span >{Math.round((date - Date.parse(item.DocDate)) / 60000)}m</span> 
                                        :false          
                        }
                    </div>
             
             
              </div>
              
             
            </div>

          );
        });
        return (
          <section className="content-module">
            <header className="content-module-header">
              <div>
               <h3><a href={url}>{this.props.title}</a>
              
              </h3>              
           </div>
            </header>
                 
                     <div  className="grid">
                     <div className="grid-sizer"></div>
                    {commentNodes}
                      </div>
                 
               
                
            </section>
       );
    }
});



module.exports = CommentList;
