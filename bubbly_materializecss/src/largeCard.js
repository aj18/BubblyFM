var React = require('react');
var NameAndComment = require('../../flowly/NameAndComment.js');
var StatisticsTable = require('../../flowly/StatisticsTable.js');
var Emotions = require('../../flowly/Emotions.js');
var Tags = require('../../flowly/Tags.js');
var Photo = require('../../flowly/Photo.js');
var PhotoLarge = require('../../flowly/PhotoLarge.js');

var LargeCard = React.createClass({

	render(){
		console.log('style'+this.props.styles);
		
		return(
				
		            <div className="card large z-depth-3" style={this.props.styles.cardStyle}>
			            <div className="card-image"  style={this.props.styles.cardImageStyle}>
			            {this.props.data.Photo ? <Photo url= {this.props.data.Photo} />
                           :<div></div>}
			              
			              <span className="card-title" style={this.props.styles.cardTitleStyle}><a className="socialTitleColor" style={this.props.styles.cardTitleAnchoStyle} href={this.props.returnurl+'?id=' + this.props.id}>{this.props.data.Name}</a></span>
			            </div>
			            <div className="card-content" style={this.props.styles.descriptionStyle}>
			              <p>{this.props.data.Description} </p>
			            </div>
			            <div className="card-action" style={this.props.styles.actionStyle}>
                          <StatisticsTable id={this.props.id} returnurl={this.props.returnurl3} videoCount={this.props.data.VideosCount} photoCount={this.props.data.PhotosCount} />
                      	  <Tags tags= {this.props.data.Tags} returnurl={this.props.returnurl3}/>       
			            </div>
		            </div>
		         	
		     
		);
	}

});

module.exports  = LargeCard;