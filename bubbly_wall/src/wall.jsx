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




var CommentList = React.createClass({
    
   
    componentDidMount:function(){
		$(document).ready(function () {

            $('.grid').masonry({
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
                   <div className="grid" ref="grid">
					 {commentNodes}
                   </div>
            </section>
       );
    }
});





var container=document.getElementById('comments');
var data= [{"ID":"371179916403581_1014096911935385","Bookmark":"g1AAAAEreJzLYWBgYMlgTmFQTElKzi9KdUhJMtYrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dF_Lh2MOiYJZJJiRxwIkGRqAFNCk-UhGTbwpsCHRkHSjFkCM2o9kVOs7IYZEGdKNOgAx6j6SUZN8XB4kGmdlAQDc62Kq","Datasource":"Facebook","DocDate":"07/24/2015 23:04:25","Address":null,"Country":"()","Sentiment":"neutral","Gender":null,"VideoUrl":"https://youtu.be/QkocNVnJdWQ","VideoSource":"Youtube","VideoID":"QkocNVnJdWQ","PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQBN6jUYz0F-Fv18&w=130&h=130&url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FQkocNVnJdWQ%2Fmaxresdefault.jpg&cfs=1&sx=109&sy=0&sw=720&sh=720","ProfileID":"451460944865654","ProfileName":"indiglamour.com","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/451460944865654/picture?type=square","Likes":null,"Retweet":null,"Text":"Bajrangi Bhaijaan Movie Review"},{"ID":"624855568818110464","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dN_ETf0uifJZqGYY4TMjSQFIJtmjGtPaVPchkQHNGGO8xjiAjIlHN2aRRCIjScYkgIypRzemv4s0Y_JYgCRDA5ACmjQf2ajbLEKJyqQbtQBi1H4ko9qYtuklKpBu1AGIUfdRPGh0hBwPPoAYhRJWN40cEmWysgCBZcHf","Datasource":"Twitter","DocDate":"Sat Jul 25 08:15:51 +0000 2015","Address":"Sector 126, Noida, Uttar Pradesh 201313, India","Country":"India(IN)","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@NewsNationTV","ProfileName":"@News Nation","ProfileScreenName":null,"ProfileFollower":"28703","ProfileFriends":"178","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/574101107053436928/xaQ9723c_normal.jpeg","Likes":null,"Retweet":null,"Text":"#BajrangiBhaijaan' made me emotional: #RishiKapoor http://t.co/UTXQM87Qp3"},{"ID":"624839955152384000","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dN_ETf0uifJZqGYY4TMjSQFIJtmjGtPaVPchkQHNGGO8xjiAjIlHN2aRRCIjScYkgIypRzemv4s0Y_JYgCRDA5ACmjQf2ajbLEKJyqQbtQBi1H4ko9qYtuklKpBu1AGIUfdRPGh0hBwPPoAYhRJWN40cEmWysgCBZcHf","Datasource":"Twitter","DocDate":"Sat Jul 25 07:13:48 +0000 2015","Address":"India","Country":"India(IN)","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@BollywoodROUTE","ProfileName":"@Bollywood ","ProfileScreenName":null,"ProfileFollower":"1879","ProfileFriends":"4","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/564781485954056194/zkGzCBXl_normal.png","Likes":null,"Retweet":null,"Text":"Again #BajrangiBhaijaan gets a great great  opening today ..records for sure"},{"ID":"122069694482469_948143558541741","Bookmark":"g1AAAAF9eJzLYWBgYM1gTmFQTElKzi9KdUhJMtIrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dF-LTqBHEpATnkWCMUkKQDLJHtWk0l8XG0AmSZJkUgLIpHpUk5qnLhYAmeSPZpIxPpPyWIAkwwEgBTTsPrJpts8UQKZFkeIuiGkPIKahuC2_tgBoGuOfrCwASaF7JA","Datasource":"Facebook","DocDate":"07/24/2015 13:00:01","Address":null,"Country":"()","Sentiment":"Positive","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/p130x130/11709754_948143558541741_2575167101221495708_n.png?oh=634fa99d0026fd9bd1828b05f45df547&oe=5659B576","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"Virender Sehwag to meet the #Juniors in a special episode of #IndianIdolJunior! \nSo don't miss to watch this exciting episode tomorrow at 8.30 PM."},{"ID":"122069694482469_948143008541796","Bookmark":"g1AAAAF9eJzLYWBgYM1gTmFQTElKzi9KdUhJMtIrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dF-LTqBHEpATnkWCMUkKQDLJHtWk0l8XG0AmSZJkUgLIpHpUk5qnLhYAmeSPZpIxPpPyWIAkwwEgBTTsPrJpts8UQKZFkeIuiGkPIKahuC2_tgBoGuOfrCwASaF7JA","Datasource":"Facebook","DocDate":"07/24/2015 11:25:20","Address":null,"Country":"()","Sentiment":"Positive","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/p130x130/11227383_948143008541796_2070168605880019662_n.png?oh=61a2ee7248a937675bc7c5fbf1990d91&oe=5646C2E9","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"You have just 3 days to go! Log on to www.setindia.com and stand a chance to be a Shaatir Lekhak on CID."},{"ID":"624824379407380480","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtIrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dN_ETf0uifJZqGYY4jMjSQFIJtmjGtPaVPchkSGLBKckOYCMiUc3ZpFEIiNJxiSAjKlHN6a_izRj8liAJEMDkAKaNB_ZqNssQonKpBu1AGLUfiSj2pi26SUqkG7UAYhR91E8aHSEHA8-gBiFElY3jRwSZbKyAHvcwdk","Datasource":"Twitter","DocDate":"Sat Jul 25 06:11:55 +0000 2015","Address":null,"Country":"()","Sentiment":"Negative","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@priyadarshik","ProfileName":"@Priyadarshi Kunal","ProfileScreenName":null,"ProfileFollower":"82","ProfileFriends":"16","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/464458665051713536/1XkKJuxp_normal.png","Likes":null,"Retweet":null,"Text":"#Masaan \nDon't waste your money on #BajrangiBhaijaan \nWatch Masaan!"},{"ID":"124545493609","Bookmark":"g1AAAAF2eJzLYWBgYM1gTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dJ_W1J8PEmWzSDAjjwVIMjQAKaBJ85GM0qxYzJCoR7pRCyBG7Uc2qvR7RqI26UYdgBh1H9mofUUSiZqkG_UAYhRyWGneVONINMzKAgC8P3pM","Datasource":"Tumblr","DocDate":"2015-07-20 04:08:12 GMT","Address":null,"Country":"()","Sentiment":"neutral","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"http://ca.usnewsapp.com/post/124545493609/bajrangi-bhaijaan-or-how-indian-cinema-loves","ProfileName":"canadiangirl-stuff","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":null,"Likes":null,"Retweet":null,"Text":" "},{"ID":"124389893793","Bookmark":"g1AAAAF2eJzLYWBgYM1gTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dJ_W1J8PEmWzSDAjjwVIMjQAKaBJ85GM0qxYzJCoR7pRCyBG7Uc2qvR7RqI26UYdgBh1H9mofUUSiZqkG_UAYhRyWGneVONINMzKAgC8P3pM","Datasource":"Tumblr","DocDate":"2015-07-18 06:48:51 GMT","Address":null,"Country":"()","Sentiment":"Positive","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"http://pkumar81.tumblr.com/post/124389893793/bajrangi-bhaijaan-first-day-day-1-overseas","ProfileName":"pkumar81","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":null,"Likes":null,"Retweet":null,"Text":" "},{"ID":"124384046283","Bookmark":"g1AAAAF2eJzLYWBgYM1gTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dJ_W1J8PEmWzSDAjjwVIMjQAKaBJ85GM0qxYzJCoR7pRCyBG7Uc2qvR7RqI26UYdgBh1H9mofUUSiZqkG_UAYhRyWGneVONINMzKAgC8P3pM","Datasource":"Tumblr","DocDate":"2015-07-18 05:09:34 GMT","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://40.media.tumblr.com/f64bbce029ace6cb408665fda0cc88e8/tumblr_nro3nywl2A1tpmiaio1_500.jpg","ProfileID":"http://news24latest.tumblr.com/post/124384046283/n-starrer-to-have-a-phenomenal","ProfileName":"news24latest","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":null,"Likes":null,"Retweet":null,"Text":"&n Starrer to have a Phenomenal#: http://dlvr.it/BYl09P "},{"ID":"122069694482469_947710245251739","Bookmark":"g1AAAAF9eJzLYWBgYM1gTmFQTElKzi9KdUhJMtIrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dF-LTqBHEpATnkWCMUkKQDLJHtWk0l8XG0AmSZJkUgLIpHpUk5qnLhYAmeSPZpIxPpPyWIAkwwEgBTTsPrJpts8UQKZFkeIuiGkPIKahuC2_tgBoGuOfrCwASaF7JA","Datasource":"Facebook","DocDate":"07/24/2015 08:30:00","Address":null,"Country":"()","Sentiment":"Positive","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"https://fbcdn-vthumb-a.akamaihd.net/hvthumb-ak-xtf1/v/t15.0-10/s130x130/11413826_947564605266303_910314959_n.jpg?oh=f50de568f954d193c88a17bfa2898e62&oe=560DCCE7&__gda__=1443756472_2dd2d775b0a7cd3ee60d099348820d2e","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"Just 3 days more!\nStand a chance to be a Shaatir Lekhak on #CID. Log on to www.cid.setindia.com for more."},{"ID":"122069694482469_947712885251475","Bookmark":"g1AAAAF9eJzLYWBgYM1gTmFQTElKzi9KdUhJMtIrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dF-LTqBHEpATnkWCMUkKQDLJHtWk0l8XG0AmSZJkUgLIpHpUk5qnLhYAmeSPZpIxPpPyWIAkwwEgBTTsPrJpts8UQKZFkeIuiGkPIKahuC2_tgBoGuOfrCwASaF7JA","Datasource":"Facebook","DocDate":"07/24/2015 07:30:00","Address":null,"Country":"()","Sentiment":"Positive","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-9/p130x130/11750725_947712885251475_7204800980894680496_n.png?oh=246de370f6d8fd3f93d985f777567efd&oe=56142DF1","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"The talented Junior; #Ajay to give a special performance with his father in the Parents Day Special episode tomorrow! #IndianIdolJunior"},{"ID":"122069694482469_948021328553964","Bookmark":"g1AAAAF9eJzLYWBgYM1gTmFQTElKzi9KdUhJMtIrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dF-LTqBHEpATnkWCMUkKQDLJHtWk0l8XG0AmSZJkUgLIpHpUk5qnLhYAmeSPZpIxPpPyWIAkwwEgBTTsPrJpts8UQKZFkeIuiGkPIKahuC2_tgBoGuOfrCwASaF7JA","Datasource":"Facebook","DocDate":"07/24/2015 06:32:38","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/p130x130/10984106_948021328553964_3833107130067756703_n.png?oh=8bef31486bd0cb2c908d096f50345d51&oe=564820EA","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"MUMBAI! Are you ready to meet our Juniors tonight?"},{"ID":"122069694482469_947608148595282","Bookmark":"g1AAAAF9eJzLYWBgYM1gTmFQTElKzi9KdUhJMtIrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dF-LTqBHEpATnkWCMUkKQDLJHtWk0l8XG0AmSZJkUgLIpHpUk5qnLhYAmeSPZpIxPpPyWIAkwwEgBTTsPrJpts8UQKZFkeIuiGkPIKahuC2_tgBoGuOfrCwASaF7JA","Datasource":"Facebook","DocDate":"07/24/2015 06:30:00","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQD5xHhw7TyMOJWo&w=130&h=130&url=http%3A%2F%2Fresources.sonyliv.com%2Fimage%2Fupload%2Fc_fill%2Cg_north%2Fsl-img-video-75482-brightcove-0-4359898275001.jpg&cfs=1&sx=111&sy=0&sw=270&sh=270","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"#Moti ne jeet le hain kahin dil! Watch his performance journey on #IndianIdolJunior here! \nStay tuned to Sony LIV for more."},{"ID":"122069694482469_947712635251500","Bookmark":"g1AAAAF9eJzLYWBgYM1gTmFQTElKzi9KdUhJMtIrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dF-LTqBHEpATnkWCMUkKQDLJHtWk0l8XG0AmSZJkUgLIpHpUk5qnLhYAmeSPZpIxPpPyWIAkwwEgBTTsPrJpts8UQKZFkeIuiGkPIKahuC2_tgBoGuOfrCwASaF7JA","Datasource":"Facebook","DocDate":"07/24/2015 05:00:01","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/p130x130/11760335_947712635251500_7716997046301773436_n.png?oh=4b5b546e9aa291b3a59bb2523e60b897&oe=564C4AFB","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"Sonakshi Sinha in tears on #IndianIdolJunior! But why? Find out TOMORROW at 8.30 PM. \n\nVishal Dadlani Salim Merchant"},{"ID":"122069694482469_947087278647369","Bookmark":"g1AAAAF9eJzLYWBgYM1gTmFQTElKzi9KdUhJMtIrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dF-LTqBHEpATnkWCMUkKQDLJHtWk0l8XG0AmSZJkUgLIpHpUk5qnLhYAmeSPZpIxPpPyWIAkwwEgBTTsPrJpts8UQKZFkeIuiGkPIKahuC2_tgBoGuOfrCwASaF7JA","Datasource":"Facebook","DocDate":"07/24/2015 03:30:00","Address":null,"Country":"()","Sentiment":"Positive","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"https://fbcdn-vthumb-a.akamaihd.net/hvthumb-ak-xat1/v/t15.0-10/s130x130/11331550_586741228095380_1152889009_n.jpg?oh=befe57a8770775d27489e83feb011950&oe=5611139D&__gda__=1447972381_1baa92f0b94f2de6aa5750f36f6fe019","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"Watch the Parents' Day special episode of #IndianIdolJr tomorrow at 8:30 pm."},{"ID":"624839803016757248","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dN_ETf0uifJZqGYY4TMjSQFIJtmjGtPaVPchkQHNGGO8xjiAjIlHN2aRRCIjScYkgIypRzemv4s0Y_JYgCRDA5ACmjQf2ajbLEKJyqQbtQBi1H4ko9qYtuklKpBu1AGIUfdRPGh0hBwPPoAYhRJWN40cEmWysgCBZcHf","Datasource":"Twitter","DocDate":"Sat Jul 25 07:13:12 +0000 2015","Address":"Mumbai, Maharashtra, India","Country":"India(IN)","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@BeingSalmanBot","ProfileName":"@Being Salman Bot","ProfileScreenName":null,"ProfileFollower":"2993","ProfileFriends":"4","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/592234461992882177/OwhlieZ__normal.png","Likes":null,"Retweet":null,"Text":"Hi @VinitaVasP @Being_Nadiah @gaurav000001 #BajrangiBhaijaan please open and RT or FAV to complete the poll https://t.co/RSEzQ55zwb"},{"ID":"624824433643884545","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dN_ETf0uifJZqGYY4TMjSQFIJtmjGtPaVPchkQHNGGO8xjiAjIlHN2aRRCIjScYkgIypRzemv4s0Y_JYgCRDA5ACmjQf2ajbLEKJyqQbtQBi1H4ko9qYtuklKpBu1AGIUfdRPGh0hBwPPoAYhRJWN40cEmWysgCBZcHf","Datasource":"Twitter","DocDate":"Sat Jul 25 06:12:08 +0000 2015","Address":null,"Country":"()","Sentiment":"Neutral","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@Being_Nadiah","ProfileName":"@ⓝⓐⓓ♚TheTypoQueen♚","ProfileScreenName":null,"ProfileFollower":"1623","ProfileFriends":"176","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/623411317831905280/Ux8S7yOG_normal.jpg","Likes":null,"Retweet":null,"Text":"Miracle happen please ! Just wanna watch #BajrangiBhaijaan this Saturday back to back !  https://t.co/LGQCnVDR1p"},{"ID":"624871131003006976","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dN_ETf0uifJZqGYY4TMjSQFIJtmjGtPaVPchkQHNGGO8xjiAjIlHN2aRRCIjScYkgIypRzemv4s0Y_JYgCRDA5ACmjQf2ajbLEKJyqQbtQBi1H4ko9qYtuklKpBu1AGIUfdRPGh0hBwPPoAYhRJWN40cEmWysgCBZcHf","Datasource":"Twitter","DocDate":"Sat Jul 25 09:17:41 +0000 2015","Address":"New Delhi, Delhi, India","Country":"India(IN)","Sentiment":"Positive","Gender":"NA","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CKv88ojUAAAKw4A.png","ProfileID":"@notorious_heart","ProfileName":"@We Love U SK..:))","ProfileScreenName":null,"ProfileFollower":"1292","ProfileFriends":"18","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/623842023787773954/0aGNReak_normal.jpg","Likes":null,"Retweet":null,"Text":"#BajrangiBhaijaan shows...in Delhi..!! \nMultiplex..Big Cinemas : Odeon..chk d status platinum sold out fr evry shw http://t.co/5A9t3x5ye3"},{"ID":"624871127857299456","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dN_ETf0uifJZqGYY4TMjSQFIJtmjGtPaVPchkQHNGGO8xjiAjIlHN2aRRCIjScYkgIypRzemv4s0Y_JYgCRDA5ACmjQf2ajbLEKJyqQbtQBi1H4ko9qYtuklKpBu1AGIUfdRPGh0hBwPPoAYhRJWN40cEmWysgCBZcHf","Datasource":"Twitter","DocDate":"Sat Jul 25 09:17:41 +0000 2015","Address":null,"Country":"()","Sentiment":"neutral","Gender":"NA","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@shivinAIR","ProfileName":"@S A W","ProfileScreenName":null,"ProfileFollower":"10","ProfileFriends":"66","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/619614372315303936/EPykSiZl_normal.jpg","Likes":null,"Retweet":null,"Text":"Chicken kuk du kuuu #BajrangiBhaijaan  emotional movie !!"},,{"ID":"122069694482469_947606681928762","Bookmark":"g1AAAAF9eJzLYWBgYM1gTmFQTElKzi9KdUhJMtIrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dF-LTqBHEpATnkWCMUkKQDLJHtWk0l8XG0AmSZJkUgLIpHpUk5qnLhYAmeSPZpIxPpPyWIAkwwEgBTTsPrJpts8UQKZFkeIuiGkPIKahuC2_tgBoGuOfrCwASaF7JA","Datasource":"Facebook","DocDate":"07/23/2015 16:00:06","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQDj-OqXSZro85Vd&w=130&h=130&url=http%3A%2F%2Fresources.sonyliv.com%2Fimage%2Fupload%2Fc_fill%2Cg_north%2Fsl-img-video-75479-brightcove-0-4359898285001.jpg&cfs=1&sx=112&sy=0&sw=270&sh=270","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"Here's how you can watch your favourite contestant, #Vaishnav's performance journey on #IndianIdolJunior"},{"ID":"624855576510640128","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dN_ETf0uifJZqGYY4TMjSQFIJtmjGtPaVPchkQHNGGO8xjiAjIlHN2aRRCIjScYkgIypRzemv4s0Y_JYgCRDA5ACmjQf2ajbLEKJyqQbtQBi1H4ko9qYtuklKpBu1AGIUfdRPGh0hBwPPoAYhRJWN40cEmWysgCBZcHf","Datasource":"Twitter","DocDate":"Sat Jul 25 08:15:53 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CKvse6gUEAEVKkK.jpg","ProfileID":"@Sojitra_Deep","ProfileName":"@Deep Sojitra","ProfileScreenName":null,"ProfileFollower":"673","ProfileFriends":"22","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/563342454963699712/dyHICk-p_normal.jpeg","Likes":null,"Retweet":null,"Text":"Bollywood actor BeingSalmanKhan ​'s #BajrangiBhaijaan leads at Pak box office\n\nhttp://t.co/65RRfje8fn http://t.co/lj9Ut7mhFQ"},{"ID":"624855568818110464","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dN_ETf0uifJZqGYY4TMjSQFIJtmjGtPaVPchkQHNGGO8xjiAjIlHN2aRRCIjScYkgIypRzemv4s0Y_JYgCRDA5ACmjQf2ajbLEKJyqQbtQBi1H4ko9qYtuklKpBu1AGIUfdRPGh0hBwPPoAYhRJWN40cEmWysgCBZcHf","Datasource":"Twitter","DocDate":"Sat Jul 25 08:15:51 +0000 2015","Address":"Sector 126, Noida, Uttar Pradesh 201313, India","Country":"India(IN)","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@NewsNationTV","ProfileName":"@News Nation","ProfileScreenName":null,"ProfileFollower":"28703","ProfileFriends":"178","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/574101107053436928/xaQ9723c_normal.jpeg","Likes":null,"Retweet":null,"Text":"#BajrangiBhaijaan' made me emotional: #RishiKapoor http://t.co/UTXQM87Qp3"},{"ID":"624793011071795200","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dN_ETf0uifJZqGYY4TMjSQFIJtmjGtPaVPchkQHNGGO8xjiAjIlHN2aRRCIjScYkgIypRzemv4s0Y_JYgCRDA5ACmjQf2ajbLEKJyqQbtQBi1H4ko9qYtuklKpBu1AGIUfdRPGh0hBwPPoAYhRJWN40cEmWysgCBZcHf","Datasource":"Twitter","DocDate":"Sat Jul 25 04:07:16 +0000 2015","Address":null,"Country":"()","Sentiment":"Neutral","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@ankitaagnihotri","ProfileName":"@Ankita ","ProfileScreenName":null,"ProfileFollower":"75","ProfileFriends":"70","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/558159553364119552/ywHykDbH_normal.jpeg","Likes":null,"Retweet":null,"Text":"#KoduriVenkataVijayendraPrasad the real hero ... scripted #Bahubali and #BajrangiBhaijaan ... Both blockbuster movies breaking records."},{"ID":"124382007383","Bookmark":"g1AAAAF2eJzLYWBgYM1gTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dJ_W1J8PEmWzSDAjjwVIMjQAKaBJ85GM0qxYzJCoR7pRCyBG7Uc2qvR7RqI26UYdgBh1H9mofUUSiZqkG_UAYhRyWGneVONINMzKAgC8P3pM","Datasource":"Tumblr","DocDate":"2015-07-18 04:39:36 GMT","Address":null,"Country":"()","Sentiment":"neutral","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://41.media.tumblr.com/bfb3b21f5f5184c4901abc80b084c7b4/tumblr_nro2a0m5pC1tpmiaio1_500.jpg","ProfileID":"http://news24latest.tumblr.com/post/124382007383/salman-khantarts-post-httpdlvritbykwwb","ProfileName":"news24latest","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":null,"Likes":null,"Retweet":null,"Text":"Salman Khan&tarts post#: http://dlvr.it/BYkWWb "},{"ID":"124374933460","Bookmark":"g1AAAAF2eJzLYWBgYM1gTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dJ_W1J8PEmWzSDAjjwVIMjQAKaBJ85GM0qxYzJCoR7pRCyBG7Uc2qvR7RqI26UYdgBh1H9mofUUSiZqkG_UAYhRyWGneVONINMzKAgC8P3pM","Datasource":"Tumblr","DocDate":"2015-07-18 02:56:09 GMT","Address":null,"Country":"()","Sentiment":"neutral","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://41.media.tumblr.com/235a00a3b62fa6be7d7c6aac86a784c9/tumblr_nrnxhmdLQq1tuc5c4o1_500.jpg","ProfileID":"http://romeohongkong.tumblr.com/post/124374933460/good-morning-eid-mubarak-muslim-friendsduya","ProfileName":"romeohongkong","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":null,"Likes":null,"Retweet":null,"Text":"Good Morning \n\nEid Mubarak Muslim friend’s……Duya Mein Yaad Rakhna….. Aur Birayni Bejh Dena 🙌🙏\n\n#eidmubarak#happyeid#eid#eid2015#goodmorning#saturday#party#hk#hkig#hongkong#love#yoga#bajrangibhaijaan#selfie#meditation#girl#girls#girlswithtattoos#hkgirls#muslimgirl#hkgirl#ajmersharif#masjid#khangirls#uae #mydubai#abudabi#kuwait "},{"ID":"124374480295","Bookmark":"g1AAAAF2eJzLYWBgYM1gTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dJ_W1J8PEmWzSDAjjwVIMjQAKaBJ85GM0qxYzJCoR7pRCyBG7Uc2qvR7RqI26UYdgBh1H9mofUUSiZqkG_UAYhRyWGneVONINMzKAgC8P3pM","Datasource":"Tumblr","DocDate":"2015-07-18 02:49:17 GMT","Address":null,"Country":"()","Sentiment":"neutral","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://41.media.tumblr.com/07bcf961adccacdc0ebe3abbe7a9aba0/tumblr_nrnx65dIKp1tuc5c4o1_500.jpg","ProfileID":"http://romeohongkong.tumblr.com/post/124374480295/good-morning-eid-mubarak-muslim-friendsduya","ProfileName":"romeohongkong","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":null,"Likes":null,"Retweet":null,"Text":"Good Morning \n\nEid Mubarak Muslim friend’s……Duya Mein Yaad Rakhna….. Aur Birayni Bejh Dena 🙌🙏\n\n#eidmubarak#happyeid#eid#eid2015#goodmorning#saturday#party#hk#hkig#hongkong#love#yoga#bajrangibhaijaan#selfie#meditation#girl#girls#girlswithtattoos#hkgirls#muslimgirl#hkgirl#ajmersharif#masjid#khangirls#uae #mydubai#abudabi#kuwait "},{"ID":"624792960102608897","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dN_ETf0uifJZqGYY4TMjSQFIJtmjGtPaVPchkQHNGGO8xjiAjIlHN2aRRCIjScYkgIypRzemv4s0Y_JYgCRDA5ACmjQf2ajbLEKJyqQbtQBi1H4ko9qYtuklKpBu1AGIUfdRPGh0hBwPPoAYhRJWN40cEmWysgCBZcHf","Datasource":"Twitter","DocDate":"Sat Jul 25 04:07:04 +0000 2015","Address":null,"Country":"()","Sentiment":"Neutral","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@AsliShiva","ProfileName":"@Shiva Satyam","ProfileScreenName":null,"ProfileFollower":"59","ProfileFriends":"20","ProfilePhotoUrl":"http://abs.twimg.com/sticky/default_profile_images/default_profile_2_normal.png","Likes":null,"Retweet":null,"Text":"Yes #BajrangiBhaijaan touch 14cr today wait only 2hrs for final figure."},{"ID":"624792809413849088","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dN_ETf0uifJZqGYY4TMjSQFIJtmjGtPaVPchkQHNGGO8xjiAjIlHN2aRRCIjScYkgIypRzemv4s0Y_JYgCRDA5ACmjQf2ajbLEKJyqQbtQBi1H4ko9qYtuklKpBu1AGIUfdRPGh0hBwPPoAYhRJWN40cEmWysgCBZcHf","Datasource":"Twitter","DocDate":"Sat Jul 25 04:06:28 +0000 2015","Address":null,"Country":"()","Sentiment":"neutral","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@avthedemon","ProfileName":"@Dr. Demon","ProfileScreenName":null,"ProfileFollower":"442","ProfileFriends":"22","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/453199374160363522/bgO4nUeM_normal.jpeg","Likes":null,"Retweet":null,"Text":"#BajrangiBhaijaan  ne naahak ki itni mehnat ki, Sushma Swaraj ji ko ek tweet karta, wo khud munni ko #Pakistan chhod ke aati"},{"ID":"624746340090777600","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dN_ETf0uifJZqGYY4TMjSQFIJtmjGtPaVPchkQHNGGO8xjiAjIlHN2aRRCIjScYkgIypRzemv4s0Y_JYgCRDA5ACmjQf2ajbLEKJyqQbtQBi1H4ko9qYtuklKpBu1AGIUfdRPGh0hBwPPoAYhRJWN40cEmWysgCBZcHf","Datasource":"Twitter","DocDate":"Sat Jul 25 01:01:49 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@lramaswamy95","ProfileName":"@Ramaswamy","ProfileScreenName":null,"ProfileFollower":"56","ProfileFriends":"786","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/525996184565862401/bgtf-2Lr_normal.jpeg","Likes":null,"Retweet":null,"Text":"#BajrangiBhaijaan Superb. Nawaz and Harshali - Show stealers! Diff to see Salman Bhai in simple role, nailed it :)"},{"ID":"624745432758009856","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dN_ETf0uifJZqGYY4TMjSQFIJtmjGtPaVPchkQHNGGO8xjiAjIlHN2aRRCIjScYkgIypRzemv4s0Y_JYgCRDA5ACmjQf2ajbLEKJyqQbtQBi1H4ko9qYtuklKpBu1AGIUfdRPGh0hBwPPoAYhRJWN40cEmWysgCBZcHf","Datasource":"Twitter","DocDate":"Sat Jul 25 00:58:13 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@BeingSalmanBot","ProfileName":"@Being Salman Bot","ProfileScreenName":null,"ProfileFollower":"2985","ProfileFriends":"4","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/592234461992882177/OwhlieZ__normal.png","Likes":null,"Retweet":null,"Text":"Hi @shanushaikh689 @TigerAzmi201 #BajrangiBhaijaan please open and RT or FAV to complete the poll https://t.co/RSEzQ55zwb"},{"ID":"624744872373686272","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dN_ETf0uifJZqGYY4TMjSQFIJtmjGtPaVPchkQHNGGO8xjiAjIlHN2aRRCIjScYkgIypRzemv4s0Y_JYgCRDA5ACmjQf2ajbLEKJyqQbtQBi1H4ko9qYtuklKpBu1AGIUfdRPGh0hBwPPoAYhRJWN40cEmWysgCBZcHf","Datasource":"Twitter","DocDate":"Sat Jul 25 00:55:59 +0000 2015","Address":null,"Country":"()","Sentiment":"neutral","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"http://pbs.twimg.com/media/CKuKIRGVAAAMq_j.jpg","ProfileID":"@__MrWil","ProfileName":"@Willi . #Phantom","ProfileScreenName":null,"ProfileFollower":"128","ProfileFriends":"165","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/624413191573864448/HEB1q_o5_normal.jpg","Likes":null,"Retweet":null,"Text":"تسريب نسخة HD من فيلم #BajrangiBhaijaan من مجلس الرقابة الهندي . نسخة كاملة اطول من نيخة السينما. http://t.co/mKFy7t2y5M"},{"ID":"624730328335286272","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dN_ETf0uifJZqGYY4TMjSQFIJtmjGtPaVPchkQHNGGO8xjiAjIlHN2aRRCIjScYkgIypRzemv4s0Y_JYgCRDA5ACmjQf2ajbLEKJyqQbtQBi1H4ko9qYtuklKpBu1AGIUfdRPGh0hBwPPoAYhRJWN40cEmWysgCBZcHf","Datasource":"Twitter","DocDate":"Fri Jul 24 23:58:11 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@BeingSalmanBot","ProfileName":"@Being Salman Bot","ProfileScreenName":null,"ProfileFollower":"2985","ProfileFriends":"4","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/592234461992882177/OwhlieZ__normal.png","Likes":null,"Retweet":null,"Text":"Hi @GoodridgeKamini @WardahHashmi #BajrangiBhaijaan please open and RT or FAV to complete the poll https://t.co/RSEzQ55zwb"},{"ID":"624729322016804864","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dN_ETf0uifJZqGYY4TMjSQFIJtmjGtPaVPchkQHNGGO8xjiAjIlHN2aRRCIjScYkgIypRzemv4s0Y_JYgCRDA5ACmjQf2ajbLEKJyqQbtQBi1H4ko9qYtuklKpBu1AGIUfdRPGh0hBwPPoAYhRJWN40cEmWysgCBZcHf","Datasource":"Twitter","DocDate":"Fri Jul 24 23:54:11 +0000 2015","Address":null,"Country":"()","Sentiment":"Neutral","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@Irumf","ProfileName":"@Irum Azeem Farooque","ProfileScreenName":null,"ProfileFollower":"11627","ProfileFriends":"546","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/624486371659395072/QehKN15a_normal.jpg","Likes":null,"Retweet":null,"Text":"Listening to Bhardo jholi @BeingSalmanKhan #BajrangiBhaijaan \nPakistan Censorship edited ths qawali so no1watch in #Pakistan it's beautiful"},{"ID":"624728902800404482","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dN_ETf0uifJZqGYY4TMjSQFIJtmjGtPaVPchkQHNGGO8xjiAjIlHN2aRRCIjScYkgIypRzemv4s0Y_JYgCRDA5ACmjQf2ajbLEKJyqQbtQBi1H4ko9qYtuklKpBu1AGIUfdRPGh0hBwPPoAYhRJWN40cEmWysgCBZcHf","Datasource":"Twitter","DocDate":"Fri Jul 24 23:52:31 +0000 2015","Address":null,"Country":"()","Sentiment":"neutral","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@PoniolApps","ProfileName":"@Poniol","ProfileScreenName":null,"ProfileFollower":"65","ProfileFriends":"2003","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/513311322646142976/_7hAA91X_normal.jpeg","Likes":null,"Retweet":null,"Text":"Bajrangi Bhaijaan Android App - #BajrangiBhaijaan #BajrangiBhaijaan2015 #BajrangiBhaijaanAndroid ...http://t.co/FQyI6bHMeL"},{"ID":"624714340445351936","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dN_ETf0uifJZqGYY4TMjSQFIJtmjGtPaVPchkQHNGGO8xjiAjIlHN2aRRCIjScYkgIypRzemv4s0Y_JYgCRDA5ACmjQf2ajbLEKJyqQbtQBi1H4ko9qYtuklKpBu1AGIUfdRPGh0hBwPPoAYhRJWN40cEmWysgCBZcHf","Datasource":"Twitter","DocDate":"Fri Jul 24 22:54:40 +0000 2015","Address":null,"Country":"()","Sentiment":"neutral","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@Nidaiqbl","ProfileName":"@Nida","ProfileScreenName":null,"ProfileFollower":"435","ProfileFriends":"109","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/594143284961873920/F7s7BCUA_normal.jpg","Likes":null,"Retweet":null,"Text":"C'etait vrm un des meilleurs film que j'ai vu😭😊❤️❤️❤️💯💯💯😎🎬🎬 #BajrangiBhaijaan"},{"ID":"624714193959321600","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dN_ETf0uifJZqGYY4TMjSQFIJtmjGtPaVPchkQHNGGO8xjiAjIlHN2aRRCIjScYkgIypRzemv4s0Y_JYgCRDA5ACmjQf2ajbLEKJyqQbtQBi1H4ko9qYtuklKpBu1AGIUfdRPGh0hBwPPoAYhRJWN40cEmWysgCBZcHf","Datasource":"Twitter","DocDate":"Fri Jul 24 22:54:05 +0000 2015","Address":null,"Country":"()","Sentiment":"neutral","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@Nidaiqbl","ProfileName":"@Nida","ProfileScreenName":null,"ProfileFollower":"435","ProfileFriends":"109","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/594143284961873920/F7s7BCUA_normal.jpg","Likes":null,"Retweet":null,"Text":"A la gin jvoulais vrm crier comme un bebe mais je pouvais pas comme yavait bcp de gens😭😭😭🎬 #BajrangiBhaijaan"},{"ID":"624675993572278272","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dN_ETf0uifJZqGYY4TMjSQFIJtmjGtPaVPchkQHNGGO8xjiAjIlHN2aRRCIjScYkgIypRzemv4s0Y_JYgCRDA5ACmjQf2ajbLEKJyqQbtQBi1H4ko9qYtuklKpBu1AGIUfdRPGh0hBwPPoAYhRJWN40cEmWysgCBZcHf","Datasource":"Twitter","DocDate":"Fri Jul 24 20:22:17 +0000 2015","Address":null,"Country":"()","Sentiment":"Positive","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@kaheryz","ProfileName":"@काहेरीज़ کا ہےریذ","ProfileScreenName":null,"ProfileFollower":"238","ProfileFriends":"372","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/623208866541641728/JJWbiZ4w_normal.jpg","Likes":null,"Retweet":null,"Text":"Loved #BajrangiBhaijaan, what a beautiful movie. Salman Khan is the best !"},{"ID":"624675985011646468","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dN_ETf0uifJZqGYY4TMjSQFIJtmjGtPaVPchkQHNGGO8xjiAjIlHN2aRRCIjScYkgIypRzemv4s0Y_JYgCRDA5ACmjQf2ajbLEKJyqQbtQBi1H4ko9qYtuklKpBu1AGIUfdRPGh0hBwPPoAYhRJWN40cEmWysgCBZcHf","Datasource":"Twitter","DocDate":"Fri Jul 24 20:22:15 +0000 2015","Address":null,"Country":"()","Sentiment":"Neutral","Gender":"F","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@apotofvestiges","ProfileName":"@Murtaza Ali Khan","ProfileScreenName":null,"ProfileFollower":"706","ProfileFriends":"593","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/601375826802647040/9WbnJl1L_normal.jpg","Likes":null,"Retweet":null,"Text":"#BajrangiBhaijaan: An Earnest Attempt To Bridge The Religious Divide Between India And Pakistan... http://t.co/tcl0u3eayT"},{"ID":"624675923741184000","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dN_ETf0uifJZqGYY4TMjSQFIJtmjGtPaVPchkQHNGGO8xjiAjIlHN2aRRCIjScYkgIypRzemv4s0Y_JYgCRDA5ACmjQf2ajbLEKJyqQbtQBi1H4ko9qYtuklKpBu1AGIUfdRPGh0hBwPPoAYhRJWN40cEmWysgCBZcHf","Datasource":"Twitter","DocDate":"Fri Jul 24 20:22:00 +0000 2015","Address":null,"Country":"()","Sentiment":"neutral","Gender":"M","VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"@sarwat_f","ProfileName":"@Princess Sarwat","ProfileScreenName":null,"ProfileFollower":"662","ProfileFriends":"12","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/624363261232713728/LefCeK4I_normal.jpg","Likes":null,"Retweet":null,"Text":"@danishlko @A_Girl_Lyke_Me @SAfridiOfficial @iamAhmadshahzad #BajrangiBhaijaan phr lala toh pride hai Pak ke :)"}]
var data1= [{"ID":"124545493609","Bookmark":"g1AAAAF2eJzLYWBgYM1gTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dJ_W1J8PEmWzSDAjjwVIMjQAKaBJ85GM0qxYzJCoR7pRCyBG7Uc2qvR7RqI26UYdgBh1H9mofUUSiZqkG_UAYhRyWGneVONINMzKAgC8P3pM","Datasource":"Tumblr","DocDate":"2015-07-20 04:08:12 GMT","Address":null,"Country":"()","Sentiment":"neutral","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"http://ca.usnewsapp.com/post/124545493609/bajrangi-bhaijaan-or-how-indian-cinema-loves","ProfileName":"canadiangirl-stuff","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":null,"Likes":null,"Retweet":null,"Text":" "},{"ID":"124397780766","Bookmark":"g1AAAAF2eJzLYWBgYM1gTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dJ_W1J8PEmWzSDAjjwVIMjQAKaBJ85GM0qxYzJCoR7pRCyBG7Uc2qvR7RqI26UYdgBh1H9mofUUSiZqkG_UAYhRyWGneVONINMzKAgC8P3pM","Datasource":"Tumblr","DocDate":"2015-07-18 10:04:20 GMT","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"http://au.usnewsapp.com/post/124397780766/salman-khanonly-starts-post","ProfileName":"australiangirl-stuff","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":null,"Likes":null,"Retweet":null,"Text":" "}]
var dataPopular=[{"ID":"122069694482469_948143558541741","Bookmark":"g1AAAAF9eJzLYWBgYM1gTmFQTElKzi9KdUhJMtIrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dF-LTqBHEpATnkWCMUkKQDLJHtWk0l8XG0AmSZJkUgLIpHpUk5qnLhYAmeSPZpIxPpPyWIAkwwEgBTTsPrJpts8UQKZFkeIuiGkPIKahuC2_tgBoGuOfrCwASaF7JA","Datasource":"Facebook","DocDate":"07/24/2015 13:00:01","Address":null,"Country":"()","Sentiment":"Positive","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"https://scontent.xx.fbcdn.net/hphotos-xpt1/v/t1.0-9/p130x130/11709754_948143558541741_2575167101221495708_n.png?oh=634fa99d0026fd9bd1828b05f45df547&oe=5659B576","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"Virender Sehwag to meet the #Juniors in a special episode of #IndianIdolJunior! \nSo don't miss to watch this exciting episode tomorrow at 8.30 PM."},{"ID":"122069694482469_948143008541796","Bookmark":"g1AAAAF9eJzLYWBgYM1gTmFQTElKzi9KdUhJMtIrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dF-LTqBHEpATnkWCMUkKQDLJHtWk0l8XG0AmSZJkUgLIpHpUk5qnLhYAmeSPZpIxPpPyWIAkwwEgBTTsPrJpts8UQKZFkeIuiGkPIKahuC2_tgBoGuOfrCwASaF7JA","Datasource":"Facebook","DocDate":"07/24/2015 11:25:20","Address":null,"Country":"()","Sentiment":"Positive","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/p130x130/11227383_948143008541796_2070168605880019662_n.png?oh=61a2ee7248a937675bc7c5fbf1990d91&oe=5646C2E9","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"You have just 3 days to go! Log on to www.setindia.com and stand a chance to be a Shaatir Lekhak on CID."},{"ID":"122069694482469_947710245251739","Bookmark":"g1AAAAF9eJzLYWBgYM1gTmFQTElKzi9KdUhJMtIrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dF-LTqBHEpATnkWCMUkKQDLJHtWk0l8XG0AmSZJkUgLIpHpUk5qnLhYAmeSPZpIxPpPyWIAkwwEgBTTsPrJpts8UQKZFkeIuiGkPIKahuC2_tgBoGuOfrCwASaF7JA","Datasource":"Facebook","DocDate":"07/24/2015 08:30:00","Address":null,"Country":"()","Sentiment":"Positive","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"https://fbcdn-vthumb-a.akamaihd.net/hvthumb-ak-xtf1/v/t15.0-10/s130x130/11413826_947564605266303_910314959_n.jpg?oh=f50de568f954d193c88a17bfa2898e62&oe=560DCCE7&__gda__=1443756472_2dd2d775b0a7cd3ee60d099348820d2e","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"Just 3 days more!\nStand a chance to be a Shaatir Lekhak on #CID. Log on to www.cid.setindia.com for more."},{"ID":"122069694482469_947712885251475","Bookmark":"g1AAAAF9eJzLYWBgYM1gTmFQTElKzi9KdUhJMtIrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dF-LTqBHEpATnkWCMUkKQDLJHtWk0l8XG0AmSZJkUgLIpHpUk5qnLhYAmeSPZpIxPpPyWIAkwwEgBTTsPrJpts8UQKZFkeIuiGkPIKahuC2_tgBoGuOfrCwASaF7JA","Datasource":"Facebook","DocDate":"07/24/2015 07:30:00","Address":null,"Country":"()","Sentiment":"Positive","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"https://scontent.xx.fbcdn.net/hphotos-xtf1/v/t1.0-9/p130x130/11750725_947712885251475_7204800980894680496_n.png?oh=246de370f6d8fd3f93d985f777567efd&oe=56142DF1","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"The talented Junior; #Ajay to give a special performance with his father in the Parents Day Special episode tomorrow! #IndianIdolJunior"},{"ID":"122069694482469_948021328553964","Bookmark":"g1AAAAF9eJzLYWBgYM1gTmFQTElKzi9KdUhJMtIrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dF-LTqBHEpATnkWCMUkKQDLJHtWk0l8XG0AmSZJkUgLIpHpUk5qnLhYAmeSPZpIxPpPyWIAkwwEgBTTsPrJpts8UQKZFkeIuiGkPIKahuC2_tgBoGuOfrCwASaF7JA","Datasource":"Facebook","DocDate":"07/24/2015 06:32:38","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/p130x130/10984106_948021328553964_3833107130067756703_n.png?oh=8bef31486bd0cb2c908d096f50345d51&oe=564820EA","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"MUMBAI! Are you ready to meet our Juniors tonight?"},{"ID":"122069694482469_947608148595282","Bookmark":"g1AAAAF9eJzLYWBgYM1gTmFQTElKzi9KdUhJMtIrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dF-LTqBHEpATnkWCMUkKQDLJHtWk0l8XG0AmSZJkUgLIpHpUk5qnLhYAmeSPZpIxPpPyWIAkwwEgBTTsPrJpts8UQKZFkeIuiGkPIKahuC2_tgBoGuOfrCwASaF7JA","Datasource":"Facebook","DocDate":"07/24/2015 06:30:00","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQD5xHhw7TyMOJWo&w=130&h=130&url=http%3A%2F%2Fresources.sonyliv.com%2Fimage%2Fupload%2Fc_fill%2Cg_north%2Fsl-img-video-75482-brightcove-0-4359898275001.jpg&cfs=1&sx=111&sy=0&sw=270&sh=270","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"#Moti ne jeet le hain kahin dil! Watch his performance journey on #IndianIdolJunior here! \nStay tuned to Sony LIV for more."},{"ID":"122069694482469_947712635251500","Bookmark":"g1AAAAF9eJzLYWBgYM1gTmFQTElKzi9KdUhJMtIrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dF-LTqBHEpATnkWCMUkKQDLJHtWk0l8XG0AmSZJkUgLIpHpUk5qnLhYAmeSPZpIxPpPyWIAkwwEgBTTsPrJpts8UQKZFkeIuiGkPIKahuC2_tgBoGuOfrCwASaF7JA","Datasource":"Facebook","DocDate":"07/24/2015 05:00:01","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"https://scontent.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/p130x130/11760335_947712635251500_7716997046301773436_n.png?oh=4b5b546e9aa291b3a59bb2523e60b897&oe=564C4AFB","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"Sonakshi Sinha in tears on #IndianIdolJunior! But why? Find out TOMORROW at 8.30 PM. \n\nVishal Dadlani Salim Merchant"},{"ID":"122069694482469_947607635262000","Bookmark":"g1AAAAF9eJzLYWBgYM1gTmFQTElKzi9KdUhJMtIrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dF-LTqBHEpATnkWCMUkKQDLJHtWk0l8XG0AmSZJkUgLIpHpUk5qnLhYAmeSPZpIxPpPyWIAkwwEgBTTsPrJpts8UQKZFkeIuiGkPIKahuC2_tgBoGuOfrCwASaF7JA","Datasource":"Facebook","DocDate":"07/24/2015 04:30:01","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQCaRmOSXsAY-3sV&w=130&h=130&url=http%3A%2F%2Fresources.sonyliv.com%2Fimage%2Fupload%2Fc_fill%2Cg_north%2Fsl-img-video-75480-brightcove-0-4359898284001.jpg&cfs=1&sx=84&sy=0&sw=270&sh=270","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"Watch your favourite contestant #Shrilakshmi's evolution in #IndianIdolJunior here.\nFor more updates, stay tuned to Sony LIV."},{"ID":"122069694482469_947087278647369","Bookmark":"g1AAAAF9eJzLYWBgYM1gTmFQTElKzi9KdUhJMtIrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dF-LTqBHEpATnkWCMUkKQDLJHtWk0l8XG0AmSZJkUgLIpHpUk5qnLhYAmeSPZpIxPpPyWIAkwwEgBTTsPrJpts8UQKZFkeIuiGkPIKahuC2_tgBoGuOfrCwASaF7JA","Datasource":"Facebook","DocDate":"07/24/2015 03:30:00","Address":null,"Country":"()","Sentiment":"Positive","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"https://fbcdn-vthumb-a.akamaihd.net/hvthumb-ak-xat1/v/t15.0-10/s130x130/11331550_586741228095380_1152889009_n.jpg?oh=befe57a8770775d27489e83feb011950&oe=5611139D&__gda__=1447972381_1baa92f0b94f2de6aa5750f36f6fe019","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"Watch the Parents' Day special episode of #IndianIdolJr tomorrow at 8:30 pm."},{"ID":"122069694482469_947606681928762","Bookmark":"g1AAAAF9eJzLYWBgYM1gTmFQTElKzi9KdUhJMtIrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dF-LTqBHEpATnkWCMUkKQDLJHtWk0l8XG0AmSZJkUgLIpHpUk5qnLhYAmeSPZpIxPpPyWIAkwwEgBTTsPrJpts8UQKZFkeIuiGkPIKahuC2_tgBoGuOfrCwASaF7JA","Datasource":"Facebook","DocDate":"07/23/2015 16:00:06","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQDj-OqXSZro85Vd&w=130&h=130&url=http%3A%2F%2Fresources.sonyliv.com%2Fimage%2Fupload%2Fc_fill%2Cg_north%2Fsl-img-video-75479-brightcove-0-4359898285001.jpg&cfs=1&sx=112&sy=0&sw=270&sh=270","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"Here's how you can watch your favourite contestant, #Vaishnav's performance journey on #IndianIdolJunior"}]
var dataVideo=[{"ID":"624472642251165696","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dON0p_4ZiWZZJJiRpAAkk-xRjFm9rSl7QqI6ScY4gIyJRzFmDeOcugmJaiQZkwAyph7FmIXt_PYLEjnQjDHGZ0weC5BkaABSQJPmI7mI_5GZQqIs6UYtgBi1H8koucVtAeQYdQBi1H2EUcsEjWsZEsVJN-oBxCjksFoqoc6QKJKVBQCAcb5c","Datasource":"Twitter","DocDate":"Fri Jul 24 06:54:14 +0000 2015","Address":null,"Country":"()","Sentiment":"neutral","Gender":"M","VideoUrl":"https://youtu.be/eYS0DNCTS5E","VideoSource":"Youtube","VideoID":"eYS0DNCTS5E","PhotoUrl":null,"ProfileID":"@RParulkar_FC","ProfileName":"@♡Rachana♥Birdies♡","ProfileScreenName":null,"ProfileFollower":"314","ProfileFriends":"124","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/623043626231160834/4VcLh7pk_normal.jpg","Likes":null,"Retweet":null,"Text":"#Maharanapratap #OnLocation #Part2 https://t.co/AfqYjYKiWx @SonyTV @RParulkar"},{"ID":"624472455994675200","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dON0p_4ZiWZZJJiRpAAkk-xRjFm9rSl7QqI6ScY4gIyJRzFmDeOcugmJaiQZkwAyph7FmIXt_PYLEjnQjDHGZ0weC5BkaABSQJPmI7mI_5GZQqIs6UYtgBi1H8koucVtAeQYdQBi1H2EUcsEjWsZEsVJN-oBxCjksFoqoc6QKJKVBQCAcb5c","Datasource":"Twitter","DocDate":"Fri Jul 24 06:53:30 +0000 2015","Address":null,"Country":"()","Sentiment":"neutral","Gender":"M","VideoUrl":"https://youtu.be/rH5TgTkjZn0","VideoSource":"Youtube","VideoID":"rH5TgTkjZn0","PhotoUrl":null,"ProfileID":"@RParulkar_FC","ProfileName":"@♡Rachana♥Birdies♡","ProfileScreenName":null,"ProfileFollower":"314","ProfileFriends":"124","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/623043626231160834/4VcLh7pk_normal.jpg","Likes":null,"Retweet":null,"Text":"#MaharanaPratap #OnLocation #Part1 https://t.co/nhwt777dMj @SonyTV @RParulkar"},{"ID":"623185829981106176","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dON0p_4ZiWZZJJiRpAAkk-xRjFm9rSl7QqI6ScY4gIyJRzFmDeOcugmJaiQZkwAyph7FmIXt_PYLEjnQjDHGZ0weC5BkaABSQJPmI7mI_5GZQqIs6UYtgBi1H8koucVtAeQYdQBi1H2EUcsEjWsZEsVJN-oBxCjksFoqoc6QKJKVBQCAcb5c","Datasource":"Twitter","DocDate":"Mon Jul 20 17:40:54 +0000 2015","Address":null,"Country":"()","Sentiment":"neutral","Gender":"F","VideoUrl":"https://youtu.be/nkKkPRBT41Q","VideoSource":"Youtube","VideoID":"nkKkPRBT41Q","PhotoUrl":null,"ProfileID":"@eshapandey1","ProfileName":"@esha pandey","ProfileScreenName":null,"ProfileFollower":"24","ProfileFriends":"110","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/623164427232129025/g68roTRY_normal.jpg","Likes":null,"Retweet":null,"Text":"@SonyTV  @spotlessmind16  @sonakshisinha @VishalDadlani jiya lage na...-talaash\"  YouTube - Jiya lage na...-talaash: https://t.co/h0NznboK6w"},{"ID":"621578627520401408","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dON0p_4ZiWZZJJiRpAAkk-xRjFm9rSl7QqI6ScY4gIyJRzFmDeOcugmJaiQZkwAyph7FmIXt_PYLEjnQjDHGZ0weC5BkaABSQJPmI7mI_5GZQqIs6UYtgBi1H8koucVtAeQYdQBi1H2EUcsEjWsZEsVJN-oBxCjksFoqoc6QKJKVBQCAcb5c","Datasource":"Twitter","DocDate":"Thu Jul 16 07:14:27 +0000 2015","Address":"Mumbai, Maharashtra, India","Country":"India(IN)","Sentiment":"Positive","Gender":"F","VideoUrl":"https://www.youtube.com/watch?v=_73Lq4D-WtE&feature=youtube_gdata_player","VideoSource":"Youtube","VideoID":"youtube_gdata_player","PhotoUrl":null,"ProfileID":"@AaryaBabbar222","ProfileName":"@Aarya Babbar","ProfileScreenName":null,"ProfileFollower":"16801","ProfileFriends":"313","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/589305898675220480/4CL8caXE_normal.jpg","Likes":null,"Retweet":null,"Text":"For everyone who missed the superb episode Yday ! @SonyTV #Ravan 😈 https://t.co/aQa3scHkW8"},{"ID":"621205307243364353","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dON0p_4ZiWZZJJiRpAAkk-xRjFm9rSl7QqI6ScY4gIyJRzFmDeOcugmJaiQZkwAyph7FmIXt_PYLEjnQjDHGZ0weC5BkaABSQJPmI7mI_5GZQqIs6UYtgBi1H8koucVtAeQYdQBi1H2EUcsEjWsZEsVJN-oBxCjksFoqoc6QKJKVBQCAcb5c","Datasource":"Twitter","DocDate":"Wed Jul 15 06:31:01 +0000 2015","Address":"New Delhi, Delhi, India","Country":"India(IN)","Sentiment":"Positive","Gender":"F","VideoUrl":"https://www.youtube.com/watch?v=cFMJN6JeAm4","VideoSource":"Youtube","VideoID":"cFMJN6JeAm4","PhotoUrl":null,"ProfileID":"@BANTISMITHROCK","ProfileName":"@BantiSmith","ProfileScreenName":null,"ProfileFollower":"116","ProfileFriends":"434","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/2620414519/whfj8xy4c1b0rbvrvcjz_normal.jpeg","Likes":null,"Retweet":null,"Text":"https://t.co/rCWhfD2q1H\n\n#ComedyCircus its for ever show for laughing...Must watch @SonyTV @sonytvuk"},{"ID":"621008323693821952","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dON0p_4ZiWZZJJiRpAAkk-xRjFm9rSl7QqI6ScY4gIyJRzFmDeOcugmJaiQZkwAyph7FmIXt_PYLEjnQjDHGZ0weC5BkaABSQJPmI7mI_5GZQqIs6UYtgBi1H8koucVtAeQYdQBi1H2EUcsEjWsZEsVJN-oBxCjksFoqoc6QKJKVBQCAcb5c","Datasource":"Twitter","DocDate":"Tue Jul 14 17:28:16 +0000 2015","Address":"India","Country":"India(IN)","Sentiment":"Positive","Gender":"M","VideoUrl":"http://www.youtube.com/watch?v=VEEue0xN7SI&list=EL8XQCKG-tnzAnfy7x9TTa0g#t=22","VideoSource":"Youtube","VideoID":"VEEue0xN7SI","PhotoUrl":"http://pbs.twimg.com/media/CJ5DxVzUEAAB8WP.jpg","ProfileID":"@Thekkapoor","ProfileName":"@Amitabh Bachchan FC ","ProfileScreenName":null,"ProfileFollower":"15675","ProfileFriends":"120","ProfilePhotoUrl":"http://pbs.twimg.com/profile_images/609699759712907265/W7t5zDYl_normal.jpg","Likes":null,"Retweet":null,"Text":"T 1025 - @SrBachchan's #Yudh's all episodes by visiting @Sonytv's @YouTube  http://t.co/94JfMeoeS2  #1YearsOfYudh http://t.co/DmT8vWTxNO"},{"ID":"123859988694","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dON0p_4ZiWZZJJiRpAAkk-xRjFm9rSl7QqI6ScY4gIyJRzFmDeOcugmJaiQZkwAyph7FmIXt_PYLEjnQjDHGZ0weC5BkaABSQJPmI7mI_5GZQqIs6UYtgBi1H8koucVtAeQYdQBi1H2EUcsEjWsZEsVJN-oBxCjksFoqoc6QKJKVBQCAcb5c","Datasource":"Tumblr","DocDate":"2015-07-12 03:49:42 GMT","Address":null,"Country":"()","Sentiment":"neutral","Gender":null,"VideoUrl":null,"VideoSource":null,"VideoID":null,"PhotoUrl":null,"ProfileID":"http://ak-ankur.tumblr.com/post/123859988694/bang-bang-performance-by","ProfileName":"ak-ankur","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":null,"Likes":null,"Retweet":null,"Text":"Bang bang performance by #indianidoljr#indian#idol#junior#sonytv#benny (at Banglore) "},{"ID":"122069694482469_937742079581889","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dON0p_4ZiWZZJJiRpAAkk-xRjFm9rSl7QqI6ScY4gIyJRzFmDeOcugmJaiQZkwAyph7FmIXt_PYLEjnQjDHGZ0weC5BkaABSQJPmI7mI_5GZQqIs6UYtgBi1H8koucVtAeQYdQBi1H2EUcsEjWsZEsVJN-oBxCjksFoqoc6QKJKVBQCAcb5c","Datasource":"Facebook","DocDate":"07/04/2015 08:30:00","Address":null,"Country":"()","Sentiment":"neutral","Gender":null,"VideoUrl":"https://www.youtube.com/watch?v=uy95sc2rVbs&feature=youtu.be","VideoSource":"Youtube","VideoID":"uy95sc2rVbs","PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQAdbWcRE0y64d_W&w=130&h=130&url=http%3A%2F%2Fi.ytimg.com%2Fvi%2Fuy95sc2rVbs%2Fmaxresdefault.jpg&cfs=1&sx=383&sy=0&sw=1080&sh=1080","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"Kaun hai yahaan Salman Khan ka fan?\n\nWatch #SalmanOnIndianIdolJr tonight at 8:30 pm."},{"ID":"122069694482469_937741242915306","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dON0p_4ZiWZZJJiRpAAkk-xRjFm9rSl7QqI6ScY4gIyJRzFmDeOcugmJaiQZkwAyph7FmIXt_PYLEjnQjDHGZ0weC5BkaABSQJPmI7mI_5GZQqIs6UYtgBi1H8koucVtAeQYdQBi1H2EUcsEjWsZEsVJN-oBxCjksFoqoc6QKJKVBQCAcb5c","Datasource":"Facebook","DocDate":"07/04/2015 05:30:01","Address":null,"Country":"()","Sentiment":"neutral","Gender":null,"VideoUrl":"https://www.youtube.com/watch?v=JXn5M_buMSY&feature=youtu.be","VideoSource":"Youtube","VideoID":"JXn5M_buMSY","PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQBPftBgrmnSquBv&w=130&h=130&url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FJXn5M_buMSY%2Fmaxresdefault.jpg&cfs=1&sx=0&sy=0&sw=1080&sh=1080","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"Salman Khan aur Juniors milke karenge khoob saara dhamaal!\nGet ready for #SalmanOnIndianIdolJr tonight at 8:30 pm."},{"ID":"122069694482469_937740496248714","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dON0p_4ZiWZZJJiRpAAkk-xRjFm9rSl7QqI6ScY4gIyJRzFmDeOcugmJaiQZkwAyph7FmIXt_PYLEjnQjDHGZ0weC5BkaABSQJPmI7mI_5GZQqIs6UYtgBi1H8koucVtAeQYdQBi1H2EUcsEjWsZEsVJN-oBxCjksFoqoc6QKJKVBQCAcb5c","Datasource":"Facebook","DocDate":"07/03/2015 11:33:04","Address":null,"Country":"()","Sentiment":"Positive","Gender":null,"VideoUrl":"https://www.youtube.com/watch?v=nr7DaVJJkqo&feature=youtu.be","VideoSource":"Youtube","VideoID":"nr7DaVJJkqo","PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQBwU4g_PWlGKwJ1&w=130&h=130&url=http%3A%2F%2Fi.ytimg.com%2Fvi%2Fnr7DaVJJkqo%2Fmaxresdefault.jpg&cfs=1&sx=599&sy=0&sw=1080&sh=1080","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"Rajjo and Chulbul Pandey unite on #IndianIdolJr tonight. \n\nAre you excited to watch Salman Khan tomorrow at 8:30 pm? \nhttps://www.youtube.com/watch?v=nr7DaVJJkqo&feature=youtu.be"},{"ID":"122069694482469_933586083330822","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dON0p_4ZiWZZJJiRpAAkk-xRjFm9rSl7QqI6ScY4gIyJRzFmDeOcugmJaiQZkwAyph7FmIXt_PYLEjnQjDHGZ0weC5BkaABSQJPmI7mI_5GZQqIs6UYtgBi1H8koucVtAeQYdQBi1H2EUcsEjWsZEsVJN-oBxCjksFoqoc6QKJKVBQCAcb5c","Datasource":"Facebook","DocDate":"06/27/2015 06:00:01","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":"https://www.youtube.com/watch?v=agqBmRDaoDs&feature=youtu.be","VideoSource":"Youtube","VideoID":"agqBmRDaoDs","PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQAk0vLpJHLXfeZ0&w=130&h=130&url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FagqBmRDaoDs%2Fmaxresdefault.jpg&cfs=1","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"Watch #Karn's whole story on #SuryaputraKarn starting on 29th June, Mon-Thu 8.30 PM."},{"ID":"122069694482469_933460150010082","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dON0p_4ZiWZZJJiRpAAkk-xRjFm9rSl7QqI6ScY4gIyJRzFmDeOcugmJaiQZkwAyph7FmIXt_PYLEjnQjDHGZ0weC5BkaABSQJPmI7mI_5GZQqIs6UYtgBi1H8koucVtAeQYdQBi1H2EUcsEjWsZEsVJN-oBxCjksFoqoc6QKJKVBQCAcb5c","Datasource":"Facebook","DocDate":"06/26/2015 12:30:01","Address":null,"Country":"()","Sentiment":"neutral","Gender":null,"VideoUrl":"https://www.youtube.com/watch?v=22IUk1AidWA&feature=youtu.be","VideoSource":"Youtube","VideoID":"22IUk1AidWA","PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQC2Xv0dhgKiHRbX&w=130&h=130&url=http%3A%2F%2Fi.ytimg.com%2Fvi%2F22IUk1AidWA%2Fmaxresdefault.jpg&cfs=1","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"Dekhna na bhuliye #Karn ki maha katha ka aarambh iss 29th June, raat 8.30 baje."},{"ID":"122069694482469_933457770010320","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dON0p_4ZiWZZJJiRpAAkk-xRjFm9rSl7QqI6ScY4gIyJRzFmDeOcugmJaiQZkwAyph7FmIXt_PYLEjnQjDHGZ0weC5BkaABSQJPmI7mI_5GZQqIs6UYtgBi1H8koucVtAeQYdQBi1H2EUcsEjWsZEsVJN-oBxCjksFoqoc6QKJKVBQCAcb5c","Datasource":"Facebook","DocDate":"06/26/2015 10:00:01","Address":null,"Country":"()","Sentiment":"neutral","Gender":null,"VideoUrl":"https://www.youtube.com/watch?v=agqBmRDaoDs&feature=youtu.be","VideoSource":"Youtube","VideoID":"agqBmRDaoDs","PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQAk0vLpJHLXfeZ0&w=130&h=130&url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FagqBmRDaoDs%2Fmaxresdefault.jpg&cfs=1","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"Jaaniye Karn ki kahani ka asli sadh!\n#SuryaPutraKarn starts on 29th June, Mon-Thu at 8.30 PM."},{"ID":"122069694482469_920796504609780","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dON0p_4ZiWZZJJiRpAAkk-xRjFm9rSl7QqI6ScY4gIyJRzFmDeOcugmJaiQZkwAyph7FmIXt_PYLEjnQjDHGZ0weC5BkaABSQJPmI7mI_5GZQqIs6UYtgBi1H8koucVtAeQYdQBi1H2EUcsEjWsZEsVJN-oBxCjksFoqoc6QKJKVBQCAcb5c","Datasource":"Facebook","DocDate":"06/08/2015 08:59:12","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":"https://www.youtube.com/watch?v=dEwywoYqMos&feature=youtu.be","VideoSource":"Youtube","VideoID":"dEwywoYqMos","PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQAV_b3WCavzkX9u&w=130&h=130&url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FdEwywoYqMos%2Fhqdefault.jpg&cfs=1&sx=31&sy=0&sw=360&sh=360","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"Watch the story of 'Karn'; the unsung hero of Mahabharata on Suryaputra Karn, starting 29th June, Mon-Thu at 8.30 PM.\n\nAditya Redij"},{"ID":"122069694482469_918130198209744","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dON0p_4ZiWZZJJiRpAAkk-xRjFm9rSl7QqI6ScY4gIyJRzFmDeOcugmJaiQZkwAyph7FmIXt_PYLEjnQjDHGZ0weC5BkaABSQJPmI7mI_5GZQqIs6UYtgBi1H8koucVtAeQYdQBi1H2EUcsEjWsZEsVJN-oBxCjksFoqoc6QKJKVBQCAcb5c","Datasource":"Facebook","DocDate":"06/02/2015 12:31:40","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":"https://www.youtube.com/watch?v=EQBjgZw_uIY&feature=youtu.be","VideoSource":"Youtube","VideoID":"EQBjgZw_uIY","PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQCoA8lTo5cKxXYh&w=130&h=130&url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FEQBjgZw_uIY%2Fhqdefault.jpg&cfs=1","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"Nafrat se bhare dono, kya aayenge ek dusre ke kareeb? #Reporters \n\nRajeev Khandelwal Kritika Kamra"},{"ID":"122069694482469_906212682734829","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dON0p_4ZiWZZJJiRpAAkk-xRjFm9rSl7QqI6ScY4gIyJRzFmDeOcugmJaiQZkwAyph7FmIXt_PYLEjnQjDHGZ0weC5BkaABSQJPmI7mI_5GZQqIs6UYtgBi1H8koucVtAeQYdQBi1H2EUcsEjWsZEsVJN-oBxCjksFoqoc6QKJKVBQCAcb5c","Datasource":"Facebook","DocDate":"05/06/2015 10:30:00","Address":null,"Country":"()","Sentiment":"Positive","Gender":null,"VideoUrl":"https://www.youtube.com/watch?v=5qpaN2XA9E0&feature=youtu.be","VideoSource":"Youtube","VideoID":"5qpaN2XA9E0","PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQBnmJyURNSReU0b&w=130&h=130&url=http%3A%2F%2Fi.ytimg.com%2Fvi%2F5qpaN2XA9E0%2Fmaxresdefault.jpg&cfs=1&sx=647&sy=0&sw=1080&sh=1080","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"RAVANA aa rahe hain aaj raat! \nDon't miss to watch Sankat Mochan Mahabali #Hanumaan TONIGHT at 8 PM.\n\nNirbhay wadhwa"},{"ID":"122069694482469_904599512896146","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dON0p_4ZiWZZJJiRpAAkk-xRjFm9rSl7QqI6ScY4gIyJRzFmDeOcugmJaiQZkwAyph7FmIXt_PYLEjnQjDHGZ0weC5BkaABSQJPmI7mI_5GZQqIs6UYtgBi1H8koucVtAeQYdQBi1H2EUcsEjWsZEsVJN-oBxCjksFoqoc6QKJKVBQCAcb5c","Datasource":"Facebook","DocDate":"05/02/2015 05:51:18","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":"https://m.youtube.com/watch?v=3migmOCb9RI","VideoSource":"Youtube","VideoID":"3migmOCb9RI","PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQB5frBb-wc0aQc-&w=130&h=130&url=https%3A%2F%2Fwww.facebook.com%2Fads%2Fimage%2F%3Fd%3DAQIPnM9sVyXCYDppElYw6WNafohs8-GSQlNpSXgawk5yiIAbZ0loiRlNIBUuuvKljtuBEnZatIc_zcNOBZ7SEIZc7iHfwxPCvPTzk-60nwwT2KGv6oIKDUh4qXUPWYTZQyUlzxJk_UTYlAz5t77fmfez&cfs=1","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"All you Sonakshi Sinha fans... Get ready because Rajjo is back! Watch the #IndianIdolJrPromo and share your views with us in the comments below."},{"ID":"122069694482469_904368939585870","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dON0p_4ZiWZZJJiRpAAkk-xRjFm9rSl7QqI6ScY4gIyJRzFmDeOcugmJaiQZkwAyph7FmIXt_PYLEjnQjDHGZ0weC5BkaABSQJPmI7mI_5GZQqIs6UYtgBi1H8koucVtAeQYdQBi1H2EUcsEjWsZEsVJN-oBxCjksFoqoc6QKJKVBQCAcb5c","Datasource":"Facebook","DocDate":"05/01/2015 14:37:23","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":"https://m.youtube.com/watch?v=3migmOCb9RI","VideoSource":"Youtube","VideoID":"3migmOCb9RI","PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQBb2TEWMWSfEtZQ&w=130&h=130&url=http%3A%2F%2Fi.ytimg.com%2Fvi%2F3migmOCb9RI%2Fmaxresdefault.jpg&cfs=1&sx=497&sy=0&sw=1080&sh=1080","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"Here's the exclusive #IndianIdolJrTrailer for you all! Share your views in the comments below. \nSonakshi Sinha"},{"ID":"122069694482469_892653664090731","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dON0p_4ZiWZZJJiRpAAkk-xRjFm9rSl7QqI6ScY4gIyJRzFmDeOcugmJaiQZkwAyph7FmIXt_PYLEjnQjDHGZ0weC5BkaABSQJPmI7mI_5GZQqIs6UYtgBi1H8koucVtAeQYdQBi1H2EUcsEjWsZEsVJN-oBxCjksFoqoc6QKJKVBQCAcb5c","Datasource":"Facebook","DocDate":"04/09/2015 07:00:01","Address":null,"Country":"()","Sentiment":"Negative","Gender":null,"VideoUrl":"https://www.youtube.com/watch?v=2T_2VNV6TXU&feature=youtu.be","VideoSource":"Youtube","VideoID":"2T_2VNV6TXU","PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQBlEWhAeGZEv2DO&w=130&h=130&url=http%3A%2F%2Fi.ytimg.com%2Fvi%2F2T_2VNV6TXU%2Fmaxresdefault.jpg&cfs=1&sx=823&sy=0&sw=1080&sh=1080","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"Kuch baatein karno se nahi, dharno se banti hain! #Reporters, starts this April 13th!\n\nRajeev Khandelwal"},{"ID":"122069694482469_892639930758771","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dON0p_4ZiWZZJJiRpAAkk-xRjFm9rSl7QqI6ScY4gIyJRzFmDeOcugmJaiQZkwAyph7FmIXt_PYLEjnQjDHGZ0weC5BkaABSQJPmI7mI_5GZQqIs6UYtgBi1H8koucVtAeQYdQBi1H2EUcsEjWsZEsVJN-oBxCjksFoqoc6QKJKVBQCAcb5c","Datasource":"Facebook","DocDate":"04/09/2015 05:46:36","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":"https://www.youtube.com/watch?v=GeMrXpPjJPM&feature=youtu.be","VideoSource":"Youtube","VideoID":"GeMrXpPjJPM","PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQB8q5vLR7Wsq7Tv&w=130&h=130&url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FGeMrXpPjJPM%2Fmaxresdefault.jpg&cfs=1&sx=196&sy=0&sw=1080&sh=1080","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"A story of two journalists; Kabir and Ananya!\nAre you excited to meet these #Reporters?"},{"ID":"122069694482469_892081387481292","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dON0p_4ZiWZZJJiRpAAkk-xRjFm9rSl7QqI6ScY4gIyJRzFmDeOcugmJaiQZkwAyph7FmIXt_PYLEjnQjDHGZ0weC5BkaABSQJPmI7mI_5GZQqIs6UYtgBi1H8koucVtAeQYdQBi1H2EUcsEjWsZEsVJN-oBxCjksFoqoc6QKJKVBQCAcb5c","Datasource":"Facebook","DocDate":"04/08/2015 06:10:04","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":"https://www.youtube.com/watch?v=F4fZR0CDNgk&feature=youtu.be","VideoSource":"Youtube","VideoID":"F4fZR0CDNgk","PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQBQT4ODhyBWydiq&w=130&h=130&url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FF4fZR0CDNgk%2Fmaxresdefault.jpg&cfs=1&sx=823&sy=0&sw=1080&sh=1080","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"Here's what Ananya thinks about BREAKING NEWS!\nWhat are your views?\n#Reporters, starts this 13th April, Mon-Thu at 9 PM"},{"ID":"122069694482469_891460097543421","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dON0p_4ZiWZZJJiRpAAkk-xRjFm9rSl7QqI6ScY4gIyJRzFmDeOcugmJaiQZkwAyph7FmIXt_PYLEjnQjDHGZ0weC5BkaABSQJPmI7mI_5GZQqIs6UYtgBi1H8koucVtAeQYdQBi1H2EUcsEjWsZEsVJN-oBxCjksFoqoc6QKJKVBQCAcb5c","Datasource":"Facebook","DocDate":"04/07/2015 07:08:19","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":"https://www.youtube.com/watch?v=AkebUjbiT2c&feature=youtu.be","VideoSource":"Youtube","VideoID":"AkebUjbiT2c","PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQBwKlyWDouFsDOU&w=130&h=130&url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FAkebUjbiT2c%2Fmaxresdefault.jpg&cfs=1&sx=823&sy=0&sw=1080&sh=1080","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"Here's what Kabir thinks! Do you think he is right? #Reporters starts this 13th April, Mon-Thu at 9 PM\n\nRajeev Khandelwal"},{"ID":"122069694482469_890815374274560","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dON0p_4ZiWZZJJiRpAAkk-xRjFm9rSl7QqI6ScY4gIyJRzFmDeOcugmJaiQZkwAyph7FmIXt_PYLEjnQjDHGZ0weC5BkaABSQJPmI7mI_5GZQqIs6UYtgBi1H8koucVtAeQYdQBi1H2EUcsEjWsZEsVJN-oBxCjksFoqoc6QKJKVBQCAcb5c","Datasource":"Facebook","DocDate":"04/06/2015 11:30:02","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":"http://youtu.be/QXbXhlmsbuA","VideoSource":"Youtube","VideoID":"QXbXhlmsbuA","PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQBerJk_4gCfynY-&w=130&h=130&url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FQXbXhlmsbuA%2Fmaxresdefault.jpg&cfs=1&sx=102&sy=0&sw=720&sh=720","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"Here the trailer of our new show Reporters! Hit 'LIKE' and share your views with us. Rajeev Khandelwal Kritika Kamra"},{"ID":"122069694482469_887553164600781","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dON0p_4ZiWZZJJiRpAAkk-xRjFm9rSl7QqI6ScY4gIyJRzFmDeOcugmJaiQZkwAyph7FmIXt_PYLEjnQjDHGZ0weC5BkaABSQJPmI7mI_5GZQqIs6UYtgBi1H8koucVtAeQYdQBi1H2EUcsEjWsZEsVJN-oBxCjksFoqoc6QKJKVBQCAcb5c","Datasource":"Facebook","DocDate":"04/01/2015 07:30:01","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":"https://www.youtube.com/watch?v=OymmSi9aEGs","VideoSource":"Youtube","VideoID":"OymmSi9aEGs","PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQB9L7frmsaz-jmO&w=130&h=130&url=http%3A%2F%2Fi.ytimg.com%2Fvi%2FOymmSi9aEGs%2Fmaxresdefault.jpg&cfs=1","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"Get ready to have an inside look of the most awaited promo of #Reporters...\nRajeev Khandelwal Kritika Kamra"},{"ID":"122069694482469_871620012860763","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dON0p_4ZiWZZJJiRpAAkk-xRjFm9rSl7QqI6ScY4gIyJRzFmDeOcugmJaiQZkwAyph7FmIXt_PYLEjnQjDHGZ0weC5BkaABSQJPmI7mI_5GZQqIs6UYtgBi1H8koucVtAeQYdQBi1H2EUcsEjWsZEsVJN-oBxCjksFoqoc6QKJKVBQCAcb5c","Datasource":"Facebook","DocDate":"03/04/2015 08:00:00","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":"https://www.youtube.com/watch?v=z2Hb7LJ5dDI","VideoSource":"Youtube","VideoID":"z2Hb7LJ5dDI","PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQAQRcUymdP1LZ4Z&w=130&h=130&url=http%3A%2F%2Fi.ytimg.com%2Fvi%2Fz2Hb7LJ5dDI%2Fmaxresdefault.jpg&cfs=1&sx=519&sy=0&sw=1080&sh=1080","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"Watch the latest promo of our new show #DilKiBaateinDilHiJaane and share your views with us in the comments below!\nOfficial Ram Kapoor"},{"ID":"122069694482469_869935759695855","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dON0p_4ZiWZZJJiRpAAkk-xRjFm9rSl7QqI6ScY4gIyJRzFmDeOcugmJaiQZkwAyph7FmIXt_PYLEjnQjDHGZ0weC5BkaABSQJPmI7mI_5GZQqIs6UYtgBi1H8koucVtAeQYdQBi1H2EUcsEjWsZEsVJN-oBxCjksFoqoc6QKJKVBQCAcb5c","Datasource":"Facebook","DocDate":"02/28/2015 10:56:13","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":"https://www.youtube.com/watch?v=80qpa4eq2J8","VideoSource":"Youtube","VideoID":"80qpa4eq2J8","PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQCmj2mSE52p3M8z&w=130&h=130&url=http%3A%2F%2Fi.ytimg.com%2Fvi%2F80qpa4eq2J8%2Fhqdefault.jpg&cfs=1","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"A mythological tale of the unsung hero!\n\nWatch the teaser of our upcoming show - Suryaputra Karn... Coming soon!"},{"ID":"122069694482469_869080953114669","Bookmark":"g1AAAAJLeJzLYWBg4MhgTmFQTElKzi9KdUhJMtQrzk_OTMwxMDDUS87JL01JzCvRy0styQEqZUpkSJL___9_Fpjj5hz4dON0p_4ZiWZZJJiRpAAkk-xRjFm9rSl7QqI6ScY4gIyJRzFmDeOcugmJaiQZkwAyph7FmIXt_PYLEjnQjDHGZ0weC5BkaABSQJPmI7mI_5GZQqIs6UYtgBi1H8koucVtAeQYdQBi1H2EUcsEjWsZEsVJN-oBxCjksFoqoc6QKJKVBQCAcb5c","Datasource":"Facebook","DocDate":"02/26/2015 09:00:01","Address":null,"Country":"()","Sentiment":"Neutral","Gender":null,"VideoUrl":"https://www.youtube.com/watch?v=_QEa4OTnGWs&feature=youtu.be","VideoSource":"Youtube","VideoID":"_QEa4OTnGWs","PhotoUrl":"https://fbexternal-a.akamaihd.net/safe_image.php?d=AQD1DR2jpxnL_jVR&w=130&h=130&url=http%3A%2F%2Fi.ytimg.com%2Fvi%2F_QEa4OTnGWs%2Fhqdefault.jpg&cfs=1&sx=23&sy=0&sw=360&sh=360","ProfileID":"122069694482469","ProfileName":"Sony Entertainment Television","ProfileScreenName":null,"ProfileFollower":null,"ProfileFriends":null,"ProfilePhotoUrl":"http://graph.facebook.com/122069694482469/picture?type=square","Likes":null,"Retweet":null,"Text":"Official Ram Kapoor is an all new avatar!\nWatch him in his upcoming show #DilKiBaateinDilHiJaane #ComingSoon\nAre you excited to watch the show? http://bit.ly/180EByu"}]
var type="positive";
var returnurl="http://bharatmovies.social";
var title="Popular comments on social media";
var id="cric_data3009";
var q="Male";

React.render(<CommentList data={data} id={id} title={title} returnurl={returnurl} type={type} q={q} container={container}/>, container);

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

            React.render(<CommentList data={data} id={id} title={title} returnurl={returnurl} type={type} limit={limit} q={q} container={container}/>, container);

});

};
return {
    infiniteCardWidget: infiniteCardWidget
};
}();


//DetailWidgetRunner.infiniteCardWidget("bolly_data327",document.getElementById('comments'),"popular",10,"",null,"/comments/");
