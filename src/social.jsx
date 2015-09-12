var React = require("react");
var $ = require("jQuery");
var BubblySmall = require("../bubbly_small/src/bubblySmall.js");
var BubblyBM = require("../bubbly_bm/src/bubblyBm.js");
var SmallCardVertical = require("../bubbly_materializecss/src/smallCard.js");
var MediumCard = require("../bubbly_materializecss/src/mediumCard.js");
var LargeCard = require("../bubbly_materializecss/src/largeCard.js");
var CardReveal = require("../bubbly_materializecss/src/cardReveal.js");
var CardPanel = require("../bubbly_materializecss/src/cardPanel.js");

var PhotoCollage = require("../bubbly_photoCollage/src/bubblyPC.js");
var PhotoCollageMixIt = require("../bubbly_photoCollage/src/bubblyPCMixIt.js");
var VideoCollage = require("../bubbly_videoCollage/src/bubblyVC.js");

var SmallMSN = require("../bubbly_small_msn/src/smallmsn.js");
var SmallText = require("../bubbly_small_text/src/smallText.js");
var SocialInfluance = require("../bubbly_socialInfluance/src/socialInfluance.js");

var CommentListMaterial = require("../bubbly_comments/bubbly_comments/src/commentsMaterial.js");
var RSSListDesc = require("../bubbly_rsslist_desc/src/rssListDesc.js");
var RSSListImg = require("../bubbly_rsslist_img/src/rssListImg.js");
var ImageGallery =require("../bubbly_rsslist_img/src/rssListImageGallery.js");
var BubblyBMYahoo = require("../bubbly_bm/src/bubblyBmReal.js");
var LargePicture = require("../bubbly_largePicture/src/largePicture.js");
var LargeVideoAutoPlay = require("../bubbly_largeVideo/src/LargeVideoAutoPlay.js");
var LargeVideo = require("../bubbly_largeVideo/src/largeVideo.js");
var Wall = require("../bubbly_wall/src/wall.js");
var ImageGalleryThumbNail = require("../bubbly_bm/src/imageGalleryThumbNail.js");
var Story = require("../bubbly_story/src/story.js");
//var UserApp = require("../bubbly_contactForm/src/contactForm.js");

var Bubbly = React.createClass({
	getDefaultProps:function(){
	    return {
	      WidgetUrl : "http://s24x7.azurewebsites.net/api/summary/",
	      styles : "styles",
	      url : ""
	    }
  	},
  	getInitialState:function(){
	    return {
	      cmpdata: {}
	    }
  	},
  	componentWillMount: function() {
  		console.log("componentWillMount");

        if (this.props.data) {
  			this.setState({cmpdata: this.props.data});
        	
        } else {
        	this.setState({cmpdata: this.props.data});
        	/*console.log("dataFromPage False");

            var url =  this.props.WidgetUrl + "?id=" +  this.props.id;
           
            jQuery.ajax({
                url: url,
                type: 'GET',
                dataType: 'JSON',
                cache: false
            }).done(function(ajaxdata) {
            	this.setState({cmpdata: ajaxdata});
            
            }.bind(this));*/
        }
  	},
  	componentDidMount: function () {


  	},
	render: function(){
		var cmpreturnurl = "http://www.cricket24x7.social";
	    if (this.props.returnurl) {
	              cmpreturnurl = this.props.returnurl;
	    }


    
    
		console.log( this.props.id + ' ' + JSON.stringify(this.props.data) + ' ' + this.props.returnurl  + ' ' +this.props.styles );
		if( this.props.cardtype === "BMOLD"){
			
			return( 
				<div>
				<BubblyBM id={this.props.id} data={this.state.cmpdata} returnurl={cmpreturnurl} styles={this.props.styles}/>
				</div>
			);

		} else if( this.props.cardtype === "BM"){
			
			return( 
				<div>
				<BubblyBMYahoo id={this.props.id} data={this.state.cmpdata} returnurl={cmpreturnurl} styles={this.props.styles}/>
				</div>
			);

		}  else if( this.props.cardtype === "STORY"){
			
			return( 
				<div>
				<Story id={this.props.id} data={this.state.cmpdata} title={this.props.title} discription={this.props.Description}  returnurl={cmpreturnurl} styles={this.props.styles}/>
				</div>
			);

		}else if ( this.props.cardtype === "SMALLOLD") {
			return (
				<div>
				<BubblySmall id={this.props.id} data={this.state.cmpdata} returnurl={cmpreturnurl} styles={this.props.styles}/>	
				</div>
			);
		} else if ( this.props.cardtype === "MEDIUM") {
			return (
				<div>
				<MediumCard id={this.props.id} data={this.state.cmpdata} returnurl={cmpreturnurl} returnurl3={this.props.returnurl3} styles={this.props.styles}/>	
				</div>
			);
		} else if ( this.props.cardtype === "LARGE") {
			return (
				<div>
				<LargeCard id={this.props.id} data={this.state.cmpdata} returnurl={cmpreturnurl} returnurl3={this.props.returnurl3}  styles={this.props.styles}/>	
				</div>
			);
		} else if ( this.props.cardtype === "SMALLVERTICAL") {
			return (
				<div>
				<SmallCardVertical id={this.props.id} data={this.state.cmpdata} returnurl={cmpreturnurl} styles={this.props.styles}/>	
				</div>
			);
		} else if ( this.props.cardtype === "SMALL") {
			return (
				<div>
				<SmallMSN id={this.props.id} data={this.state.cmpdata} returnurl={cmpreturnurl} styles={this.props.styles}/>	
				</div>
			);
		} else if ( this.props.cardtype === "SMALLTEXT") {
			return (
				<div>
				<SmallText id={this.props.id} data={this.state.cmpdata} returnurl={cmpreturnurl} styles={this.props.styles}/>	
				</div>
			);
		} else if ( this.props.cardtype === "CARDREVEAL") {
			return (
				<div>
				<CardReveal id={this.props.id} data={this.state.cmpdata} returnurl={cmpreturnurl} styles={this.props.styles}/>	
				</div>
			);
		} else if ( this.props.cardtype === "CARDPANEL") {
			return (
				<div>
				<CardPanel id={this.props.id} data={this.state.cmpdata} returnurl={cmpreturnurl} styles={this.props.styles}/>	
				</div>
			);
		} else if ( this.props.cardtype === "PCARD") {
			return (
				<div>
				<LargePicture id={this.props.id} data={this.state.cmpdata} returnurl={cmpreturnurl} styles={this.props.styles}/>	
				</div>
			);
		}  else if ( this.props.cardtype === "VCARD") {
			return (
				<div>
				<LargeVideo id={this.props.id}  data={this.state.cmpdata} returnurl={cmpreturnurl} styles={this.props.styles}/>	
				</div>
			);
		} else if ( this.props.cardtype === "VCARDAUTO") {
			return (
				<div>
				<LargeVideoAutoPlay id={this.props.id}  data={this.state.cmpdata} returnurl={cmpreturnurl} styles={this.props.styles}/>	
				</div>
			);
		} else if ( this.props.cardtype === "VC") {
			return (
				<div>
				<VideoCollage id={this.props.id} data={this.state.cmpdata} returnurl={cmpreturnurl} styles={this.props.styles}/>	
				</div>
			);
		} else if ( this.props.cardtype === "SI") {
			return (
				<div>
				<SocialInfluance id={this.props.id} data={this.state.cmpdata} returnurl={cmpreturnurl} styles={this.props.styles}/>	
				</div>
			);
		} else if ( this.props.cardtype === "COMMENTS") {
			return (
				<div>

				<CommentListMaterial data={this.state.cmpdata} id={this.props.id} title={this.props.commentstitle} returnurl={cmpreturnurl} styles={this.props.styles} type={this.props.commentstype} q={this.props.commentsq} container={this.props.commentscontainer}/>

				</div>
			);
		} else if ( this.props.cardtype === "WALL") {
			return (
				<div>

				<Wall data={this.state.cmpdata} id={this.props.id} title={this.props.commentstitle} returnurl={cmpreturnurl} styles={this.props.styles} type={this.props.commentstype} q={this.props.commentsq} container={this.props.commentscontainer}/>

				</div>
			);
		} else if ( this.props.cardtype === "RSSDESC") {
			return (
				<div>
				<RSSListDesc id={this.props.id} data={this.state.cmpdata}  returnurl={cmpreturnurl} styles={this.props.styles}/>
				</div>
			);
		} else if ( this.props.cardtype === "RSSIMG") {
			return (
				<div>
				<RSSListImg id={this.props.id} data={this.state.cmpdata}  returnurl={cmpreturnurl} styles={this.props.styles}/>
				</div>
			);
		} else if ( this.props.cardtype === "IMGGALLERY") {
			return (
				<div>
				<ImageGallery id={this.props.id} data={this.state.cmpdata}  returnurl={cmpreturnurl} styles={this.props.styles}/>
				</div>
			);
		} else if ( this.props.cardtype === "IMAGEGALLERYTHUMBNAIL") {
			return (
				<div>
				<ImageGalleryThumbNail id={this.props.id} data={this.state.cmpdata}  returnurl={cmpreturnurl} styles={this.props.styles}/>
				</div>
			);
		} else if ( this.props.cardtype === "BMYAHOO") {
			return (
				<div>
				<BubblyBMYahoo id={this.props.id} data={this.state.cmpdata} returnurl={cmpreturnurl} styles={this.props.styles}/>
				</div>
			);
		} 

		
	}
});

module.exports = Bubbly;

//"live": "NODE_ENV=production browserify -t [ reactify --es6 ] ./src/bubblyRunner.js | uglifyjs > ./dist/bubbly.min.js"
//"live":NODE_ENV=production browserify -t [ reactify --es6 ] ./src/bubblyRunner.js --standalone BubblyCard | uglifyjs > ./dist/bubbly.min.js
//live : NODE_ENV=production browserify -t [ reactify --es6 ] ./js/jquery.prettyPhoto.js ./js/owl.carousel.min ./js/morris.js ./js/raphael.j ./src/bubblyRunner.js --standalone BubblyCard | uglifyjs > ./dist/bubbly.min.js
//var dataFromPageG = {"ID":"bolly_data3342","Name":"Hamari Adhuri Kahani","Description":"Is Vidya Balan's 'Hamari Adhuri Kahani' a love triangle?","Category":"","ShowDefaultPicture":true,"SearchQuery":"Is Vidya Balan's 'Hamari Adhuri Kahani' a love triangle?","VideosCount":80,"PhotosCount":100,"PictureUrl":"http://i.ytimg.com/vi/94TekYJRAnE/0.jpg","Photos":[{"Url":"http://pbs.twimg.com/media/CFB5GY5UkAApYLU.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CFDzWr-UgAEnf27.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CEzuC73UkAIcb7a.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/ext_tw_video_thumb/599418226162827264/pu/img/sB4Hx9lLDDGctCac.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CFDpgy7XIAA0LZB.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CE0cxClVIAIhUqp.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CEzrYXVVEAEMFph.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CE0fetVUkAETHPh.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CEz1F21UMAEM_XX.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CFFsyO3UIAAx1Tb.jpg","Description":null,"Count":0}],"Videos":[{"ID":"17Ebfhs6pMo","Url":"https://www.youtube.com/watch?v=17Ebfhs6pMo","Source":"Youtube","Count":23},{"ID":"2fiT_TJlySk","Url":"https://www.youtube.com/watch?v=2fiT_TJlySk","Source":"Youtube","Count":2},{"ID":"sU9o6GkbTpM","Url":"http://youtu.be/sU9o6GkbTpM","Source":"Youtube","Count":1}],"Photo":"http://i.ytimg.com/vi/94TekYJRAnE/0.jpg","Video":null,"Total":458,"Stat":{"Type":"ALL","PosCount":135,"NegCount":7,"NeuCount":316,"PosPercent":29.0,"NegPercent":1.0,"NeuPercent":68.0},"SocialStats":[{"Type":"TW","PosCount":133,"NegCount":7,"NeuCount":302,"PosPercent":30.0,"NegPercent":1.0,"NeuPercent":68.0},{"Type":"TM","PosCount":2,"NegCount":0,"NeuCount":14,"PosPercent":12.0,"NegPercent":0.0,"NeuPercent":87.0}],"GenderStats":[{"Type":"Male","Count":291,"Percent":65.837104072398190045248868778},{"Type":"Female","Count":134,"Percent":30.316742081447963800904977376}],"Comments":null,"Tags":[{"key":"hamariadhurikahani","value":314,"valuestr":null,"label":null},{"key":"humnava","value":146,"valuestr":null,"label":null},{"key":"emraanhashmi","value":104,"valuestr":null,"label":null},{"key":"vidyabalan","value":91,"valuestr":null,"label":null},{"key":"hak","value":31,"valuestr":null,"label":null},{"key":"rajkumarrao","value":27,"valuestr":null,"label":null},{"key":"vidya","value":25,"valuestr":null,"label":null},{"key":"emraan","value":21,"valuestr":null,"label":null},{"key":"mithoon","value":15,"valuestr":null,"label":null},{"key":"bollywoodfanatic","value":10,"valuestr":null,"label":null}],"Emotions":[{"key":"love","value":43,"valuestr":null,"label":null},{"key":"good","value":15,"valuestr":null,"label":null},{"key":"best","value":13,"valuestr":null,"label":null},{"key":"perfect","value":13,"valuestr":null,"label":null},{"key":"god","value":9,"valuestr":null,"label":null},{"key":"stop","value":8,"valuestr":null,"label":null},{"key":"super","value":8,"valuestr":null,"label":null},{"key":"beautiful","value":7,"valuestr":null,"label":null},{"key":"amazing","value":7,"valuestr":null,"label":null},{"key":"huge","value":5,"valuestr":null,"label":null}],"Locations":[{"key":"undefined","value":0,"valuestr":"undefined","label":null},{"key":"in","value":0,"valuestr":"india","label":null},{"key":"ir","value":0,"valuestr":"iran","label":null},{"key":"pk","value":0,"valuestr":"pakistan","label":null},{"key":"qa","value":0,"valuestr":"qatar","label":null},{"key":"gr","value":0,"valuestr":"greece","label":null},{"key":"us","value":0,"valuestr":"united states","label":null},{"key":"bd","value":0,"valuestr":"bangladesh","label":null},{"key":"gb","value":0,"valuestr":"united kingdom","label":null}],"Trends":[{"Source":"TW","Data":"0,55,-2,52,-2,16,-3,2,1"},{"Source":"FB","Data":"0"},{"Source":"TM","Data":"0,1"}],"Decision":"Medium","DecisionImage":"/images/medium.png","ReturnUrl":"http://bharatmovies.social","ContainerID":null};

//React.render(<Bubbly   id={'bolly_data3046'} cardtype={'BM'} returnurl={'http://bharatmovies.social'} styles={'styles'} clientid={'100'}/>,document.getElementById('pic'));


//Main converter
// NODE_ENV=production browserify -t [ reactify --es6 ] ./js/jquery.prettyPhoto.js ./js/owl.carousel.min.js ./js/jquery.mixitup.min.js ./js/sliderengine/amazingslider.js ./src/bubblyRunner.js --standalone BubblyCard | uglifyjs > ./dist/bubbly.min.js 

/*

var  BubblyCardRunner = function (campaignId,cardType,returnUrl,styles,clientId,dataFromPage,container) {

	if (dataFromPage) {

		console.log("dataFromPage True");
		React.render(<Bubbly data={dataFromPage}  id={campaignId} cardtype={cardType} returnurl={returnUrl} styles={styles} clientid={clientId}/>,container);

	} else {
		console.log("dataFromPage False");
		var WidgetUrl = "http://s24x7.azurewebsites.net/api/summary/";
	    var url = WidgetUrl + "?id=" + campaignId;
	   
	    jQuery.ajax({
	        url: url,
	        type: 'GET',
	        dataType: 'JSON',
	        cache: false
	    }).done(function(ajaxdata) {

	    React.render(<Bubbly data={ajaxdata}  id={campaignId} cardtype={cardType} returnurl={returnUrl} styles={styles} clientid={clientId}/>,container);


	    });
	}
};

module.exports = BubblyCard;

function BubblyCard() {
  this.aSetting = true;
};

BubblyCard.prototype.showCard = function(para, container) {
  console.log(this.aSetting);
  BubblyCardRunner(para.campaignId,para.cardType,para.returnUrl,para.styles,para.clientId,para.dataFromPage,container);
}

BubblyCard.prototype.parseData = function(para, container) {
  console.log(para.dataFromPage);
  console.log(para.campaignId);
  console.log(para.cardType);
  console.log(para.returnUrl);
  console.log(para.styles);
  console.log(para.clientId);
  console.log(container);

  if(para.dataFromPage===null){
  	console.log("No data from page");
  	
  }else {
  	console.log(JSON.stringify(para.dataFromPage));
  }

}
*/
/*
var dataFromPage   ;
var campaignId = "bolly_data3046" ;
var container = document.getElementById('pic') ;
var cardType = "BM" ;
var returnUrl = "http://bharatmovies.social" ;
var styles = null ;
var clientId = null ;*/

//BubblyCardRunner(campaignId, container,cardType,returnUrl,styles,clientId,dataFromPage);

//id, container, type, returnUrl, styles, clientId dataFromPage
