var React = require("react");
var jQuery = require("jquery");
//var DoughnutChart = require("react-d3-components").DoughnutChart;;
var TagList = require('../../flowly/TagList.js');
var EmotionList = require('../../flowly/EmotionList.js');
var StatisticsTable = require('../../flowly/StatisticsTable.js');

var DBTS = React.createClass({
	componentDidMount: function () {
		
  	},
	render: function(){
	    //debugger;
        //
        var styles = {
                 s1 :{ padding: '0px'},
                
        }
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
										<DoughnutChart dataD={this.props.doughnutData} />
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
                        <li className="collection-item avatar">
                            <i className="mdi-action-picture-in-picture circle red darken-2"></i>
                            <span className="social-collection-header">Media</span>
                            <p>Total Media counts : {this.props.data.VideosCount + this.props.data.PhotosCount}</p>
                        </li>
                        <li className="collection-item">
                            <div className="row">
                               <StatisticsTable videoCount={this.props.data.VideosCount} photoCount={this.props.data.PhotosCount} id={this.props.id}  returnurl={this.props.returnurl} />
                            </div>
                        </li>
                        <li className="collection-item">
                        
                        </li>
                        
				    </ul>
                    <div className="row">
                            <div className="col s12" style={styles.s1}>
                                <ul className="tabs tab-demo-active z-depth-1 nav" style={styles.s1}>
                                      <li className="tab col s6">
                                      <a className="white-text red darken-1 waves-effect waves-light active" href="#tags">
                                      <i className="mdi-action-perm-identity"></i> Tags</a>
                                      </li>
                                      
                                      <li className="tab col s6">
                                      <a className="white-text light-blue darken-1 waves-effect waves-light" href="#emotions">
                                      <i className="mdi-action-speaker-notes"></i> Emotions</a>
                                      </li>
                                </ul>
                            </div>
                            <div className="col s12" style={styles.s1}>
                                        <div id="tags" className="col s12  red  lighten-3">Tags

                                        </div>
                                        <div id="emotions" className="col s12  light-blue lighten-3">Emotions
                                        </div> 
                                
                            </div>
                            
                        </div>
				</div>
        </div>
			            			
		);
		
	}
});

var DoughnutChart = React.createClass({
    componentDidMount: function() {
    //debugger;
    console.log(this.props.dataD);

    var doughnutChart = document.getElementById("doughnut-chart-socialinfluance").getContext("2d");
    console.log("doughnutChart "+doughnutChart);

        window.myDoughnut = new Chart(doughnutChart).Doughnut(this.props.dataD, {
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

        var data= {};
        if(dataFromPage){
                data = dataFromPage;
        } else{
                console.log("url " + url);
            jQuery.ajax({
                url: url,
                type: 'GET',
                dataType: 'JSON',
                cache: false
            }).done(function(ajaxdata) {
                data = ajaxdata;
            });

        }
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
            
            console.log("doughnutData " + JSON.stringify(doughnutData));
            console.log("data " + data);
            console.log("ClientBar " + JSON.stringify(ClientBar));
            console.log("Projects " + JSON.stringify(Projects));
           //debugger;
            React.render( <DBTS id = { id } data={data} doughnutData={doughnutData} ClientBar={ClientBar} Projects={Projects} title = { title } count={totalCount} returnurl={returnurl} />, container);
           
        
    
};
module.exports = BubblyCard;

function BubblyCard() {
  
};



BubblyCard.prototype.showCard = function(para, dataFromPage, container) {

    var data = [{"ID":"bolly_data327","Name":"Bajrangi Bhaijaan","Description":"Salman Khan moved to tears after watching Bajrangi Bhaijaan!","Category":"1105","ShowDefaultPicture":true,"SearchQuery":"bajrangi bhaijaan starring salman khan","VideosCount":97,"PhotosCount":1554,"PictureUrl":"https://pbs.twimg.com/profile_images/614994424620126208/EV-GvaSQ.png","Photos":[{"Url":"https://fbcdn-vthumb-a.akamaihd.net/hvthumb-ak-xta1/v/t15.0-10/s130x130/11331639_413138932207679_1977022363_n.jpg?oh=20c4b99e0dd848e45fd0e479050eaa88&oe=560FEB26&__gda__=1444196393_2378317c743c6f26d6441f0be2e6ce32","Description":"Your wait is finally OVER! Here's the Bajrangi Bhaijaan trailer for all of you!","Count":31451},{"Url":"https://fbcdn-vthumb-a.akamaihd.net/hvthumb-ak-xtp1/v/t15.0-10/s130x130/11114696_421725228015716_1799188749_n.jpg?oh=7124e72215ce183c2771988368c874d1&oe=562B9155&__gda__=1444319954_5195e0e98cc4b691eab4a6e899094d81","Description":"Fans presence while shooting always makes it special for us. Watch the video and see how much love we received while shooting for Bajrangi Bhaijaan.","Count":4793},{"Url":"https://fbcdn-vthumb-a.akamaihd.net/hvthumb-ak-xpa1/v/t15.0-10/s130x130/11189010_422537974601108_1767554030_n.jpg?oh=a21933a9fa5b26b7cfa4cba24f3f8bf3&oe=560E5A9B&__gda__=1448658639_576fd1fbb51e61b3f1a857149a4c956c","Description":"Bajrangi Bhaijaan always keeps us all happy! But he made sure, he kept his team happier. Here’s a glimpse of it!","Count":3966},{"Url":"https://fbcdn-vthumb-a.akamaihd.net/hvthumb-ak-xft1/v/t15.0-10/s130x130/11407485_424912497696989_828640619_n.jpg?oh=9bc81facf53ead14ee7c7d6cfa1f663d&oe=5651F0D5&__gda__=1444868675_bdf6e24479ea414539426e3c61de0e92","Description":"Jaisalmer aur Mandawa ki galliyon mein Team Bajrangi Bhaijaan ki badi yaadein hai! \nDekhiye aap bhi uski ek jhalak","Count":3962},{"Url":"https://fbcdn-vthumb-a.akamaihd.net/hvthumb-ak-xft1/v/t15.0-10/s130x130/11331866_423129154541990_1710121195_n.jpg?oh=17b418496c47bb197a81e377ddbc1a1e&oe=5622625D&__gda__=1448884973_df372fbedb24a97211554bd6ad387816","Description":"You know its true love when you can quietly sit beside someone and yet feel perfectly happy! \nSuch is Pavan and Rasika’s love. Watch a glimpse of their beautiful love story here","Count":3960},{"Url":"https://fbcdn-vthumb-a.akamaihd.net/hvthumb-ak-xfp1/v/t15.0-10/s130x130/11407482_424491331072439_135123169_n.jpg?oh=2d6aae7690cf1c1d31436d03e657e998&oe=565CC7DC&__gda__=1443806587_4d5ae33af5c833f82397d492861dc7ea","Description":"Introducing Salman Khan as Pavan. Watch Salman Khan talking about how his character, Pavan Kumar Chaturvedi, is different from any other roles he has essayed before!","Count":3950},{"Url":"http://pbs.twimg.com/media/CF7PKOHUsAE4sHk.jpg","Description":"RT @kabirkhankk: Yeh toh sirf teaser photo hai... Abhi aagey aagey dekho hota hai kya :-) #BBFirstLook #BajrangiBhaijaan http://t.co/Dlvu3W…","Count":1538},{"Url":"https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/p130x130/11665545_418786444976261_749720286905894169_n.jpg?oh=975fcb598416faf95ef6f053db9a5303&oe=56113BA4","Description":"Miliye Pavan Kumar Chaturvedi se! Yeh bilkul hamare aur aapke jaise hi hai","Count":1152},{"Url":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQDfvV0r8t4ASB0S&w=130&h=130&url=http%3A%2F%2Fimages.indianexpress.com%2F2015%2F06%2Fsalman-khan-funda-480.jpg%3Fw%3D480&cfs=1&sx=75&sy=0&sw=267&sh=267","Description":"Salman Khan has sought the help of the Mumbai police to probe who is behind a fake message in his name about his forthcoming movie Bajrangi Bhaijaan.","Count":1084},{"Url":"http://pbs.twimg.com/media/CGEPQ5DVAAA4hzP.jpg","Description":"RT @kabirkhankk: Get ready this evening to see our teaser promo.... The countdown begins... #BajrangiBhaijaan http://t.co/dtaBi4uvdB","Count":780}],"Videos":[{"ID":"4nwAra0mz_Q","Url":"http://youtu.be/4nwAra0mz_Q","Source":"Youtube","Count":493,"Description":"RT @kamaalrkhan: Kasam Ganga Mayya Ki This #BajrangiBhaijaan is going to be sure shot blockbuster Because no.1 critic says so. http://t.co/…"},{"ID":"zF6sF85yV9s","Url":"https://www.youtube.com/watch?v=zF6sF85yV9s&feature=youtu.be","Source":"Youtube","Count":250,"Description":"The most awaited song, Selfie Le Le Re is finally here! Share if you have loved it just as much as we did. \n\nbit.ly/BB_SelfieLeLeRe"},{"ID":"VmjynPkyLRQ","Url":"https://www.youtube.com/watch?v=VmjynPkyLRQ","Source":"Youtube","Count":137,"Description":"Come on guys, we give you a chance to confess your love! Who do you want to say “Tu Chahiye” to?  \nbit.ly/BB-TuChahiye"},{"ID":"EesXdd78TSg","Url":"https://www.youtube.com/watch?v=EesXdd78TSg","Source":"Youtube","Count":62,"Description":"Love is not just a feeling, it’s a commitment too. \nWatch Pavan and Rasika sharing this beautiful promise to be with each other forever, here \nhttp://bit.ly/BB-DialoguePromo3"},{"ID":"LdsJdlopfdg","Url":"http://youtu.be/LdsJdlopfdg","Source":"Youtube","Count":49,"Description":"RT @kamaalrkhan: My review of film #BajrangiBhaijaan watch it n RT pls. http://t.co/BhWmuOCNcp"},{"ID":"yO3R2EvTUBY","Url":"https://www.youtube.com/watch?v=yO3R2EvTUBY&spfreload=10","Source":"Youtube","Count":47,"Description":"My new song from Bajrangi Bhaijaan .. was such a pleasure signing alongside Rahat Fateh Ali Khan sahab"},{"ID":"0kpTs9OTAq8","Url":"https://www.youtube.com/watch?v=0kpTs9OTAq8","Source":"Youtube","Count":44,"Description":"RT @AdnanSamiLive: My \"RAPID FIRE\" on @Bollyhungama !!! Watch... #BajrangiBhaijaan #BharDoJholiMeri #SalmanKhan \nhttps://t.co/AhUc8TqHkR"},{"ID":"jwrCYAIdkeM","Url":"https://www.youtube.com/watch?v=jwrCYAIdkeM","Source":"Youtube","Count":38,"Description":"RT @girishjohar: Beautiful &amp; Soulful !!! 'Zindagi Kuch Toh Bata | @BeingSalmanKhan #BajrangiBhaijaan =&gt; https://t.co/PW9p3a8OJO #4DaysToBAJ…"},{"ID":"yBcZnosvLpE","Url":"https://www.youtube.com/watch?v=yBcZnosvLpE","Source":"Youtube","Count":31,"Description":"RT @SALMAN_EMPEROR: https://t.co/mxmaakih37 Salman with Komal #nahi Nahta #etc @4HappyEverAfter @SalmansSoldier @jia_taj @BeingSalmanKhan #…"},{"ID":"QihJw8c0eCU","Url":"https://www.youtube.com/watch?v=QihJw8c0eCU","Source":"Youtube","Count":30,"Description":"“Simple aadmi hai, strong aadmi hai. Gudgudi hoti hai usko”\nSays @Salman Khan about his character Pavan Kumar Chaturvedi. Know more about Pavan here: http://bit.ly/TheBBDiaries8"}],"Photo":"https://pbs.twimg.com/profile_images/614994424620126208/EV-GvaSQ.png","Video":null,"Total":2007,"Stat":{"Type":"ALL","PosCount":1047,"NegCount":17,"NeuCount":3068,"PosPercent":25.0,"NegPercent":0.0,"NeuPercent":74.0},"SocialStats":[{"Type":"TW","PosCount":159,"NegCount":2,"NeuCount":177,"PosPercent":47.0,"NegPercent":0.0,"NeuPercent":52.0},{"Type":"FB","PosCount":885,"NegCount":15,"NeuCount":753,"PosPercent":53.0,"NegPercent":0.0,"NeuPercent":45.0},{"Type":"TM","PosCount":3,"NegCount":0,"NeuCount":13,"PosPercent":18.0,"NegPercent":0.0,"NeuPercent":81.0}],"GenderStats":[{"Type":"Male","Count":251,"Percent":62.593516209476309226932668329},{"Type":"Female","Count":126,"Percent":31.421446384039900249376558603}],"Comments":null,"Tags":[{"key":"bajrangibhaijaan","value":480,"valuestr":null,"label":null},{"key":"salmankhan","value":75,"valuestr":null,"label":null},{"key":"kareenakapoor","value":34,"valuestr":null,"label":null},{"key":"bollywood","value":30,"valuestr":null,"label":null},{"key":"bajrangi","value":17,"valuestr":null,"label":null}],"Emotions":[{"key":"best","value":113,"valuestr":null,"label":null},{"key":"love","value":103,"valuestr":null,"label":null},{"key":"like","value":76,"valuestr":null,"label":null},{"key":"awesome","value":58,"valuestr":null,"label":null},{"key":"no","value":53,"valuestr":null,"label":null},{"key":"please","value":40,"valuestr":null,"label":null},{"key":"good","value":39,"valuestr":null,"label":null},{"key":"great","value":35,"valuestr":null,"label":null},{"key":"share","value":35,"valuestr":null,"label":null},{"key":"shared","value":32,"valuestr":null,"label":null}],"Locations":[{"key":"undefined","value":3983,"valuestr":"undefined","label":null},{"key":"in","value":118,"valuestr":"india","label":null},{"key":"us","value":8,"valuestr":"united states","label":null},{"key":"gb","value":5,"valuestr":"united kingdom","label":null},{"key":"ae","value":3,"valuestr":"united arab emirates","label":null},{"key":"nl","value":3,"valuestr":"netherlands","label":null},{"key":"id","value":2,"valuestr":"indonesia","label":null},{"key":"lk","value":2,"valuestr":"sri lanka","label":null},{"key":"fr","value":1,"valuestr":"france","label":null},{"key":"au","value":1,"valuestr":"australia","label":null},{"key":"pk","value":1,"valuestr":"pakistan","label":null},{"key":"pl","value":1,"valuestr":"poland","label":null},{"key":"np","value":1,"valuestr":"nepal","label":null},{"key":"br","value":1,"valuestr":"brazil","label":null},{"key":"none","value":1,"valuestr":"none","label":null},{"key":"ir","value":1,"valuestr":"iran","label":null}],"Trends":[{"Source":"TW","Data":"0,27,25,19,18,-1,28,21,-1,21"},{"Source":"FB","Data":"0,227,-3,57,-1,29,24,27,-2,26,-2,23,-1,29,-1"},{"Source":"TM","Data":"0,1,1"}],"Decision":"Mild","DecisionImage":"/images/mild.png","ReturnUrl":null,"ContainerID":null}];
 
  //dashboard
 // BubblyCardRunner("bolly_data337", document.getElementById('content'), null, 'http://s24x7.azurewebsites.net/api/summary/dashboard' ,'http://bharatmovies.social');
 // BubblyLocationRunner("bolly_data337", document.getElementById('LocationChart'), null, 'http://s24x7.azurewebsites.net/api/summary/dashboard' ,'http://bharatmovies.social');
  
  //summary
  BubblyCardRunner("bolly_data327", document.getElementById('content'), null, 'http://s24x7.azurewebsites.net/api/summary/' ,'http://bharatmovies.social');
 // BubblyLocationRunner("bolly_data327", document.getElementById('LocationChart'), null, 'http://s24x7.azurewebsites.net/api/summary/' ,'http://bharatmovies.social');
  
}





