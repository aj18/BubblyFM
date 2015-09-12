var React = require('react');
var NameAndComment = require('../../flowly/NameAndComment.js');
var StatisticsTable = require('../../flowly/StatisticsTable.js');
var Emotions = require('../../flowly/Emotions.js');
var Tags = require('../../flowly/Tags.js');
var Photo = require('../../flowly/Photo.js');
var PhotoLarge = require('../../flowly/PhotoLarge.js');

var LargeCard = React.createClass({

	render(){
		var styles = {
       	 		 
       			 color: '#6B6B6B'
    	}
		
		return(
				
		            <div className="card large z-depth-3">
			            <div className="card-image">
			            {this.props.data.Photo ? <Photo url= {this.props.data.Photo} />
                           :<div></div>}
			              
			              <span className="card-title"><a className="socialTitleColor" href={this.props.returnurl}>{this.props.data.Name}</a></span>
			            </div>
			            <div className="card-content">
			              <p>{this.props.data.Description} </p>
			            </div>
			            <div className="card-action">
                          <StatisticsTable id={this.props.id} returnurl={this.props.returnurl3} videoCount={this.props.data.VideosCount} photoCount={this.props.data.PhotosCount} />
                      	  <Tags tags= {this.props.data.Tags} returnurl={this.props.returnurl3}/>       
			            </div>
		            </div>
		         	
		     
		);
	}

});

module.exports  = LargeCard;