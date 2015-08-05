var Radium = require('radium');
var React = require("react");



var SocialList = require('../../flowly/SocialList.js');
var GenderList = require('../../flowly/GenderList.js');
var StatisticsTable = require('../../flowly/StatisticsTable.js');
var DonutChart = require('../../flowly/DonutChart.js');
var TagList = require('../../flowly/TagList.js');
var EmotionList = require('../../flowly/EmotionList.js');
var EmotionList = require('../../flowly/EmotionList.js');


var SocialInfluance = React.createClass({
    render: function() {
        var styles = {
         s1 : {  margin: '10px'},
         s2 : {  float: 'right' },
         s3 : { boxShadow: '0px 3px 10px 0px rgba(50, 50, 50, 0.5)','background':'#fff'}
        }
     
        var total=this.props.data.Stat.PosCount+this.props.data.Stat.NegCount+this.props.data.Stat.NeuCount;
        return ( 
         
                <div className="row" style={styles.s3}>
                     <div className="col-sm-12" ><h4>Social Influence</h4></div>
                            <div className="col-sm-12" > <DonutChart id="hero-donut" Stat={this.props.data.Stat} /></div>
                            <div className="col-sm-12" ><h4>Channel</h4> <SocialList  data={this.props.data.SocialStats}  returnurl={this.props.returnurl} id={this.props.id} total={total}/></div>
                             <div className="col-sm-12" ><h4>Gender</h4> <GenderList  data={this.props.data.GenderStats}  returnurl={this.props.returnurl} id={this.props.id}/></div>
                            <div className="col-sm-12" > <h4>Media</h4> <StatisticsTable videoCount={this.props.data.VideosCount} photoCount={this.props.data.PhotosCount} id={this.props.id}  returnurl={this.props.returnurl} /></div>
                            <div className="col-sm-12" >
                            
                            </div>
                            <div className="col-sm-12" >
                                <div role="tabpanel">

                           
                                      <ul className="nav nav-tabs" role="tablist">
                                        <li role="presentation" className="active"><a href="#tags" aria-controls="tags" role="tab" data-toggle="tab">Tags</a></li>
                                        <li role="presentation"><a href="#emotions" aria-controls="emotion" role="tab" data-toggle="tab">Emotions</a></li>
                                
                                       </ul>

                            
                                      <div className="tab-content">
                                        <div role="tabpanel" className="tab-pane active" id="tags"><TagList  data={this.props.data.Tags}   returnurl={this.props.returnurl} id={this.props.id} /></div>
                                        <div role="tabpanel" className="tab-pane" id="emotions">
                                        <EmotionList  data={this.props.data.Emotions} returnurl={this.props.returnurl} id={this.props.id} /></div>
                               
                                     </div>

                                </div>
                            </div>
                    
                </div>
        );
    }
});

//birendesai9

var data = {"ID":"bolly_data3036","Name":"Sonakshi Sinha","Description":"To Make Her Singing Debut In Akira","Category":"","ShowDefaultPicture":true,"SearchQuery":"bollywood star Shahrukh is the ultimate romantic hero of Bollywood, says Sonakshi","VideosCount":177,"PhotosCount":3670,"PictureUrl":"http://businessofcinema.com/wp-content/uploads/2014/12/Sonakshi-Sinha.jpg","Photos":[{"Url":"http://pbs.twimg.com/ext_tw_video_thumb/601469285119098880/pu/img/N9dhneqVAexvd0r-.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/ext_tw_video_thumb/600560540100927488/pu/img/A1aqIcgVcooXBGvC.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CFWkMAoUIAAeUCG.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CF7it_8UMAELnin.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CFcjE8XVIAErT25.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CDQAVWgUEAAFk31.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CDh89kkVIAEf4BH.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CCsPCBRUgAEIhiv.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/ext_tw_video_thumb/599125760972959744/pu/img/RI9GToSeM9MA4qdX.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CFWEX-4UsAEbrrq.jpg","Description":null,"Count":0}],"Videos":[{"ID":"gb3WnG4HXc4","Url":"https://www.youtube.com/watch?v=gb3WnG4HXc4","Source":"Youtube","Count":9},{"ID":"3migmOCb9RI","Url":"https://www.youtube.com/watch?v=3migmOCb9RI","Source":"Youtube","Count":3},{"ID":"IKS3LtOLnlM","Url":"http://youtu.be/IKS3LtOLnlM","Source":"Youtube","Count":2},{"ID":"geiwZiSPsXg","Url":"https://www.youtube.com/watch?v=geiwZiSPsXg","Source":"Youtube","Count":2},{"ID":"sX1bGwZkvFA","Url":"https://www.youtube.com/watch?v=sX1bGwZkvFA","Source":"Youtube","Count":2},{"ID":"WlS8fy6sC_E","Url":"http://www.youtube.com/watch?v=WlS8fy6sC_E","Source":"Youtube","Count":2},{"ID":"oRmIFzxrYfU","Url":"https://www.youtube.com/watch?v=oRmIFzxrYfU","Source":"Youtube","Count":2},{"ID":"IozH1Qo7HMc","Url":"https://www.youtube.com/watch?v=IozH1Qo7HMc&feature=youtube_gdata_player","Source":"Youtube","Count":1},{"ID":"6tf_hCmP_4I","Url":"https://www.youtube.com/watch?v=6tf_hCmP_4I","Source":"Youtube","Count":1},{"ID":"OoIBjJKfxKU","Url":"https://www.youtube.com/watch?v=OoIBjJKfxKU","Source":"Youtube","Count":1}],"Photo":"http://businessofcinema.com/wp-content/uploads/2014/12/Sonakshi-Sinha.jpg","Video":null,"Total":21160,"Stat":{"Type":"ALL","PosCount":3686,"NegCount":201,"NeuCount":17273,"PosPercent":17.0,"NegPercent":0.0,"NeuPercent":81.0},"SocialStats":[{"Type":"TW","PosCount":2522,"NegCount":179,"NeuCount":8120,"PosPercent":23.0,"NegPercent":1.0,"NeuPercent":75.0},{"Type":"FB","PosCount":1163,"NegCount":22,"NeuCount":9143,"PosPercent":11.0,"NegPercent":0.0,"NeuPercent":88.0},{"Type":"TM","PosCount":1,"NegCount":0,"NeuCount":10,"PosPercent":9.0,"NegPercent":0.0,"NeuPercent":90.0}],"GenderStats":[{"Type":"Male","Count":6295,"Percent":58.173921079382681822382404584},{"Type":"Female","Count":4094,"Percent":37.833841604287958599020423251}],"Comments":null,"Tags":[{"key":"sonakshisinha","value":299,"valuestr":null,"label":null},{"key":"akira","value":219,"valuestr":null,"label":null},{"key":"dubsmash","value":155,"valuestr":null,"label":null},{"key":"sundayselfie","value":125,"valuestr":null,"label":null},{"key":"indianidoljunior","value":123,"valuestr":null,"label":null},{"key":"iifa2015","value":115,"valuestr":null,"label":null},{"key":"sipface","value":98,"valuestr":null,"label":null},{"key":"starbucksfunventures","value":96,"valuestr":null,"label":null},{"key":"sayyes","value":96,"valuestr":null,"label":null},{"key":"throwbackthursday","value":95,"valuestr":null,"label":null}],"Emotions":[{"key":"love","value":1182,"valuestr":null,"label":null},{"key":"good","value":1006,"valuestr":null,"label":null},{"key":"like","value":794,"valuestr":null,"label":null},{"key":"nice","value":365,"valuestr":null,"label":null},{"key":"please","value":360,"valuestr":null,"label":null},{"key":"no","value":353,"valuestr":null,"label":null},{"key":"fan","value":347,"valuestr":null,"label":null},{"key":"beautiful","value":347,"valuestr":null,"label":null},{"key":"happy","value":307,"valuestr":null,"label":null},{"key":"best","value":305,"valuestr":null,"label":null}],"Locations":[{"key":"undefined","value":0,"valuestr":"undefined","label":null},{"key":"in","value":0,"valuestr":"india","label":null},{"key":"pk","value":0,"valuestr":"pakistan","label":null},{"key":"us","value":0,"valuestr":"united states","label":null},{"key":"hk","value":0,"valuestr":"hong kong","label":null},{"key":"dz","value":0,"valuestr":"algeria","label":null},{"key":"bd","value":0,"valuestr":"bangladesh","label":null},{"key":"gb","value":0,"valuestr":"united kingdom","label":null},{"key":"fr","value":0,"valuestr":"france","label":null},{"key":"tn","value":0,"valuestr":"tunisia","label":null},{"key":"ca","value":0,"valuestr":"canada","label":null},{"key":"ae","value":0,"valuestr":"united arab emirates","label":null},{"key":"none","value":0,"valuestr":"none","label":null},{"key":"au","value":0,"valuestr":"australia","label":null},{"key":"sa","value":0,"valuestr":"saudi arabia","label":null},{"key":"al","value":0,"valuestr":"albania","label":null},{"key":"kg","value":0,"valuestr":"kyrgyzstan","label":null},{"key":"it","value":0,"valuestr":"italy","label":null},{"key":"ph","value":0,"valuestr":"philippines","label":null},{"key":"pe","value":0,"valuestr":"peru","label":null}],"Trends":[{"Source":"TW","Data":"0,30,75,-3,42,-2,107,-1,25,-1,45,-2,2,21,-1"},{"Source":"FB","Data":"0,11,33,-1,17,15,-1,27,-1,41,-1,16,13"},{"Source":"TM","Data":"0,1"}],"Decision":"Medium","DecisionImage":"/images/medium.png","ReturnUrl":null,"ContainerID":null};
var returnurl="http://www.cricket24x7.social/news/?id=bolly_data235";
React.render( <SocialInfluance data = { data }  returnurl={returnurl} /> , document.getElementById("SI"));
//http://s24x7.azurewebsites.net/api/summary/?id=bolly_data3036