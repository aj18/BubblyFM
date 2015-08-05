var Radium = require('radium');
var React = require("react");


var NameAndComment = require('../../flowly/NameAndComment.js');
var PhotoLarge = require('../../flowly/PhotoLarge.js');
var Emotions = require('../../flowly/Emotions.js');
var StatisticsTable = require('../../flowly/StatisticsTable.js');
var FooterPanel = require('../../flowly/FooterPanel.js');
var DonutChart = require('../../flowly/DonutChart.js');
var PieChart = require('../../flowly/PieChart.js');
var Tags = require('../../flowly/Tags.js');
var SingleComment = require('../../flowly/SingleComment.js');
var SparkLineOneChart = require('../../flowly/SparkLineOneChart.js');
var SparkLineTwoChart = require('../../flowly/SparkLineTwoChart.js');
var SparkLineThreeChart = require('../../flowly/SparkLineThreeChart.js');


var Large = React.createClass({


	render: function() {
		var styles = {
       	 		 s1 :{ margin: '10px',float:'left'},
       			 s3 : {boxShadow: '0px 3px 10px 0px rgba(50, 50, 50, 0.5)',width:'75%'},
       	 	    NameAndCommentStyles :  {

					base:{
				      marginLeft: '5px',
				      color: '#6B6B6B',
				      fontSize: '15px'
				    },
				    descriptionStyle: {
				    	height: '60px',margin: '-5px'
				    },
				    nameStyle: {
				    'color': '#DA4453',
					fontWeight: '700',
					fontFamily: 'serif'
					}
				    
				}
    	}
        return (  
                
                <div className="panel panel-default" style={styles.s3}>
                    <PhotoLarge url= {this.props.data.Photo} />
                    <NameAndComment styles = {styles.NameAndCommentStyles} name = {this.props.data.Name} description={this.props.data.Description} returnurl={this.props.returnurl} />
                    <div className="panel-body"  style={styles.s1}>
                        <StatisticsTable videoCount="943" photoCount="4960" maleCount={this.props.data.GenderStats[0].Count} femaleCount={this.props.data.GenderStats[1].Count} />
                        <DonutChart id="hero-donut" Stat={this.props.data.Stat} />
                        <SparkLineOneChart />
                        <SparkLineTwoChart />
                        <div>
                            <SparkLineThreeChart />
                            <PieChart id="pie-chart" data={this.props.data.GenderStats} />
                        </div>
                        <Emotions emotions= {this.props.data.Emotions} />
                        <Tags tags= {this.props.data.Tags} />
      
                        <SingleComment comment = {this.props.data.Comments[0].Comment} />
    
                    </div>
                    <FooterPanel footerData=".." />
                </div>
            );
   
 	}

});

var data = {"ID":"bolly_data235","Name":"Shah Rukh With Abram","Description":"Shah Rukh watches KKR match with AbRam","Category":"","ShowDefaultPicture":true,"SearchQuery":"Shah Rukh Khan watches KKR match with AbRam and Dilwale team","VideosCount":3415,"PhotosCount":68311,"PictureUrl":"http://media2.intoday.in/indiatoday/images/stories//2015MAY/shah-rukh-story_650_051715020614.jpg","Photos":[{"Url":"http://pbs.twimg.com/media/CETh0Q_WYAAVkWL.jpg","Description":null,"Count":0}],"Videos":[{"ID":"","Url":"http://youtu.be/c25GKl5VNeY,RT @SRK_DDLJ_Fan: Dilwale Dulhania Le Jayenge NEW TRAILER. Celebrating 1000 Weeks http://t.co/Jk8Wrz59WC  #DDLJ #SRK @iamsrk @KajolAtUN htt…","Source":"None","Count":0}],"Photo":"http://media2.intoday.in/indiatoday/images/stories//2015MAY/shah-rukh-story_650_051715020614.jpg","Video":"","Total":178387,"Stat":{"Type":"ALL","PosCount":37516,"NegCount":2529,"NeuCount":138342,"PosPercent":21.0,"NegPercent":1.0,"NeuPercent":77.0},"SocialStats":[{"Type":"TW","PosCount":37217,"NegCount":2506,"NeuCount":137280,"PosPercent":21.0,"NegPercent":1.0,"NeuPercent":77.0},{"Type":"FB","PosCount":257,"NegCount":19,"NeuCount":797,"PosPercent":25700.0,"NegPercent":1900.0,"NeuPercent":79700.0},{"Type":"TM","PosCount":42,"NegCount":4,"NeuCount":265,"PosPercent":4200.0,"NegPercent":400.0,"NeuPercent":26500.0}],"GenderStats":[{"Type":"Male","Count":108354,"Percent":61.215911594718733580786766326},{"Type":"Female","Count":60512,"Percent":34.186991180940436037807268803},{"Type":"Others","Count":108354,"Percent":0.0}],"Comments":[{"Source":"Twitter","Comment":"RT @iamsrk: This kid is so cool. May Allah bless him. Dinner time at the Asian Awards. http://t.co/l0gV12n0kv"}],"Tags":[{"key":"shahrukhkhan","value":6900,"valuestr":null,"label":null},{"key":"srk","value":3688,"valuestr":null,"label":null},{"key":"bollywood","value":947,"valuestr":null,"label":null},{"key":"salmankhan","value":475,"valuestr":null,"label":null},{"key":"abram","value":439,"valuestr":null,"label":null}],"Emotions":[{"key":"fan","value":515,"valuestr":null,"label":null},{"key":"love","value":458,"valuestr":null,"label":null},{"key":"good","value":407,"valuestr":null,"label":null},{"key":"best","value":213,"valuestr":null,"label":null},{"key":"like","value":194,"valuestr":null,"label":null}],"Locations":null,"Trends":[{"Source":"TW","Data":"0,41,-1,66,-1,28,78,-3,39,-4,19,47"},{"Source":"FB","Data":"0,1"},{"Source":"TM","Data":"0,1,2,3,-1,1,1,1,1"}],"Decision":"Medium","DecisionImage":"/images/medium.png","ReturnUrl":null,"ContainerID":null};
var returnurl="http://www.cricket24x7.social/news/?id=bolly_data235";
React.render( <Large data = { data }  returnurl={returnurl} /> , document.getElementById("bolly_data235_Large"));
//http://s24x7.azurewebsites.net/api/summary/min?id=bolly_data235