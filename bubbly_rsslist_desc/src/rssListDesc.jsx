var Radium = require('radium');
var React = require("react");
var jQuery = require('jquery');
 
// load everything 
require('jquery-ui');



var RSSListDesc = React.createClass({

    componentDidMount: function(){

      
    $("#amazingslider-1").amazingslider({

        sliderid:1,

        

        width:635,

        height:350,

        skinsfoldername:"",

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

        navplayvideoimage:"../../../js/sliderengine/play-32-32-0.png",

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

        navarrowimage:"js/sliderengine/navarrows-20-20-1.png",

        ribbonimage:"sliderengine/ribbon_topleft-0.png",

        navwidth:120,

        navheight:60,

        arrowimage:"../../../js/sliderengine/arrows-32-32-0.png",

        timeropacity:0.6,

        arrowhideonmouseleave:1000,

        navthumbnavigationarrowimage:"../../../js/sliderengine/carouselarrows-32-32-3.png",

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

        playvideoimage:"../../../js/sliderengine/playvideo-64-64-0.png",

        arrowtop:50,

        textstyle:"dynamic",

        playvideoimageheight:64,

        navfonthighlightcolor:"#666666",

        showbackgroundimage:false,

        navpreviewborder:4,

        navshowplaypausestandaloneheight:64,

        shadowcolor:"#aaaaaa",

        navbuttonshowbgimage:true,

        navbuttonbgimage:"../../../js/sliderengine/navbuttonbgimage-28-28-0.png",

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

        navfeaturedarrowimage:"../../../js/sliderengine/featuredarrow-16-8-0.png",

        showribbon:false,

        navstyle:"thumbnails",

        textpositionmarginleft:24,

        descriptioncss:"display:block; position:relative; font:12px \"Lucida Sans Unicode\",\"Lucida Grande\",sans-serif,Arial; color:#fff; margin-top:8px;",

        navplaypauseimage:"../../../js/sliderengine/navplaypause-64-64-0.png",

        backgroundimagetop:-10,

        timercolor:"#ffffff",

        numberingformat:"%NUM/%TOTAL ",

        navdirection:"horizontal",

        navfontsize:12,

        navhighlightcolor:"#333333",

        texteffectdelay1:1000,

        navimage:"../../../js/sliderengine/bullet-24-24-5.png",

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

        bottomshadowimage:"../../../js/sliderengine/bottomshadow-110-95-4.png",

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

        navpreviewarrowimage:"../../../js/sliderengine/previewarrow-16-8-1.png",

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
                 s4 : {display:'block',position:'relative',maxWidth:'635px',margin:'0px auto 98px'},
                 s5 : {display:'none'},
                 s6 : {display:'block',position:'relative',margin:'0 auto'}
       	 	 
    	}
        console.log("rss : "+ JSON.stringify(this.props.data));
        return (  
                
               
                    
                    <div id="amazingslider-wrapper-1" style={styles.s4}>
                        <div id="amazingslider-1" style={styles.s5}>
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
  
                
            );
   
 	}

});





var data = [{"title":"The Ashes LIVE 2015: England vs Australia cricket score from Day 1 of the ...","content":"To be honest, the first Test should not be here. It should be at Trent Bridge, where Jimmy Anderson is king and England started the last home Ashes so well and so dramatically. But sadly, as with so much of English cricket, it was financial decision to ...","url":"http://www.dailymail.co.uk/sport/cricket/article-3152436/The-Ashes-LIVE-2015-England-vs-Australia-cricket-score-Day-1-Test-Cardiff.html","image":{"title":null,"titleNoFormatting":null,"url":"http://i.dailymail.co.uk/i/pix/2015/07/08/15/1436365470442_lc_galleryImage_CARDIFF_ENGLAND_JULY_08_G.JPG","originalContextUrl":"http://www.dailymail.co.uk/sport/cricket/article-3152436/The-Ashes-LIVE-2015-England-vs-Australia-cricket-score-Day-1-Test-Cardiff.html","publisher":"Daily Mail","tbUrl":"http://t2.gstatic.com/images?q=tbn:ANd9GcQxL3AjK3QFZ6VQMd_DRvjaXsSBw0edzsPkSbaV3Mv1Ns3dsXJT3lvkxOE","tbWidth":80,"tbHeight":54},"publisher":"Daily Mail","publishDate":"2015-07-07T18:17:04"},{"title":"Cricketer dies after being hit in chest by ball","content":"A British club cricketer has died after being hit in the chest by a ball while batting. Bavalan Pathmanathan was playing for Manipay Parish Sports Club (UK) in division three of the British Tamil League in Surrey when he received the blow at the weekend.","url":"http://www.smh.com.au/sport/cricket/cricketer-dies-after-being-hit-in-chest-by-ball-20150708-gi82xa.html","image":{"title":null,"titleNoFormatting":null,"url":"http://www.smh.com.au/content/dam/images/g/i/8/3/2/b/image.related.articleLeadwide.620x349.gi82xa.png/1436348740478.jpg","originalContextUrl":"http://www.smh.com.au/sport/cricket/cricketer-dies-after-being-hit-in-chest-by-ball-20150708-gi82xa.html","publisher":"Sydney Morning Herald","tbUrl":"http://t3.gstatic.com/images?q=tbn:ANd9GcSTuIBiupKXhM4uRY2qwxhjQD08Ssg4cHy29CmKwFcRQtoipsv7eBlYQ4ZB","tbWidth":80,"tbHeight":45},"publisher":"Sydney Morning Herald","publishDate":"2015-07-07T19:38:02"},{"title":"County cricket – as it happened","content":"Coles' match figures of 10-94 were his best in first class cricket. All-rounder Raine finished on 41 not out. Needing just 73 to win on what is still a difficult pitch on which to bat, the Kent batsmen adopted an aggressive approach, and while it paid ...","url":"http://www.theguardian.com/sport/live/2015/jul/07/county-cricket-live-blog-notts-middlesex-leicestershire-kent","image":{"title":null,"titleNoFormatting":null,"url":"http://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/7/7/1436262430869/870069f9-25e0-4c2c-b579-b3c875f03cd3-2060x1236.jpeg?w=620&q=85&auto=format&sharp=10&s=4c223a6998c9667a400a8557f92ff447","originalContextUrl":"http://www.theguardian.com/sport/live/2015/jul/07/county-cricket-live-blog-notts-middlesex-leicestershire-kent","publisher":"The Guardian","tbUrl":"http://t2.gstatic.com/images?q=tbn:ANd9GcSMSinbUBLtibPtRZ4l27FK-AlQmhitmw38u3Bi8Dk6gTLu7im4QYVCnvbb","tbWidth":80,"tbHeight":48},"publisher":"The Guardian","publishDate":"2015-07-06T19:52:01"},{"title":"Geraint Jones to retire at end of season","content":"Former England wicketkeeper Geraint Jones has announced that he will retire from cricket at the end of the English summer and has stood down as Gloucestershire captain with immediate effect. The 38-year-old, who played 34 Tests for England and was part ...","url":"http://www.espncricinfo.com/county-cricket-2015/content/story/895395.html","image":{"title":null,"titleNoFormatting":null,"url":"http://www.espncricinfo.com/db/PICTURES/CMS/196400/196495.3.jpg","originalContextUrl":"http://www.espncricinfo.com/county-cricket-2015/content/story/895395.html","publisher":"ESPNcricinfo.com","tbUrl":"http://t1.gstatic.com/images?q=tbn:ANd9GcQuBwNZOvitaKIn3tpVThX20f1DSXAZdyY-wOaw0C9uYbmzTvF6bGfttntM","tbWidth":80,"tbHeight":44},"publisher":"ESPNcricinfo.com","publishDate":"2015-07-07T23:48:05"},{"title":"Watch India Vs. New Zealand 5th ODI Live Online: Women's Cricket Series ...","content":"While the recent World Cup showed that women's soccer could be at least as exciting as the men's version, viewers who watch live online Wednesday will find out that the same applies for women's cricket, when India and New Zealand battle in the deciding ...","url":"http://www.inquisitr.com/2234030/watch-india-vs-new-zealand-5th-odi-live-online-womens-cricket-series-heads-to-tense-decider/","image":{"title":null,"titleNoFormatting":null,"url":"http://cdn.inquisitr.com/wp-content/uploads/2015/07/India-New-Zealand-womens-cricket-live-online-665x385.jpg","originalContextUrl":"http://www.inquisitr.com/2234030/watch-india-vs-new-zealand-5th-odi-live-online-womens-cricket-series-heads-to-tense-decider/","publisher":"The Inquisitr","tbUrl":"http://t0.gstatic.com/images?q=tbn:ANd9GcRK3tnKhWSqlsDFtnz1fdRB-2_srEhce4_aaT4mFHFSOxbyCLbDFrSdbzQ","tbWidth":80,"tbHeight":46},"publisher":"The Inquisitr","publishDate":"2015-07-07T09:11:04"},{"title":"Stoinis smashes six sixes in an over","content":"Commonwealth Bank Bushrangers allrounder Marcus Stoinis has achieved one of cricket's rarest feats, hitting six sixes in an over during a match in Brisbane on Wednesday. Playing for the National Performance Squad in a 50-over match against the National ...","url":"http://www.cricket.com.au/news/six-sixes-in-an-over-marcus-stoinis-brendan-smith-allan-border-field-nps/2015-07-08","image":{"title":null,"titleNoFormatting":null,"url":"http://www.cricket.com.au/~/media/News/2015/07/08MarcusStoinis2.ashx?mw=768","originalContextUrl":"http://www.cricket.com.au/news/six-sixes-in-an-over-marcus-stoinis-brendan-smith-allan-border-field-nps/2015-07-08","publisher":"cricket.com.au","tbUrl":"http://t3.gstatic.com/images?q=tbn:ANd9GcR0sAfykoVZNiN5eBM-_dSuJzE4YR0U4Y-mkfZT6MONFq6sN2U1v9SFN_LO","tbWidth":80,"tbHeight":51},"publisher":"cricket.com.au","publishDate":"2015-07-07T15:03:05"},{"title":"Indian cricket team arrives in Zimbabwe","content":"HARARE: The Ajinkya Rahane-led Indian cricket team arrived here for the limited overs series against hosts Zimbabwe starting July 10. The senior-most member of the 15-member squad, Harbhajan Singh tweeted about the team's grand welcome at a city ...","url":"http://timesofindia.indiatimes.com/sports/india-in-zimbabwe/top-stories/Indian-cricket-team-arrives-in-Zimbabwe/articleshow/47983129.cms","image":{"title":null,"titleNoFormatting":null,"url":"http://ste.india.com/sites/default/files/2015/07/08/377798-ajinkya-rahane-odi-run-700.jpg","originalContextUrl":"http://zeenews.india.com/sports/cricket/india-tour-of-zimbabwe-2015/ajinkya-rahane-led-indian-cricket-team-arrives-in-zimbabwe_1626487.html","publisher":"Zee News","tbUrl":"http://t2.gstatic.com/images?q=tbn:ANd9GcRtOQqoKMC7E3NMuF7tkWj66a8FyD3fsR8GfVSiKm-Zzz2lkGZYikCEA7aE","tbWidth":80,"tbHeight":45},"publisher":"Times of India","publishDate":"2015-07-07T15:03:04"},{"title":"England cricket legend Alec Stewart clean bowled - by a kid, outside a pub","content":"In cricket terms, Alec Stewart is an English legend. Sadly, if this video is anything to go by, being a top English cricketer doesn't mean much any more. Not when one of them can be utterly humiliated in a game of street cricket. By a kid. Outside a ...","url":"http://www.mirror.co.uk/sport/row-zed/england-cricket-legend-alec-stewart-6025874","image":{"title":null,"titleNoFormatting":null,"url":"http://brightcove.vo.llnwd.net/v1/unsecured/media/4221396001/201507/2006/4221396001_4343852337001_4343841141001-vs.jpg?pubId=4221396001","originalContextUrl":"http://www.mirror.co.uk/sport/row-zed/england-cricket-legend-alec-stewart-6025874","publisher":"Mirror.co.uk","tbUrl":"http://t0.gstatic.com/images?q=tbn:ANd9GcQMKZQhE_LhZSNcf6CSqgqEpYR8Lftc15_GgSn0hBBSwqyTc2KdVWbp3nQ","tbWidth":80,"tbHeight":45},"publisher":"Mirror.co.uk","publishDate":"2015-07-07T23:52:03"},{"title":"Ashes opening ceremony mocked by cricket fans","content":"There was a time - and not so long ago, either - when Ashes series would be preceded by little more than a polite handshake and an umpire calling \"play\". But that was then. Now, even the most hyped event of the cricketing calendar cannot be allowed to ...","url":"http://www.telegraph.co.uk/sport/cricket/international/theashes/11726620/Ashes-opening-ceremony-mocked-by-cricket-fans.html","image":{"title":null,"titleNoFormatting":null,"url":"http://i.telegraph.co.uk/multimedia/archive/03368/ceremony3_3368686b.jpg","originalContextUrl":"http://www.telegraph.co.uk/sport/cricket/international/theashes/11726620/Ashes-opening-ceremony-mocked-by-cricket-fans.html","publisher":"Telegraph.co.uk","tbUrl":"http://t3.gstatic.com/images?q=tbn:ANd9GcQBwAGj294UoAsKKauRpdClyELRTgDWwWvZYAUTeurNfplG0R2OT3qisrLv","tbWidth":80,"tbHeight":49},"publisher":"Telegraph.co.uk","publishDate":"2015-07-07T23:14:01"},{"title":"Indy's World Sports Park lands another cricket event","content":"“I didn't hear anything negative about this [venue],” said Jatin Patel, a locally based cricket coach and volunteer during May's ICC cricket tournament here. “Everyone was impressed. I think there's a lot of potential to bring other [cricket] events to ...","url":"http://www.ibj.com/blogs/4-the-score/post/53914-indys-world-sports-park-lands-another-cricket-event","image":{"title":null,"titleNoFormatting":null,"url":"https://media.zenfs.com/en-AE/homerun/sport360_xe/e93fc168ac65820fa8fa9c3a537c0154","originalContextUrl":"https://en-maktoob.news.yahoo.com/icc-academy-warriors-compete-esca-162400052.html","publisher":"Yahoo! Maktoob News","tbUrl":"http://t2.gstatic.com/images?q=tbn:ANd9GcQpaSKbu5nMdber13Q3oNDgMuUbLsRQiB4rR4nfkyIrcd1LNFbwLGJMuMk","tbWidth":80,"tbHeight":45},"publisher":"Indianapolis Business Journal (blog)","publishDate":"2015-07-07T01:35:05"},{"title":"commuters and cricket fans going to the Ashes set to suffer","content":"Rail strike 2015: London commuters and cricket fans going to the Ashes set to suffer. Tonight's action will affect services between London and Wales and the West Country, hitting commuters and cricket fans going to Cardiff. Cost of rail travel rapidly ...","url":"http://www.telegraph.co.uk/news/uknews/road-and-rail-transport/11725398/Rail-strike-2015-London-commuters-and-cricket-fans-going-to-the-Ashes-set-to-suffer.html","image":{"title":null,"titleNoFormatting":null,"url":"http://i.telegraph.co.uk/multimedia/archive/02627/newcastle-train_2627334b.jpg","originalContextUrl":"http://www.telegraph.co.uk/news/uknews/road-and-rail-transport/11725398/Rail-strike-2015-London-commuters-and-cricket-fans-going-to-the-Ashes-set-to-suffer.html","publisher":"Telegraph.co.uk","tbUrl":"http://t3.gstatic.com/images?q=tbn:ANd9GcQ8ZSGIUVh6XzNaAK349nSWY_krNiSIKzahSPWSge2nTBeU_v63Q1Ziu0o","tbWidth":80,"tbHeight":49},"publisher":"Telegraph.co.uk","publishDate":"2015-07-07T17:01:00"},{"title":"Quality cricket marks compelling series","content":"Unlike the Sri Lanka-India ties of yore, these series have consistently bred flavourful cricket and compelling stories, without the behavioural hysterics that seem to litter Big Three cricket. Many will remember Younis' sublime 171 to complete this ...","url":"http://www.espncricinfo.com/sri-lanka-v-pakistan-2015/content/story/895001.html","image":{"title":null,"titleNoFormatting":null,"url":"http://www.espncricinfo.com/db/PICTURES/CMS/216700/216771.jpg","originalContextUrl":"http://www.espncricinfo.com/sri-lanka-v-pakistan-2015/content/story/895001.html","publisher":"ESPNcricinfo.com","tbUrl":"http://t1.gstatic.com/images?q=tbn:ANd9GcSZiMZJddiS3oDFTyc38pV3M4syAeLxxK26RFXaTEmB64tJb96nF153PddV","tbWidth":80,"tbHeight":51},"publisher":"ESPNcricinfo.com","publishDate":"2015-07-07T16:06:04"},{"title":"Media Releases, 1 hour ago World T20 Qualifier is another boost for cricket's ...","content":"On the eve of another exciting opportunity for the best Associate and Affiliate Members (AMs) to qualify for a major ICC event, the success of the ICC Development Programme is illustrated by the fact that there are now more people playing cricket ...","url":"http://www.icc-cricket.com/news/2015/media-releases/88642/world-t20-qualifier-is-another-boost-for-crickets-global-development","image":{"title":null,"titleNoFormatting":null,"url":"http://icc-live.s3.amazonaws.com/cms/media/images/630x420/68843.jpg","originalContextUrl":"http://www.icc-cricket.com/news/2015/media-releases/88642/world-t20-qualifier-is-another-boost-for-crickets-global-development","publisher":"International Cricket Council","tbUrl":"http://t3.gstatic.com/images?q=tbn:ANd9GcQ2cfw7JUvngq32TnP07EPjek-wfrl1_xoYyP-XG2v2ZPzuJCncAkqWLy4","tbWidth":80,"tbHeight":53},"publisher":"International Cricket Council","publishDate":"2015-07-07T23:18:04"},{"title":"Lord Patel becomes first British-Asian appointee to England and Wales Cricket ...","content":"Commenting on the unity that cricket can bring, Lord Patel said \"Cricket has been a life-long passion of mine and this is a great honour for me. I am a huge advocate of what the sport can bring to the wider community – from instilling life-skills like ...","url":"http://www.dnaindia.com/sport/report-lord-patel-becomes-first-british-asian-appointee-to-england-and-wales-cricket-board-2102857","image":{"title":null,"titleNoFormatting":null,"url":"http://static.dnaindia.com/sites/default/files/2015/07/08/353847-lord-patel-ecb.jpg","originalContextUrl":"http://www.dnaindia.com/sport/report-lord-patel-becomes-first-british-asian-appointee-to-england-and-wales-cricket-board-2102857","publisher":"Daily News & Analysis","tbUrl":"http://t3.gstatic.com/images?q=tbn:ANd9GcSHr2mclYQ9XNHVKcA_Fgl_Gf0c1lvQ5Qgl8GZ9A2LesLOtC0cv_Wdq6Oyj","tbWidth":80,"tbHeight":80},"publisher":"Daily News & Analysis","publishDate":"2015-07-08T00:37:03"},{"title":"Ashes travel chaos as planned First Great Western strike hits Cardiff cricket fans","content":"Thousands of cricket fans are set to be affected by the planned rail strikes over the next two days. If late talks to avert the action fail thousands of First Great Western workers are set to walk out for 48 hours beginning at 6:30pm today. The ...","url":"http://www.mirror.co.uk/sport/cricket/ashes-travel-chaos-planned-first-6023786","image":{"title":null,"titleNoFormatting":null,"url":"http://i3.mirror.co.uk/incoming/article6019244.ece/ALTERNATES/s615/England-Nets-Session.jpg","originalContextUrl":"http://www.mirror.co.uk/sport/cricket/ashes-travel-chaos-planned-first-6023786","publisher":"Mirror.co.uk","tbUrl":"http://t2.gstatic.com/images?q=tbn:ANd9GcS1gPkb5wZyZIvY6MzpIDP_k1P12FzXnxVBYeA3G9ap6RjP6A5HvBBxvNs","tbWidth":80,"tbHeight":53},"publisher":"Mirror.co.uk","publishDate":"2015-07-07T19:42:03"}];
var returnurl="http://www.cricket24x7.social/news/?id=bolly_data235";
React.render( <RSSListDesc data = { data }  returnurl={returnurl} /> , document.getElementById("rsslistdesc"));
//http://s24x7.azurewebsites.net/api/summary/min?id=bolly_data235