var Radium = require('radium');
var React = require("react");
var NameAndComment = require('../../flowly/NameAndComment.js')
var PhotoSmall = require('../../flowly/PhotoSmall.js')


var App = React.createClass({

	render() {
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
			<div  style={styles.base}>
             <div style={styles.imageContainerStyle}>
             		<PhotoSmall url= {this.props.data.Photo} />
                <div  style={styles.viewStyle} >
                    <div style={styles.leftStyle} >
                    	
                    </div>
                    <div  >
                      <NameAndComment styles = {styles.NameAndCommentStyles} stat={this.props.data.Stat}  name={this.props.data.Name} description={this.props.data.Description} returnurl={this.props.returnurl} />
                     </div>
                </div>
               
             </div>
   
         	</div>
		);
	}
	
})

React.render(<App />,document.getElementById('small'));