var Radium = require('radium');
var React = require("react");
var jQuery = require('jquery');
 
// load everything 
require('jquery-ui');



var RSSListDesc = React.createClass({

    componentDidMount: function(){

      
    $(this.refs.amazingslider1.getDOMNode()).amazingslider({

        sliderid:1,

        

        width:'100%',

        height:480,

        skinsfoldername:"http://social24x7.azurewebsites.net/cdn/images",

        loadimageondemand:false,

        videohidecontrols:false,

        fullwidth:false,

        watermarkstyle:"text",

        donotresize:false,

        enabletouchswipe:true,

        fullscreen:false,

        autoplayvideo:false,

        addmargin:true,

        watermarklinkcss:"text-decoration:none;font:12px Arial,Tahoma,Helvetica,sans-serif;color:#333;",

        watermarktext:"amazingslider.com",

        watermarklink:"http://amazingslider.com?source=watermark",

        randomplay:false,

        isresponsive:false,

        pauseonmouseover:false,

        playvideoonclickthumb:true,

        showwatermark:false,

        slideinterval:500000,

        watermarkpositioncss:"display:block;position:absolute;bottom:4px;right:4px;",

        watermarkimage:"",

        watermarktextcss:"font:12px Arial,Tahoma,Helvetica,sans-serif;color:#333;padding:2px 4px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background-color:#fff;opacity:0.9;filter:alpha(opacity=90);",

        transitiononfirstslide:false,

        watermarktarget:"_blank",

        scalemode:"fill",

        loop:0,

        autoplay:true,

        navplayvideoimage:"http://social24x7.azurewebsites.net/cdn/images/play-32-32-0.png",

        navpreviewheight:60,

        timerheight:2,

        descriptioncssresponsive:"font-size:12px;",

        shownumbering:false,

        skin:"Events",

        addgooglefonts:false,

        navshowplaypause:false,

        navshowplayvideo:true,

        navshowplaypausestandalonemarginx:8,

        navshowplaypausestandalonemarginy:8,

        navbuttonradius:0,

        navthumbnavigationarrowimageheight:32,

        navpreviewarrowheight:8,

        lightboxshownavigation:true,

        showshadow:false,

        navfeaturedarrowimagewidth:16,

        navpreviewwidth:120,

        googlefonts:"",

        navborderhighlightcolor:"",

        bordercolor:"#ffffff",

        lightboxdescriptionbottomcss:"{color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;}",

        lightboxthumbwidth:80,

        navthumbnavigationarrowimagewidth:32,

        navthumbtitlehovercss:"text-decoration:underline;",

        texteffectresponsivesize:600,

        navcolor:"#999999",

        arrowwidth:32,

        texteffecteasing:"easeOutCubic",

        texteffect:"slide",

        lightboxthumbheight:60,

        navspacing:8,

        navarrowimage:"http://social24x7.azurewebsites.net/cdn/images/navarrows-20-20-1.png",

        ribbonimage:"http://social24x7.azurewebsites.net/cdn/images/ribbon_topleft-0.png",

        navwidth:120,

        navheight:60,

        arrowimage:"http://social24x7.azurewebsites.net/cdn/images/arrows-32-32-0.png",

        timeropacity:0.6,

        arrowhideonmouseleave:1000,

        navthumbnavigationarrowimage:"http://social24x7.azurewebsites.net/cdn/images/carouselarrows-32-32-3.png",

        navshowplaypausestandalone:false,

        texteffect1:"slide",

        navpreviewbordercolor:"#ffffff",

        texteffect2:"slide",

        customcss:"",

        ribbonposition:"topleft",

        navthumbdescriptioncss:"display:block;position:relative;padding:2px 4px;text-align:left;font:normal 12px Arial,Helvetica,sans-serif;color:#333;",

        lightboxtitlebottomcss:"{color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;}",

        arrowstyle:"mouseover",

        navthumbtitleheight:18,

        textpositionmargintop:24,

        buttoncssresponsive:"",

        navswitchonmouseover:false,

        playvideoimage:"http://social24x7.azurewebsites.net/cdn/images/playvideo-64-64-0.png",

        arrowtop:50,

        textstyle:"dynamic",

        playvideoimageheight:64,

        navfonthighlightcolor:"#666666",

        showbackgroundimage:false,

        navpreviewborder:4,

        navshowplaypausestandaloneheight:64,

        shadowcolor:"#aaaaaa",

        navbuttonshowbgimage:true,

        navbuttonbgimage:"http://social24x7.azurewebsites.net/cdn/images/navbuttonbgimage-28-28-0.png",

        textbgcss:"display:none;",

        textpositiondynamic:"bottomleft",

        navpreviewarrowwidth:16,

        playvideoimagewidth:64,

        buttoncss:"display:block; position:relative; margin-top:8px;",

        navshowpreviewontouch:false,

        bottomshadowimagewidth:96,

        showtimer:true,

        navradius:0,

        navmultirows:false,

        navshowpreview:false,

        navmarginy:16,

        navmarginx:16,

        navfeaturedarrowimage:"http://social24x7.azurewebsites.net/cdn/images/featuredarrow-16-8-0.png",

        showribbon:false,

        navstyle:"thumbnails",

        textpositionmarginleft:24,

        descriptioncss:"display:block; position:relative; font:12px \"Lucida Sans Unicode\",\"Lucida Grande\",sans-serif,Arial; color:#fff; margin-top:8px;",

        navplaypauseimage:"http://social24x7.azurewebsites.net/cdn/images/navplaypause-64-64-0.png",

        backgroundimagetop:-10,

        timercolor:"#ffffff",

        numberingformat:"%NUM/%TOTAL ",

        navdirection:"horizontal",

        navfontsize:12,

        navhighlightcolor:"#333333",

        texteffectdelay1:1000,

        navimage:"http://social24x7.azurewebsites.net/cdn/images/bullet-24-24-5.png",

        texteffectdelay2:1500,

        texteffectduration1:600,

        navshowplaypausestandaloneautohide:true,

        texteffectduration2:600,

        navbuttoncolor:"",

        navshowarrow:true,

        texteffectslidedirection:"left",

        navshowfeaturedarrow:true,

        lightboxbarheight:64,

        titlecss:"display:block; position:relative; font:bold 14px \"Lucida Sans Unicode\",\"Lucida Grande\",sans-serif,Arial; color:#fff;",

        ribbonimagey:0,

        ribbonimagex:0,

        texteffectslidedistance1:120,

        texteffectslidedistance2:120,

        navrowspacing:8,

        navshowplaypausestandaloneposition:"bottomright",

        navshowbuttons:true,

        lightboxthumbtopmargin:12,

        titlecssresponsive:"font-size:12px;",

        navshowplaypausestandalonewidth:64,

        navfeaturedarrowimageheight:8,

        navopacity:0.8,

        textpositionmarginright:24,

        backgroundimagewidth:120,

        textautohide:true,

        navthumbtitlewidth:120,

        navpreviewposition:"top",

        texteffectseparate:false,

        arrowheight:32,

        arrowmargin:8,

        texteffectduration:600,

        bottomshadowimage:"http://social24x7.azurewebsites.net/cdn/images/bottomshadow-110-95-4.png",

        border:6,

        lightboxshowdescription:true,

        timerposition:"bottom",

        navfontcolor:"#333333",

        navthumbnavigationstyle:"arrow",

        borderradius:0,

        navbuttonhighlightcolor:"",

        textpositionstatic:"bottom",

        texteffecteasing2:"easeOutCubic",

        navthumbstyle:"imageandtitle",

        texteffecteasing1:"easeOutCubic",

        textcss:"display:block; padding:12px; text-align:left;",

        navbordercolor:"#ffffff",

        navpreviewarrowimage:"http://social24x7.azurewebsites.net/cdn/images/previewarrow-16-8-1.png",

        navthumbtitlecss:"display:block;position:relative;padding:2px 4px;text-align:center;font:bold 12px Arial,Helvetica,sans-serif;color:#333;",

        showbottomshadow:true,

        texteffectslidedistance:30,

        texteffectdelay:500,

        textpositionmarginstatic:0,

        backgroundimage:"",

        navposition:"bottom",

        texteffectslidedirection1:"right",

        navborder:2,

        textformat:"Bottom left",

        texteffectslidedirection2:"right",

        bottomshadowimagetop:98,

        texteffectresponsive:true,

        shadowsize:5,

        lightboxthumbbottommargin:8,

        textpositionmarginbottom:24,

        lightboxshowtitle:true,

        fade: {

            duration:1000,

            easing:"easeOutCubic",

            checked:true

        },

        transition:"fade",

        scalemode:"fill",

        isfullscreen:false,

        textformat: {



        }

    });

    

    },
	render: function() {
		var styles = {
       	 		 s1 :{ margin: '10px',float:'left'},
       			 s3 : {boxShadow: '0px 3px 10px 0px rgba(50, 50, 50, 0.5)',width:'75%'},
                 s4 : {display:'block',position:'relative',maxWidth:'100%',margin:'0px auto 120px'},
                 s5 : {display:'none'},
                 s6 : {display:'block',position:'relative',margin:'0 auto'}
       	 	 
    	}
        console.log("rss : "+ JSON.stringify(this.props.data));
        return (  
                
                <div className="social-card z-depth-3">
                    
                    <div id="amazingslider-wrapper-1" style={styles.s4}>
                        <div id="amazingslider-1" ref="amazingslider1" style={{'display': 'block !important;',
                                                                                 'position': 'relative !important;',
                                                                                 'width': '100% !important;',
                                                                                 'height': '500px;'}}>
                            <ul className="amazingslider-slides" style={styles.s5}>

                                {this.props.data.map(function(item, i) {
                                    var altDesc = item.content +' '+ item.publisher + '-' + item.publishDate ;
                                    return(

                                    <li><a href={item.url}><img src={item.image.url} alt={item.title} data-description= {altDesc}/></a>
                                        
                                     </li>
                                    );
                               
                                }, this)}
                                

                                

                               
                            </ul>
                            <ul className="amazingslider-thumbnails" style={styles.s5}>

                                {this.props.data.map(function(item, i) {
                                    return(
                                        <li><img src={item.image.url} alt={item.title} />
                                            <p>{item.content}</p>
                                        </li>
                                    
                                    );
                               
                                }, this)}

                                
                            </ul>
                        </div>
                    </div>
                </div>
                
            );
   
 	}

});


module.exports = RSSListDesc;