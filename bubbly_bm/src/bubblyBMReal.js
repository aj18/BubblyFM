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
var GenderHorizontalList = require('../../flowly/GenderHorizontalList.js');
var SocialList = require('../../flowly/SocialList.js');
var DonutChart = require('../../flowly/DonutChart.js');
var DonutChartMaterial = require('../../flowly/DonutChartMaterial.js');
var BulletGenderChart = require('../../flowly/BulletGenderChart.js');


var BubblyBMYahoo = React.createClass({
  
	render:function() {
   
    var total=this.props.data.Stat.PosCount+this.props.data.Stat.NegCount+this.props.data.Stat.NeuCount;
    console.log("Total "+ total);
   
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

		var styles = {

				    s1 : { marginTop: '20px'},
       			s2 : { marginTop: '-75px'},
        		s3 : {boxShadow: '0px 3px 10px 0px rgba(50, 50, 50, 0.5)'},
            
		}
		return (
			
          <div className="card z-depth-3">
               <div className='row' style={{'padding': '0px'}}>
                    
                    <div className="col m6" style={{'padding': '0px'}}>
                      
                           <ImageGalleryYahoo  data={this.props.data.Photos}/>  
                    
                   </div>
                   <div className="col m6" style={{'padding': '0px'}}>
                        <div className="row">
                            <div className="col s12" style={{'padding': '0px'}}>
                              <ul id="projects-collection" className="collection" style={{'border':'none'}}>
                                <li className="collection-item avatar" style={{'border':'none'}}>
                                            <i className="mdi-social-pages circle red darken-2"></i>
                                            <span className="social-collection-header"><a href={this.props.returnurl+'/news/?id='+this.props.id}>#{this.props.data.Name}</a></span>
                                            <p>{this.props.data.Description}</p>
                                </li>
                                <li className="collection-item" style={{'border':'none'}}>
                                 <div className="row" style={{'margin-bottom': '0px !important' }}>
                                    <div className="col m6" style={{'padding': '0px'}}>
                                      <div className="card-content">
                                         <div id="doughnut-chart-wrapper">
                                                    <DonutChartMaterial id="hero-donut" donutD={donutData} />
                                                    <div  className="doughnut-chart-status" style={{'top': '-100px !important'} }>{total}
                                                        <p className="ultra-small center-align">Counts</p>
                                                    </div>
                                          </div>
                                          <div style={{'text-align':'center','padding':'10px'}}>
                                            <ul className="doughnut-chart-legend" style={{'display': 'inline-flex'}}>
                                              <li className="kitchen ultra-small"><span className="legend-color"></span>Pos..</li>
                                              <li className="mobile ultra-small"  style={{'padding-left': '20px','padding-right': '20px'}}><span className="legend-color"></span> Neg..</li>
                                              <li className="home ultra-small"><span className="legend-color"></span> Neu..</li>
                                            </ul>
                                          </div>
                                      </div>
                                    </div>
                                    <div className="col m6" style={{'padding': '0px !important'}}>
                                          
                                           
                                                  <SocialList  data={this.props.data.SocialStats}  returnurl={this.props.returnurl} id={this.props.id} total={total}/>
                                             
                                          
                                    </div>
                                  </div>
                                  
                                </li>
                                <li className="collection-item avatar" style={{'border':'none'}}>
                                                      <i className="mdi-action-picture-in-picture circle red darken-2"></i>
                                                      <span className="social-collection-header ">Media</span>
                                                       <StatisticsTable videoCount={this.props.data.VideosCount} photoCount={this.props.data.PhotosCount} id={this.props.id}  returnurl={this.props.returnurl} />
                                                     
                                </li>
                                <li className="collection-item avatar" style={{'border':'none'}}>
                                                        <i className="mdi-social-people circle red darken-2"></i>
                                                        <span className="social-collection-header">Gender</span>
                                                        <GenderHorizontalList  id="gener-bi" data={this.props.data.GenderStats}  returnurl={this.props.returnurl} id={this.props.id}/>
                 
                                </li>
                              </ul>
                            </div>

                             
                         </div>
                         
                       
                   </div>
                 
                 
               </div>        
               
          </div>

		);
	}
	
});


module.exports = BubblyBMYahoo;
