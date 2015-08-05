var Radium = require('radium');
var React = require("react");
var NameAndComment = require('../../flowly/NameAndComment.js')
var PhotoSmall = require('../../flowly/PhotoSmall.js')


var BubblySmall = React.createClass({

	render:function() {
		var styles = {

					base:{
				      padding: 10,
				      width:220,
				      border:0,
				      color: '#fff',
				      cursor: 'pointer',
				      fontSize: 16,
				      boxShadow: '0px 3px 10px 0px rgba(50, 50, 50, 0.5)'
				     
				    },
				    thumbnailStyle: {
				    	width: '100%'
				    },
				    imageContainerStyle: {
				    	width: '100%', height: '100px', overflow: 'hidden'
				    },
				    imgStyle: { width: '35%' },  
				    viewStyle: { width: '100%'},
				    leftStyle: { 'float': 'right', marginBottom: '10px'},
				    NameAndCommentStyles :  {
		                base:{
		                    marginLeft: '5px',
		                    color: '#6B6B6B',
		                    height:'80px'
		                  },
		                  descriptionStyle: {
		                    height: '60px', overflow: 'hidden',margin: '0px',fontSize:'15px',paddingLeft:'5px'
		                  },
		                  nameStyle: {
		                  'color': '#DA4453',
		                  fontWeight: '200',
		                  fontFamily: 'serif'
		                  },
						  headerc: {
					   		 paddingLeft:'15px',
							 fontSize: '1.28rem',
							 lineHeight: '0.508rem',
							 margin: '1.14rem 0 0.912rem 0'

							
						  }
		          
		           }
		}
		return (
			
		        <div className="social-card-panel lighten-5 z-depth-3">
		          <div className="valign-wrapper">
		          			
			         <PhotoSmall className="responsive-img" url= {this.props.data.PictureUrl} />
		            	 	
		            	 	
	            	<div>
         			 <NameAndComment styles = {styles.NameAndCommentStyles} stat={this.props.data.Stat}  name={this.props.data.Name} description={this.props.data.Description} returnurl={this.props.returnurl} />
         			</div>
		            	 	
	            	  	
		          </div>
		        </div>
     		
		);
	}
	
});

//https://scotch.io/tutorials/make-material-design-websites-with-the-materialize-css-framework

module.exports = BubblySmall;