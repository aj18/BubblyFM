var Radium = require('radium');
var React = require("react");


var NameAndComment = require('../../flowly/NameAndComment.js');
var PhotoDynamic = require('../../flowly/PhotoDynamic.js');

var LargePicture = React.createClass({


	render: function() {
		console.log("LargePicture :" + this.props.returnurl);
    
        return (  

            
                <div className="card-panel" style={this.props.styles.panelStyle}>
                    <a  href={this.props.returnurl}>
                        <div className="card-image">
                             <PhotoDynamic url= {this.props.data.Photo} pictureStyle={this.props.styles.pictureStyle}/>
                        </div>

                        <span className="card-title social-main-title" style={this.props.styles.titleStyle}>{this.props.data.Description}</span>
                        <br></br>
                        
                        <span className="card-title social-sub-title" style={this.props.styles.subTitleStyle}>
                          {this.props.data.Name}
                        </span>
                    </a>
                  
                </div>
                
            );
   
 	}

});

module.exports = LargePicture;