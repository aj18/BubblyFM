var Radium = require('radium');
var React = require("react");


var NameAndComment = require('../../flowly/NameAndComment.js');
var PhotoLarge = require('../../flowly/PhotoLarge.js');

var LargePicture = React.createClass({


	render: function() {
		console.log("LargePicture :" + this.props.returnurl);
    
        return (  

            
                <div className="card-panel" style={this.props.styles.panelStyle}>
                        <div className="card-image">
                             <PhotoLarge url= {this.props.data.Photo}/>
                        </div>

                  <span className="card-title social-main-title" style={this.props.styles.titleStyle}>{this.props.data.Description}</span>
                  <br></br>
                  
                  <span className="card-title social-sub-title" style={this.props.styles.subTitleStyle}>
                  <a  href={this.props.returnurl}>{this.props.data.Name} </a></span>
                 
                  
                </div>
                
            );
   
 	}

});

module.exports = LargePicture;