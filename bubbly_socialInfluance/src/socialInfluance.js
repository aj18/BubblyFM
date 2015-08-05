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
                     <div className="col s12" ><h4>Social Influence</h4></div>
                            <div className="col s12" > <DonutChart id="hero-donut-si" Stat={this.props.data.Stat} /></div>
                            <div className="col s12" ><h4>Channel</h4> <SocialList  data={this.props.data.SocialStats}  returnurl={this.props.returnurl} id={this.props.id} total={total}/></div>
                            <div className="col s12" ><h4>Gender</h4> <GenderList  cid="gender-si"   data={this.props.data.GenderStats}  returnurl={this.props.returnurl} id={this.props.id}/></div>
                            <div className="col s12" ><h4>Media</h4> <StatisticsTable videoCount={this.props.data.VideosCount} photoCount={this.props.data.PhotosCount} id={this.props.id}  returnurl={this.props.returnurl} /></div>
                            <div className="col s12" >
                            
                            </div>

                             <div className="row">
                                <div className="col s12" >
                                    <ul className="tabs nav">
                                        <li className="tab"><a href="#tags" className="active">Tags</a></li>
                                        <li className="tab"><a href="#emotions">Emotions</a></li>                              
                                    </ul>
                                </div>
                                <div id="tags"><TagList  data={this.props.data.Tags}   returnurl={this.props.returnurl} id={this.props.id} /></div>
                                <div id="emotions"><EmotionList  data={this.props.data.Emotions} returnurl={this.props.returnurl} id={this.props.id} /></div>
                               
                                
                                
                            </div>
                    
                </div>
        );
    }
});

module.exports = SocialInfluance;