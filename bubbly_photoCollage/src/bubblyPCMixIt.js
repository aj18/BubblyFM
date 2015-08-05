var Radium = require('radium');
var React = require("react");

var PhotoLarge = require('../../flowly/PhotoLarge.js');
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
									            <div className="view3 third-effect3" style={{border: '1px solid #fff;'}}> 
									            	<PhotoLarge url= {item.Url} alt={item.title} />
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


module.exports= BubblyPCMixIt;