var Radium = require('radium');
var React = require("react");
var PhotoLarge = require('../../flowly/PhotoLarge.js');




var BubblyPC = React.createClass({

  componentDidMount: function(){

     {
          jQuery("a[rel^='prettyPhoto']").prettyPhoto({
                show_title: false, /* true/false */
      allow_resize: true, /* Resize the photos bigger than viewport. true/false */
      default_width: 500,
      default_height: 344
              });

          jQuery(this.refs.pictures.getDOMNode()).owlCarousel({
                autoPlay: 3000, //Set AutoPlay to 3 seconds
                items: 4,
                itemsDesktop: [1199, 3],
                itemsDesktopSmall: [979, 3],
                navigation : true,
          stopOnHover : false,
       
          // Navigation
          navigation : true,
          navigationText : ["prev","next"],
          rewindNav : true,
          scrollPerPage : true,
       
          //Pagination
          pagination : true,
          paginationNumbers: false,
       
          // Responsive 
          responsive: true,
          responsiveRefreshRate : 200,
          responsiveBaseWidth: window,
       
          // CSS Styles
          baseClass : "owl-carousel",
          theme : "owl-theme",
       
          //Lazy load
          lazyLoad : false,
          lazyFollow : true,
          lazyEffect : "fade",
       
          //Auto height
          autoHeight : false,
       
          //JSON 
          jsonPath : false, 
          jsonSuccess : false,
       
          //Mouse Events
          dragBeforeAnimFinish : true,
          mouseDrag : true,
          touchDrag : true,
       
          //Transitions
          transitionStyle : false,
       
          // Other
          addClassActive : false,
            });

        }
  },


	render: function() {
    console.log(this.props.data);
		var styles = {
       	 		 s1 :{ margin: '10px',float:'left'},
             s2 :{width:'305px', height:'400px', background: 'transparent none repeat scroll 0% 0%'}

       	
    	}
      var currentTime = new Date().getTime();
        return (  
                
                <div className="social-pc-card z-depth-3">

                    <div id="pictures" ref="pictures" className="owl-slider">

                        {this.props.data.Photos.map(function(item, i) {

                            return (
                                     
                                  <a className="item" href={item.Url} rel="prettyPhoto">
                                      <PhotoLarge url= {item.Url} style={styles.s2} alt={item.title} />
                                      
                                  </a>
                            );

                      }, this)}

                    </div>
                    
                </div>
            );
   
 	}

});

module.exports = BubblyPC;