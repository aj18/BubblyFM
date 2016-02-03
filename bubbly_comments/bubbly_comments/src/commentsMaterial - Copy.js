'use strict';
var React = require('react');
var ReactDom = require('react-dom');
var PackLayout = require('react-layout-pack');


var FluidVid = React.createClass({
  getDefaultProps: function () {
    return {
      src : '',
      width: 1600,
      height: 900
    }
  },
  getRatio: function (width, height) {
    return ((parseInt(height, 10) / parseInt(width, 10)) * 100) + '%';
  },
  render: function() {
    var ratio = {
      paddingTop: this.getRatio(this.props.width, this.props.height)
    };
    return (
      <div className={ 'fluidvids' } style={ ratio }>
        <iframe src={ this.props.src } width={ this.props.width } height={ this.props.height } frameBorder={ 0 }></iframe>
      </div>
    );
  }
});


var CommentListMaterial = React.createClass({
    getInitialState: function() {
        return {
            value: 'select'
        }
    },
    change: function(event){
    	console.log("Selection : " + event.target.value);
    	console.log("Container : " + this.props.container);

        this.setState({value: event.target.value});
        //navigate(event.target.value);
        window.location.href=event.target.value;
      
        
    },
    render: function() {
        var s2 = { 'min-height': '60px', 'margin': '0px 0px 0px 15px' ,'width':'80%'};
        var urlTitle=this.props.returnurl+ '/Comments?id=' + this.props.id + '&type='+this.props.type+'&page=1&q=';
		var url="";
        var s8 = { 'float': 'right', 'padding-right': '5px','padding-top': '5px','color':'#039be5'};
        var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;
        var date = Date.parse(Date().toString());
        var s5 = {'height': '48px','width': '48px','padding': '4px','border-bottom':'none'};

        var commentNodes = this.props.data.map(function (item,i) {
            return (
                <li>
			    <div>
					  <div className="col s12">
					   <div className="card">
						{item.VideoID ? <div className="fluidvids-youtube">
							<FluidVid  src={"http://www.youtube.com/embed/" + item.VideoID + "?rel=0"} />
						  </div>
					   : item.Datasource=="Instagram" ? 
					    <div>
						 <div className="card-image"> <img  src={item.PhotoUrl} />
						 </div>
						 
						</div>
					  : item.Datasource=="GooglePlus" ? 
						 <div>
						  <div className="card-image"> <img   src={item.PhotoUrl} />
						  </div>
						  
						</div>
					  : item.Datasource=="Tumblr" ? 
					   <div>
						<div className="card-image"> <img   src={item.PhotoUrl} />
						</div>
						
					   </div>
					  : item.Datasource=="Twitter" ? 
					    <div>
						 <div className="card-image"> <img   src={item.PhotoUrl} />
						 </div>
						 
						</div>
					  : item.Datasource=="Facebook" ?
						<div>
						 <div className="card-image"> <img   src={item.PhotoUrl} />
						 </div>
						 
						</div>
					  : false }
			    <div className="card-content" style={{'margin-bottom':'5px'}}>
				{item.Datasource=="Twitter" ?
				  <div style={{'display':'inline-flex','width':'100%'}}>
					<a href={"https://twitter.com/" + item.ProfileID.substr(1)} target="_blank"  className="pull-left">
					   <img src={item.ProfilePhotoUrl} style={s5}/> </a>
					<div style={s2}>
					   <div>
						  <a href={"https://twitter.com/" + item.ProfileID.substr(1)} target="_blank">{item.ProfileName.substr(1)}     
						  </a>
					   </div>                
					 {item.ProfileID} ({item.ProfileFollower})

					</div>
                  <span style={s8} className="fa fa-twitter-square"></span>
				  </div>
					: item.Datasource=="Instagram" ?
				  <div style={{'display':'inline-flex','width':'100%'}}>
							<a href={"https://instagram.com/" + item.ProfileID} target="_blank" className="pull-left">
								<img src= {item.ProfilePhotoUrl} style={s5}/> </a>
							<div style={s2}>
								<a href={"https://instagram.com/" + item.ProfileID} target="_blank">{item.ProfileName}
								</a>
							</div>
                      <span style={s8} className="fi-social-instagram"></span>
				  </div>
				   : item.Datasource=="GooglePlus" ?
				  <div style={{'display':'inline-flex','width':'100%'}}>
						<a href={"https://plus.google.com/" + item.ProfileID} target="_blank" className="pull-left">
							<img src= {item.ProfilePhotoUrl} style={s5}/> </a>
						<div style={s2}>
                      <a href={"https://plus.google.com/" + item.ProfileID} target="_blank">
                          {item.ProfileName}
                      </a>
						</div>
                      <span style={s8} className="fa fa-google-plus-square"></span>
				  </div>
				 : item.Datasource=="Tumblr" ?
					<div style={{'display':'inline-flex','width':'100%'}}>
							<a href={"http://" + item.ProfileID + ".tumblr.com"} target="_blank" className="pull-left">
							<img src= {item.ProfilePhotoUrl} style={s5}/> </a>
						<div style={s2}>
                        <a href={"http://" + item.ProfileID + ".tumblr.com" } target="_blank">
                            {item.ProfileName}
                        </a>
						</div>
                        <span style={s8} className="fa fa-tumblr-square"></span>
				   </div>
				   : item.Datasource=="Facebook" ?
				   <div style={{'display':'inline-flex','width':'100%'}}>
					<a href={"https://www.facebook.com/profile.php?id=" + item.ProfileID} target="_blank" className="pull-left">
					   <img src= {item.ProfilePhotoUrl} style={s5}/> </a>
						<div style={s2}>
                       <a href={"https://www.facebook.com/profile.php?id =" + item.ProfileID} target=" _blank">
                           {item.ProfileName}
                       </a>
                            </div>
                       <span style={s8} className="fa fa-facebook-square"></span>
						</div>
						: false}
				  </div>
				  <div className="card-content">
				  
				   <div dangerouslySetInnerHTML={{__html: item.Text != null ? item.Text.replace(urlPattern, '<a style="word-break:break-word;" href="$&" target="_blank">$&</a>') :false}} >
				   </div>
				
			     </div>
					
			      
				  <p style={{'display':'block','margin':'10px','color':'black'}}>
				  		
							{ item.Datasource=="Instagram" ? 
								Math.round((date/1000 - parseInt(item.DocDate)) * 1.1574074074074E-8) >= 1 ? 
						<span>{Math.round((date/1000 - parseInt(item.DocDate)) * 1.1574074074074E-8)}d</span> 
											: Math.round((date/1000 - parseInt(item.DocDate)) * 1.1574074074074E-8) < 1 && Math.round((date/1000 - parseInt(item.DocDate)) * 2.7777777777778E-7) > 1 ?
											<span >{Math.round((date/1000 - parseInt(item.DocDate)) * 2.7777777777778E-7)}h</span> 
						: Math.round((date/1000 - item.DocDate) * 2.7777777777778E-7) < 1 ?
											<span >{Math.round((date/1000 - parseInt(item.DocDate)) / 60000)}m</span> 
											:false           
								:  Math.round((date - Date.parse(item.DocDate)) * 1.1574074074074E-8) >= 1 ? 
						<span>{Math.round((date - Date.parse(item.DocDate)) * 1.1574074074074E-8)}d</span> 
											: Math.round((date - Date.parse(item.DocDate)) * 1.1574074074074E-8) < 1 && Math.round((date - Date.parse(item.DocDate)) * 2.7777777777778E-7) > 1 ?
											<span >{Math.round((date - Date.parse(item.DocDate)) * 2.7777777777778E-7)}h</span> 
											: Math.round((date - Date.parse(item.DocDate)) * 2.7777777777778E-7) < 1 ?
											<span >{Math.round((date - Date.parse(item.DocDate)) / 60000)}m</span> 
											:false          
							}
				        <span style={{'display':'block','float':'right','width':'38%','margin-left':'10px','color':'black'}}>Source : 
                            {item.Datasource=="Twitter" ?
                                <a href={"https://twitter.com/" + item.ProfileID.substr(1) + "/status/" + item.ID} target="_blank"> Twitter</a>
                            : item.Datasource=="Instagram" ?
				  			<a href={"https://instagram.com/" + item.ProfileID.substr(1)} target="_blank"> Instagram</a>
					          : item.Datasource=="GooglePlus" ?
				  		<a href={"https://plus.google.com/" + item.ProfileID} target="_blank"> GooglePlus</a>
				          : item.Datasource=="Tumblr" ?
							<a href={"http://" + item.ProfileID + ".tumblr.com" } target="_blank"> Tumblr</a>
					         : item.Datasource=="Facebook" ?
				   	  <a href={"https://www.facebook.com/" + item.ProfileID + "/posts/" + item.ID.split("_")[1]} target=" _blank"> Facebook</a>
				  
                            : false}
                        </span>
				  </p>
			</div>
		 </div>
	 </div>
</li>
          );
        });
          return (<section className="content-module">
            <header className="content-module-header">
            <div className="row">
              <div className="col s12 m9">
               <h3>{this.props.title}
			   </h3>
			  </div>
				<div className="col s12 m3">             
					   <select id="lang" onChange={this.change} value={this.state.value} className="pull-right" style={{'color': '#23527c','outline': 'none','cursor': 'pointer','font-weight': 'bold',  'font-size': '18px', 'display':'inherit'}}>
		                  <option value='select'>Select</option>
		                  <option value={this.props.returnurl + "?id=" + this.props.id + "&type=positive&skipby=0&limit=" + this.props.limit + "&q="}>Compliments on Social Media</option>
		                  <option value={this.props.returnurl + "?id=" + this.props.id + "&type=negative&skipby=0&limit=" + this.props.limit + "&q="}>Dark Comments on Social Media</option>
		                  <option value={this.props.returnurl + "?id=" + this.props.id + "&type=popular&skipby=0&limit=" + this.props.limit + "&q="}>Popular Comments On Social Media</option>
		                  <option value={this.props.returnurl + "?id=" + this.props.id + "&type=celebrity&skipby=0&limit=" + this.props.limit + "&q="}>Celebrity Comments On Social Media</option>
		                  <option value={this.props.returnurl + "?id=" + this.props.id + "&type=question&skipby=0&limit=" + this.props.limit + "&q="}>What people are Asking</option>
		                  <option value={this.props.returnurl + "?id=" + this.props.id + "&type=gender&skipby=0&limit=" + this.props.limit + "&q=Male"}>Comments on Male population</option>
		                  <option value={this.props.returnurl + "?id=" + this.props.id + "&type=gender&skipby=0&limit=" + this.props.limit + "&q=Female"}>Comments on Female population</option>
		                  <option value={this.props.returnurl + "?id=" + this.props.id + "&type=neutral&skipby=0&limit=" + this.props.limit + "&q="}>Comments - neutral</option>
		  
		               </select>
				</div>
			</div>
            </header>
               <PackLayout tag="ul" className="pack-layout" >
					 {commentNodes}
			   </PackLayout>
         </section>
       );
    }
});






module.exports=CommentListMaterial;


