var Radium = require('radium');
var React = require("react");


var NameAndComment = require('../../flowly/NameAndComment.js');
var PhotoThumb = require('../../flowly/PhotoThumb.js');


var ThumbNail = React.createClass({


	render: function() {
		var styles = {
       	 		s1 : { margin: '10px'},
         		s2 : { marginTop: '10px', marginBottom: '10px' , overflow: 'hidden'},
         		s3 : { boxShadow: '0px 3px 10px 0px rgba(50, 50, 50, 0.5)',width:'25%'},
        		thumbnailStyle : { width: '100%' },
        		viewStyle : { width: '100%' },
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
			        <PhotoThumb url= {this.props.data.Photo} />
			 
			        <div className="panel-body" style={styles.viewStyle} >
			        <NameAndComment styles = {styles.NameAndCommentStyles} name = {this.props.data.Name} description={this.props.data.Description} returnurl={this.props.returnurl} />
			                    
			        </div>
			     
			   
			    </div>
        );
 	}

});

module.exports = ThumbNail;