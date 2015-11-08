var Radium = require('radium');
var React = require("react");
var $ = require("jQuery");


var NameAndComment = require('../../flowly/NameAndComment.js');
var PhotoDynamic = require('../../flowly/PhotoDynamic.js');
var StorySliderLB = require("../../flowly/StorySliderLB.js");

var popupS = require('popups');



var LargePictureStoryFancy = React.createClass({

    

    openModal: function() {
        console.log(this.props.data);
        console.log("id " + this.props.id);
        console.log("returnurl " + this.props.returnurl);
        
        popupS.modal({
            content: '<div id="slider"></div>'
                
        });

        React.render(<StorySliderLB id={this.props.id} storyid = { this.props.data.storyId} data={this.props.data.Data} title={this.props.data.title} discription={this.props.data.Description}  returnurl={this.props.returnurl} styles={this.props.styles}/>
                ,document.getElementById('slider'));
    },

    closeModal: function() {
       
    },

    render: function() {
        console.log("LargePicture :" + this.props.returnurl);
        console.log("LargePicture :" + this.props.styles.pictureStyle);
        console.log("data :" + JSON.stringify(this.props.data));

        var url = this.props.returnurl +"?id="+ this.props.id +"&storyid="+ this.props.storyid ;
    
        console.log("url " + url);
        return (  

            
               <div className="card-panel" style={this.props.styles.panelStyle} onClick={this.openModal}>
                        <div className="card-image">
                             <PhotoDynamic url= {this.props.data.PictureUrl} pictureStyle={this.props.styles.pictureStyle}/>
                        </div>
                   
                    <span className="card-title social-main-title" style={this.props.styles.titleStyle}>
                      {this.props.data.Title}
                    </span>
                  
                    
                  
                </div>

                
            );
   
    }

});





module.exports = LargePictureStoryFancy;