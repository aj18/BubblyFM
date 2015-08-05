var React = require("react");
var jQuery = require('jquery');



var PhotoCollageMixIt = React.createClass({

	componentDidMount: function(){
     		jQuery("area[data-rel^='prettyPhoto']").prettyPhoto();
			jQuery("#portfolio-grid:first a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'pp_default',slideshow:3000, autoplay_slideshow: false,deeplinking:false});
			jQuery(".portfolio-grid:gt(0) a[data-rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',slideshow:3000, deeplinking:false});
			jQuery("#custom_content a[data-rel^='prettyPhoto']:first").prettyPhoto({
			custom_markup: '<div id="map_canvas" style="width:260px; height:265px"></div>',
			changepicturecallback: function(){ initialize(); }
			});
			jQuery("#custom_content a[data-rel^='prettyPhoto']:last").prettyPhoto({
			custom_markup: '<div id="bsap_1259344" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div>
			<div id="bsap_1237859" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6" style="height:260px"></div><div id="bsap_1251710" class="bsarocks bsap_d49a0984d0f377271ccbf01a33f2b6d6"></div>',
			changepicturecallback: function(){ _bsap.exec(); }
			});


	//mixitup Gallery filters
	  jQuery('#portfolio-grid').mixitup({
		effects: ['fade','scale'],
		easing: 'snap'
	  });
	//mixitup Portfolio END

	//Gallery Owl Carousel **/

	var carousel = jQuery("#portfolio-grid");
	  carousel.owlCarousel({
	    navigation:false,
		autoPlay:true,
		loop:true,
		items : 3,
	    itemsDesktop : [1199,3],
	    itemsDesktopSmall : [979,2],
		pagination:false,
	    navigationText: [
	      "<img src='img/prev.png' alt='' class='img-responsive' />",
	      "<img src='img/next.png' alt='' class='img-responsive'/>"
	      ],
	  });

	});

	// Document on Ready END
		


	// WOW Init Reveal Animation  
	    wow = new WOW(
	      {
	        animateClass: 'animated',
	        offset:       100
	      }
	    );
	   wow.init();

    },
	render : function() {
    	console.log(this.props.data);
    	return(

    		<div className="gallerybg scrollspy">
  				<div className="row"> 

		    		<div className="wrapper-with-margin martop60">
		      			<div id="owl-demo">
		       				 <ul  id="portfolio-grid" className="portfolio-grid owl-carousel">

					    		{this.props.data.map(function(item, i) {

										  return (

										  	<li className="mix all animate photography mix_all">
									            <div className="view3 third-effect3"> 
									            	<img className="materialboxed" data-caption="A picture of some deer and tons of trees" src={item.Url} alt=" "/>
									              <div className="mask"> <a href={item.Url} title="Project description" data-rel="prettyPhoto[gallery1]" className="viewDetail lightbox info">
									                <div className="project-overlay"></div>
									                <div className="port-caption">When Goliath comes out, you should run. </div>
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

        
	        

	      /*  <a className="item" href="http://lorempixel.com/800/400/food/2/" rel="prettyPhoto" title="This is the description">
	            <img src="http://lorempixel.com/300/150/food/2/" width="300" height="150" alt="title" />
	        </a>

	        <a className="item" href="http://lorempixel.com/800/400/food/3/" rel="prettyPhoto" title="This is the description">
	            <img src="http://lorempixel.com/300/150/food/3/" width="300" height="150" alt="title" />
	        </a>

	        <a className="item" href="http://lorempixel.com/800/400/food/4/" rel="prettyPhoto" title="This is the description">
	            <img src="http://lorempixel.com/300/150/food/4/" width="300" height="150" alt="title" />
	        </a>

	        <a className="item" href="http://lorempixel.com/800/400/food/5/" rel="prettyPhoto" title="This is the description">
	            <img src="http://lorempixel.com/300/150/food/5/" width="300" height="150" alt="title" />
	        </a>*/


   		
   		);

	}

});

module.exports = PhotoCollageMixIt;
//React.render(<PhotoCollage/>,document.getElementById('pc'));











        