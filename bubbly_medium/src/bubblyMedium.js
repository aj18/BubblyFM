var Radium = require('radium');
var React = require("react");

var FooterPanel = require('../../flowly/FooterPanel.js');
var NameAndComment = require('../../flowly/NameAndComment.js');
var StatisticsTable = require('../../flowly/StatisticsTable.js');
var Emotions = require('../../flowly/Emotions.js');
var Tags = require('../../flowly/Tags.js');
var Photo = require('../../flowly/Photo.js');


var Medium = React.createClass({


	render: function() {
		var styles = {
       	 	s1 : { margin: '10px'},
        	s2 : { float: 'right' },
        	s3 : {boxShadow: '0px 3px 10px 0px rgba(50, 50, 50, 0.5)',height:'430px',width:'25%'},
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
                    <Photo url= {this.props.data.Photo} />
                  <div className="panel-body"  style={styles.s1}>
                       <NameAndComment styles = {styles.NameAndCommentStyles} name = {this.props.data.Name} description={this.props.data.Description} returnurl={this.props.returnurl} />
                
                        <StatisticsTable videoCount={this.props.data.VideosCount} photoCount={this.props.data.PhotosCount} />
                            
                      
                            <Tags tags= {this.props.data.Tags} />
                    
                    </div>
                    
                </div>
        );
 	}

});

module.exports  = Medium;