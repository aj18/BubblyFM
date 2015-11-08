var React = require('react');
var CardPanel = React.createClass({

	render(){

		return(
			
		   
        	<a  href={this.props.returnurl+'?id=' + this.props.id} >

	        <div className="card-panel" style={this.props.styles.cardStyle}>
	        	
		          <span style={this.props.styles.cardTitleStyle}>{this.props.data.Name}</span>
		          <span className="card-content white-text" style={this.props.styles.cardDiscriptionStyle}>
			              <p>{this.props.data.Description}</p>
	           	  </span>
           	 
	        </div>
				    
		   	</a>
		);
	}

});


/*<div class="row">
      <div class="col s12 m3">
        <div class="card-panel teal" style="text-align:center;padding:30px;color:#ffffff;line-height:20px;">
        <span class="card-title" style="text-align:center;font-size:18px;font-weight:bold">Card Title</span>
          <div class=""
          <div class="card-content white-text">
              <p>I am a very simple card. I am good at containing small bits of information.
              I am convenient because I require little markup to use effectively.</p>
           </div>
        </div>
      </div>
    </div>
    */

module.exports  = CardPanel;