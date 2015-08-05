var Radium = require('radium');
var React = require("react");


var VideoCollage = require('../../flowly/VideoCollage.js');

var BubblyVC = React.createClass({

  componentDidMount: function(){

     $("a[rel^='prettyPhoto']").prettyPhoto();

     $(".owl-slider").owlCarousel({

         autoPlay: 5000, //Set AutoPlay to 3 seconds
         items: 4,
         itemsDesktop: [1199, 3],
         itemsDesktopSmall: [979, 3],
         navigation:true

     });
  },


	render: function() {
    console.log(this.props.data);
		var styles = {
       	 		 s1 :{ margin: '10px',float:'left'},
       			
    	}
        return (  
                
                <div className="card z-depth-3">

                  <div id="videos" className="owl-slider">
                    {this.props.data.Videos.map(function(item, i) {

                      return (
                               
                           <a className="item" href={item.Url} rel="prettyPhoto" title="This is the description">
                                
                                <img src="../images/play.png"/>
                               
                               
                            </a>
                          );
                      }, this)}
                  </div>
                    
                </div>
            );
   
 	}

});

var datasrc = {"ID":"cric_data2777","Name":"#IPL","Description":"IPL \"MANORANJAN KA BAAP\"","Category":"2524","ShowDefaultPicture":true,"SearchQuery":"IPL 2015","VideosCount":719,"PhotosCount":16384,"PictureUrl":"http://3.bp.blogspot.com/-wY2Hk-0JujI/VGzo5-HK84I/AAAAAAAAAJk/BXi0Wq-kBOc/s1600/alll-team-captains-of-ipl-coL-gplus.jpg","Photos":[{"Url":"https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/s130x130/10987381_10153115879464490_4747455046626301954_n.jpg?oh=d06012c8c95cca964a2cbdc0b7c80880&oe=5571AD3A","Description":null,"Count":0},{"Url":"https://fbcdn-sphotos-c-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/p130x130/11025199_10153117361715429_9055260640964746329_n.png?oh=8fabdfa66e02f53a8e9f85a1241a04c5&oe=55B94CF5&__gda__=1433629923_9cf899b30fd14079a1968d3f14a0ad23","Description":null,"Count":0},{"Url":"https://fbcdn-vthumb-a.akamaihd.net/hvthumb-ak-xpt1/v/t15.0-10/s130x130/11188608_10152928991563634_651497315_n.jpg?oh=b8c269b96f1ea676329d929973d8b8a4&oe=55F8A290&__gda__=1442447112_36765b30786defe9ed93a5ade9bf136a","Description":null,"Count":0},{"Url":"https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/p130x130/11026320_10153124820900619_6842480259806331735_n.jpg?oh=2604665ac1c7a61d84b9041e5d09e54c&oe=55A8CC4B","Description":null,"Count":0},{"Url":"https://fbcdn-vthumb-a.akamaihd.net/hvthumb-ak-xtf1/v/t15.0-10/s130x130/11114635_10153246435955619_330018390_n.jpg?oh=eeff13753ce30b001dcb1574939555ad&oe=55D5DC05&__gda__=1439557888_d76f57865f427078af64d16e7e04378c","Description":null,"Count":0},{"Url":"https://scontent.xx.fbcdn.net/hphotos-xpf1/v/t1.0-9/p130x130/10460713_10153076578240429_3704713556727458452_n.jpg?oh=fb5570519c2c96227746bca95115f817&oe=55A9746C","Description":null,"Count":0},{"Url":"https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/p130x130/11001893_10153127785809490_102262141017152101_n.jpg?oh=8aef828761c62e273171ade9d382528c&oe=55A7D361","Description":null,"Count":0},{"Url":"https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xft1/v/t1.0-9/p130x130/10152433_10153175200880429_2293017392750651417_n.png?oh=6b50345a232952ebcae62085666d0cbb&oe=55AC516A&__gda__=1437404713_35d7a6060eec8ba829aa880d6f844ee5","Description":null,"Count":0},{"Url":"https://fbcdn-sphotos-f-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/p130x130/10349161_10153169028160429_5482227109795848587_n.png?oh=01ce0b54a2edee69741fb87ac8555e2c&oe=557A8040&__gda__=1434221654_9920685a73d7b4d0b15755988428598a","Description":null,"Count":0},{"Url":"https://fbcdn-sphotos-h-a.akamaihd.net/hphotos-ak-xtp1/v/t1.0-9/p130x130/1604516_10153195716914490_7868262182512046046_n.jpg?oh=0778e28ca53be47c735133036ddcc46c&oe=55B97A37&__gda__=1438529298_d836c62bc9284c181621104dbe3f9544","Description":null,"Count":0}],"Videos":[{"ID":"lJqVeIjum3k","Url":"https://www.youtube.com/watch?v=lJqVeIjum3k","Source":"Youtube","Count":244},{"ID":"9m5adW5oufk","Url":"http://youtu.be/9m5adW5oufk","Source":"Youtube","Count":190},{"ID":"zLOEP3H1xc0","Url":"https://www.youtube.com/watch?v=zLOEP3H1xc0","Source":"Youtube","Count":168},{"ID":"IDs0exx_UpM","Url":"https://www.youtube.com/watch?v=IDs0exx_UpM&feature=youtu.be","Source":"Youtube","Count":152},{"ID":"zcBk6P0bkHs","Url":"http://youtu.be/zcBk6P0bkHs","Source":"Youtube","Count":129},{"ID":"etr9Bqix1pg","Url":"https://www.youtube.com/watch?v=etr9Bqix1pg","Source":"Youtube","Count":114},{"ID":"tAyb9vVVnbo","Url":"https://www.youtube.com/watch?v=tAyb9vVVnbo","Source":"Youtube","Count":103},{"ID":"sBIGRAFm81g","Url":"https://www.youtube.com/watch?v=sBIGRAFm81g","Source":"Youtube","Count":99},{"ID":"7dS1zy_5usc","Url":"https://www.youtube.com/watch?v=7dS1zy_5usc","Source":"Youtube","Count":93},{"ID":"CfTMonf5OfI","Url":"https://www.youtube.com/watch?v=CfTMonf5OfI","Source":"Youtube","Count":91}],"Photo":"http://3.bp.blogspot.com/-wY2Hk-0JujI/VGzo5-HK84I/AAAAAAAAAJk/BXi0Wq-kBOc/s1600/alll-team-captains-of-ipl-coL-gplus.jpg","Video":null,"Total":65846,"Stat":{"Type":"ALL","PosCount":7045,"NegCount":430,"NeuCount":58371,"PosPercent":10.0,"NegPercent":0.0,"NeuPercent":88.0},"SocialStats":[{"Type":"TW","PosCount":1950,"NegCount":109,"NeuCount":9724,"PosPercent":16.0,"NegPercent":0.0,"NeuPercent":82.0},{"Type":"FB","PosCount":5095,"NegCount":321,"NeuCount":48647,"PosPercent":9.0,"NegPercent":0.0,"NeuPercent":89.0}],"GenderStats":[{"Type":"Male","Count":6971,"Percent":59.161503861495374692353390478},{"Type":"Female","Count":4532,"Percent":38.462191292540100144275651362}],"Comments":null,"Tags":[{"key":"ipl","value":401,"valuestr":null,"label":null},{"key":"eit20","value":63,"valuestr":null,"label":null},{"key":"pepsiipl","value":54,"valuestr":null,"label":null},{"key":"pakvban","value":50,"valuestr":null,"label":null},{"key":"banvsind","value":45,"valuestr":null,"label":null}],"Emotions":[{"key":"like","value":24,"valuestr":null,"label":null},{"key":"best","value":20,"valuestr":null,"label":null},{"key":"shared","value":20,"valuestr":null,"label":null},{"key":"good","value":17,"valuestr":null,"label":null},{"key":"won","value":16,"valuestr":null,"label":null},{"key":"no","value":12,"valuestr":null,"label":null},{"key":"win","value":11,"valuestr":null,"label":null},{"key":"ban","value":10,"valuestr":null,"label":null},{"key":"leave","value":9,"valuestr":null,"label":null},{"key":"help","value":7,"valuestr":null,"label":null}],"Locations":[{"key":"undefined","value":64295,"valuestr":"undefined","label":null},{"key":"in","value":1036,"valuestr":"india","label":null},{"key":"us","value":137,"valuestr":"united states","label":null},{"key":"pk","value":133,"valuestr":"pakistan","label":null},{"key":"jm","value":90,"valuestr":"jamaica","label":null},{"key":"gb","value":48,"valuestr":"united kingdom","label":null},{"key":"ae","value":12,"valuestr":"united arab emirates","label":null},{"key":"au","value":11,"valuestr":"australia","label":null},{"key":"za","value":9,"valuestr":"south africa","label":null},{"key":"ve","value":8,"valuestr":"venezuela","label":null},{"key":"es","value":8,"valuestr":"spain","label":null},{"key":"lk","value":6,"valuestr":"sri lanka","label":null},{"key":"np","value":5,"valuestr":"nepal","label":null},{"key":"ua","value":4,"valuestr":"ukraine","label":null},{"key":"bd","value":4,"valuestr":"bangladesh","label":null},{"key":"id","value":3,"valuestr":"republic of indonesia","label":null},{"key":"jp","value":3,"valuestr":"japan","label":null},{"key":"co","value":3,"valuestr":"colombia","label":null},{"key":"ie","value":3,"valuestr":"ireland","label":null},{"key":"mx","value":2,"valuestr":"mexico","label":null}],"Trends":[{"Source":"TW","Data":"0,41,-7,49,6"},{"Source":"FB","Data":"0,4,2,2,2,1,1,2"},{"Source":"TM","Data":"0"}],"Decision":"Medium","DecisionImage":"/images/medium.png","ReturnUrl":null,"ContainerID":null};
var returnurl="http://www.cricket24x7.social/news/?id=bolly_data235";
React.render( <BubblyVC data = { datasrc }  returnurl={returnurl} /> , document.getElementById("vc"));
//http://s24x7.azurewebsites.net/api/summary/min?id=bolly_data235