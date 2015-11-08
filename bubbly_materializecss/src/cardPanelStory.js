var React = require('react');
var StorySliderLB = require("../../flowly/StorySliderLB.js");

var popupS = require('popups');

var CardPanelStory = React.createClass({
	openModal: function() {
        console.log(this.props.data);
        console.log("id " + this.props.id);
        console.log("returnurl " + this.props.returnurl);
        
        popupS.modal({
            content: '<div id="cardpanelstorylb"></div>'
                
        });

        React.render(<StorySliderLB id={this.props.id} storyid = { this.props.data.storyId} data={this.props.data.Data} title={this.props.data.Title} discription={this.props.data.Description} PictureUrl={this.props.data.PictureUrl}  returnurl={this.props.returnurl} styles={this.props.styles}/>
                ,document.getElementById('cardpanelstorylb'));
    },
	render(){
		 console.log("storycardpanel " + JSON.stringify(this.props.data));
		 var url = this.props.returnurl +"?id="+ this.props.id +"&storyid="+ this.props.storyid ;

		 if(this.props.storyLB === true) {

		 	return(
				
			   
	        	

		        <div className="card-panel" style={this.props.styles.cardStyle} onClick={this.openModal}>
		        	
			          <span style={this.props.styles.cardTitleStyle}>{this.props.data.Title}</span>
			          <span className="card-content white-text" style={this.props.styles.cardDiscriptionStyle}>
				              <p>{this.props.data.Description}</p>
		           	  </span>
	           	 
		        </div>
					    
			   
			);


		 } else {

			return(
				
			   
	        	<a  href={url} >

		        <div className="card-panel" style={this.props.styles.cardStyle}>
		        	
			          <span style={this.props.styles.cardTitleStyle}>{this.props.data.Title}</span>
			          <span className="card-content white-text" style={this.props.styles.cardDiscriptionStyle}>
				              <p>{this.props.data.Description}</p>
		           	  </span>
	           	 
		        </div>
					    
			   	</a>
			);
		}
	}

});


module.exports  = CardPanelStory;