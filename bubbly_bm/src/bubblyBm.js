var Radium = require('radium');
var React = require("react");

var { StyleResolverMixin, MatchMediaBase } = Radium;


/*var Container = RadiumBootstrap.Container;
var Row = RadiumBootstrap.Row;
var Col = RadiumBootstrap.Col;*/



var PhotoGallery = require('../../flowly/PhotoGallery.js');
var ImageGalleryCMP = require('../../flowly/ImageGallery.js');
var NameAndComment = require('../../flowly/NameAndComment.js');
var StatisticsTable = require('../../flowly/StatisticsTable.js');
var GenderHorizontalList = require('../../flowly/GenderHorizontalList.js');
var SocialList = require('../../flowly/SocialList.js');
var DonutChart = require('../../flowly/DonutChart.js');
var BulletGenderChart = require('../../flowly/BulletGenderChart.js');


var BubblyBM = React.createClass({
  
	render:function() {
    var total=this.props.data.Stat.PosCount+this.props.data.Stat.NegCount+this.props.data.Stat.NeuCount;
		var styles = {

				    s1 : { marginTop: '20px'},
       			s2 : { marginTop: '-75px'},
        		s3 : {boxShadow: '0px 3px 10px 0px rgba(50, 50, 50, 0.5)'},
            row:{
              marginLeft: '15px',
              marginRight: '15px'
            },
            NameAndCommentStyles :  {
                base:{
                    marginLeft: '90px',
                    color: '#6B6B6B',
                    fontSize: '16px'
                  },
                  descriptionStyle: {
                    height: '60px', overflow: 'hidden',margin: '-2px'
                  },
                  nameStyle: {
                  'color': '#DA4453',
                  fontWeight: '700',
                  fontFamily: 'serif'
                }
          
           }
		}
    
		return (
			
          <div className="social-pc-card z-depth-3">
               <div className='row'>
                    <div className="col s6"  >
                   
                  
                        <ImageGalleryCMP  data={this.props.data.Photos}  />
                      
                       
                   </div>
                   <div className="col s6">
                   
                        <div className='row'>
                            <div className="col s12" >
                            
                             <NameAndComment styles = {styles.NameAndCommentStyles} name = {this.props.data.Name} description={this.props.data.Description} returnurl={this.props.returnurl+'/news/?id='+this.props.id} />
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col s6" >

                              <DonutChart id="hero-donut" Stat={this.props.data.Stat} />
                            </div>

                             <div className="col s6" style={styles.s1}>
                             
                             <SocialList  data={this.props.data.SocialStats}  returnurl={this.props.returnurl} id={this.props.id} total={total}/>
                             </div>
                           
                        </div>
                        <div className='row'>
                            <div className="col s6" >
                            <StatisticsTable videoCount={this.props.data.VideosCount} photoCount={this.props.data.PhotosCount}   id={this.props.id}  returnurl={this.props.returnurl} />
                            </div>
                            <div className="col s6" >
                            <GenderHorizontalList  id="gener-bi" data={this.props.data.GenderStats}  returnurl={this.props.returnurl} id={this.props.id}/>
                            </div>

                         
                        </div>
                   </div>
                   <div className="col s3 poscard" id="poscard" >
                   </div>
                   
                 
               </div>        
               
          </div>

		);
	}
	
});


module.exports = BubblyBM;
