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

		
    console.log('classnamestyle ' + this.props.styles.classnameStyle);
		return (
			
          <div className="card z-depth-1">
               <div className='row' style={{'padding': '0px','margin':'5px'}}>
                    
                    <div className="col s12 m12 l6" style={{'padding': '5px'}}>
                      
                           <ImageGalleryYahoo  data={this.props.data.Photos}/>  
                    
                   </div>
                   <div className="col s12 m12 l6" style={{'padding': '0px'}}>
                          <div className="row" style={{'padding': '0px','margin':'5px'}}>
                              <a href={this.props.returnurl+'/news/?id='+this.props.id}><h4>{this.props.data.Name}</h4></a>
                              <p style={{'text-overflow': 'ellipsis;','white-space': 'nowrap;'}}>{this.props.data.Description}</p>
                       

                          </div>
                           <div className="row" style={{'padding': '0px','margin':'5px'}}>
                                 <h4> Social Influance </h4>
                                <div id="doughnut-chart-wrapper">
                                                  <DonutChartMaterial id="hero-donut" donutD={donutData} />
                                                  <div  className="doughnut-chart-status" style={{'top': '-90px !important','font-size':'16px'} }>{total}
                                                      
                                                  </div>
                                </div>
                                <div style={{'text-align':'center','padding':'10px'}}>
                                            <ul className="doughnut-chart-legend" style={{'display': 'inline-flex'}}>
                                              <li className="kitchen ultra-small" style={{'list-style':'none;'}}><span className="legend-color"></span>Positive</li>
                                              <li className="mobile ultra-small"  style={{'padding-left': '10px','padding-right': '10px','list-style':'none;'}}><span className="legend-color"></span> Negative</li>
                                              <li className="home ultra-small" style={{'list-style':'none;'}}><span className="legend-color"></span> Neutral</li>
                                            </ul>
                                </div>

                          </div>
                           <div className="row" style={{'padding': '0px','margin':'5px'}}>
                                
                                  
                                    <StatisticsTable videoCount={this.props.data.VideosCount} photoCount={this.props.data.PhotosCount} id={this.props.id}  returnurl={this.props.returnurl} />
                              
                           </div>
                    </div>

                    
               </div>        
               
          </div>

		);
	}
	
});


module.exports = BubblyBMYahoo;
