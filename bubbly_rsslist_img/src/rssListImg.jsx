var Radium = require('radium');
var React = require("react");
var jQuery = require('jquery');
var PhotoFull = require('../../flowly/PhotoFull.js');
 



var RSSListImg = React.createClass({

    componentDidMount: function(){

      $('.slider').slider({full_width: false});
   //    $('.slider').slider('pause');
    
    

    },
	render: function() {
		var styles = {
       	 		 
                 s2 : {maxWidth: '100%',height: '100%'}
       	 	 
    	}
        //console.log("rss : "+ JSON.stringify(this.props.data));
        console.log(this.props.data.length);
        var reminder = this.props.data.length%4;
        var k = 0;
        var j = 0;
        console.log(this.props.data.length%4);
        var indents = [];
        for(var i = 0 ; i < this.props.data.length-1 ; i=i+9) {
                                                  
            
                if (typeof this.props.data[i] == 'undefined' ) {}

                else{
                console.log("ITEM 1 " + i   + " " + JSON.stringify(this.props.data[i]));  
                var altDesc = this.props.data[i].content +' '+ this.props.data[i].publisher + '-' + this.props.data[i].publishDate ;
                     indents.push( <li>
                            <!-- random image -->
                            <div className="social-leftright-1">
                                     <PhotoFull className="responsive-img" url= {this.props.data[i].image.url} />
                                               
                                                 <div className="social-text-classs">
                                                         <a href={this.props.data[i].url}>
                                                            <h5 light grey-text text-lighten-3>{this.props.data[i].title}</h5>
                                                         </a>
                                                
                                                        
                                                 </div>
                            </div>  
                            
                        </li>);

                }

                if (typeof this.props.data[i+1] == 'undefined' ) {}

                else{
                  console.log("ITEM 2  " +  ( i + 1 ) + " " + JSON.stringify(this.props.data[i+1])); 
                  var altDesc = this.props.data[i + 1].content +' '+ this.props.data[i+1].publisher + '-' + this.props.data[i+1].publishDate ;
                  var altDesc1 = this.props.data[i + 2].content +' '+ this.props.data[i+2].publisher + '-' + this.props.data[i+2].publishDate ;
                  indents.push(
                    <li>

                            <div className="social-left">
                                            <img src={this.props.data[i+1].image.url}/>
                                             <div className="social-left-text-classs">
                                                <a href={this.props.data[i+1].url}><h5 light grey-text text-lighten-3>{this.props.data[i+1].title}</h5>
                                
                                                </a>
                                             </div>
                            </div>
                            <div className="social-right">
                                            <img src={this.props.data[i+2].image.url}/>
                                            <div className="social-right-text-classs">
                                                <a href={this.props.data[i+2].url}>
                                                <h5 light grey-text text-lighten-3>{this.props.data[i+2].title}</h5>
                                                </a>
                                            </div>
                            </div>  
                            
                            
                    </li> );   
                }
                
                if (typeof this.props.data[i+3] == 'undefined' ) {}

                else{
                    console.log("ITEM 3 " + ( i + 3 )   + " " + JSON.stringify(this.props.data[i+3]));  
                    var altDesc3 = this.props.data[i + 3].content +' '+ this.props.data[i+3].publisher + '-' + this.props.data[i+3].publishDate ;
                    var altDesc4 = this.props.data[i + 4].content +' '+ this.props.data[i+4].publisher + '-' + this.props.data[i+4].publishDate ;
                    var altDesc5 = this.props.data[i + 5].content +' '+ this.props.data[i+5].publisher + '-' + this.props.data[i+5].publishDate ;
                    indents.push( 
                        <li>
                            <div className="social-left">
                                        <img src={this.props.data[i+3].image.url}/>
                                        <div>
                                            <div className="social-left-text-classs">
                                                 <a href={this.props.data[i+3].url}>
                                                    <h5 light grey-text text-lighten-3>{this.props.data[i+3].title}</h5>
                                                 </a>
                                            </div>
                                        </div>
                            </div>
                            <div className="social-left-1-right-2">
                                <div className="social-right-top">
                                    <img src={this.props.data[i+4].image.url}/>
                                    <div>
                                        <div className="social-right-top-left-text-classs">
                                             <a href={this.props.data[i+4].url}>
                                                <h5 light grey-text text-lighten-3>{this.props.data[i+4].title}</h5>
                                            </a>

                                         </div>
                                     </div>
                                </div>
                                <div className="social-right-bottom">
                                   <img src={this.props.data[i+5].image.url}/>
                                     <div>
                                       <div className="social-right-text-classs">
                                                  <a href={this.props.data[i+5].url}>
                                                           <h5 light grey-text text-lighten-3>{this.props.data[i+5].title}</h5>
                                                 </a>
                                        </div>
                                    </div>
                                </div>
                            </div>      
                        </li>);
                }

                if (typeof this.props.data[i+6] == 'undefined' ) {}

                else{
                    console.log("ITEM  4 " + (i  + 6 )  + " " + JSON.stringify(this.props.data[i+6]));  
                    var altDesc6 = this.props.data[i + 6].content +' '+ this.props.data[i+6].publisher + '-' + this.props.data[i+6].publishDate ;
                    var altDesc7 = this.props.data[i + 7].content +' '+ this.props.data[i+7].publisher + '-' + this.props.data[i+7].publishDate ;
                    var altDesc8 = this.props.data[i + 8].content +' '+ this.props.data[i+8].publisher + '-' + this.props.data[i+8].publishDate ;

                    indents.push(
                    <li>
                            <div className="social-left-center-rigth">
                                <div className="social-left-center-rigth-1">
                                   <img src={this.props.data[i+6].image.url}/>
                                   <div className="social-left-center-right-text-classs">
                                        <a href={this.props.data[i+6].url}>
                                                   <h5 light grey-text text-lighten-3>{this.props.data[i+6].title}</h5>
                                        </a>
                                    </div>
                                </div>  
                                <div className="social-left-center-rigth-1">
                                    <img src={this.props.data[i+7].image.url}/>
                                     <div className="social-center-left-right-text-classs">
                                            <a href={this.props.data[i+7].url}>
                                                   <h5 light grey-text text-lighten-3>{this.props.data[i+7].title}</h5>
                                            </a>
                                     </div>            
                                </div> 
                                <div className="social-left-center-rigth-1">
                                    <img src={this.props.data[i+8].image.url}/>
                                    <div className="social-right-left-center-text-classs">
                                        <a href={this.props.data[i+8].url}>
                                               <h5 light grey-text text-lighten-3>{this.props.data[i+8].title}</h5>
                                        </a>

                                    </div>  

                                </div>   
                            </div>
                    </li> ); 
                }
               
               
        }

        /*this.props.data.map(function (currentvalue,item,i=i+4) {
           console.log(  i + " " + currentvalue );
        });*/
        return (  
 

            
                
               
                       <div className="social-card-panel">
                       <div id="slider" className="slider">
                        <ul className="slides">
                          
                          {indents}
                         
                          
                        </ul>
                      </div>
                      </div>
                    
                
            );
   
 	}

});





var data = [{"title":"The Ashes LIVE 2015: England vs Australia cricket score from Day 1 of the ...","content":"To be honest, the first Test should not be here. It should be at Trent Bridge, where Jimmy Anderson is king and England started the last home Ashes so well and so dramatically. But sadly, as with so much of English cricket, it was financial decision to ...","url":"http://www.dailymail.co.uk/sport/cricket/article-3152436/The-Ashes-LIVE-2015-England-vs-Australia-cricket-score-Day-1-Test-Cardiff.html","image":{"title":null,"titleNoFormatting":null,"url":"http://i.dailymail.co.uk/i/pix/2015/07/08/15/1436365470442_lc_galleryImage_CARDIFF_ENGLAND_JULY_08_G.JPG","originalContextUrl":"http://www.dailymail.co.uk/sport/cricket/article-3152436/The-Ashes-LIVE-2015-England-vs-Australia-cricket-score-Day-1-Test-Cardiff.html","publisher":"Daily Mail","tbUrl":"http://t2.gstatic.com/images?q=tbn:ANd9GcQxL3AjK3QFZ6VQMd_DRvjaXsSBw0edzsPkSbaV3Mv1Ns3dsXJT3lvkxOE","tbWidth":80,"tbHeight":54},"publisher":"Daily Mail","publishDate":"2015-07-07T18:17:04"},{"title":"Cricketer dies after being hit in chest by ball","content":"A British club cricketer has died after being hit in the chest by a ball while batting. Bavalan Pathmanathan was playing for Manipay Parish Sports Club (UK) in division three of the British Tamil League in Surrey when he received the blow at the weekend.","url":"http://www.smh.com.au/sport/cricket/cricketer-dies-after-being-hit-in-chest-by-ball-20150708-gi82xa.html","image":{"title":null,"titleNoFormatting":null,"url":"http://www.smh.com.au/content/dam/images/g/i/8/3/2/b/image.related.articleLeadwide.620x349.gi82xa.png/1436348740478.jpg","originalContextUrl":"http://www.smh.com.au/sport/cricket/cricketer-dies-after-being-hit-in-chest-by-ball-20150708-gi82xa.html","publisher":"Sydney Morning Herald","tbUrl":"http://t3.gstatic.com/images?q=tbn:ANd9GcSTuIBiupKXhM4uRY2qwxhjQD08Ssg4cHy29CmKwFcRQtoipsv7eBlYQ4ZB","tbWidth":80,"tbHeight":45},"publisher":"Sydney Morning Herald","publishDate":"2015-07-07T19:38:02"},{"title":"County cricket – as it happened","content":"Coles' match figures of 10-94 were his best in first class cricket. All-rounder Raine finished on 41 not out. Needing just 73 to win on what is still a difficult pitch on which to bat, the Kent batsmen adopted an aggressive approach, and while it paid ...","url":"http://www.theguardian.com/sport/live/2015/jul/07/county-cricket-live-blog-notts-middlesex-leicestershire-kent","image":{"title":null,"titleNoFormatting":null,"url":"http://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2015/7/7/1436262430869/870069f9-25e0-4c2c-b579-b3c875f03cd3-2060x1236.jpeg?w=620&q=85&auto=format&sharp=10&s=4c223a6998c9667a400a8557f92ff447","originalContextUrl":"http://www.theguardian.com/sport/live/2015/jul/07/county-cricket-live-blog-notts-middlesex-leicestershire-kent","publisher":"The Guardian","tbUrl":"http://t2.gstatic.com/images?q=tbn:ANd9GcSMSinbUBLtibPtRZ4l27FK-AlQmhitmw38u3Bi8Dk6gTLu7im4QYVCnvbb","tbWidth":80,"tbHeight":48},"publisher":"The Guardian","publishDate":"2015-07-06T19:52:01"},{"title":"Geraint Jones to retire at end of season","content":"Former England wicketkeeper Geraint Jones has announced that he will retire from cricket at the end of the English summer and has stood down as Gloucestershire captain with immediate effect. The 38-year-old, who played 34 Tests for England and was part ...","url":"http://www.espncricinfo.com/county-cricket-2015/content/story/895395.html","image":{"title":null,"titleNoFormatting":null,"url":"http://www.espncricinfo.com/db/PICTURES/CMS/196400/196495.3.jpg","originalContextUrl":"http://www.espncricinfo.com/county-cricket-2015/content/story/895395.html","publisher":"ESPNcricinfo.com","tbUrl":"http://t1.gstatic.com/images?q=tbn:ANd9GcQuBwNZOvitaKIn3tpVThX20f1DSXAZdyY-wOaw0C9uYbmzTvF6bGfttntM","tbWidth":80,"tbHeight":44},"publisher":"ESPNcricinfo.com","publishDate":"2015-07-07T23:48:05"},{"title":"Watch India Vs. New Zealand 5th ODI Live Online: Women's Cricket Series ...","content":"While the recent World Cup showed that women's soccer could be at least as exciting as the men's version, viewers who watch live online Wednesday will find out that the same applies for women's cricket, when India and New Zealand battle in the deciding ...","url":"http://www.inquisitr.com/2234030/watch-india-vs-new-zealand-5th-odi-live-online-womens-cricket-series-heads-to-tense-decider/","image":{"title":null,"titleNoFormatting":null,"url":"http://cdn.inquisitr.com/wp-content/uploads/2015/07/India-New-Zealand-womens-cricket-live-online-665x385.jpg","originalContextUrl":"http://www.inquisitr.com/2234030/watch-india-vs-new-zealand-5th-odi-live-online-womens-cricket-series-heads-to-tense-decider/","publisher":"The Inquisitr","tbUrl":"http://t0.gstatic.com/images?q=tbn:ANd9GcRK3tnKhWSqlsDFtnz1fdRB-2_srEhce4_aaT4mFHFSOxbyCLbDFrSdbzQ","tbWidth":80,"tbHeight":46},"publisher":"The Inquisitr","publishDate":"2015-07-07T09:11:04"},{"title":"Stoinis smashes six sixes in an over","content":"Commonwealth Bank Bushrangers allrounder Marcus Stoinis has achieved one of cricket's rarest feats, hitting six sixes in an over during a match in Brisbane on Wednesday. Playing for the National Performance Squad in a 50-over match against the National ...","url":"http://www.cricket.com.au/news/six-sixes-in-an-over-marcus-stoinis-brendan-smith-allan-border-field-nps/2015-07-08","image":{"title":null,"titleNoFormatting":null,"url":"http://www.cricket.com.au/~/media/News/2015/07/08MarcusStoinis2.ashx?mw=768","originalContextUrl":"http://www.cricket.com.au/news/six-sixes-in-an-over-marcus-stoinis-brendan-smith-allan-border-field-nps/2015-07-08","publisher":"cricket.com.au","tbUrl":"http://t3.gstatic.com/images?q=tbn:ANd9GcR0sAfykoVZNiN5eBM-_dSuJzE4YR0U4Y-mkfZT6MONFq6sN2U1v9SFN_LO","tbWidth":80,"tbHeight":51},"publisher":"cricket.com.au","publishDate":"2015-07-07T15:03:05"},{"title":"Indian cricket team arrives in Zimbabwe","content":"HARARE: The Ajinkya Rahane-led Indian cricket team arrived here for the limited overs series against hosts Zimbabwe starting July 10. The senior-most member of the 15-member squad, Harbhajan Singh tweeted about the team's grand welcome at a city ...","url":"http://timesofindia.indiatimes.com/sports/india-in-zimbabwe/top-stories/Indian-cricket-team-arrives-in-Zimbabwe/articleshow/47983129.cms","image":{"title":null,"titleNoFormatting":null,"url":"http://ste.india.com/sites/default/files/2015/07/08/377798-ajinkya-rahane-odi-run-700.jpg","originalContextUrl":"http://zeenews.india.com/sports/cricket/india-tour-of-zimbabwe-2015/ajinkya-rahane-led-indian-cricket-team-arrives-in-zimbabwe_1626487.html","publisher":"Zee News","tbUrl":"http://t2.gstatic.com/images?q=tbn:ANd9GcRtOQqoKMC7E3NMuF7tkWj66a8FyD3fsR8GfVSiKm-Zzz2lkGZYikCEA7aE","tbWidth":80,"tbHeight":45},"publisher":"Times of India","publishDate":"2015-07-07T15:03:04"},{"title":"England cricket legend Alec Stewart clean bowled - by a kid, outside a pub","content":"In cricket terms, Alec Stewart is an English legend. Sadly, if this video is anything to go by, being a top English cricketer doesn't mean much any more. Not when one of them can be utterly humiliated in a game of street cricket. By a kid. Outside a ...","url":"http://www.mirror.co.uk/sport/row-zed/england-cricket-legend-alec-stewart-6025874","image":{"title":null,"titleNoFormatting":null,"url":"http://brightcove.vo.llnwd.net/v1/unsecured/media/4221396001/201507/2006/4221396001_4343852337001_4343841141001-vs.jpg?pubId=4221396001","originalContextUrl":"http://www.mirror.co.uk/sport/row-zed/england-cricket-legend-alec-stewart-6025874","publisher":"Mirror.co.uk","tbUrl":"http://t0.gstatic.com/images?q=tbn:ANd9GcQMKZQhE_LhZSNcf6CSqgqEpYR8Lftc15_GgSn0hBBSwqyTc2KdVWbp3nQ","tbWidth":80,"tbHeight":45},"publisher":"Mirror.co.uk","publishDate":"2015-07-07T23:52:03"},{"title":"Ashes opening ceremony mocked by cricket fans","content":"There was a time - and not so long ago, either - when Ashes series would be preceded by little more than a polite handshake and an umpire calling \"play\". But that was then. Now, even the most hyped event of the cricketing calendar cannot be allowed to ...","url":"http://www.telegraph.co.uk/sport/cricket/international/theashes/11726620/Ashes-opening-ceremony-mocked-by-cricket-fans.html","image":{"title":null,"titleNoFormatting":null,"url":"http://i.telegraph.co.uk/multimedia/archive/03368/ceremony3_3368686b.jpg","originalContextUrl":"http://www.telegraph.co.uk/sport/cricket/international/theashes/11726620/Ashes-opening-ceremony-mocked-by-cricket-fans.html","publisher":"Telegraph.co.uk","tbUrl":"http://t3.gstatic.com/images?q=tbn:ANd9GcQBwAGj294UoAsKKauRpdClyELRTgDWwWvZYAUTeurNfplG0R2OT3qisrLv","tbWidth":80,"tbHeight":49},"publisher":"Telegraph.co.uk","publishDate":"2015-07-07T23:14:01"},{"title":"Indy's World Sports Park lands another cricket event","content":"“I didn't hear anything negative about this [venue],” said Jatin Patel, a locally based cricket coach and volunteer during May's ICC cricket tournament here. “Everyone was impressed. I think there's a lot of potential to bring other [cricket] events to ...","url":"http://www.ibj.com/blogs/4-the-score/post/53914-indys-world-sports-park-lands-another-cricket-event","image":{"title":null,"titleNoFormatting":null,"url":"https://media.zenfs.com/en-AE/homerun/sport360_xe/e93fc168ac65820fa8fa9c3a537c0154","originalContextUrl":"https://en-maktoob.news.yahoo.com/icc-academy-warriors-compete-esca-162400052.html","publisher":"Yahoo! Maktoob News","tbUrl":"http://t2.gstatic.com/images?q=tbn:ANd9GcQpaSKbu5nMdber13Q3oNDgMuUbLsRQiB4rR4nfkyIrcd1LNFbwLGJMuMk","tbWidth":80,"tbHeight":45},"publisher":"Indianapolis Business Journal (blog)","publishDate":"2015-07-07T01:35:05"},{"title":"commuters and cricket fans going to the Ashes set to suffer","content":"Rail strike 2015: London commuters and cricket fans going to the Ashes set to suffer. Tonight's action will affect services between London and Wales and the West Country, hitting commuters and cricket fans going to Cardiff. Cost of rail travel rapidly ...","url":"http://www.telegraph.co.uk/news/uknews/road-and-rail-transport/11725398/Rail-strike-2015-London-commuters-and-cricket-fans-going-to-the-Ashes-set-to-suffer.html","image":{"title":null,"titleNoFormatting":null,"url":"http://i.telegraph.co.uk/multimedia/archive/02627/newcastle-train_2627334b.jpg","originalContextUrl":"http://www.telegraph.co.uk/news/uknews/road-and-rail-transport/11725398/Rail-strike-2015-London-commuters-and-cricket-fans-going-to-the-Ashes-set-to-suffer.html","publisher":"Telegraph.co.uk","tbUrl":"http://t3.gstatic.com/images?q=tbn:ANd9GcQ8ZSGIUVh6XzNaAK349nSWY_krNiSIKzahSPWSge2nTBeU_v63Q1Ziu0o","tbWidth":80,"tbHeight":49},"publisher":"Telegraph.co.uk","publishDate":"2015-07-07T17:01:00"},{"title":"Quality cricket marks compelling series","content":"Unlike the Sri Lanka-India ties of yore, these series have consistently bred flavourful cricket and compelling stories, without the behavioural hysterics that seem to litter Big Three cricket. Many will remember Younis' sublime 171 to complete this ...","url":"http://www.espncricinfo.com/sri-lanka-v-pakistan-2015/content/story/895001.html","image":{"title":null,"titleNoFormatting":null,"url":"http://www.espncricinfo.com/db/PICTURES/CMS/216700/216771.jpg","originalContextUrl":"http://www.espncricinfo.com/sri-lanka-v-pakistan-2015/content/story/895001.html","publisher":"ESPNcricinfo.com","tbUrl":"http://t1.gstatic.com/images?q=tbn:ANd9GcSZiMZJddiS3oDFTyc38pV3M4syAeLxxK26RFXaTEmB64tJb96nF153PddV","tbWidth":80,"tbHeight":51},"publisher":"ESPNcricinfo.com","publishDate":"2015-07-07T16:06:04"},{"title":"Media Releases, 1 hour ago World T20 Qualifier is another boost for cricket's ...","content":"On the eve of another exciting opportunity for the best Associate and Affiliate Members (AMs) to qualify for a major ICC event, the success of the ICC Development Programme is illustrated by the fact that there are now more people playing cricket ...","url":"http://www.icc-cricket.com/news/2015/media-releases/88642/world-t20-qualifier-is-another-boost-for-crickets-global-development","image":{"title":null,"titleNoFormatting":null,"url":"http://icc-live.s3.amazonaws.com/cms/media/images/630x420/68843.jpg","originalContextUrl":"http://www.icc-cricket.com/news/2015/media-releases/88642/world-t20-qualifier-is-another-boost-for-crickets-global-development","publisher":"International Cricket Council","tbUrl":"http://t3.gstatic.com/images?q=tbn:ANd9GcQ2cfw7JUvngq32TnP07EPjek-wfrl1_xoYyP-XG2v2ZPzuJCncAkqWLy4","tbWidth":80,"tbHeight":53},"publisher":"International Cricket Council","publishDate":"2015-07-07T23:18:04"},{"title":"Lord Patel becomes first British-Asian appointee to England and Wales Cricket ...","content":"Commenting on the unity that cricket can bring, Lord Patel said \"Cricket has been a life-long passion of mine and this is a great honour for me. I am a huge advocate of what the sport can bring to the wider community – from instilling life-skills like ...","url":"http://www.dnaindia.com/sport/report-lord-patel-becomes-first-british-asian-appointee-to-england-and-wales-cricket-board-2102857","image":{"title":null,"titleNoFormatting":null,"url":"http://static.dnaindia.com/sites/default/files/2015/07/08/353847-lord-patel-ecb.jpg","originalContextUrl":"http://www.dnaindia.com/sport/report-lord-patel-becomes-first-british-asian-appointee-to-england-and-wales-cricket-board-2102857","publisher":"Daily News & Analysis","tbUrl":"http://t3.gstatic.com/images?q=tbn:ANd9GcSHr2mclYQ9XNHVKcA_Fgl_Gf0c1lvQ5Qgl8GZ9A2LesLOtC0cv_Wdq6Oyj","tbWidth":80,"tbHeight":80},"publisher":"Daily News & Analysis","publishDate":"2015-07-08T00:37:03"},{"title":"Ashes travel chaos as planned First Great Western strike hits Cardiff cricket fans","content":"Thousands of cricket fans are set to be affected by the planned rail strikes over the next two days. If late talks to avert the action fail thousands of First Great Western workers are set to walk out for 48 hours beginning at 6:30pm today. The ...","url":"http://www.mirror.co.uk/sport/cricket/ashes-travel-chaos-planned-first-6023786","image":{"title":null,"titleNoFormatting":null,"url":"http://i3.mirror.co.uk/incoming/article6019244.ece/ALTERNATES/s615/England-Nets-Session.jpg","originalContextUrl":"http://www.mirror.co.uk/sport/cricket/ashes-travel-chaos-planned-first-6023786","publisher":"Mirror.co.uk","tbUrl":"http://t2.gstatic.com/images?q=tbn:ANd9GcS1gPkb5wZyZIvY6MzpIDP_k1P12FzXnxVBYeA3G9ap6RjP6A5HvBBxvNs","tbWidth":80,"tbHeight":53},"publisher":"Mirror.co.uk","publishDate":"2015-07-07T19:42:03"}];
var returnurl="http://www.cricket24x7.social/news/?id=bolly_data235";
React.render( <RSSListImg data = { data }  returnurl={returnurl} /> , document.getElementById("rsslistimg"));
//http://s24x7.azurewebsites.net/api/summary/min?id=bolly_data235