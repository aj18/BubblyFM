var React = require('react');

var Bubbly = require("./social.jsx");
var SIM =require("../bubbly_socialInfluance_material/src/sim.js");


var  BubblyCardRunner = function (campaignId,cardType,returnUrl,styles,clientId,dataFromPage,container) {
  console.log(campaignId+"-"+cardType+"-"+returnUrl+"-"+container);

	if (dataFromPage) {

		console.log("dataFromPage True");
		console.log("cardtype " + cardType);
		console.log("container " + container);

     if(cardType=="SIM"){
        SoicalInfluanceMaterialData(campaignId,dataFromPage,returnUrl,container);
     } else{
		  React.render(<Bubbly data={dataFromPage}  id={campaignId} cardtype={cardType} returnurl={returnUrl} styles={styles} clientid={clientId}/>,container);
    }

	} else {
		console.log("dataFromPage False");
		var WidgetUrl = "http://s24x7.azurewebsites.net/api/summary/min";
    if(cardType=="BM" || 
       cardType=="BMYAHOO" || 
       cardType=="IMGGALLERY" || 
       cardType=="COMMENTS" || 
       cardType=="SI" || 
       cardType=="BMOLD" || cardType==="SIM" || cardType==="PC" || cardType==="VC"){

      WidgetUrl = "http://s24x7.azurewebsites.net/api/summary/";
    
    }
	  var url = WidgetUrl + "?id=" + campaignId;
	   
     console.log("Url : " + url);

	    jQuery.ajax({
	        url: url,
	        type: 'GET',
	        dataType: 'JSON',
	        cache: false
	    }).done(function(ajaxdata) {

        if(cardType=="SIM"){
            SoicalInfluanceMaterialData( campaignId, ajaxdata,returnUrl,container);
        } else{

	         React.render(<Bubbly data={ajaxdata}  id={campaignId} cardtype={cardType} returnurl={returnUrl} styles={styles} clientid={clientId}/>,container);
        }

	    });
	}
};

var  BubblyRSSCardRunner = function (campaignId,cardType,returnUrl,styles,clientId,dataFromPage,container,rssCriteria) {
  console.log(campaignId+"-"+cardType+"-"+returnUrl+"-"+container +"-"+rssCriteria);

  if (dataFromPage) {

    console.log("dataFromPage True");
    console.log("cardtype " + cardType);
    console.log("container " + container);
    React.render(<Bubbly data={dataFromPage}  id={campaignId} cardtype={cardType} returnurl={returnUrl} styles={styles} clientid={clientId}/>,container);

  } else {
    console.log("dataFromPage False");
    var WidgetUrl =  'http://s24x7.azurewebsites.net/api/summary/rss';
        
    var url = WidgetUrl + "?id=" + rssCriteria;
     
     console.log("RSSURL " + url);
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


var BubblyCommentsRunner = function(campaignId,cardType,returnUrl,styles,clientId,dataFromPage,container,commentsTitle,commentsType,commentsSkipBy,commentsLimit,commentsQ){

   console.log(campaignId+"-"+cardType+"-"+returnUrl+"-"+container +"-"+commentsTitle+"-"+commentsType+"-"+commentsSkipBy+"-"+commentsLimit+"-"+commentsQ);
	if (dataFromPage) {

		console.log("dataFromPage True");
		console.log("cardtype " + cardType);
		console.log("container " + container);
		React.render(<Bubbly data={dataFromPage}  id={campaignId} cardtype={cardType} returnurl={returnUrl} styles={styles} clientid={clientId} commentstitle = { commentsTitle }  commentstype={commentsType} commentsskipby={commentsSkipBy} commentslimit={commentsLimit} commentsq={commentsQ} commentscontainer={container}/>,container);

	} else {

		var returnurl="http://www.cricket24x7.social";
        if (returnUrl)
        {
            returnurl=returnUrl;
        }
        var weburl = 'http://s24x7.azurewebsites.net/api/summary/comments';
        var url = weburl + '?id=' + campaignId + '&type=' + commentsType + '&skipby=' + commentsSkipBy +'&limit=' + commentsLimit + '&q=' + commentsQ;
       console.log("Url : " + url);
        jQuery.ajax({
            url: url,
            type: 'GET',
            dataType: 'JSON',
            cache: false
        }).done(function(data) {
           
           React.render(<Bubbly data={data}  id={campaignId} cardtype={cardType} returnurl={returnUrl} styles={styles} clientid={clientId} commentstitle = { commentsTitle }  commentstype={commentsType} commentsskipby={commentsSkipBy} commentslimit={commentsLimit} commentsq={commentsQ}/>,container);

           
		});
    }
}

module.exports = BubblyCard;

function BubblyCard() {
  this.aSetting = true;
};


function SoicalInfluanceMaterialData(id,data,returnurl,container){  
      //  debugger;
        var title="Dashboard";
        var totalCount=0;
        var doughnutData = [{
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Negative"},{
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Positive"},{
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Neutral"}];
        var ClientBar={ClientBarPos:[],ClientBarNeutral:[],ClientBarNegative:[]}
        var meterData={};
        var Projects= {Twitter:[],Facebook:[],Tumblr:[]};      
        var polarChartData = [];
        var wordMarkers = [];    

        var pos = 0;
        var neg= 0;
        var neu= 0;
            //debugger;
            var i=29;
            var j1=0;
            var j2=0;
            var j3=0;
            if(data.ByDate != null){
              jQuery.each(data.ByDate, function(index, item) {
                     if(item.Sentiment=="Neutral"){
                         neu=neu+item.Count;
                     }
                     else if(item.Sentiment=="Positive"){
                          pos=pos+item.Count;
                     }
                     else if(item.Sentiment=="Negative"){
                          neg=neg+item.Count;
                     }

              }); 
            }

            if(data.SocialStats != null){
                meterData.Twitter=0;
                meterData.Facebook=0;
                meterData.Tumblr=0;
                jQuery.each(data.SocialStats, function(index, item) {
                //debugger;
                    neu=neu+item.NeuCount;
                    pos=pos+item.PosCount;
                    neg=neg+item.NegCount;
                    if(item.Type=="TW"){
                      meterData.Twitter = item.PosCount + item.NegCount + item.NeuCount;
                      }
                    else if(item.Type=="FB"){
                      meterData.Facebook = item.PosCount + item.NegCount + item.NeuCount;
                      }
                    else if(item.Type=="TM"){
                      meterData.Tumblr = item.PosCount + item.NegCount + item.NeuCount;
                      }
                });
            }
            totalCount = pos+neg+neu;
           if(data.Sentiments != null){
                jQuery.each(data.Sentiments, function(index, item) {
                
                  if(item.key=="Negative"){
                      doughnutData[0].value = item.value;
                  }else if(item.key=="Positive"){
                  doughnutData[1].value = item.value;
                  }else{
                  doughnutData[2].value = item.value;
                  }
                });
            }
           else{
              //debugger;
              doughnutData[0].value = neg; 
              doughnutData[1].value = pos;
              doughnutData[2].value = neu;
         
            }

        if(data.GenderStats != null){
            jQuery.each(data.GenderStats, function(index, item) {
              meterData.OthersPer = '< 1%';
              meterData.Others = 0;
              if(item.Type=="Male"){
                  meterData.Male = item.Count;
                  meterData.MalePer = item.Percent.toFixed(2) + '%';
              }else if(item.Type=="Female"){
              meterData.Female = item.Count;
              meterData.FemalePer = item.Percent.toFixed(2) + '%';
              }else{
              meterData.Others = item.Count;
              if(item.Percent < 1)
                meterData.OthersPer = '< 1%';
              else
                meterData.OthersPer = item.Percent.toFixed(2) + '%';
              }
            });
        }
        
        if(data.LatestDS != null){
            data.LatestDS.sort(function(a,b) { return new Date(b.Date).getTime() - new Date(a.Date).getTime();});
            
            i=0;
            meterData.Twitter=0;
            meterData.Facebook=0;
            meterData.Tumblr=0;
    
            jQuery.each(data.LatestDS, function(index, item) {
              //i = index;
              //if(item.Date.indexOf("2015")>-1)
                //{
                if(i <= 10) {

                   Projects.Twitter[i] = item.Twitter;
                   meterData.Twitter = meterData.Twitter + item.Twitter;

                   Projects.Facebook[i] = item.Facebook;
                   meterData.Facebook = meterData.Facebook + item.Facebook;

                   Projects.Tumblr[i] = item.Tumblr;
                   meterData.Tumblr = meterData.Tumblr + item.Tumblr;

                   i=i+1;
                  }
                //}
            });

          }


            
            meterData.TwitterPer = ((meterData.Twitter/(meterData.Twitter+meterData.Facebook+meterData.Tumblr))*100).toFixed(2);
            meterData.FacebookPer = ((meterData.Facebook/(meterData.Twitter+meterData.Facebook+meterData.Tumblr))*100).toFixed(2);
            meterData.TumblrPer = ((meterData.Tumblr/(meterData.Twitter+meterData.Facebook+meterData.Tumblr))*100).toFixed(2);

            if(meterData.TwitterPer < 1)
               meterData.TwitterPer = '< 1';
            if(meterData.FacebookPer < 1)
               meterData.FacebookPer = '< 1';
            if(meterData.TumblrPer < 1)
               meterData.TumblrPer = '< 1';

            Projects.Meter = meterData;

            if(data.Locations != null){
                var arr={};
              var i=0;
              var arrMarker={};
              var style={};
              jQuery.each(data.Locations, function(index, item) {
                   arr={};
                 arrMarker={};   
                 switch(item.key) {
                 case "in":
                            arr.value = item.value;
                    arr.color= "#ff9800";
                      arr.highlight= "#ffb74d";
                    arr.label= item.valuestr;
                    arrMarker.latLng= [20.59, 78.96];
                    arrMarker.name=item.valuestr;
                    
                    wordMarkers[i] = arrMarker;

                      polarChartData[i] = arr;
                    i=i+1;
                  break;
                      case "us":
                          arr.value= item.value;
                  arr.color= "#f44336";
                  arr.highlight= "#FF5A5E";
                  arr.label= item.valuestr;
                          arrMarker.latLng= [37.09, -95.71];
                  arrMarker.name=item.valuestr;
                  wordMarkers[i] = arrMarker;
                  
                  polarChartData[i] = arr;
                    i=i+1;
                  break;
                case "gb":
                          arr.value= item.value;
                  arr.color= "#9c27b0";
                  arr.highlight= "#ce93d8";
                  arr.label= item.valuestr;
                  arrMarker.latLng= [55.38, -3.43];
                  arrMarker.name=item.valuestr;
                  wordMarkers[i] = arrMarker;

                          polarChartData[i] = arr;
                    i=i+1;
                  break;
                      case "au":
                          arr.value= item.value;
                  arr.color= "#2196f3";
                  arr.highlight= "#90caf9";
                  arr.label= item.valuestr;
                          arrMarker.latLng = [-25.27, 133.77];
                  arrMarker.name=item.valuestr;
                  wordMarkers[i] = arrMarker;

                  polarChartData[i] = arr;
                    i=i+1;
                  break;
                case "pk":
                          arr.value= item.value;
                  arr.color= "#009688";
                  arr.highlight= "#80cbc4";
                  arr.label= item.valuestr;
                          arrMarker.latLng= [24.86, 67.01];
                  arrMarker.name=item.valuestr;
                  wordMarkers[i] = arrMarker;

                  polarChartData[i] = arr;
                    i=i+1;
                  break;
                case "ae":
                          arr.value= item.value;
                  arr.color= "#00acc1";
                  arr.highlight= "#4dd0e1";
                  arr.label= item.valuestr;
                  arrMarker.latLng= [23.42,53.85];
                  arrMarker.name=item.valuestr;
                  wordMarkers[i] = arrMarker;

                          polarChartData[i] = arr;
                    i=i+1;
                  break;
                      case "my":
                          arr.value= item.value;
                  arr.color= "#4caf50";
                  arr.highlight= "#81c784";
                  arr.label= item.valuestr;
                          arrMarker.latLng = [4.21, 101.97];
                  arrMarker.name=item.valuestr;
                  wordMarkers[i] = arrMarker;
                  
                  polarChartData[i] = arr;
                    i=i+1;
                  break;
                  case "np":
                          arr.value= item.value;
                  arr.color= "#3f51b5";
                  arr.highlight= "#7986cb";
                  arr.label= item.valuestr;
                          arrMarker.latLng= [28.39, 84.12];
                  arrMarker.name=item.valuestr;
                  wordMarkers[i] = arrMarker;

                  polarChartData[i] = arr;
                    i=i+1;
                  break;
                case "za":
                          arrMarker.latLng= [-30.56,22.94];
                  arrMarker.name=item.valuestr;
                  wordMarkers[i] = arrMarker;
                  break;
                case "nz":
                          arrMarker.latLng= [-40.90, 174.88];
                  arrMarker.name=item.valuestr;
                  wordMarkers[i] = arrMarker;
                  break;
                case "ca":
                          arrMarker.latLng= [56.13, -106.34];
                  arrMarker.name=item.valuestr;
                  wordMarkers[i] = arrMarker;
                  break;
                case "br":
                          arrMarker.latLng= [-14.23, -51.92];
                  arrMarker.name=item.valuestr;
                  wordMarkers[i] = arrMarker;
                  break;
                case "it":
                          arrMarker.latLng= [41.87, 12.56];
                  arrMarker.name=item.valuestr;
                  wordMarkers[i] = arrMarker;
                  break;
                case "jp":
                          arrMarker.latLng= [35.68, 139.69];
                  arrMarker.name=item.valuestr;
                  wordMarkers[i] = arrMarker;
                  break;
                case "fr":
                          arrMarker.latLng= [46.22, 2.21];
                  arrMarker.name=item.valuestr;
                  wordMarkers[i] = arrMarker;
                  break;
                case "de":
                          arrMarker.latLng= [51.16, 10.45];
                  arrMarker.name=item.valuestr;
                  wordMarkers[i] = arrMarker;
                  break;


                 }
              }); 

            }
            
        
           //debugger;
            React.render( <SIM id = { id } data = {data} doughnutData={doughnutData} ClientBar={ClientBar} Projects={Projects}  polarChartData={polarChartData} wordMarkers={wordMarkers} title = { title } count={totalCount} returnurl={returnurl} />, container);
     
}

BubblyCard.prototype.showCard = function(para, dataFromPage, container) {
  console.log(this.aSetting);
  BubblyCardRunner(para.campaignId,para.cardType,para.returnUrl,para.styles,para.clientId,dataFromPage,container);
}

BubblyCard.prototype.showComments = function(para, dataFromPage, container) {

	console.log("para : " + para);
	console.log("commentdata : " + dataFromPage );
	console.log("container : "+ container);
  
  BubblyCommentsRunner(para.campaignId,para.cardType,para.returnUrl,para.styles,para.clientId,dataFromPage,container,para.commentsTitle,para.commentsType,para.commentsSkipBy,para.commentsLimit,para.commentsQ);
}

BubblyCard.prototype.showRSSCard = function(para, dataFromPage, container) {
  console.log(this.aSetting);
  BubblyRSSCardRunner(para.campaignId,para.cardType,para.returnUrl,para.styles,para.clientId,dataFromPage,container,para.rssCriteria);
}

BubblyCard.prototype.parseData = function(para, dataFromPage, container) {
  console.log(dataFromPage);
  console.log(para.campaignId);
  console.log(para.cardType);
  console.log(para.returnUrl);
  console.log(para.styles);
  console.log(para.clientId);
  console.log(container);

  if(dataFromPage===null){
  	console.log("No data from page");
  	
  }else {
  	console.log(JSON.stringify(dataFromPage));
  }

}
