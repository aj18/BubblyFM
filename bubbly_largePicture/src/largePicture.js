var Radium = require('radium');
var React = require("react");


var NameAndComment = require('../../flowly/NameAndComment.js');
var PhotoDynamic = require('../../flowly/PhotoDynamic.js');

var LargePicture = React.createClass({


	render: function() {
		console.log("LargePicture :" + this.props.returnurl);
    
        return (  

            
                <div className="card-panel" style={this.props.styles.panelStyle}>
                        <div className="card-image">
                             <a  href={this.props.returnurl}><PhotoDynamic url= {this.props.data.Photo} pictureStyle={this.props.styles.pictureStyle}/></a>
                        </div>

                  <span className="card-title social-main-title" style={this.props.styles.titleStyle}>
                  <a  href={this.props.returnurl} style={{'color':'inherit','text-decoration':'inherit'}}>{this.props.data.Description}</a></span>
                  <br></br>
                  
                  <span className="card-title social-sub-title" style={this.props.styles.subTitleStyle}>
                  <a  href={this.props.returnurl} style={{'color':'inherit','text-decoration':'inherit'}}>{this.props.data.Name} </a></span>
                 
                  
                </div>
                
            );
   
 	}

});

module.exports = LargePicture;