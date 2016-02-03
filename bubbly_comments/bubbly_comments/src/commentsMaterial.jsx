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
			    <div className="grid-item col s12 m4">
					  <div className="col s12">
					   <div className="card">
					       {item.VideoID ? <div className="fluidvids-youtube">
							<FluidVid src={"http://www.youtube.com/embed/" + item.VideoID + "?rel=0" } />
						</div>
					       : item.Datasource=="Instagram" ?
					    <div>
						 <div className="card-image">
						 <img src={item.PhotoUrl} />
						 </div>

					    </div>
					       : item.Datasource=="GooglePlus" ?
						 <div>
						  <div className="card-image">
						  <img src={item.PhotoUrl} />
						  </div>

						 </div>
					       : item.Datasource=="Tumblr" ?
					   <div>
						<div className="card-image">
						<img src={item.PhotoUrl} />
						</div>

					   </div>
					       : item.Datasource=="Twitter" ?
					    <div>
						 <div className="card-image">
						 <img src={item.PhotoUrl} />
						 </div>

					    </div>
					       : item.Datasource=="Facebook" ?
						<div>
						 <div className="card-image">
						 <img src={item.PhotoUrl} />
						 </div>

						</div>
					       : false }
			    <div className="card-content" style={{'margin-bottom':'5px'}}>
			        {item.Datasource=="Twitter" ?
				  <div style={{'display':'inline-flex','width':'100%'}}>
					<a href={"https://twitter.com/" + item.ProfileID.substr(1)} target="_blank" className="pull-left">
					   <img src={item.ProfilePhotoUrl} style={s5} />
					</a>
					<div style={s2}>
					   <div>
						  <a href={"https://twitter.com/" + item.ProfileID.substr(1)} target="_blank">
						      {item.ProfileName.substr(1)}
						  </a>
					   </div>
					    {item.ProfileID} ({item.ProfileFollower})

					</div>
                  <span style={s8} className="fa fa-twitter-square"></span>
				  </div>
			        : item.Datasource=="Instagram" ?
				  <div style={{'display':'inline-flex','width':'100%'}}>
							<a href={"https://instagram.com/" + item.ProfileID} target="_blank" className="pull-left">
								<img src={item.ProfilePhotoUrl} style={s5} />
							</a>
							<div style={s2}>
								<a href={"https://instagram.com/" + item.ProfileID} target="_blank">
								    {item.ProfileName}
								</a>
							</div>
                      <span style={s8} className="fi-social-instagram"></span>
				  </div>
			        : item.Datasource=="GooglePlus" ?
				  <div style={{'display':'inline-flex','width':'100%'}}>
						<a href={"https://plus.google.com/" + item.ProfileID} target="_blank" className="pull-left">
							<img src={item.ProfilePhotoUrl} style={s5} />
						</a>
						<div style={s2}>
                      <a href={"https://plus.google.com/" + item.ProfileID} target="_blank">
                          {item.ProfileName}
                      </a>
						</div>
                      <span style={s8} className="fa fa-google-plus-square"></span>
				  </div>
			        : item.Datasource=="Tumblr" ?
					<div style={{'display':'inline-flex','width':'100%'}}>
							<a href={"http://" + item.ProfileID + ".tumblr.com" } target="_blank" className="pull-left">
							<img src={item.ProfilePhotoUrl} style={s5} />
							</a>
						<div style={s2}>
                        <a href={"http://" + item.ProfileID + ".tumblr.com" } target="_blank">
                            {item.ProfileName}
                        </a>
						</div>
                        <span style={s8} className="fa fa-tumblr-square"></span>
					</div>
			        : item.Datasource=="Facebook" ?
				   <div style={{'display':'inline-flex','width':'100%'}}>
					<a href={"https://www.facebook.com/profile.php?id =" + item.ProfileID} target=" _blank" className="pull-left">
					   <img src={item.ProfilePhotoUrl} style={s5} />
					</a>
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

				   <div dangerouslySetInnerHTML={{__html: item.Text != null ? item.Text.replace(urlPattern, '<a style="word-break:break-word;" href="$&" target="_blank">$&</a>') :false}}>
				   </div>

				  </div>


				  <p style={{'display':'block','margin':'10px','color':'black'}}>

				      { item.Datasource=="Instagram" ?
				      Math.round((date/1000 - parseInt(item.DocDate)) * 1.1574074074074E-8) >= 1 ?
						<span>{Math.round((date/1000 - parseInt(item.DocDate)) * 1.1574074074074E-8)}d</span>
				      : Math.round((date/1000 - parseInt(item.DocDate)) * 1.1574074074074E-8) < 1 && Math.round((date/1000 - parseInt(item.DocDate)) * 2.7777777777778E-7) > 1 ?
											<span>{Math.round((date/1000 - parseInt(item.DocDate)) * 2.7777777777778E-7)}h</span>
				      : Math.round((date/1000 - item.DocDate) * 2.7777777777778E-7) < 1 ?
											<span>{Math.round((date/1000 - parseInt(item.DocDate)) / 60000)}m</span>
				      :false
				      :  Math.round((date - Date.parse(item.DocDate)) * 1.1574074074074E-8) >= 1 ?
						<span>{Math.round((date - Date.parse(item.DocDate)) * 1.1574074074074E-8)}d</span>
				      : Math.round((date - Date.parse(item.DocDate)) * 1.1574074074074E-8) < 1 && Math.round((date - Date.parse(item.DocDate)) * 2.7777777777778E-7) > 1 ?
											<span>{Math.round((date - Date.parse(item.DocDate)) * 2.7777777777778E-7)}h</span>
				      : Math.round((date - Date.parse(item.DocDate)) * 2.7777777777778E-7) < 1 ?
											<span>{Math.round((date - Date.parse(item.DocDate)) / 60000)}m</span>
				      :false
				      }
				        <span style={{'display':'block','float':'right','width':'38%','margin-left':'10px','color':'black'}}>
				            Source :
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
          );
        });
        return (
          <section className="content-module">
            <header className="content-module-header">
            <div className="row">
              <div className="col s12 m9">
               <h3>
                   {this.props.title}
               </h3>
              </div>


				<div className="col s12 m3">
					   <select id="lang" onChange={this.change} value={this.state.value} className="pull-right" style={{'color': '#23527c','outline': 'none','cursor': 'pointer','font-weight': 'bold',  'font-size': '18px', 'display':'inherit'}}>
		                  <option value='select'>Select</option>
		                  <option value={this.props.returnurl + "?id=" + this.props.id + "&type=positive&skipby=0&limit=" + this.props.limit + "&q=" }>Compliments on Social Media</option>
		                  <option value={this.props.returnurl + "?id=" + this.props.id + "&type=negative&skipby=0&limit=" + this.props.limit + "&q=" }>Dark Comments on Social Media</option>
		                  <option value={this.props.returnurl + "?id=" + this.props.id + "&type=popular&skipby=0&limit=" + this.props.limit + "&q=" }>Popular Comments On Social Media</option>
		                  <option value={this.props.returnurl + "?id=" + this.props.id + "&type=celebrity&skipby=0&limit=" + this.props.limit + "&q=" }>Celebrity Comments On Social Media</option>
		                  <option value={this.props.returnurl + "?id=" + this.props.id + "&type=question&skipby=0&limit=" + this.props.limit + "&q=" }>What people are Asking</option>
		                  <option value={this.props.returnurl + "?id=" + this.props.id + "&type=gender&skipby=0&limit=" + this.props.limit + "&q=Male" }>Comments on Male population</option>
		                  <option value={this.props.returnurl + "?id=" + this.props.id + "&type=gender&skipby=0&limit=" + this.props.limit + "&q=Female" }>Comments on Female population</option>
		                  <option value={this.props.returnurl + "?id=" + this.props.id + "&type=neutral&skipby=0&limit=" + this.props.limit + "&q=" }>Comments - neutral</option>

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
data = [{ "ID": "684020650021892097", "Bookmark": "g1AAAAE0eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTSy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____fxaY4-Yc-PxBwwKHb0kMDCrSWSBzFBHm4DMmyQFIJtWjmSTkLwQyyRnNJEt8JuWxAEmGBiAFNGw_immeZkDTlNejmWZG2LQDENNQ3KZ7LAjkNomsLADT_WU9", "Datasource": "Twitter", "DocDate": "Mon Jan 04 14:36:46 +0000 2016", "Address": null, "Country": "()", "Sentiment": "Neutral", "Gender": "F", "VideoUrl": null, "VideoSource": null, "VideoID": null, "PhotoUrl": null, "ProfileID": "@plan1t", "ProfileName": "@sue", "ProfileScreenName": null, "ProfileFollower": "29", "ProfileFriends": "85", "ProfilePhotoUrl": "http://abs.twimg.com/sticky/default_profile_images/default_profile_3_normal.png", "Likes": null, "Retweet": null, "Text": "@BiggBoss @PriyaSometimes @princenarula88 yes and always been" }, { "ID": "684020065688129537", "Bookmark": "g1AAAAE0eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTSy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____fxaY4-Yc-PxBwwKHb0kMDCrSWSBzFBHm4DMmyQFIJtWjmSTkLwQyyRnNJEt8JuWxAEmGBiAFNGw_immeZkDTlNejmWZG2LQDENNQ3KZ7LAjkNomsLADT_WU9", "Datasource": "Twitter", "DocDate": "Mon Jan 04 14:34:26 +0000 2016", "Address": null, "Country": "()", "Sentiment": "Positive", "Gender": "F", "VideoUrl": null, "VideoSource": null, "VideoID": null, "PhotoUrl": null, "ProfileID": "@Venky_Luv", "ProfileName": "@Venky", "ProfileScreenName": null, "ProfileFollower": "82", "ProfileFriends": "82", "ProfilePhotoUrl": "http://pbs.twimg.com/profile_images/541586802445152256/2w-HLLpl_normal.jpeg", "Likes": null, "Retweet": null, "Text": "Since from day 1 @BiggBoss is Mandana 's show without her show wud've been flop. Mandy shud win #BB9." }, { "ID": "684020061443600384", "Bookmark": "g1AAAAE0eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTSy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____fxaY4-Yc-PxBwwKHb0kMDCrSWSBzFBHm4DMmyQFIJtWjmSTkLwQyyRnNJEt8JuWxAEmGBiAFNGw_immeZkDTlNejmWZG2LQDENNQ3KZ7LAjkNomsLADT_WU9", "Datasource": "Twitter", "DocDate": "Mon Jan 04 14:34:25 +0000 2016", "Address": null, "Country": "()", "Sentiment": "Neutral", "Gender": "M", "VideoUrl": null, "VideoSource": null, "VideoID": null, "PhotoUrl": null, "ProfileID": "@RakeshMHTre", "ProfileName": "@Rakesh म्हात्रे", "ProfileScreenName": null, "ProfileFollower": "180", "ProfileFriends": "385", "ProfilePhotoUrl": "http://pbs.twimg.com/profile_images/679643211355283456/n2pDsueX_normal.png", "Likes": null, "Retweet": null, "Text": "Bigg Boss 9: 5 shocking revelations made by Suyyash Rai after getting eliminated from Salman Khan’s show! https://t.co/0H3tMpRfkK\n#BB9" }, { "ID": "684020024047054850", "Bookmark": "g1AAAAE0eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTSy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____fxaY4-Yc-PxBwwKHb0kMDCrSWSBzFBHm4DMmyQFIJtWjmSTkLwQyyRnNJEt8JuWxAEmGBiAFNGw_immeZkDTlNejmWZG2LQDENNQ3KZ7LAjkNomsLADT_WU9", "Datasource": "Twitter", "DocDate": "Mon Jan 04 14:34:16 +0000 2016", "Address": null, "Country": "()", "Sentiment": "Neutral", "Gender": "M", "VideoUrl": null, "VideoSource": null, "VideoID": null, "PhotoUrl": null, "ProfileID": "@NoorAinShazia21", "ProfileName": "@Noor ain shazia", "ProfileScreenName": null, "ProfileFollower": "1", "ProfileFriends": "37", "ProfilePhotoUrl": "http://abs.twimg.com/sticky/default_profile_images/default_profile_3_normal.png", "Likes": null, "Retweet": null, "Text": "@BiggBoss @PriyaSometimes @princenarula88 she tells this t every captain thr is nothing new #BB9WithSalmanKhan" }, { "ID": "684020006078779392", "Bookmark": "g1AAAAE0eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTSy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____fxaY4-Yc-PxBwwKHb0kMDCrSWSBzFBHm4DMmyQFIJtWjmSTkLwQyyRnNJEt8JuWxAEmGBiAFNGw_immeZkDTlNejmWZG2LQDENNQ3KZ7LAjkNomsLADT_WU9", "Datasource": "Twitter", "DocDate": "Mon Jan 04 14:34:12 +0000 2016", "Address": null, "Country": "()", "Sentiment": "Neutral", "Gender": "M", "VideoUrl": null, "VideoSource": null, "VideoID": null, "PhotoUrl": null, "ProfileID": "@narg_narg", "ProfileName": "@NARGiS", "ProfileScreenName": null, "ProfileFollower": "31", "ProfileFriends": "23", "ProfilePhotoUrl": "http://pbs.twimg.com/profile_images/670847707737686016/n7Xo4kmv_normal.jpg", "Likes": null, "Retweet": null, "Text": "@BiggBoss @PriyaSometimes @princenarula88 yes! #bb9" }, { "ID": "684019005854597121", "Bookmark": "g1AAAAE0eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTSy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____fxaY4-Yc-PxBwwKHb0kMDCrSWSBzFBHm4DMmyQFIJtWjmSTkLwQyyRnNJEt8JuWxAEmGBiAFNGw_immeZkDTlNejmWZG2LQDENNQ3KZ7LAjkNomsLADT_WU9", "Datasource": "Twitter", "DocDate": "Mon Jan 04 14:30:14 +0000 2016", "Address": null, "Country": "()", "Sentiment": "Neutral", "Gender": "M", "VideoUrl": null, "VideoSource": null, "VideoID": null, "PhotoUrl": "http://pbs.twimg.com/media/CX4ENG5VAAAFXTn.png", "ProfileID": "@BiggBoss", "ProfileName": "@Bigg Boss", "ProfileScreenName": null, "ProfileFollower": "432389", "ProfileFriends": "127", "ProfilePhotoUrl": "http://pbs.twimg.com/profile_images/676298831097495552/aS3JB74V_normal.png", "Likes": null, "Retweet": null, "Text": ".@PriyaSometimes declares @princenarula88 as a biased captain!\nDo you agree with her? Reply using #BB9! https://t.co/UpYPSe34GF" }, { "ID": "684007637797609474", "Bookmark": "g1AAAAE0eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTSy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____fxaY4-Yc-PxBwwKHb0kMDCrSWSBzFBHm4DMmyQFIJtWjmSTkLwQyyRnNJEt8JuWxAEmGBiAFNGw_immeZkDTlNejmWZG2LQDENNQ3KZ7LAjkNomsLADT_WU9", "Datasource": "Twitter", "DocDate": "Mon Jan 04 13:45:03 +0000 2016", "Address": null, "Country": "()", "Sentiment": "Neutral", "Gender": "M", "VideoUrl": null, "VideoSource": null, "VideoID": null, "PhotoUrl": "http://pbs.twimg.com/media/CX4D_l4UsAAQ5Mq.png", "ProfileID": "@BiggBoss", "ProfileName": "@Bigg Boss", "ProfileScreenName": null, "ProfileFollower": "432389", "ProfileFriends": "127", "ProfilePhotoUrl": "http://pbs.twimg.com/profile_images/676298831097495552/aS3JB74V_normal.png", "Likes": null, "Retweet": null, "Text": ".@suyyashrai left #BB9 house last night!\nPick an emoticon for his attitude towards the game! https://t.co/JWo9M4VaA7" }, { "ID": "683986269303472128", "Bookmark": "g1AAAAE0eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTSy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____fxaY4-Yc-PxBwwKHb0kMDCrSWSBzFBHm4DMmyQFIJtWjmSTkLwQyyRnNJEt8JuWxAEmGBiAFNGw_immeZkDTlNejmWZG2LQDENNQ3KZ7LAjkNomsLADT_WU9", "Datasource": "Twitter", "DocDate": "Mon Jan 04 12:20:09 +0000 2016", "Address": null, "Country": "()", "Sentiment": "Positive", "Gender": "M", "VideoUrl": null, "VideoSource": null, "VideoID": null, "PhotoUrl": "http://pbs.twimg.com/media/CX4B4wKUMAECXzV.png", "ProfileID": "@BiggBoss", "ProfileName": "@Bigg Boss", "ProfileScreenName": null, "ProfileFollower": "432389", "ProfileFriends": "127", "ProfilePhotoUrl": "http://pbs.twimg.com/profile_images/676298831097495552/aS3JB74V_normal.png", "Likes": null, "Retweet": null, "Text": "Is @keithsequeira playing safe to avoid controversies?\nWhat's your take on this? #BB9 https://t.co/v7Ka5o8tfF" }, { "ID": "683974543841607680", "Bookmark": "g1AAAAE0eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTSy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____fxaY4-Yc-PxBwwKHb0kMDCrSWSBzFBHm4DMmyQFIJtWjmSTkLwQyyRnNJEt8JuWxAEmGBiAFNGw_immeZkDTlNejmWZG2LQDENNQ3KZ7LAjkNomsLADT_WU9", "Datasource": "Twitter", "DocDate": "Mon Jan 04 11:33:33 +0000 2016", "Address": null, "Country": "()", "Sentiment": "Positive", "Gender": "F", "VideoUrl": null, "VideoSource": null, "VideoID": null, "PhotoUrl": null, "ProfileID": "@annajawaid", "ProfileName": "@AnnaJaay", "ProfileScreenName": null, "ProfileFollower": "265", "ProfileFriends": "47", "ProfilePhotoUrl": "http://pbs.twimg.com/profile_images/680931565451513856/ta9dwMdZ_normal.jpg", "Likes": null, "Retweet": null, "Text": "Suyash saying he &amp; Tharki wanted to hit #RishabhSinha ?\n\nWhy? Because hes sexier than yous? Better person than yous? \n\n#BB9 \n\nMorons !!" }, { "ID": "683974540641177600", "Bookmark": "g1AAAAE0eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTSy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____fxaY4-Yc-PxBwwKHb0kMDCrSWSBzFBHm4DMmyQFIJtWjmSTkLwQyyRnNJEt8JuWxAEmGBiAFNGw_immeZkDTlNejmWZG2LQDENNQ3KZ7LAjkNomsLADT_WU9", "Datasource": "Twitter", "DocDate": "Mon Jan 04 11:33:32 +0000 2016", "Address": null, "Country": "()", "Sentiment": "Neutral", "Gender": "F", "VideoUrl": null, "VideoSource": null, "VideoID": null, "PhotoUrl": null, "ProfileID": "@saranazo123", "ProfileName": "@sara sultana", "ProfileScreenName": null, "ProfileFollower": "19", "ProfileFriends": "170", "ProfilePhotoUrl": "http://pbs.twimg.com/profile_images/597763521418375168/9jDbPwdd_normal.jpg", "Likes": null, "Retweet": null, "Text": "#BB9  1" }, { "ID": "683973674429329409", "Bookmark": "g1AAAAE0eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTSy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____fxaY4-Yc-PxBwwKHb0kMDCrSWSBzFBHm4DMmyQFIJtWjmSTkLwQyyRnNJEt8JuWxAEmGBiAFNGw_immeZkDTlNejmWZG2LQDENNQ3KZ7LAjkNomsLADT_WU9", "Datasource": "Twitter", "DocDate": "Mon Jan 04 11:30:06 +0000 2016", "Address": null, "Country": "()", "Sentiment": "Neutral", "Gender": "M", "VideoUrl": null, "VideoSource": null, "VideoID": null, "PhotoUrl": null, "ProfileID": "@BiggBoss", "ProfileName": "@Bigg Boss", "ProfileScreenName": null, "ProfileFollower": "432294", "ProfileFriends": "127", "ProfilePhotoUrl": "http://pbs.twimg.com/profile_images/676298831097495552/aS3JB74V_normal.png", "Likes": null, "Retweet": null, "Text": "#AndekhaAction\n'Khatam Karo Yaar' @RochelleMRao to @princenarula88 about his relationship with @Norafatehi! #BB9 https://t.co/AvR5JoysHQ" }, { "ID": "683962453957324800", "Bookmark": "g1AAAAE0eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTSy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____fxaY4-Yc-PxBwwKHb0kMDCrSWSBzFBHm4DMmyQFIJtWjmSTkLwQyyRnNJEt8JuWxAEmGBiAFNGw_immeZkDTlNejmWZG2LQDENNQ3KZ7LAjkNomsLADT_WU9", "Datasource": "Twitter", "DocDate": "Mon Jan 04 10:45:31 +0000 2016", "Address": null, "Country": "()", "Sentiment": "Neutral", "Gender": "M", "VideoUrl": null, "VideoSource": null, "VideoID": null, "PhotoUrl": null, "ProfileID": "@BiggBoss", "ProfileName": "@Bigg Boss", "ProfileScreenName": null, "ProfileFollower": "432294", "ProfileFriends": "127", "ProfilePhotoUrl": "http://pbs.twimg.com/profile_images/676298831097495552/aS3JB74V_normal.png", "Likes": null, "Retweet": null, "Text": "From Love birds to the controversial couple!\nWho are you rooting for in tonight's brawl between the duo? #BB9" }, { "ID": "683952059184381952", "Bookmark": "g1AAAAE0eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTSy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____fxaY4-Yc-PxBwwKHb0kMDCrSWSBzFBHm4DMmyQFIJtWjmSTkLwQyyRnNJEt8JuWxAEmGBiAFNGw_immeZkDTlNejmWZG2LQDENNQ3KZ7LAjkNomsLADT_WU9", "Datasource": "Twitter", "DocDate": "Mon Jan 04 10:04:12 +0000 2016", "Address": null, "Country": "()", "Sentiment": "Positive", "Gender": "M", "VideoUrl": null, "VideoSource": null, "VideoID": null, "PhotoUrl": "http://pbs.twimg.com/media/CX3ixdZUsAAtcp_.png", "ProfileID": "@BiggBoss", "ProfileName": "@Bigg Boss", "ProfileScreenName": null, "ProfileFollower": "432294", "ProfileFriends": "127", "ProfilePhotoUrl": "http://pbs.twimg.com/profile_images/676298831097495552/aS3JB74V_normal.png", "Likes": null, "Retweet": null, "Text": "One of our housemate very thoughtfully made this statement!\nWho would it be? #BB9 https://t.co/nsmziPjgS4" }, { "ID": "683943345240997889", "Bookmark": "g1AAAAE0eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTSy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____fxaY4-Yc-PxBwwKHb0kMDCrSWSBzFBHm4DMmyQFIJtWjmSTkLwQyyRnNJEt8JuWxAEmGBiAFNGw_immeZkDTlNejmWZG2LQDENNQ3KZ7LAjkNomsLADT_WU9", "Datasource": "Twitter", "DocDate": "Mon Jan 04 09:29:35 +0000 2016", "Address": null, "Country": "()", "Sentiment": "Neutral", "Gender": "M", "VideoUrl": null, "VideoSource": null, "VideoID": null, "PhotoUrl": "http://pbs.twimg.com/media/CX3a2PSUsAAiBF0.png", "ProfileID": "@BiggBoss", "ProfileName": "@Bigg Boss", "ProfileScreenName": null, "ProfileFollower": "432234", "ProfileFriends": "127", "ProfilePhotoUrl": "http://pbs.twimg.com/profile_images/676298831097495552/aS3JB74V_normal.png", "Likes": null, "Retweet": null, "Text": "Lost deep in his thoughts!\nShare the best caption for #RishabhSinha's image! #BB9 https://t.co/y4q6UCmYjA" }, { "ID": "683943287405842436", "Bookmark": "g1AAAAE0eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTSy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____fxaY4-Yc-PxBwwKHb0kMDCrSWSBzFBHm4DMmyQFIJtWjmSTkLwQyyRnNJEt8JuWxAEmGBiAFNGw_immeZkDTlNejmWZG2LQDENNQ3KZ7LAjkNomsLADT_WU9", "Datasource": "Twitter", "DocDate": "Mon Jan 04 09:29:21 +0000 2016", "Address": null, "Country": "()", "Sentiment": "Neutral", "Gender": "F", "VideoUrl": null, "VideoSource": null, "VideoID": null, "PhotoUrl": null, "ProfileID": "@rafia_baloch", "ProfileName": "@rafia baloch", "ProfileScreenName": null, "ProfileFollower": "42", "ProfileFriends": "195", "ProfilePhotoUrl": "http://pbs.twimg.com/profile_images/679018988521824256/raJ6PBO4_normal.jpg", "Likes": null, "Retweet": null, "Text": "@BiggBoss @manizhe 0" }, { "ID": "683942788216557568", "Bookmark": "g1AAAAE0eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTSy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____fxaY4-Yc-PxBwwKHb0kMDCrSWSBzFBHm4DMmyQFIJtWjmSTkLwQyyRnNJEt8JuWxAEmGBiAFNGw_immeZkDTlNejmWZG2LQDENNQ3KZ7LAjkNomsLADT_WU9", "Datasource": "Twitter", "DocDate": "Mon Jan 04 09:27:22 +0000 2016", "Address": null, "Country": "()", "Sentiment": "Neutral", "Gender": "M", "VideoUrl": null, "VideoSource": null, "VideoID": null, "PhotoUrl": null, "ProfileID": "@afreenbaz", "ProfileName": "@Afreen Bazmi", "ProfileScreenName": null, "ProfileFollower": "443", "ProfileFriends": "338", "ProfilePhotoUrl": "http://pbs.twimg.com/profile_images/672328210412150785/qs90iRXY_normal.jpg", "Likes": null, "Retweet": null, "Text": "@TanishaaMukerji calling Prince the biggest con &amp; Mandy second? Come on! Mandy can be a top ki con artist! #BB9WithSalmanKhan #BB9 #ABtalks" }, { "ID": "683942566174289920", "Bookmark": "g1AAAAE0eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTSy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____fxaY4-Yc-PxBwwKHb0kMDCrSWSBzFBHm4DMmyQFIJtWjmSTkLwQyyRnNJEt8JuWxAEmGBiAFNGw_immeZkDTlNejmWZG2LQDENNQ3KZ7LAjkNomsLADT_WU9", "Datasource": "Twitter", "DocDate": "Mon Jan 04 09:26:29 +0000 2016", "Address": null, "Country": "()", "Sentiment": "Neutral", "Gender": "M", "VideoUrl": null, "VideoSource": null, "VideoID": null, "PhotoUrl": "http://pbs.twimg.com/media/CX3aIqVWQAAqNn-.jpg", "ProfileID": "@samge4231", "ProfileName": "@♥SAM♥", "ProfileScreenName": null, "ProfileFollower": "1307", "ProfileFriends": "281", "ProfilePhotoUrl": "http://pbs.twimg.com/profile_images/683919795369177088/eMZKUmkH_normal.jpg", "Likes": null, "Retweet": null, "Text": "@RaoRochelle @keithsequeira Our #KeRo in #BB9 Today Episode Both looks #Fablous 😍 and their hardwork shows in their💪 https://t.co/w2VlgMLy5Y" }, { "ID": "683942459781595136", "Bookmark": "g1AAAAE0eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTSy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____fxaY4-Yc-PxBwwKHb0kMDCrSWSBzFBHm4DMmyQFIJtWjmSTkLwQyyRnNJEt8JuWxAEmGBiAFNGw_immeZkDTlNejmWZG2LQDENNQ3KZ7LAjkNomsLADT_WU9", "Datasource": "Twitter", "DocDate": "Mon Jan 04 09:26:04 +0000 2016", "Address": null, "Country": "()", "Sentiment": "Neutral", "Gender": "NA", "VideoUrl": null, "VideoSource": null, "VideoID": null, "PhotoUrl": null, "ProfileID": "@S2T_sahai", "ProfileName": "@IT Waali", "ProfileScreenName": null, "ProfileFollower": "41", "ProfileFriends": "182", "ProfilePhotoUrl": "http://pbs.twimg.com/profile_images/651399140056825856/6Fs6gRMh_normal.jpg", "Likes": null, "Retweet": null, "Text": "@BiggBoss Kishwar , because she is a woman of steel. Has done all her tasks 100% and speaks up for herself. Very cool, very awesome...#BB9" }, { "ID": "683928481961398272", "Bookmark": "g1AAAAE0eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTSy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____fxaY4-Yc-PxBwwKHb0kMDCrSWSBzFBHm4DMmyQFIJtWjmSTkLwQyyRnNJEt8JuWxAEmGBiAFNGw_immeZkDTlNejmWZG2LQDENNQ3KZ7LAjkNomsLADT_WU9", "Datasource": "Twitter", "DocDate": "Mon Jan 04 08:30:31 +0000 2016", "Address": null, "Country": "()", "Sentiment": "Positive", "Gender": "M", "VideoUrl": null, "VideoSource": null, "VideoID": null, "PhotoUrl": "http://pbs.twimg.com/media/CX3K5miUkAEaPRC.png", "ProfileID": "@BiggBoss", "ProfileName": "@Bigg Boss", "ProfileScreenName": null, "ProfileFollower": "432234", "ProfileFriends": "127", "ProfilePhotoUrl": "http://pbs.twimg.com/profile_images/676298831097495552/aS3JB74V_normal.png", "Likes": null, "Retweet": null, "Text": "It's time to rate @manizhe on her ability to perform tasks!\nOn a scale of 1-10, how much would you rate her? #BB9 https://t.co/MmHuuxYPlk" }, { "ID": "683917208536260608", "Bookmark": "g1AAAAE0eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTSy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____fxaY4-Yc-PxBwwKHb0kMDCrSWSBzFBHm4DMmyQFIJtWjmSTkLwQyyRnNJEt8JuWxAEmGBiAFNGw_immeZkDTlNejmWZG2LQDENNQ3KZ7LAjkNomsLADT_WU9", "Datasource": "Twitter", "DocDate": "Mon Jan 04 07:45:43 +0000 2016", "Address": null, "Country": "()", "Sentiment": "Neutral", "Gender": "M", "VideoUrl": null, "VideoSource": null, "VideoID": null, "PhotoUrl": "http://pbs.twimg.com/media/CX3DE4qU0AMAfHG.png", "ProfileID": "@BiggBoss", "ProfileName": "@Bigg Boss", "ProfileScreenName": null, "ProfileFollower": "432234", "ProfileFriends": "127", "ProfilePhotoUrl": "http://pbs.twimg.com/profile_images/676298831097495552/aS3JB74V_normal.png", "Likes": null, "Retweet": null, "Text": "Ticket to Finale is up for grabs!\nIf you had the power, Who would you present it to? #BB9 https://t.co/9xRWqi6itC" }, { "ID": "683906183174852609", "Bookmark": "g1AAAAE0eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTSy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____fxaY4-Yc-PxBwwKHb0kMDCrSWSBzFBHm4DMmyQFIJtWjmSTkLwQyyRnNJEt8JuWxAEmGBiAFNGw_immeZkDTlNejmWZG2LQDENNQ3KZ7LAjkNomsLADT_WU9", "Datasource": "Twitter", "DocDate": "Mon Jan 04 07:01:55 +0000 2016", "Address": null, "Country": "()", "Sentiment": "Neutral", "Gender": "M", "VideoUrl": null, "VideoSource": null, "VideoID": null, "PhotoUrl": "http://pbs.twimg.com/media/CX25DH8UsAA5FZR.png", "ProfileID": "@BiggBoss", "ProfileName": "@Bigg Boss", "ProfileScreenName": null, "ProfileFollower": "432234", "ProfileFriends": "127", "ProfilePhotoUrl": "http://pbs.twimg.com/profile_images/676298831097495552/aS3JB74V_normal.png", "Likes": null, "Retweet": null, "Text": "Wondering who @PriyaSometimes is talking about?\nFind out tonight at 10:30PM only on @ColorsTV! #BB9 https://t.co/UrO0ocQPHQ" }, { "ID": "683894678404464642", "Bookmark": "g1AAAAE0eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTSy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____fxaY4-Yc-PxBwwKHb0kMDCrSWSBzFBHm4DMmyQFIJtWjmSTkLwQyyRnNJEt8JuWxAEmGBiAFNGw_immeZkDTlNejmWZG2LQDENNQ3KZ7LAjkNomsLADT_WU9", "Datasource": "Twitter", "DocDate": "Mon Jan 04 06:16:12 +0000 2016", "Address": null, "Country": "()", "Sentiment": "Neutral", "Gender": "M", "VideoUrl": null, "VideoSource": null, "VideoID": null, "PhotoUrl": null, "ProfileID": "@BiggBoss", "ProfileName": "@Bigg Boss", "ProfileScreenName": null, "ProfileFollower": "432234", "ProfileFriends": "127", "ProfilePhotoUrl": "http://pbs.twimg.com/profile_images/676298831097495552/aS3JB74V_normal.png", "Likes": null, "Retweet": null, "Text": ".@TanishaaMukerji feels @manizhe is the smartest player in #BB9 right now!\nDo you agree with her? #BB9" }, { "ID": "683883142587879425", "Bookmark": "g1AAAAE0eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTSy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____fxaY4-Yc-PxBwwKHb0kMDCrSWSBzFBHm4DMmyQFIJtWjmSTkLwQyyRnNJEt8JuWxAEmGBiAFNGw_immeZkDTlNejmWZG2LQDENNQ3KZ7LAjkNomsLADT_WU9", "Datasource": "Twitter", "DocDate": "Mon Jan 04 05:30:21 +0000 2016", "Address": null, "Country": "()", "Sentiment": "Neutral", "Gender": "M", "VideoUrl": null, "VideoSource": null, "VideoID": null, "PhotoUrl": "http://pbs.twimg.com/media/CX2j1LtUEAA-cj0.png", "ProfileID": "@BiggBoss", "ProfileName": "@Bigg Boss", "ProfileScreenName": null, "ProfileFollower": "432234", "ProfileFriends": "127", "ProfilePhotoUrl": "http://pbs.twimg.com/profile_images/676298831097495552/aS3JB74V_normal.png", "Likes": null, "Retweet": null, "Text": ".@Norafatehi &amp; @suyyashrai evicted in Double Eviction weekend!\nWho will you miss the most in #BB9? https://t.co/gY4K006YNj" }, { "ID": "683875087678857216", "Bookmark": "g1AAAAE0eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTSy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____fxaY4-Yc-PxBwwKHb0kMDCrSWSBzFBHm4DMmyQFIJtWjmSTkLwQyyRnNJEt8JuWxAEmGBiAFNGw_immeZkDTlNejmWZG2LQDENNQ3KZ7LAjkNomsLADT_WU9", "Datasource": "Twitter", "DocDate": "Mon Jan 04 04:58:21 +0000 2016", "Address": null, "Country": "()", "Sentiment": "Neutral", "Gender": "M", "VideoUrl": null, "VideoSource": null, "VideoID": null, "PhotoUrl": null, "ProfileID": "@TeamSalmania", "ProfileName": "@Team Salmania", "ProfileScreenName": null, "ProfileFollower": "17", "ProfileFriends": "51", "ProfilePhotoUrl": "http://pbs.twimg.com/profile_images/683701375528734720/sfauJMpI_normal.jpg", "Likes": null, "Retweet": null, "Text": "Block me or else I will expose you #bb9  #bigboss9 @biggboss https://t.co/Z9zwC2vajy" }, { "ID": "683875063402110976", "Bookmark": "g1AAAAE0eJzLYWBgYMlgTmFQSklKzi9KdUhJMjTSy83PzyvOyMxL1UvOyS9NScwr0ctLLckBqmVKZEiy____fxaY4-Yc-PxBwwKHb0kMDCrSWSBzFBHm4DMmyQFIJtWjmSTkLwQyyRnNJEt8JuWxAEmGBiAFNGw_immeZkDTlNejmWZG2LQDENNQ3KZ7LAjkNomsLADT_WU9", "Datasource": "Twitter", "DocDate": "Mon Jan 04 04:58:15 +0000 2016", "Address": "United States", "Country": "United States(US)", "Sentiment": "Neutral", "Gender": "M", "VideoUrl": null, "VideoSource": null, "VideoID": null, "PhotoUrl": null, "ProfileID": "@TaniiTweets", "ProfileName": "@❤️Tani❤️", "ProfileScreenName": null, "ProfileFollower": "2163", "ProfileFriends": "197", "ProfilePhotoUrl": "http://pbs.twimg.com/profile_images/683438378155642880/_YhIq2lC_normal.jpg", "Likes": null, "Retweet": null, "Text": "When does #bb9 end 😳" }]
var type="positive";
var returnurl="http://bharatmovies.social";
var title="Popular comments on social media";
var id="cric_data3009";
var q="Male";

React.render(<CommentListMaterial data={data} id={id} title={title} returnurl={returnurl} type={type} q={q} container={container}/>, container);

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
        var url = weburl + '?id=' + id + '&type=' + type + '&skipby=0&limit=' + limit + '&q=' + q;
 
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

            React.render(<CommentList data={data} id={id} title={title} returnurl={returnurl} type={type} limit={limit} q={q} container={container}/>, container);

});

};
return {
    infiniteCardWidget: infiniteCardWidget
};
}();


//DetailWidgetRunner.infiniteCardWidget("bolly_data327",document.getElementById('comments'),"source",100,"twitter",null,"/comments/");
