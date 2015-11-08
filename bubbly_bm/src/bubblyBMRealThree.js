var Radium = require('radium');
var React = require("react");

var { StyleResolverMixin, MatchMediaBase } = Radium;


/*var Container = RadiumBootstrap.Container;
var Row = RadiumBootstrap.Row;
var Col = RadiumBootstrap.Col;*/



var PhotoGallery = require('../../flowly/PhotoGallery.js');
var ImageGalleryYahoo = require('../../flowly/imageGalleryYahoo.js');
var NameAndComment = require('../../flowly/NameAndComment.js');
var StatisticsTable = require('../../flowly/StatisticsTable.js');
var StatisticsTableVertical = require('../../flowly/StatisticsTableVertical.js');
var GenderHorizontalList = require('../../flowly/GenderHorizontalList.js');
var SocialList = require('../../flowly/SocialList.js');

var DonutChartMaterial = require('../../flowly/DonutChartMaterial.js');
var BulletGenderChart = require('../../flowly/BulletGenderChart.js');

function max_index(elements) {
    var i = 1;
    var mi = 0;
    while (i < elements.length) {
        if (!(elements[i] < elements[mi]))
            mi = i;
        i += 1;
    }
    return mi;
}


var BubblyBMYahoo = React.createClass({
  
  render:function() {
   
    var total=this.props.data.Stat.PosCount+this.props.data.Stat.NegCount+this.props.data.Stat.NeuCount;
    console.log("Total "+ total);
    var maxX = 0;
    var index = 0;
   
    var donutData = [{
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Negative"},{
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Positive"},{
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Neutral"}];

        if(this.props.data.Stat != null ) {
          
          donutData[0].value = this.props.data.Stat.NegCount; 
          console.log(this.props.data.Stat.NegCount);
          donutData[1].value = this.props.data.Stat.PosCount;
          console.log(this.props.data.Stat.PosCount);
          donutData[2].value = this.props.data.Stat.NeuCount;
          console.log(this.props.data.Stat.NeuCount);

         
          index = max_index(donutData);
        } else {
            donutData[0].value = "0"; 
            donutData[1].value = "0";
            donutData[2].value = "0";
        }



     var twSocialState = {"Type":"TW","PosCount":0,"NegCount":0,"NeuCount":0,"PosPercent":0,"NegPercent":0,"NeuPercent":0};
     var fbSocialState = {"Type":"FB","PosCount":0,"NegCount":0,"NeuCount":0,"PosPercent":0,"NegPercent":0,"NeuPercent":0};
     var tmSocialState = {"Type":"TM","PosCount":0,"NegCount":0,"NeuCount":0,"PosPercent":0,"NegPercent":0,"NeuPercent":0};
     var istwSocialState = 0,isfbSocialState = 0,istmSocialState = 0;
   
    this.props.data.SocialStats.map(function (item) {
        console.log(item.Type);
        var icon="";
        var key="";
        if (item.Type=="TW")
        {
            istwSocialState = 1;
        }
            
        if (item.Type=="FB")
        {
            isfbSocialState = 1;
        }
        if (item.Type=="TM")
        {
            istmSocialState = 1;
        }
        
    });

    if (istmSocialState == 0 ){
        this.props.data.SocialStats.push(tmSocialState);
    } else if (istwSocialState == 0 ){
        this.props.data.SocialStats.push(twSocialState);
    } else if (isfbSocialState == 0 ){
        this.props.data.SocialStats.push(fbSocialState);
    }

    
    console.log('classnamestyle ' + this.props.styles.classnameStyle);

    if(index == 0 ) {
         console.log("Negative");
         return (
                <div className="card z-depth-3">
                          <div className="row" style={{'padding': '0px','margin':'5px'}}>
                                  <div className="col s12 m6 l4">
                                      <div className="social-ribbon" ><span>Negative</span></div>
                                        <div style={{'background':'url(http://social24x7.azurewebsites.net/cdn/images/social.png);','background-repeat':'no-repeat;','box-shadow':'none;','background-size':'cover;'
                                        ,'z-index':'10;','position':'relative;'}}>
                                        
                                            <div id="doughnut-chart-wrapper">
                                                              <DonutChartMaterial id="hero-donut" donutD={donutData} />
                                                              <div  className="doughnut-chart-status" style={{'top': '-75px !important','font-size':'12px'} }>{total}
                                                                  
                                                              </div>
                                            </div>
                                        
                                        </div>
                                  </div>
                                  <div className="col s12 m6 l8">
                                  
                                      <div className="col s12 m11 l11">
                                        <span style={{'background': 'url(http://social24x7.azurewebsites.net/cdn/images/ribbon21.png);','background-repeat': 'no-repeat;','padding': '5px 46px 6px 14px;','line-height': '45px;','position': 'relative;','top': '3px;','color': '#FFF;','font-weight': 'bold;','z-index':'1;'}}> <a href="http://Social24x7.net" style={{'color':'#ffffff'}}>Social Connect</a></span><br/>

                                        <span className="card-title black-text"><a href={this.props.returnurl} style={{'width':'140px !important'}} >{this.props.data.Name}</a></span>
                                        <p style={{'margin':'5px 0px;','color': '#787878;'}}><i>{this.props.data.Description}</i><br/></p>
                                          
                                      </div>
                                      <div className="col s12 m1 l1" style={{'padding-top':'5px'}}>
                                          <StatisticsTableVertical videoCount={this.props.data.VideosCount} photoCount={this.props.data.PhotosCount} id={this.props.id}  returnurl={this.props.returnurl3} />
                                          
                                      </div>

                                      <a href="http://www.bharatmovies.social"  style={{'line-height': '0px;','float': 'right;','font-size': '13px;','font-weight': 'bold;','margin': '5px 5px;'}}>Visit bharatmovies.social</a>
                                 </div> 
                          </div>

                          <div className='row' style={{'padding': '0px','margin':'5px'}}>
                                 <ImageGalleryYahoo  data={this.props.data.Photos}/>  
                         </div>   
                </div>

          );
         
      } 

      if (index == 1) {
        console.log("Positive");
        
             return (
                <div className="card z-depth-3">
                          <div className="row" style={{'padding': '0px','margin':'5px'}}>
                                  <div className="col s12 m6 l4">
                                      <div className="social-ribbon" ><span>Positive</span></div>
                                        <div style={{'background':'url(http://social24x7.azurewebsites.net/cdn/images/social.png);','background-repeat':'no-repeat;','box-shadow':'none;','background-size':'cover;'
                                        ,'z-index':'10;','position':'relative;'}}>
                                        
                                            <div id="doughnut-chart-wrapper">
                                                              <DonutChartMaterial id="hero-donut" donutD={donutData} />
                                                              <div  className="doughnut-chart-status" style={{'top': '-75px !important','font-size':'12px'} }>{total}
                                                                  
                                                              </div>
                                            </div>
                                        
                                        </div>
                                  </div>
                                  <div className="col s12 m6 l8">
                                  
                                      <div className="col s12 m11 l11">
                                        <span style={{'background': 'url(http://social24x7.azurewebsites.net/cdn/images/ribbon21.png);','background-repeat': 'no-repeat;','padding': '5px 46px 6px 14px;','line-height': '45px;','position': 'relative;','top': '3px;','color': '#FFF;','font-weight': 'bold;','z-index':'1;'}}> <a href="http://Social24x7.net" style={{'color':'#ffffff'}}>Social Connect</a></span><br/>

                                        <span className="card-title black-text"><a href={this.props.returnurl} style={{'width':'140px !important'}} >{this.props.data.Name}</a></span>
                                        <p style={{'margin':'5px 0px;','color': '#787878;'}}><i>{this.props.data.Description}</i><br/></p>
                                          
                                      </div>
                                      <div className="col s12 m1 l1" style={{'padding-top':'5px'}}>
                                          <StatisticsTableVertical videoCount={this.props.data.VideosCount} photoCount={this.props.data.PhotosCount} id={this.props.id}  returnurl={this.props.returnurl3} />
                                          
                                      </div>

                                      <a href="http://www.bharatmovies.social"  style={{'line-height': '0px;','float': 'right;','font-size': '13px;','font-weight': 'bold;','margin': '5px 5px;'}}>Visit bharatmovies.social</a>
                                 </div> 
                          </div>

                          <div className='row' style={{'padding': '0px','margin':'5px'}}>
                                 <ImageGalleryYahoo  data={this.props.data.Photos}/>  
                         </div>   
                </div>

          );
      }

      if (index == 2) {
        console.log("Neutral");
       
           return (
                <div className="card z-depth-3">
                          <div className="row" style={{'padding': '0px','margin':'5px'}}>
                                  <div className="col s12 m6 l4">
                                      <div className="social-ribbon" ><span>Neutral</span></div>
                                        <div style={{'background':'url(http://social24x7.azurewebsites.net/cdn/images/social.png);','background-repeat':'no-repeat;','box-shadow':'none;','background-size':'cover;'
                                        ,'z-index':'10;','position':'relative;'}}>
                                        
                                            <div id="doughnut-chart-wrapper">
                                                              <DonutChartMaterial id="hero-donut" donutD={donutData} />
                                                              <div  className="doughnut-chart-status" style={{'top': '-75px !important','font-size':'12px'} }>{total}
                                                                  
                                                              </div>
                                            </div>
                                        
                                        </div>
                                  </div>
                                  <div className="col s12 m6 l8">
                                  
                                      <div className="col s11 m11 l11">
                                        <span style={{'background': 'url(http://social24x7.azurewebsites.net/cdn/images/ribbon21.png);','background-repeat': 'no-repeat;','padding': '5px 46px 6px 14px;','line-height': '45px;','position': 'relative;','top': '3px;','color': '#FFF;','font-weight': 'bold;','z-index':'1;'}}> <a href="http://Social24x7.net" style={{'color':'#ffffff'}}>Social Connect</a></span><br/>

                                        <span className="card-title black-text"><a href={this.props.returnurl} style={{'width':'140px !important'}} >{this.props.data.Name}</a></span>
                                        <p style={{'margin':'5px 0px;','color': '#787878;'}}><i>{this.props.data.Description}</i><br/></p>
                                          
                                      </div>
                                      <div className="col s1 m1 l1" style={{'padding-top':'5px'}}>
                                          <StatisticsTableVertical videoCount={this.props.data.VideosCount} photoCount={this.props.data.PhotosCount} id={this.props.id}  returnurl={this.props.returnurl3} />
                                          
                                      </div>

                                      <a href="http://www.bharatmovies.social"  style={{'line-height': '0px;','float': 'right;','font-size': '13px;','font-weight': 'bold;','margin': '5px 5px;'}}>Visit bharatmovies.social</a>
                                 </div> 
                          </div>

                          <div className='row' style={{'padding': '0px','margin':'5px'}}>
                                 <ImageGalleryYahoo  data={this.props.data.Photos}/>  
                         </div>   
                </div>

          );

      }
       
    
  }
  
});




module.exports = BubblyBMYahoo;
