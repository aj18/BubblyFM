var React = require("react");
var jQuery = require("jquery");

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

var ItemYoutube = React.createClass({
          
    componentDidMount: function(){
    },
    render: function(){
	 var s1 = {'width':'100%','font-size':'35px','text-align':'right','padding':'10px'}
	 var s4={ opacity: '1',float: 'left',height:'520px',width:'100%',overflow: 'hidden', display: 'block', 'background-image': 'url(//img.youtube.com/vi/' + this.props.data + '/0.jpg)', 'background-size': 'cover','background-position':'25% 0%', 'background-repeat': 'no-repeat' };
	 var s2 = {'position':'absolute','bottom':'50px','height':'40px','padding':'9px 5px 0px  10px'}
     var s3 = {'position':'absolute','background-color':'whitesmoke','bottom':'10px','height':'40px','padding':'9px 5px 0px  10px'}
        return (
        	<div className="grid-item grid-item--YouTube-width grid-item--YouTube-height card" style={{'margin':'5px 5px 5px 5px'}}>
			 	<div className="card-image"  style={s4}><span style={s1} className="fa fa-youtube"></span>
					<div className="white-text" style={{'padding':'90px 0px 0px 0px'}}>
						<span style={s2} className="amber darken-2">{this.props.text.substr(0,30)}</span> 
					</div>
					<span style={s3}>{this.props.id }</span>
				</div>
			</div>
           
       )
    }
});

var ItemVimeo = React.createClass({
	
    componentDidMount: function(){

    },
    render: function(){
    	var s4={ opacity: '1',float: 'left',height:'520px',width:'100%',overflow: 'hidden', display: 'block', 'background-image': 'url(//img.youtube.com/vi/' + this.props.data + '/0.jpg)', 'background-size': 'cover','background-position':'25% 0%', 'background-repeat': 'no-repeat' };
        return (
        	<div className="grid-item grid-item--Vimeo-width grid-item--Vimeo-height" style={{'margin':'5px 5px 5px 5px'}}>
			 	<div style={s4}></div>
			 </div>
           
       )
    }
});

var ItemFbTextPhoto = React.createClass({
	
    componentDidMount: function(){

    },
    render: function(){
	 
    	var s1 = {'width':'100%','font-size':'22px','text-align':'center'}
		var s2 = {'min-height':'100px','text-align':'center'}
		var s3 = {'width':'100%','text-align':'center'}
		var s4={ opacity: '1',float: 'left',height:'255px',width:'100%',overflow: 'hidden', display: 'block', 'background-image': 'url(' + this.props.photo + ')', 'background-size': 'cover','background-position':'70% 0%','margin-left':'-11px', 'background-repeat': 'no-repeat' };
		return (
        <a href={this.props.href} target="_blank">
			<div className="grid-item grid-item--fbTextPhoto-width grid-item--fbTextPhoto-height card" style={{'margin':'5px 5px 5px 5px','background-color':'#3a5795'}}>
				<div className="row">
					<div className="col s12 m7">
					<div style={s4}>
					</div>
					</div>
					<div className="col s12 m5">
					<div className="white-text">
						<p style={s1} className="fa fa-facebook" ></p>
						<p style={s2}>{this.props.text.substr(0,70) + "..." }</p> 
						<p style={s3} >{this.props.id}</p> 
					</div>
				</div>
			 </div>
		   </div>
		</a>
       )
    }
});


var ItemFbPhoto = React.createClass({
	
    componentDidMount: function(){

    },
    render: function(){
		var s1 = {'width':'100%','font-size':'22px','text-align':'center'}
    	var s4={ opacity: '1',float: 'left',height:'520px',width:'100%',overflow: 'hidden', display: 'block', 'background-image': 'url(' + this.props.data + ')', 'background-size': 'cover','background-position':'25% 0%', 'background-repeat': 'no-repeat' };
        return (
          <a href={this.props.href} target="_blank">
			<div className="grid-item grid-item--fbPhoto-width grid-item--fbPhoto-height card" style={{'margin':'5px 5px 5px 5px'}}>
				<div className="card-image" style={s4}></div>
			 </div>
          </a>
       )
    }
});

var ItemfbText = React.createClass({
    componentDidMount: function(){

    },
    render: function(){
    	var s1 = {'width':'100%','font-size':'22px','text-align':'center'}
		var s2 = {'min-height':'100px','text-align':'center'}
		var s3 = {'width':'100%','text-align':'center'}
        return (
		<a href={this.props.href} target="_blank">
        	<div className="grid-item grid-item--text-width grid-item--text-height card-panel" style={{'margin':'5px 5px 5px 5px','background-color':'#3a5795'}}>
                  <div className="white-text">
				   <p style={s1} className="fa fa-facebook" ></p>
			       <p style={s2}>{this.props.data.substr(0,70) + "..."}</p> 
				   <p style={s3} >{this.props.id}</p> 
				  </div>
			</div>
         </a>
       )
    }
});


var ItemtwTextPhoto = React.createClass({
	
    componentDidMount: function(){

    },
    render: function(){
    	var s1 = {'width':'100%','font-size':'35px','text-align':'right','padding':'10px','color':'#4099FF'}
	    var s2 = {'position':'absolute','bottom':'50px','height':'40px','padding':'9px 5px 0px  10px','background-color':'#4099FF'}
        var s3 = {'position':'absolute','background-color':'whitesmoke','bottom':'10px','height':'40px','padding':'9px 5px 0px  10px','color': 'black'}
		var s4={ opacity: '1',float: 'left',height:'520px',width:'100%',overflow: 'hidden', display: 'block', 'background-image': 'url(' + this.props.photo + ')', 'background-size': 'cover','background-position':'25% 0%', 'background-repeat': 'no-repeat' };
        return (
        <a href={this.props.href} target="_blank">
			<div className="grid-item grid-item--fbPhoto-width grid-item--fbPhoto-height card" style={{'margin':'5px 5px 5px 5px'}}>
				
				 <div style={s4}>
					<span style={s1} className="fa fa-twitter"></span>
					<div className="white-text" style={{'padding':'90px 0px 0px 0px'}}>
						<span style={s2}>{this.props.text.substr(0,30)}</span> 
					</div>
					<span style={s3}>{this.props.id }</span>
				</div>
           </div>
		</a>
       )
    }
});

var ItemtwText = React.createClass({
	
    componentDidMount: function(){

    },
    render: function(){
    	var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;
		var s1 = {'width':'100%','font-size':'22px','text-align':'center'}
		var s2 = {'min-height':'100px','text-align':'center'}
		var s3 = {'width':'100%','text-align':'center'}
		var s4={'margin':'5px 5px 5px 5px','background-color': this.props.sentiment}
        return (
		 <a href={this.props.href} target="_blank">
        	<div className="grid-item grid-item--text-width grid-item--text-height card-panel card-content" style={s4}>
                  <div className="white-text">
				   <p style={s1} className="fa fa-twitter" ></p>
			       <p style={s2}>{this.props.data.substr(0,70) + "..."}</p> 
				   <p style={s3} >{this.props.id}</p> 
				  </div>
			</div>
         </a>
       )
    }
});


var ItemTmbTextPhoto = React.createClass({
	
    componentDidMount: function(){

    },
    render: function(){
	 
    	var s1 = {'width':'97%','font-size':'22px','text-align':'right','color':'white','margin-top':'10px'}
		var s2 = {'position':'absolute','background-color':'#36465d','bottom':'50px','padding-left':'15px','height':'40px','padding':'9px 5px 0px  20px'}
		var s3 = {'position':'absolute','background-color':'whitesmoke','bottom':'10px','padding-left':'15px','height':'40px','padding':'9px 5px 0px  20px','color': 'black'}
		var s4={ opacity: '1',float: 'left',height:'255px',width:'103%',overflow: 'hidden', display: 'block', 'background-image': 'url(' + this.props.photo + ')', 'background-size': 'cover','background-position':'70% 0%','margin-left':'-11px', 'background-repeat': 'no-repeat' };
		return (
        <a href={this.props.href} target="_blank">
		 <div className="grid-item grid-item--fbTextPhoto-width grid-item--fbTextPhoto-height card" style={{'margin':'5px 5px 5px 5px'}}>
            <div style={s4}>
					<p style={s1} className="fa fa-tumblr" ></p>
				<div className="white-text" style={{'padding':'90px 0px 0px 0px'}}>
					<span style={s2}>{this.props.text.substr(0,30)}</span> 
				</div>
					<span style={s3}>{this.props.id }</span>
			</div>
		</div>
	  </a>
       )
    }
});


var ItemTmbPhoto = React.createClass({
	
    componentDidMount: function(){

    },
    render: function(){
		var s1 = {'width':'100%','font-size':'22px','text-align':'center'}
    	var s4={ opacity: '1',float: 'left',height:'520px',width:'100%',overflow: 'hidden', display: 'block', 'background-image': 'url(' + this.props.data + ')', 'background-size': 'cover','background-position':'25% 0%', 'background-repeat': 'no-repeat' };
        return (
        	<a href={this.props.href} target="_blank">
			 <div className="grid-item grid-item--fbPhoto-width grid-item--fbPhoto-height card" style={{'margin':'5px 5px 5px 5px'}}>
				<div className="card-image" style={s4}></div>
			 </div>
           </a>
       )
    }
});

var ItemTmbText = React.createClass({
    componentDidMount: function(){

    },
    render: function(){
    	var s1 = {'width':'100%','font-size':'22px','text-align':'center'}
		var s2 = {'min-height':'100px','text-align':'center'}
		var s3 = {'width':'100%','text-align':'center'}
        return (
		 <a href={this.props.href} target="_blank">
        	<div className="grid-item grid-item--text-width grid-item--text-height card-panel" style={{'margin':'5px 5px 5px 5px','background-color':' #36465d'}}>
                  <div className="white-text">
				   <p style={s1} className="fa fa-tumblr" ></p>
			       <p style={s2}>{this.props.data.substr(0,70) + "..."}</p> 
				   <p style={s3} >{this.props.id}</p> 
				  </div>
			</div>
         </a>
       )
    }
});

var ItemInstagramPhoto = React.createClass({
	
    componentDidMount: function(){

    },
    render: function(){
		var s1 = {'width':'100%','font-size':'22px','text-align':'center'}
    	var s4={ opacity: '1',float: 'left',height:'255px',width:'100%',overflow: 'hidden', display: 'block', 'background-image': 'url(' + this.props.photo + ')', 'background-size': 'cover','background-position':'25% 0%', 'background-repeat': 'no-repeat' };
        return (
        <a href={this.props.href} target="_blank">
			<div className="grid-item grid-item--text-width grid-item--text-height card" style={{'margin':'5px 5px 5px 5px'}}>
				<div style={s4}>
					<span style={s1} className="fa fa-instagram"></span>
				</div>
			 </div>
         </a>
       )
    }
});


var ItemgpTextPhoto = React.createClass({
	
    componentDidMount: function(){

    },
    render: function(){
    	var s1 = {'width':'100%','font-size':'35px','text-align':'right','padding':'10px','color':'#4099FF'}
	    var s2 = {'position':'absolute','bottom':'50px','height':'40px','padding':'9px 5px 0px  10px','background-color':'#d0181e'}
        var s3 = {'position':'absolute','background-color':'whitesmoke','bottom':'10px','height':'40px','padding':'9px 5px 0px  10px','color': 'black'}
		var s4={ opacity: '1',float: 'left',height:'520px',width:'100%',overflow: 'hidden', display: 'block', 'background-image': 'url(' + this.props.photo + ')', 'background-size': 'cover','background-position':'25% 0%', 'background-repeat': 'no-repeat' };
        return (
        <a href={this.props.href} target="_blank">
			<div className="grid-item grid-item--fbPhoto-width grid-item--fbPhoto-height card" style={{'margin':'5px 5px 5px 5px'}}>
				
				 <div style={s4}>
					<span style={s1} className="fa fa-google-plus"></span>
					<div className="white-text" style={{'padding':'90px 0px 0px 0px'}}>
						<span style={s2}>{this.props.text.substr(0,30)}</span> 
					</div>
					<span style={s3}>{this.props.id }</span>
				</div>
           </div>
		</a>
       )
    }
});


var ItemgpPhoto = React.createClass({
	
    componentDidMount: function(){

    },
    render: function(){
		var s1 = {'width':'100%','font-size':'22px','text-align':'center'}
    	var s4={ opacity: '1',float: 'left',height:'520px',width:'100%',overflow: 'hidden', display: 'block', 'background-image': 'url(' + this.props.data + ')', 'background-size': 'cover','background-position':'25% 0%', 'background-repeat': 'no-repeat' };
        return (
		 <a href={this.props.href} target="_blank">
        	<div className="grid-item grid-item--fbPhoto-width grid-item--fbPhoto-height card" style={{'margin':'5px 5px 5px 5px'}}>
				<div className="card-image" style={s4}></div>
			 </div>
          </a>
       )
    }
});

var ItemgpText = React.createClass({
    componentDidMount: function(){

    },
    render: function(){
    	var s1 = {'width':'100%','font-size':'22px','text-align':'center'}
		var s2 = {'min-height':'100px','text-align':'center'}
		var s3 = {'width':'100%','text-align':'center'}
        return (
		<a href={this.props.href} target="_blank">
        	<div className="grid-item grid-item--text-width grid-item--text-height card-panel" style={{'margin':'5px 5px 5px 5px','background-color':'#3a5795'}}>
                  <div className="white-text">
				   <p style={s1} className="fa fa-google-plus" ></p>
			       <p style={s2}>{this.props.data.substr(0,70) + "..."}</p> 
				   <p style={s3} >{this.props.id}</p> 
				  </div>
			</div>
        </a>
       )
    }
});




var Wall = React.createClass({
    
   
    componentDidMount:function(){
		jQuery(document).ready(function () {

            jQuery(this.refs.grids.getDOMNode()).masonry({
                itemSelector: '.grid-item',
                columnWidth: 240
            });

        });	
	},
    render: function() {
        var urlTitle=this.props.returnurl+ '/Comments?id=' + this.props.id + '&type='+this.props.type+'&page=1&q=';
		var url="";
		var commentNodes = this.props.data.map(function (item,i) {
		
       	return (
			    <div>
					 {item.VideoID ?
					     item.VideoSource=="Youtube" ?
					 		<ItemYoutube data={item.VideoID } text={item.Text } id={item.ProfileName}/>
						 : item.VideoSource=="Vimeo" ?
						  <ItemVimeo data={item.VideoID }/>
						 :false
					  
					  : item.PhotoUrl && item.Text != "" && item.Datasource=="Facebook" ?  
						 <ItemFbTextPhoto photo={item.PhotoUrl } text={item.Text } id={item.ProfileName}  href={"https://www.facebook.com/" + item.ProfileID + "/posts/" + item.ID.split("_")[1] }/>
					  
					  : item.PhotoUrl && item.Datasource=="Facebook" ?  
						 <ItemFbPhoto data={item.PhotoUrl }  href={"https://www.facebook.com/" + item.ProfileID + "/posts/" + item.ID.split("_")[1]}/>
					  
					  : (item.PhotoUrl == null || item.PhotoUrl == 'null') && item.Text != "" && item.Datasource=="Facebook" ?  
						 <ItemfbText data={item.Text } id={item.ProfileName}  href={"https://www.facebook.com/" + item.ProfileID + "/posts/" + item.ID.split("_")[1]} />
                      
					  : (item.PhotoUrl == null || item.PhotoUrl == 'null') && item.Text != "" && item.Datasource=="Twitter" && item.Sentiment=="Positive" ?  
						 <ItemtwText data={item.Text } id={item.ProfileID} sentiment="#4CAF50" href={"https://twitter.com/" + item.ProfileID.substr(1) + "/status/" + item.ID} />
					  
					  : (item.PhotoUrl == null || item.PhotoUrl == 'null') && item.Text != "" && item.Datasource=="Twitter"  && item.Sentiment=="Negative" ?  
						 <ItemtwText data={item.Text } id={item.ProfileID} sentiment="#d0181e" href={"https://twitter.com/" + item.ProfileID.substr(1) + "/status/" + item.ID} />
					  
					  : (item.PhotoUrl == null || item.PhotoUrl == 'null') && item.Text != "" && item.Datasource=="Twitter"  && item.Sentiment=="Neutral" ?  
						 <ItemtwText data={item.Text } id={item.ProfileID} sentiment="#9e9e9e" href={"https://twitter.com/" + item.ProfileID.substr(1) + "/status/" + item.ID} />
					  
					  : item.PhotoUrl && item.Text != "" && item.Datasource=="Twitter" ?  
						 <ItemtwTextPhoto photo={item.PhotoUrl} text={item.Text } id={item.ProfileID} href={"https://twitter.com/" + item.ProfileID.substr(1) + "/status/" + item.ID} />
					  
					  : item.PhotoUrl && item.Text != "" && item.Datasource=="Googleplus" ?  
						 <ItemgpTextPhoto photo={item.PhotoUrl } text={item.Text } id={item.ProfileName} href={"https://plus.google.com/" + item.ProfileID}/>
					  
					  : item.PhotoUrl && item.Datasource=="Googleplus" ?  
						 <ItemgpPhoto data={item.PhotoUrl } href={"https://plus.google.com/" + item.ProfileID}/>
					  
					  : (item.PhotoUrl == null || item.PhotoUrl == 'null') && item.Text != "" && item.Datasource=="Googleplus" ?  
						 <ItemgpText data={item.Text } id={item.ProfileName} href={"https://plus.google.com/" + item.ProfileID} />
                      
					  
					  : item.PhotoUrl && item.Datasource=="Instagram" ?  
						 <ItemInstagramPhoto data={item.PhotoUrl } href={"https://instagram.com/" + item.ProfileID.substr(1)}/>
					  
					  : item.PhotoUrl && item.Datasource=="Tumblr" ?  
					  	 <ItemTmbTextPhoto photo={item.PhotoUrl } text={item.Text } id={item.ProfileName} href={"http://" + item.ProfileID + ".tumblr.com"}/>
					  
					  //: item.PhotoUrl && item.Datasource=="Tumblr" ?  
					  //	 <ItemTmbPhoto data={item.PhotoUrl }/>
					  
					  // : (item.PhotoUrl == null || item.PhotoUrl == 'null') && item.Text != "" && item.Datasource=="Tumblr" ?  
					  //   <ItemTmbText data={item.Text } id={item.ProfileName} />
                      
					  : false}
				 </div>
          );
        });

        return (
          <section className="content-module">
            <header className="content-module-header">
            <div className="row">
              <div className="col s12 m9">
               <h3><a href={urlTitle}>{this.props.title}</a>
			   </h3>
			  </div>
			  
           </div>
            </header>
                   <div className="grid" ref="grids">
					 {commentNodes}
                   </div>
            </section>
       );
    }
});



module.exports = Wall;



//DetailWidgetRunner.infiniteCardWidget("bolly_data327",document.getElementById('comments'),"popular",10,"",null,"/comments/");
