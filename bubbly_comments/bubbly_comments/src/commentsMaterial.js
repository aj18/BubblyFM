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
var LoadMaterialDialog = React.createClass({
   componentWillMount: function () {
     debugger;
     jQuery('#dialog').load( this.props.data );
  	},
   render: function(){
        return (
       <div id="dialog"></div>
         )
    }
});
var MyMaterialDialog = React.createClass({
   render: function(){
    debugger;
        return (
       <div>
        <p>
            <a className="waves-effect waves-light btn modal-trigger  light-blue" href={"#" + this.props.itemid}>Modal</a>
        </p>
        <div id={this.props.itemid} className="modal">
            <div className="modal-content">
                <blockquote className="twitter-tweet"
				  data-link-color="#55acee" lang="es">
				<p lang="en">{this.props.text}</p>
				— {this.props.name} ({this.props.id})
				<a href={"https://twitter.com/" + this.props.id.substr(1) + "/status/" + this.props.itemid}>
				  {this.props.date}
				</a>
				</blockquote>
            </div>
            <div className="modal-footer">
                <a href="#" className="waves-effect waves-green btn-flat modal-action modal-close">Close</a>
            </div>
        </div>
    </div>
         )
    }
});

var MyDialogButton = React.createClass({
          
    componentDidMount: function(){
         
    },
    childHandleClick: function(e) {
      //  debugger;

        
        
    },
    onbuttonclick:function(){
	   debugger;
    },
    render: function(){
        return (
            <button type="button" id={this.props.pageUrl} onClick={this.onbuttonclick.bind(this)} ><i  className="fa fa-external-link-square"></i></button>
	     )
    }
});

var CommentListMaterial = React.createClass({
    
    getInitialState: function() {
        return {
            value: 'select'
        }
    },
    componentDidMount:function(){
	$(document).ready(function () {
            $.getScript('http://platform.twitter.com/widgets.js')
            // init Masonry after all images have loaded
            var $grid = $('.grid').imagesLoaded(function () {
                $grid.masonry({
                    itemSelector: '.grid-item',
                    percentPosition: true,
                    columnWidth: '.grid-sizer'
                });
            });

        });
	},
    change: function(event){
    	console.log("Selection : " + event.target.value);
        this.setState({value: event.target.value});
      
        switch(event.target.value) {
            case "Instagram":
                DetailWidgetRunner.infiniteCardWidget(this.props.id,this.props.container,"Source",100,"Instagram",null,'http://bharatmovies.social');
               
                break;
            case "Googleplus":
                DetailWidgetRunner.infiniteCardWidget(this.props.id,this.props.container,"Source",100,"GooglePlus",null,'http://bharatmovies.social');
                break;
            case "select":
                if(this.props.q  == "tumblr"){
                    DetailWidgetRunner.infiniteCardWidget(this.props.id,this.props.container,"Source",100,"tumblr",null,'http://bharatmovies.social');
                }else if(this.props.q  == "Facebook"){
                    DetailWidgetRunner.infiniteCardWidget(this.props.id,this.props.container,"Source",100,"Facebook",null,'http://bharatmovies.social');
                }
                else if(this.props.q  == "Googleplus"){
                    DetailWidgetRunner.infiniteCardWidget(this.props.id,this.props.container,"Source",100,"Googleplus",null,'http://bharatmovies.social');
                }
                else if(this.props.q  == "Instagram"){
                    DetailWidgetRunner.infiniteCardWidget(this.props.id,this.props.container,"Source",100,"Instagram",null,'http://bharatmovies.social');
                }
                break;
            case "Female","Male":
                DetailWidgetRunner.infiniteCardWidget(this.props.id,this.props.container,"gender",100,event.target.value,null,'http://bharatmovies.social');
                break;
            default:
                DetailWidgetRunner.infiniteCardWidget(this.props.id,this.props.container,event.target.value,100,"",null,'http://bharatmovies.social');
        }
    },
    render: function() {
        var s2 = { 'min-height': '60px','margin': '-5px'};
        var urlTitle=this.props.returnurl+ '/Comments?id=' + this.props.id + '&type='+this.props.type+'&page=1&q=';
		var url="";
        var s8 = { 'float': 'right', 'padding-right': '5px','padding-top': '5px','color':'#039be5'};
        var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;
        var date = Date.parse(Date().toString());
        var s5 = {'height': '48px','width': '48px','padding': '4px','border-bottom':'none'};

        var commentNodes = this.props.data.map(function (item,i) {
       	return (
			    <div className="grid-item col s12 m4">
					  <div className="col s12">
					   <div className="card">
						{item.VideoID ? <div className="fluidvids-youtube">
							<FluidVid className="activator" src={"http://www.youtube.com/embed/" + item.VideoID + "?rel=0"} />
						  </div>
					   : item.Datasource=="Instagram" ? 
					    <div>
						 <div className="card-image"> <img className="activator" src={item.PhotoUrl} />
						 </div>
						 <span style={s8} className="fi-social-instagram" ></span>
						</div>
					  : item.Datasource=="GooglePlus" ? 
						 <div>
						  <div className="card-image"> <img className="activator"  src={item.PhotoUrl} />
						  </div>
						  <span style={s8} className="fa fa-google-plus-square" ></span>
						</div>
					  : item.Datasource=="Tumblr" ? 
					   <div>
						<div className="card-image"> <img  className="activator" src={item.PhotoUrl} />
						</div>
						<span style={s8} className="fa fa-tumblr-square" ></span>
					   </div>
					  : item.Datasource=="Twitter" ? 
					    <div>
						 <div className="card-image"> <img  className="activator" src={item.PhotoUrl} />
						 </div>
						 <span style={s8} className="fa fa-twitter-square" ></span>
						</div>
					  : item.Datasource=="Facebook" ?
						<div>
						 <div className="card-image"> <img  className="activator" src={item.PhotoUrl} />
						 </div>
						 <span style={s8} className="fa fa-facebook-square" ></span>
						</div>
					  : false }
			    <div className="card-content">
			    <span className="card-title activator grey-text text-darken-4"><i className="mdi-navigation-more-vert right"></i></span>
				{item.Datasource=="Twitter" ?
				  <div >
					<a href={"https://twitter.com/" + item.ProfileID.substr(1)} target="_blank"  className="pull-left">
					   <img src={item.ProfilePhotoUrl} style={s5}/> </a>
					<div style={s2}>
					   <div>
						  <a href={"https://twitter.com/" + item.ProfileID.substr(1)} target="_blank">{item.ProfileName.substr(1)}     
						  </a>
					   </div>                
					 {item.ProfileID} ({item.ProfileFollower})
					</div>
                  
				  </div>
					: item.Datasource=="Instagram" ?
				  <div >
							<a href={"https://instagram.com/" + item.ProfileID} target="_blank" className="pull-left">
								<img src= {item.ProfilePhotoUrl} style={s5}/> </a>
							<div style={s2}>
								<a href={"https://instagram.com/" + item.ProfileID} target="_blank">{item.ProfileName}
								</a>
							</div>
				  </div>
				   : item.Datasource=="GooglePlus" ?
				  <div >
						<a href={"https://plus.google.com/" + item.ProfileID} target="_blank" className="pull-left">
							<img src= {item.ProfilePhotoUrl} style={s5}/> </a>
							<a href={"https://plus.google.com/" + item.ProfileID} target="_blank">{item.ProfileName}
							</a>
				  </div>
				 : item.Datasource=="Tumblr" ?
					<div >
							<a href={"http://" + item.ProfileID + ".tumblr.com"} target="_blank" className="pull-left">
							<img src= {item.ProfilePhotoUrl} style={s5}/> </a>
							<a href={"http://" + item.ProfileID + ".tumblr.com" } target="_blank">{item.ProfileName}
							</a>
				   </div>
				   : item.Datasource=="Facebook" ?
				   <div >
					<a href={"https://www.facebook.com/profile.php?id=" + item.ProfileID} target="_blank" className="pull-left">
					   <img src= {item.ProfilePhotoUrl} style={s5}/> </a>
						  <a href={"https://www.facebook.com/profile.php?id=" + item.ProfileID} target="_blank">{item.ProfileName}
						  </a>
				  </div>
						: false}
				  </div>
				  <div className="card-content">
				  
				   <div dangerouslySetInnerHTML={{__html: item.Text != null ? item.Text.replace(urlPattern, '<a style="word-break:break-word;" href="$&" target="_blank">$&</a>') :false}} >
				   </div>
				
			     </div>
					<div className="card-reveal">
						<span className="card-title grey-text text-darken-4"><i className="mdi-navigation-close right"></i></span>
						{item.Datasource=="Twitter" ?
							<blockquote className="twitter-tweet"
								  data-link-color="#55acee" lang="es">
								<p lang="en">{item.Text}</p>
								— {item.ProfileName} ({item.ProfileID})
								<a href={"https://twitter.com/" + item.ProfileID.substr(1) + "/status/" + item.ID}>
								  {item.DocDate}
								</a>
								</blockquote>
						: item.Datasource=="Instagram" ?
							<a className="embedly-card" href={item.ID}  ></a>
						: item.Datasource=="GooglePlus" ?
							<div className="g-post" data-href={item.ID}></div>
						: item.Datasource=="Tumblr" ?
							<a className="embedly-card" href={"https://embed.tumblr.com/embed/post/1khTIjEZ2P-OY8P4hcNhuQ/" + item.ID} ></a>
						: item.Datasource=="Facebook" ?
							<a className="embedly-card"  href={"https://www.facebook.com/" + item.ProfileID + "/posts/" + item.ID.split("_")[1]} ></a>
						: false}
					</div>
			      
				  <p style={{'padding-left': '5px'}}>
				  		
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
					
				  </p>
			</div>
		 </div>
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
			  
				  <div className="col s12 m3">Dropdown              
				   <select id="lang" onChange={this.change} value={this.state.value} className="pull-right" style={{'color': '#23527c','outline': 'none','cursor': 'pointer','font-weight': 'bold',  'font-size': '18px', 'display':'inherit'}}>
	                  <option value='select'>Comments on : {this.props.q }</option>
	                  <option value='positive'>Compliments on Social Media</option>
	                  <option value='negative'>Dark Comments on Social Media</option>
	                  <option value='popular'>Popular Comments On Social Media</option>
	                  <option value='celebrity'>Celebrity Comments On Social Media</option>
	                  <option value='question'>What people are Asking</option>
	                  <option value='Male'>Comments on Male population</option>
	                  <option value='Female'>Comments on Female population</option>
	                  <option value='neutral'>Comments - neutral</option>
	               </select>
				</div>
				
           </div>
            </header>
                   <div className="grid" ref="grid">
					<div className="grid-sizer"></div>
					<div className="divider"></div>
                    <div id="card-reveal" className="row">
					 {commentNodes}
					</div>
                   </div>
            </section>
       );
    }
});

var DetailWidgetRunner = function() {
    var infiniteCardWidget = function(id, container, type, limit, q, dataFromPage,returnUrl) {
        debugger;
        var returnurl="http://www.cricket24x7.social";
        if (returnUrl)
        {
            returnurl=returnUrl;
        }
        var title="Comments"
        if (type.toLowerCase() == "positive")
        {
            title = "Compliments on Social Media";
        }
        if (type.toLowerCase() == "negative")
        {
            title = "Dark Comments on Social Media";
        }
        if (type.toLowerCase() == "popular")
        {
            title = "Popular Comments On Social Media";             

        }
        if (type.toLowerCase() == "celebrity")
        {
            title = "Celebrity Comments On Social Media";
        }

        if (type.toLowerCase() == "question")
        {
            title = "What people are Asking";
        }
        
        if (type.toLowerCase() == "neutral")
        {
            title = "Comments";
        }

        if (type.toLowerCase() == "gender")
        {
            if( q.substring(0, 1).toLowerCase()=="m")
            {
                title = "Comments By Male population";
            }
            if( q.substring(0, 1).toLowerCase()=="f")
            {
                title = "Comments By Female population";
            }
            
        }

        if (type.toLowerCase() == "hashtag")
        {
            title = "Comments on : " +q;

        }
        if (type.toLowerCase() == "emotion")
        {
            title = "Comments on : " +q;

        }
        if (type.toLowerCase() == "trend")
        {
            title = "Comments on : " +q;

        }
        if (type.toLowerCase() == "geo")
        {

            title = "Comments on : " +q;

    }

        if (type.toLowerCase() == "source")
    {
        title = "Comments on : " +q;
    }

        if (type.toLowerCase() == "video")
    {
        title = "Video Comments";
    }
        if (type.toLowerCase() == "photo")
    {
        title = "Picture Comments";
    }
        var weburl = 'http://s24x7.azurewebsites.net/api/summary/comments';
        var url = weburl + '?id=' + id + '&type=' + type + '&skipby=0&limit=100&q=' + q;
 
        jQuery.ajax({
            url: url,
            type: 'GET',
            dataType: 'JSON',
            cache: false
        }).done(function(data) {
            jQuery.each(data, function(i, val) {
                if(val.PhotoUrl === null && (jQuery.trim(val.Text)==='' || val.Text === null)) // delete index -- By Arun on 05/20/2015
                {
                    delete data[i];
                }
            });
            React.render( < CommentListMaterial data = {data } id = { id } title = { title } returnurl={returnurl} type={type} q={q} container={container} styles={''}/>);

});

};
return {
    infiniteCardWidget: infiniteCardWidget
};
}();



module.exports=CommentListMaterial;


