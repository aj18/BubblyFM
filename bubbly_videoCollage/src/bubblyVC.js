var Radium = require('radium');
var React = require("react");


var VideoCollage = require('../../flowly/VideoCollage.js');
var PhotoThumb = require('../../flowly/PhotoThumb.js');

var BubblyVC = React.createClass({

  componentDidMount: function(){

     {
            jQuery("a[rel^='prettyPhoto']").prettyPhoto();

            jQuery(this.refs.videos.getDOMNode()).owlCarousel({
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
          lazyLoad : true,
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
             s2 :{width:'305px', height:'350px', background: 'transparent none repeat scroll 0% 0%'},
             s3 : {height:'270px'}

        
      };

        var videoNodes = this.props.data.Videos.map(function(item, i) {
                      var imageURL =  getYouTubeVideoImage(item.ID,'big');
                      return (
                               
                           <a className="item" href={item.Url}  rel="prettyPhoto">
                                <div className="video-alert">
                                 
                                </div>
                                 
                                 <PhotoThumb url= {imageURL}  />
                               
                               
                            </a>
                          );
                      });

    
        return (  
                
                <div className="social-card z-depth-3">

                  <div id="videos" ref="videos" className="owl-slider" style={styles.s3}>
                        {videoNodes}
                  </div>
                    
                </div>
            );
   
  }

});

function getYouTubeVideoImage(vid, size) {
    console.log("vidoeurl "+ vid);
    if (vid === null) {
        return '';
    }

    size = (size === null) ? 'big' : size;
    

    if (size == 'small') {
        return 'http://img.youtube.com/vi/' + vid + '/0.jpg';
    } else {
        return 'http://img.youtube.com/vi/' + vid + '/0.jpg';
    }
}


module.exports = BubblyVC;