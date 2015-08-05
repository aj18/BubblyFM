var Radium = require('radium');
var React = require("react");


//var PhotoCollageMixIt = require('../../flowly/PhotoCollagaeMixIt.js');

var BubblyPCMixIt = React.createClass({

	componentDidMount: function(){
     		jQuery("area[data-rel^='prettyPhoto']").prettyPhoto();

		jQuery("#portfolio-grid:first a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'pp_default',slideshow:3000, autoplay_slideshow: false,deeplinking:false});
		jQuery(".portfolio-grid:gt(0) a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',slideshow:3000, deeplinking:false});
		jQuery("#custom_content a[data-rel^='prettyPhoto']:first").prettyPhoto({
		custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
		changepicturecallback: function(){ initialize(); }
		});
		jQuery("#custom_content a[data-rel^='prettyPhoto']:last").prettyPhoto({
		custom_markup: "<div id='bsap_1259344' class='bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6'></div><div id='bsap_1237859' class='bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6' style='height:260px'></div><div id='bsap_1251710' class='bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6'></div>",
		changepicturecallback: function(){ _bsap.exec(); }
		});


	//mixitup Gallery filters
	  jQuery('#portfolio-grid').mixitup({
		effects: ['fade','scale'],
		easing: 'snap'
	  });
	//mixitup Portfolio END

	//Gallery Owl Carousel **/

	var carousel = jQuery(this.refs.pictures.getDOMNode());
	  carousel.owlCarousel({
	    navigation:true,
		autoPlay:true,
		loop:true,
		items : 3,
	    itemsDesktop : [1199,3],
	    itemsDesktopSmall : [979,2],
		pagination:false,  
        navigationText : ["prev","next"],
	  });

	

	

    },
	render : function() {
    	console.log(this.props.data);
    	return(

    		<div className="gallerybg scrollspy">
  				<div className="row"> 

		    		<div className="wrapper-with-margin martop60">
		      			<div id="owl-demo">
		       				 <ul  id="portfolio-grid" ref="pictures" className="portfolio-grid owl-carousel">

					    		{this.props.data.Photos.map(function(item, i) {

										  return (

										  	<li className="mix all animate photography mix_all">
									            <div className="view3 third-effect3"> 
									            	<img className="materialboxed"  src={item.Url} alt=" "/>
									              <div className="mask"> <a href={item.Url} data-rel="prettyPhoto[gallery1]" className="viewDetail lightbox info">
									                <div className="project-overlay"></div>
									                <div className="port-caption">{item.Description} </div>
									                </a> 
									              </div>
									            </div>
									         </li>
								               
								               
								              );
								}, this)}
						 	 </ul>
		     			 </div>
					</div>
				</div>
			</div>		

   		);

	}

});


var datasrc = {"ID":"bolly_data235","Name":"Shah Rukh With Abram","Description":"Shah Rukh watches KKR match with AbRam","Category":"","ShowDefaultPicture":true,"SearchQuery":"Shah Rukh Khan watches KKR match with AbRam and Dilwale team","VideosCount":3415,"PhotosCount":68311,"PictureUrl":"http://media2.intoday.in/indiatoday/images/stories//2015MAY/shah-rukh-story_650_051715020614.jpg","Photos":[{"Url":"http://pbs.twimg.com/media/CETh0Q_WYAAVkWL.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CETh0Q_WYAAVkWL.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CETh0Q_WYAAVkWL.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CETh0Q_WYAAVkWL.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CETh0Q_WYAAVkWL.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CETh0Q_WYAAVkWL.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CETh0Q_WYAAVkWL.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CETh0Q_WYAAVkWL.jpg","Description":null,"Count":0}],"Videos":[{"ID":"","Url":"http://youtu.be/c25GKl5VNeY,RT @SRK_DDLJ_Fan: Dilwale Dulhania Le Jayenge NEW TRAILER. Celebrating 1000 Weeks http://t.co/Jk8Wrz59WC  #DDLJ #SRK @iamsrk @KajolAtUN htt…","Source":"None","Count":0}],"Photo":"http://media2.intoday.in/indiatoday/images/stories//2015MAY/shah-rukh-story_650_051715020614.jpg","Video":"","Total":178387,"Stat":{"Type":"ALL","PosCount":37516,"NegCount":2529,"NeuCount":138342,"PosPercent":21.0,"NegPercent":1.0,"NeuPercent":77.0},"SocialStats":[{"Type":"TW","PosCount":37217,"NegCount":2506,"NeuCount":137280,"PosPercent":21.0,"NegPercent":1.0,"NeuPercent":77.0},{"Type":"FB","PosCount":257,"NegCount":19,"NeuCount":797,"PosPercent":25700.0,"NegPercent":1900.0,"NeuPercent":79700.0},{"Type":"TM","PosCount":42,"NegCount":4,"NeuCount":265,"PosPercent":4200.0,"NegPercent":400.0,"NeuPercent":26500.0}],"GenderStats":[{"Type":"Male","Count":108354,"Percent":61.215911594718733580786766326},{"Type":"Female","Count":60512,"Percent":34.186991180940436037807268803},{"Type":"Others","Count":108354,"Percent":0.0}],"Comments":[{"Source":"Twitter","Comment":"RT @iamsrk: This kid is so cool. May Allah bless him. Dinner time at the Asian Awards. http://t.co/l0gV12n0kv"}],"Tags":[{"key":"shahrukhkhan","value":6900,"valuestr":null,"label":null},{"key":"srk","value":3688,"valuestr":null,"label":null},{"key":"bollywood","value":947,"valuestr":null,"label":null},{"key":"salmankhan","value":475,"valuestr":null,"label":null},{"key":"abram","value":439,"valuestr":null,"label":null}],"Emotions":[{"key":"fan","value":515,"valuestr":null,"label":null},{"key":"love","value":458,"valuestr":null,"label":null},{"key":"good","value":407,"valuestr":null,"label":null},{"key":"best","value":213,"valuestr":null,"label":null},{"key":"like","value":194,"valuestr":null,"label":null}],"Locations":null,"Trends":[{"Source":"TW","Data":"0,41,-1,66,-1,28,78,-3,39,-4,19,47"},{"Source":"FB","Data":"0,1"},{"Source":"TM","Data":"0,1,2,3,-1,1,1,1,1"}],"Decision":"Medium","DecisionImage":"/images/medium.png","ReturnUrl":null,"ContainerID":null};
var returnurl="http://www.cricket24x7.social/news/?id=bolly_data235";
React.render( <BubblyPCMixIt data = { datasrc }  returnurl={returnurl} /> , document.getElementById("pc"));
