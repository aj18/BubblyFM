var React = require("react");
var jQuery = require("jquery");
var navigate = require('react-mini-router').navigate;

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

var CommentList = React.createClass({
    
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
    	console.log("Container : " + this.props.container);

        this.setState({value: event.target.value});
        //navigate(event.target.value);
        window.location.href=event.target.value;
      
        
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



var container=document.getElementById('comments');var 
data= [{"ID":"163648403825_10153462408813826","Bookmark":"g1AAAADoeJzLYWBgYM5gTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpSAJJJ9v___88C892cA5_u88j1_JDEwCAel4VqkjFekxJAJtWjmbRPUwBkkiEpJuWxAEmGB0DqP7q7Vs8Amib2KCsLAMLrSkw","Datasource":"Facebook","DocDate":"07/20/2015 16:00:46","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQDkIA8NM3GwflpH&w=130&h=130&url=http%3A%2F%2Fimages.indianexpress.com%2F2015%2F07%2Fsakshi_twitter_t.jpg%3Fw%3D480&cfs=1&sx=60&sy=0&sw=267&sh=267","ProfileID":"163648403825","ProfileName":"Indian Express","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/163648403825/picture?type=square","Likes":null,"Retweet":null,"Text":"What is MS Dhoni doing while taking a break from cricket?\n\nHis wife Sakshi Dhoni revealed it on Twitter on Monday."},{"ID":"118306468218564_926138407435362","Bookmark":"g1AAAADoeJzLYWBgYM5gTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpSAJJJ9v___88C892cA5_u88j1_JDEwCAel4VqkjFekxJAJtWjmbRPUwBkkiEpJuWxAEmGB0DqP7q7Vs8Amib2KCsLAMLrSkw","Datasource":"Facebook","DocDate":"07/20/2015 15:30:00","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xap1/v/t1.0-1/p200x200/11231206_507091669448110_6633612262691550429_n.jpg?oh=830d997440d470014257a801a807cfa6&oe=564EF13D&__gda__=1448292152_9da46f5e2617dc52436ba791e956988a","ProfileID":"118306468218564","ProfileName":"MS Dhoni","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/118306468218564/picture?type=square","Likes":null,"Retweet":null,"Text":"LIKE the Official FB page of Kona Srikar Bharat, 1st wicket-keeper batsman to score a triple ton in the Ranji Trophy.\nwww.facebook.com/CircleofCricket.KonaSrikarBharat\n\n:Team MSD - Circle Of Cricket"},{"ID":"138762029513432_948912321831728","Bookmark":"g1AAAADoeJzLYWBgYM5gTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpSAJJJ9v___88C892cA5_u88j1_JDEwCAel4VqkjFekxJAJtWjmbRPUwBkkiEpJuWxAEmGB0DqP7q7Vs8Amib2KCsLAMLrSkw","Datasource":"Facebook","DocDate":"07/20/2015 12:42:38","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQDUlsZycbaq8oiw&w=130&h=130&url=http%3A%2F%2Fimages.indiatvnews.com%2Fsportsother%2FIndiaTv5eca03_Untitled-1.jpg&cfs=1&sx=30&sy=0&sw=440&sh=440","ProfileID":"138762029513432","ProfileName":"India TV","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/138762029513432/picture?type=square","Likes":null,"Retweet":null,"Text":"MS Dhoni's wife Sakshi took to microblogging site Twitter to showcase how captain cool is keeping himself busy at home!"},{"ID":"153808061303123_1309806492369935","Bookmark":"g1AAAADoeJzLYWBgYM5gTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpSAJJJ9v___88C892cA5_u88j1_JDEwCAel4VqkjFekxJAJtWjmbRPUwBkkiEpJuWxAEmGB0DqP7q7Vs8Amib2KCsLAMLrSkw","Datasource":"Facebook","DocDate":"07/20/2015 10:32:18","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQBO9jsVb-F0_crZ&w=130&h=130&url=http%3A%2F%2Fwww.abplive.in%2Fincoming%2Farticle656489.ece%2Falternates%2FLANDSCAPE_480%2FSakshi%2520Dhoni.jpg&cfs=1&sx=41&sy=0&sw=300&sh=300","ProfileID":"153808061303123","ProfileName":"ABP News","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/153808061303123/picture?type=square","Likes":null,"Retweet":null,"Text":"MS Dhoni is spending time away from the cricket field in this manner."},{"ID":"759078590776834_1057536137597743","Bookmark":"g1AAAADoeJzLYWBgYM5gTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpSAJJJ9v___88C892cA5_u88j1_JDEwCAel4VqkjFekxJAJtWjmbRPUwBkkiEpJuWxAEmGB0DqP7q7Vs8Amib2KCsLAMLrSkw","Datasource":"Facebook","DocDate":"07/20/2015 10:31:50","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQBO9jsVb-F0_crZ&w=130&h=130&url=http%3A%2F%2Fwww.abplive.in%2Fincoming%2Farticle656489.ece%2Falternates%2FLANDSCAPE_480%2FSakshi%2520Dhoni.jpg&cfs=1&sx=41&sy=0&sw=300&sh=300","ProfileID":"759078590776834","ProfileName":"ABP Live","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/759078590776834/picture?type=square","Likes":null,"Retweet":null,"Text":"MS Dhoni is spending time away from the cricket field in this manner."},{"ID":"118306468218564_926079424107927","Bookmark":"g1AAAADoeJzLYWBgYM5gTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpSAJJJ9v___88C892cA5_u88j1_JDEwCAel4VqkjFekxJAJtWjmbRPUwBkkiEpJuWxAEmGB0DqP7q7Vs8Amib2KCsLAMLrSkw","Datasource":"Facebook","DocDate":"07/20/2015 10:30:01","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQBQRFUPQmHt591V&w=130&h=130&url=https%3A%2F%2Fwww.facebook.com%2Fads%2Fimage%2F%3Fd%3DAQJKlIPc6Bs0C7tXecIVcGsSNuzWQul_a98y5P7KTQIzBSdBhur5ZPZr8gATxIMcW6oXO96oZVhYYmx7YExfSiejm3Eo-NoUBrHHeajOXEr9u6HZpwsvfmarFW85tzO8nXf6f_8C6krnUL8ZVFqc5mK5&cfs=1","ProfileID":"118306468218564","ProfileName":"MS Dhoni","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/118306468218564/picture?type=square","Likes":null,"Retweet":null,"Text":"#100Women If you know a woman who has made a difference in your community, here's your chance to recognize her.\n\n:Team MSD- Circle Of Cricket"}]
var type="positive";
var returnurl="http://bharatmovies.social";
var title="Popular comments on social media";
var id="cric_data3009";
var q="Male";

//React.render(<CommentList data={data} id={id} title={title} returnurl={returnurl} type={type} q={q} container={container}/>, container);

var DetailWidgetRunner = function() {
    var infiniteCardWidget = function(id, container, type, limit, q, dataFromPage,returnUrl) {

	var returnurl="http://www.cricket24x7.social/Comments";
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
debugger;
            React.render(<CommentList data={data} id={id} title={title} returnurl={returnurl} type={type} limit={limit} q={q} container={container}/>, container);

});

};
return {
    infiniteCardWidget: infiniteCardWidget
};
}();


DetailWidgetRunner.infiniteCardWidget("bolly_data337",document.getElementById('comments'),"source",10,"twitter",null,"/comments/");
