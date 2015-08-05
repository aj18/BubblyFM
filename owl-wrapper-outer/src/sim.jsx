var React = require("react");
var jQuery = require("jquery");
//var DoughnutChart = require("react-d3-components").DoughnutChart;;

var DBTS = React.createClass({
	componentDidMount: function () {
		
  	},
	render: function(){
	    //debugger;
		return(
        <div classname="row">
		        <div className="col s12">
				     <ul id="projects-collection" className="collection">
                        <li className="collection-item avatar">
                            <span className="social-collection-header">Social Influence</span>
							<p>Total Count : {this.props.doughnutData[0].value+this.props.doughnutData[1].value+this.props.doughnutData[2].value}</p>
                        </li>
						<li className="collection-item">
							<div className="card-content">
									<div id="doughnut-chart-wrapper">
										<DoughnutChart data={this.props.doughnutData} />
										<div style={{top:'-125px'}} className="doughnut-chart-status">{this.props.doughnutData[0].value+this.props.doughnutData[1].value+this.props.doughnutData[2].value}
											<p className="ultra-small center-align">Counts</p>
										</div>
									</div>
								<div style={{'text-align':'center'}}>
									<ul className="doughnut-chart-legend" style={{'display': 'inline-flex'}}>
										<li className="kitchen ultra-small"><span className="legend-color"></span>Positive</li>
										<li className="mobile ultra-small"  style={{'padding-left': '20px','padding-right': '20px'}}><span className="legend-color"></span> Negative</li>
										<li className="home ultra-small"><span className="legend-color"></span> Neutral</li>
									</ul>
								</div>
							</div>
					   </li>
                       <li className="collection-item avatar">
                                        <i className="mdi-social-pages circle red darken-2"></i>
                                        <span className="social-collection-header">Channel</span>
                                        <p>Total Count : {this.props.Projects.Meter.Twitter + this.props.Projects.Meter.Facebook + this.props.Projects.Meter.Tumblr}</p>
                        </li>
                        <li className="collection-item">
                            <div className="row">
                                <div className="col s6">
                                    <p className="social-collections-title">Twitter</p>
                                    <p className="social-collections-content">Count : {this.props.Projects.Meter.Twitter}</p>
                                </div>
                                <div className="col s3">
                                    <span className="social-task-cat cyan">{this.props.Projects.Meter.TwitterPer}%</span>
                                </div>
                                <div className="col s3">
                                    <Projectline data={this.props.Projects.Twitter} />
                                </div>
                            </div>
                        </li>
                        <li className="collection-item">
                            <div className="row">
                                <div className="col s6">
                                    <p className="social-collections-title">Facebook</p>
                                    <p className="social-collections-content">Count : {this.props.Projects.Meter.Facebook}</p>
                                </div>
                                <div className="col s3">
                                    <span className="social-task-cat grey darken-3">{this.props.Projects.Meter.FacebookPer}%</span>
                                </div>
                                <div className="col s3">
                                    <Projectline data={this.props.Projects.Facebook} />
                                </div>
                            </div>
                        </li>
                        <li className="collection-item">
                            <div className="row">
                                <div className="col s6">
                                    <p className="social-collections-title">Tumblr</p>
                                    <p className="social-collections-content">Count : {this.props.Projects.Meter.Tumblr}</p>
                                </div>
                                <div className="col s3">
                                    <span className="social-task-cat teal">{this.props.Projects.Meter.TumblrPer}%</span>
                                </div>
                                <div className="col s3">
                                    <Projectline data={this.props.Projects.Tumblr} />
                                </div>
                            </div>
                        </li>

                        <li className="collection-item avatar">
                            <i className="mdi-social-people circle red darken-2"></i>
                            <span className="social-collection-header">Gender</span>
                            <p>Total Stats : {this.props.Projects.Meter.Male + this.props.Projects.Meter.Female + this.props.Projects.Meter.Others}</p>
                        </li>
                        <li className="collection-item">
                            <div className="row">
                                <div className="col s5">
                                    <p className="social-collections-title"><strong></strong> Male</p>
                                    <p className="social-collections-content">Count : {this.props.Projects.Meter.Male}</p>
                                </div>
                                <div className="col s3">
                                    <span className="social-task-cat pink accent-2">{this.props.Projects.Meter.MalePer}</span>
                                </div>
                                <div className="col s4">
                                    <div className="progress">
                                         <div className="determinate" style={{width: this.props.Projects.Meter.MalePer}}></div>   
                                    </div>                                                
                                </div>
                            </div>
                        </li>
                        <li className="collection-item">
                            <div className="row">
                                <div className="col s5">
                                    <p className="social-collections-title"><strong></strong> Female</p>
                                    <p className="social-collections-content">Count : {this.props.Projects.Meter.Female}</p>
                                </div>
                                <div className="col s3">
                                    <span className="social-task-cat yellow darken-4">{ this.props.Projects.Meter.FemalePer }</span>
                                </div>
                                <div className="col s4">
                                    <div className="progress">
                                        <div className="determinate" style={{width: this.props.Projects.Meter.FemalePer}}></div>   
                                    </div>                                                
                                </div>
                            </div>
                        </li>
                        <li className="collection-item">
                            <div className="row">
                                <div className="col s5">
                                    <p className="social-collections-title"><strong></strong> Others</p>
                                    <p className="social-collections-content">Count : {this.props.Projects.Meter.Others}</p>
                                </div>
                                <div className="col s3">                                                
                                    <span className="social-task-cat light-green darken-3">{this.props.Projects.Meter.OthersPer}</span>
                                </div>
                                <div className="col s4">
                                    <div className="progress">
                                        <div className="determinate" style={{width: this.props.Projects.Meter.OthersPer}}></div>   
                                    </div>                                                
                                </div>
                            </div>
                        </li>
				    </ul>
				</div>
        </div>
			            			
		);
		
	}
});

var DoughnutChart = React.createClass({
    componentDidMount: function() {
    //debugger;

    var doughnutChart = document.getElementById("doughnut-chart-socialinfluance").getContext("2d");
        window.myDoughnut = new Chart(doughnutChart).Doughnut(this.props.data, {
            segmentStrokeColor : "#fff",
            tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label        
            percentageInnerCutout : 50,
            animationSteps : 100,
            segmentStrokeWidth : 4,
            animateScale: true,
            percentageInnerCutout : 60,
            responsive : true
        });
    },
    render : function() {
        return (<canvas id="doughnut-chart-socialinfluance" height="200"></canvas>);

    }

});



var Projectline = React.createClass({
    
    componentDidMount: function() {
    //debugger;
    $(this.refs.Projectline.getDOMNode()).sparkline(this.props.data, {
        type: 'line',
        width: '100%',
        height: '30',
        lineWidth: 2,
        lineColor: '#00bcd4',
        fillColor: 'rgba(0, 188, 212, 0.5)',
        });
    },
    render : function() {
        return (<div ref='Projectline'></div>);

    }

});


var  BubblyCardRunner = function (id,container,dataFromPage,sourceurl,returnUrl) {

    
        var title="Dashboard";
        var totalCount=0;
        var doughnutData = [{
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Negative"},{
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Positive"},{
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Neutral"}];
        
        var ClientBar={ClientBarPos:[],ClientBarNeutral:[],ClientBarNegative:[]}
        var meterData={};
        var Projects= {Twitter:[],Facebook:[],Tumblr:[]};           

        var returnurl="http://www.cricket24x7.social";
        if (returnUrl)
        {
            returnurl=returnUrl;
        }
        var weburl = sourceurl;
        var url = weburl + '?id=' + id;
        var pos = 0;
        var neg= 0;
        var neu= 0;


        jQuery.ajax({
            url: url,
            type: 'GET',
            dataType: 'JSON',
            cache: false
        }).done(function(data) {
            //debugger;
        var i=29;
            var j1=0;
            var j2=0;
            var j3=0;

          //  debugger;

            if(data.ByDate != null){
            jQuery.each(data.ByDate, function(index, item) {
                   if(item.Sentiment=="Neutral"){
                       neu=neu+item.Count;
                   }
                   else if(item.Sentiment=="Positive"){
                        pos=pos+item.Count;
                   }
                   else if(item.Sentiment=="Negative"){
                        neg=neg+item.Count;
                   }

            }); 
            }

            if(data.SocialStats != null){
            meterData.Twitter=0;
            meterData.Facebook=0;
            meterData.Tumblr=0;
            jQuery.each(data.SocialStats, function(index, item) {
            //debugger;
                neu=neu+item.NeuCount;
                pos=pos+item.PosCount;
                neg=neg+item.NegCount;
                if(item.Type=="TW"){
                  meterData.Twitter = item.PosCount + item.NegCount + item.NeuCount;
                  }
                else if(item.Type=="FB"){
                  meterData.Facebook = item.PosCount + item.NegCount + item.NeuCount;
                  }
                else if(item.Type=="TM"){
                  meterData.Tumblr = item.PosCount + item.NegCount + item.NeuCount;
                  }
            });
        }
        totalCount = pos+neg+neu;
        if(data.Sentiments != null){
            jQuery.each(data.Sentiments, function(index, item) {
            
              if(item.key=="Negative"){
                  doughnutData[0].value = item.value;
              }else if(item.key=="Positive"){
              doughnutData[1].value = item.value;
              }else{
              doughnutData[2].value = item.value;
              }
            });
            }
        else{
            //debugger;
            doughnutData[0].value = neg; 
            doughnutData[1].value = pos;
            doughnutData[2].value = neu;
         
            }

        if(data.GenderStats != null){
            jQuery.each(data.GenderStats, function(index, item) {
              meterData.OthersPer = '< 1%';
              meterData.Others = 0;
              if(item.Type=="Male"){
                  meterData.Male = item.Count;
                  meterData.MalePer = item.Percent.toFixed(2) + '%';
              }else if(item.Type=="Female"){
              meterData.Female = item.Count;
              meterData.FemalePer = item.Percent.toFixed(2) + '%';
              }else{
              meterData.Others = item.Count;
              if(item.Percent < 1)
                meterData.OthersPer = '< 1%';
              else
                meterData.OthersPer = item.Percent.toFixed(2) + '%';
              }
            });
        }
        
        if(data.LatestDS != null){
            data.LatestDS.sort(function(a,b) { return new Date(b.Date).getTime() - new Date(a.Date).getTime();});
            
            i=0;
            meterData.Twitter=0;
            meterData.Facebook=0;
            meterData.Tumblr=0;
    
            jQuery.each(data.LatestDS, function(index, item) {
              //i = index;
              //if(item.Date.indexOf("2015")>-1)
                //{
                if(i <= 10) {

                   Projects.Twitter[i] = item.Twitter;
                   meterData.Twitter = meterData.Twitter + item.Twitter;

                   Projects.Facebook[i] = item.Facebook;
                   meterData.Facebook = meterData.Facebook + item.Facebook;

                   Projects.Tumblr[i] = item.Tumblr;
                   meterData.Tumblr = meterData.Tumblr + item.Tumblr;

                   i=i+1;
                  }
                //}
            });

            }
            
            meterData.TwitterPer = ((meterData.Twitter/(meterData.Twitter+meterData.Facebook+meterData.Tumblr))*100).toFixed(2);
            meterData.FacebookPer = ((meterData.Facebook/(meterData.Twitter+meterData.Facebook+meterData.Tumblr))*100).toFixed(2);
            meterData.TumblrPer = ((meterData.Tumblr/(meterData.Twitter+meterData.Facebook+meterData.Tumblr))*100).toFixed(2);

            if(meterData.TwitterPer < 1)
               meterData.TwitterPer = '< 1';
            if(meterData.FacebookPer < 1)
               meterData.FacebookPer = '< 1';
            if(meterData.TumblrPer < 1)
               meterData.TumblrPer = '< 1';

            Projects.Meter = meterData;
            
        
           //debugger;
            React.render( <DBTS id = { id } doughnutData={doughnutData} ClientBar={ClientBar} Projects={Projects} title = { title } count={totalCount} returnurl={returnurl} />, container);
           
        });
    
};
module.exports = BubblyCard;

function BubblyCard() {
  
};

BubblyCard.prototype.showCard = function(para, dataFromPage, container) {
 
  //dashboard
 // BubblyCardRunner("bolly_data337", document.getElementById('content'), null, 'http://s24x7.azurewebsites.net/api/summary/dashboard' ,'http://bharatmovies.social');
 // BubblyLocationRunner("bolly_data337", document.getElementById('LocationChart'), null, 'http://s24x7.azurewebsites.net/api/summary/dashboard' ,'http://bharatmovies.social');
  
  //summary
  BubblyCardRunner("bolly_data327", document.getElementById('content'), null, 'http://s24x7.azurewebsites.net/api/summary/' ,'http://bharatmovies.social');
 // BubblyLocationRunner("bolly_data327", document.getElementById('LocationChart'), null, 'http://s24x7.azurewebsites.net/api/summary/' ,'http://bharatmovies.social');
  
}





