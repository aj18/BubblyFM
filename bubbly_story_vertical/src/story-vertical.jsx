var React = require("react");
var jQuery = require("jquery");
var Slider = require('react-slick');

var FluidVid = React.createClass({
    getDefaultProps: function () {
        return {
            src : '',
            width: 1600,
            height: 900
        }
    },
    getRatio: function (width, height) {
        return ((parseInt(height, 10) / parseInt(width, 10)) * 100) + '%';
    },
    render: function() {
        var ratio = {
            paddingTop: this.getRatio(this.props.width, this.props.height)
        };
        return (
          <div className={ 'fluidvids' } style={ ratio }>
        <iframe src={ this.props.src } width={ this.props.width } height={ this.props.height } frameBorder={ 0 }></iframe>
          </div>
    );
}
});

var PhotoSlider= React.createClass({
    componentDidMount: function() {
        var links = document.getElementsByClassName('gallery-1');

        jQuery('.gallery-1').unbind('click').bind('click', function(event) {
            blueimp.Gallery(links, {
                index: $(this).get(0),
                event: event
            });
        });
    },
    render: function () {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay:1,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]


        }
        return (
       <div className='slick-content'>
        <Slider {...settings}>
            {this.props.data.map(function(item, i) {
            var s1 = { 'font-family': 'georgia','font-size':'16px','line-height':'26px','margin-bottom':'2%','margin-left':'10%','margin-right':'9%' };
            var s2 = { 'width': '100%', 'height': '60px' };
            var s3 = { 'width': '100%' };
            var s4 = {'padding-top':'20px','width':'100%',    'padding-left': '5px'};
            var s5 = {'height': '48px','width': '48px','padding': '4px','border-bottom':'none','margin-right':'5px'};
            var s8 = { 'padding-right': '5px', 'color': 'darkgray' };

            var urlTitle = this.props.returnurl;
            // http://, https://, ftp://
            var urlPattern = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim;
            var date = Date.parse(Date().toString());
            return (
                <div>
                     <div style={{'padding-left':'5px','float':'left','clear': 'left','width':'68%'}}>
                         {item.VideoID ? <div className="fluidvids-youtube">
                        <FluidVid src={"http://www.youtube.com/embed/" + item.VideoID + "?rel=0" } />
                         </div>
                         : item.PhotoUrl && item.Datasource=="Instagram" ?
                     <div>
                     <img style={s3} src={item.PhotoUrl} />
                     </div>
                         : item.PhotoUrl && item.Datasource=="GooglePlus" ?
                      <div>
                      <img style={s3} src={item.PhotoUrl} />
                      </div>
                         : item.PhotoUrl && item.Datasource=="Tumblr" ?
                    <div>
                    <img style={s3} src={item.PhotoUrl} />
                    </div>
                         : item.PhotoUrl && item.Datasource=="Twitter" ?
                     <div>
                     <img style={s3} src={item.PhotoUrl} />
                     </div>
                         : item.PhotoUrl && item.Datasource=="Facebook" ?
                    <div>
                    <img style={s3} src={item.PhotoUrl} />
                    </div>
                         : false }
                     </div>
<div style={{'float':'left','width':'30%'}}>
    {item.Datasource=="Twitter" ?

 <div>
   <a href={"https://twitter.com/" + item.ProfileID.substr(1)} target="_blank" className="pull-left">
      <img src={item.ProfilePhotoUrl} style={s5} />
   </a>
   <div style={s2}>
      <div>
         <a href={"https://twitter.com/" + item.ProfileID.substr(1)} target="_blank">
             {item.ProfileName ? item.ProfileName.substr(1) : 'No Name'}
         </a>
         <div className="pull-right">
             <span style={s8} className="fa fa-twitter-square"></span>
         </div>
      </div>
     <p>{item.ProfileID} ({item.ProfileFollower})</p>
   </div>
 </div>
    : item.Datasource=="Instagram" ?
 <div>
           <a href={"https://instagram.com/" + item.ProfileID} target="_blank" className="pull-left">
               <img src={item.ProfilePhotoUrl} style={s5} />
           </a>
           <div style={s2}>
               <a href={"https://instagram.com/" + item.ProfileID} target="_blank">
                   {item.ProfileName ? item.ProfileName : 'No Name'}
               </a>
               <div className="pull-right">
                   <span style={s8} className="fa fa-instagram"></span>
               </div>
           </div>
 </div>
    : item.Datasource=="GooglePlus" ?
 <div>
       <a href={"https://plus.google.com/" + item.ProfileID} target="_blank" className="pull-left">
           <img src={item.ProfilePhotoUrl} style={s5} />
       </a>
       <div style={s2}>
           <a href={"https://plus.google.com/" + item.ProfileID} target="_blank">
               {item.ProfileName ? item.ProfileName : 'No Name'}
           </a>
           <div className="pull-right">
               <span style={s8} className="fa fa-google-plus-square"></span>
           </div>
       </div>
 </div>
    : item.Datasource=="Tumblr" ?
   <div>
           <a href={"http://" + item.ProfileID + ".tumblr.com" } target="_blank" className="pull-left">
           <img src={item.ProfilePhotoUrl} style={s5} />
           </a>
       <div style={s2}>
           <a href={"http://" + item.ProfileID + ".tumblr.com" } target="_blank">
               {item.ProfileName ? item.ProfileName : 'No Name'}
           </a>
           <div className="pull-right">
               <span style={s8} className="fa fa-tumblr-square"></span>
           </div>
       </div>
   </div>
    : item.Datasource=="Facebook" ?
  <div>
   <a href={"https://www.facebook.com/profile.php?id =" + item.ProfileID} target=" _blank" className="pull-left">
      <img src={item.ProfilePhotoUrl} style={s5} />
   </a>
     <div style={s2}>
         <a href={"https://www.facebook.com/profile.php?id =" + item.ProfileID} target=" _blank">
             {item.ProfileName ? item.ProfileName : 'No Name'}
         </a>
         <div className="pull-right">
             <span style={s8} className="fa fa-facebook-square"></span>
         </div>
     </div>
  </div>
    : false}
<div style={{'padding-bottom':'20px','padding-left':'5px'}} className="card-content">
   <div dangerouslySetInnerHTML={{__html: item.Text != null ? item.Text.replace(urlPattern, '<a style="word-break:break-word;" href="$&" target="_blank">$&</a>') :false}}>
   </div>
<p className="pull-left" style={s4}>
    { item.Datasource=="Instagram" ?
    Math.round((date/1000 - parseInt(item.DocDate)) * 1.1574074074074E-8) >= 1 ?
<span>{Math.round((date/1000 - parseInt(item.DocDate)) * 1.1574074074074E-8)}d</span>
    : Math.round((date/1000 - parseInt(item.DocDate)) * 1.1574074074074E-8) < 1 && Math.round((date/1000 - parseInt(item.DocDate)) * 2.7777777777778E-7) > 1 ?
                    <span>{Math.round((date/1000 - parseInt(item.DocDate)) * 2.7777777777778E-7)}h</span>
    : Math.round((date/1000 - item.DocDate) * 2.7777777777778E-7) < 1 ?
                    <span>{Math.round((date/1000 - parseInt(item.DocDate)) / 60000)}m</span>
    :false
    :  Math.round((date - Date.parse(item.DocDate)) * 1.1574074074074E-8) >= 1 ?
                        <span>{Math.round((date - Date.parse(item.DocDate)) * 1.1574074074074E-8)}d</span>
    : Math.round((date - Date.parse(item.DocDate)) * 1.1574074074074E-8) < 1 && Math.round((date - Date.parse(item.DocDate)) * 2.7777777777778E-7) > 1 ?
                                            <span>{Math.round((date - Date.parse(item.DocDate)) * 2.7777777777778E-7)}h</span>
    : Math.round((date - Date.parse(item.DocDate)) * 2.7777777777778E-7) < 1 ?
                                            <span>{Math.round((date - Date.parse(item.DocDate)) / 60000)}m</span>
    :false
    }
</p>
</div>
<p style={s1}>
    {item.Comments}
</p>

</div>
                </div>

            );
            }, this)}



        </Slider>
       </div>
    );
}
});



var BubblyStoryRunner = function() {
    var storyCardWidget = function (id, container, dataFromPage, returnUrl, style, cardType, Limit, Title) {
        var returnurl="http://www.cricket24x7.social";
        var title = "Bubbly Story";
        if (returnUrl)
        {
            returnurl=returnUrl;
        }
        if (Title) {
            title = Title;
        }
        debugger;
        if (dataFromPage == null || dataFromPage == "") {
            var weburl = 'http://s24x7.azurewebsites.net/api/summary/story';
            var url = weburl + '?id=' + id + '&storyid=story_default';

            jQuery.ajax({
                url: url,
                type: 'GET',
                dataType: 'JSON',
                cache: false
            }).done(function (data) {
                jQuery.each(data, function (i, val) {
                    if (val.PhotoUrl === null && (jQuery.trim(val.Text) === '' || val.Text === null)) // delete index -- By Arun on 05/20/2015
                    {
                        delete data[i];
                    }
                });
                React.render(<PhotoSlider data={data.Data} title={data.Title} discription={data.Description} Campaign={data.Campaign} returnurl={returnurl} />, container);

    });
}
else{
            React.render(<PhotoSlider data={dataFromPage.Data} title={dataFromPage.Title} discription={dataFromPage.Description} Campaign={dataFromPage.Campaign} returnurl={returnurl} />, container);
}

};
return {
    storyCardWidget: storyCardWidget
};
}();

module.exports = BubblyCard;

function BubblyCard() {

};

BubblyCard.prototype.showCard = function (vlist, dataFromPage, container1) {
    BubblyStoryRunner.storyCardWidget(vlist.campaignId, container1, dataFromPage, vlist.returnUrl, vlist.style, vlist.cardType, vlist.Limit);
}

var data = {
    "ID": "123",
    "Title": "Shaandar - Trailer Launch",
    "Description": "Journey from making to the trailer , Shahid and aalia rocks",
    "Campaign": "Shaandar",
    "Data": [
      {
          "ID": "1062699355727999967_1909053339",
          "Datasource": "Twitter",
          "DocDate": "1440903656.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11821340_391983644344081_511513436_n.jpg",
          "ProfileID": "bollywood__rocks",
          "ProfileName": "",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/1516222_885246851558536_468657096_a.jpg",
          "Text": "#shandaar @shahidkapoor #aliabhatt",
          "Comments": "Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.",
          "Flowlly": ""
      },
      {
          "ID": "1064504306528718804_1636460290",
          "Datasource": "Twitter",
          "DocDate": "1441118823.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11950717_1636556923253787_233382749_n.jpg",
          "ProfileID": "forevershahid",
          "ProfileName": "Shahid Kapoor ❤️ Turkish Fans",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/11849378_1454953098146048_656087323_a.jpg",
          "Text": "@shahidkapoor OMG So Sweet 😍😍\nMr Expression 😚 \n#shahidkapoor \n#JhalakReloaded \n#jhalakdikhlajaa \n#indiancinema #bestactor #india #bollywood #handsome #dashing #great #cool #charisma #pyaar #perfection #shandaar #movie #lovely #boy ❤️",
          "Comments": "Shahid expression along with aalia's cuteness to make public crazy",
          "Flowlly": ""
      },
      {
          "ID": "1062699355727999967_1909053339",
          "Datasource": "Twitter",
          "DocDate": "1440903656.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11821340_391983644344081_511513436_n.jpg",
          "ProfileID": "bollywood__rocks",
          "ProfileName": "",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/1516222_885246851558536_468657096_a.jpg",
          "Text": "#shandaar @shahidkapoor #aliabhatt",
          "Comments": "Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.",
          "Flowlly": ""
      },
      {
          "ID": "1064504306528718804_1636460290",
          "Datasource": "Instagram",
          "DocDate": "1441118823.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11950717_1636556923253787_233382749_n.jpg",
          "ProfileID": "forevershahid",
          "ProfileName": "Shahid Kapoor ❤️ Turkish Fans",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/11849378_1454953098146048_656087323_a.jpg",
          "Text": "@shahidkapoor OMG So Sweet 😍😍\nMr Expression 😚 \n#shahidkapoor \n#JhalakReloaded \n#jhalakdikhlajaa \n#indiancinema #bestactor #india #bollywood #handsome #dashing #great #cool #charisma #pyaar #perfection #shandaar #movie #lovely #boy ❤️",
          "Comments": "Shahid expression along with aalia's cuteness to make public crazy",
          "Flowlly": ""
      },
      {
          "ID": "1062699355727999967_1909053339",
          "Datasource": "Instagram",
          "DocDate": "1440903656.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11821340_391983644344081_511513436_n.jpg",
          "ProfileID": "bollywood__rocks",
          "ProfileName": "",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/1516222_885246851558536_468657096_a.jpg",
          "Text": "#shandaar @shahidkapoor #aliabhatt",
          "Comments": "Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.",
          "Flowlly": ""
      },
      {
          "ID": "1064504306528718804_1636460290",
          "Datasource": "Instagram",
          "DocDate": "1441118823.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11950717_1636556923253787_233382749_n.jpg",
          "ProfileID": "forevershahid",
          "ProfileName": "Shahid Kapoor ❤️ Turkish Fans",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/11849378_1454953098146048_656087323_a.jpg",
          "Text": "@shahidkapoor OMG So Sweet 😍😍\nMr Expression 😚 \n#shahidkapoor \n#JhalakReloaded \n#jhalakdikhlajaa \n#indiancinema #bestactor #india #bollywood #handsome #dashing #great #cool #charisma #pyaar #perfection #shandaar #movie #lovely #boy ❤️",
          "Comments": "Shahid expression along with aalia's cuteness to make public crazy",
          "Flowlly": ""
      },
      {
          "ID": "1062699355727999967_1909053339",
          "Datasource": "Instagram",
          "DocDate": "1440903656.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11821340_391983644344081_511513436_n.jpg",
          "ProfileID": "bollywood__rocks",
          "ProfileName": "",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/1516222_885246851558536_468657096_a.jpg",
          "Text": "#shandaar @shahidkapoor #aliabhatt",
          "Comments": "Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.",
          "Flowlly": ""
      },
      {
          "ID": "1064504306528718804_1636460290",
          "Datasource": "Instagram",
          "DocDate": "1441118823.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11950717_1636556923253787_233382749_n.jpg",
          "ProfileID": "forevershahid",
          "ProfileName": "Shahid Kapoor ❤️ Turkish Fans",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/11849378_1454953098146048_656087323_a.jpg",
          "Text": "@shahidkapoor OMG So Sweet 😍😍\nMr Expression 😚 \n#shahidkapoor \n#JhalakReloaded \n#jhalakdikhlajaa \n#indiancinema #bestactor #india #bollywood #handsome #dashing #great #cool #charisma #pyaar #perfection #shandaar #movie #lovely #boy ❤️",
          "Comments": "Shahid expression along with aalia's cuteness to make public crazy",
          "Flowlly": ""
      },
      {
          "ID": "1062699355727999967_1909053339",
          "Datasource": "Instagram",
          "DocDate": "1440903656.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11821340_391983644344081_511513436_n.jpg",
          "ProfileID": "bollywood__rocks",
          "ProfileName": "",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/1516222_885246851558536_468657096_a.jpg",
          "Text": "#shandaar @shahidkapoor #aliabhatt",
          "Comments": "Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.",
          "Flowlly": ""
      },
      {
          "ID": "1064504306528718804_1636460290",
          "Datasource": "Instagram",
          "DocDate": "1441118823.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11950717_1636556923253787_233382749_n.jpg",
          "ProfileID": "forevershahid",
          "ProfileName": "Shahid Kapoor ❤️ Turkish Fans",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/11849378_1454953098146048_656087323_a.jpg",
          "Text": "@shahidkapoor OMG So Sweet 😍😍\nMr Expression 😚 \n#shahidkapoor \n#JhalakReloaded \n#jhalakdikhlajaa \n#indiancinema #bestactor #india #bollywood #handsome #dashing #great #cool #charisma #pyaar #perfection #shandaar #movie #lovely #boy ❤️",
          "Comments": "Shahid expression along with aalia's cuteness to make public crazy",
          "Flowlly": ""
      },
      {
          "ID": "1062699355727999967_1909053339",
          "Datasource": "Instagram",
          "DocDate": "1440903656.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11821340_391983644344081_511513436_n.jpg",
          "ProfileID": "bollywood__rocks",
          "ProfileName": "",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/1516222_885246851558536_468657096_a.jpg",
          "Text": "#shandaar @shahidkapoor #aliabhatt",
          "Comments": "Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.",
          "Flowlly": ""
      },
      {
          "ID": "1064504306528718804_1636460290",
          "Datasource": "Instagram",
          "DocDate": "1441118823.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11950717_1636556923253787_233382749_n.jpg",
          "ProfileID": "forevershahid",
          "ProfileName": "Shahid Kapoor ❤️ Turkish Fans",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/11849378_1454953098146048_656087323_a.jpg",
          "Text": "@shahidkapoor OMG So Sweet 😍😍\nMr Expression 😚 \n#shahidkapoor \n#JhalakReloaded \n#jhalakdikhlajaa \n#indiancinema #bestactor #india #bollywood #handsome #dashing #great #cool #charisma #pyaar #perfection #shandaar #movie #lovely #boy ❤️",
          "Comments": "Shahid expression along with aalia's cuteness to make public crazy",
          "Flowlly": ""
      },
      {
          "ID": "1062699355727999967_1909053339",
          "Datasource": "Instagram",
          "DocDate": "1440903656.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11821340_391983644344081_511513436_n.jpg",
          "ProfileID": "bollywood__rocks",
          "ProfileName": "",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/1516222_885246851558536_468657096_a.jpg",
          "Text": "#shandaar @shahidkapoor #aliabhatt",
          "Comments": "Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.",
          "Flowlly": ""
      },
      {
          "ID": "1064504306528718804_1636460290",
          "Datasource": "Instagram",
          "DocDate": "1441118823.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11950717_1636556923253787_233382749_n.jpg",
          "ProfileID": "forevershahid",
          "ProfileName": "Shahid Kapoor ❤️ Turkish Fans",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/11849378_1454953098146048_656087323_a.jpg",
          "Text": "@shahidkapoor OMG So Sweet 😍😍\nMr Expression 😚 \n#shahidkapoor \n#JhalakReloaded \n#jhalakdikhlajaa \n#indiancinema #bestactor #india #bollywood #handsome #dashing #great #cool #charisma #pyaar #perfection #shandaar #movie #lovely #boy ❤️",
          "Comments": "Shahid expression along with aalia's cuteness to make public crazy",
          "Flowlly": ""
      },
      {
          "ID": "1062699355727999967_1909053339",
          "Datasource": "Instagram",
          "DocDate": "1440903656.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11821340_391983644344081_511513436_n.jpg",
          "ProfileID": "bollywood__rocks",
          "ProfileName": "",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/1516222_885246851558536_468657096_a.jpg",
          "Text": "#shandaar @shahidkapoor #aliabhatt",
          "Comments": "Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.",
          "Flowlly": ""
      },
      {
          "ID": "1064504306528718804_1636460290",
          "Datasource": "Instagram",
          "DocDate": "1441118823.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11950717_1636556923253787_233382749_n.jpg",
          "ProfileID": "forevershahid",
          "ProfileName": "Shahid Kapoor ❤️ Turkish Fans",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/11849378_1454953098146048_656087323_a.jpg",
          "Text": "@shahidkapoor OMG So Sweet 😍😍\nMr Expression 😚 \n#shahidkapoor \n#JhalakReloaded \n#jhalakdikhlajaa \n#indiancinema #bestactor #india #bollywood #handsome #dashing #great #cool #charisma #pyaar #perfection #shandaar #movie #lovely #boy ❤️",
          "Comments": "Shahid expression along with aalia's cuteness to make public crazy",
          "Flowlly": ""
      },
      {
          "ID": "1062699355727999967_1909053339",
          "Datasource": "Instagram",
          "DocDate": "1440903656.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11821340_391983644344081_511513436_n.jpg",
          "ProfileID": "bollywood__rocks",
          "ProfileName": "",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/1516222_885246851558536_468657096_a.jpg",
          "Text": "#shandaar @shahidkapoor #aliabhatt",
          "Comments": "Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.",
          "Flowlly": ""
      },
      {
          "ID": "1064504306528718804_1636460290",
          "Datasource": "Instagram",
          "DocDate": "1441118823.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11950717_1636556923253787_233382749_n.jpg",
          "ProfileID": "forevershahid",
          "ProfileName": "Shahid Kapoor ❤️ Turkish Fans",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/11849378_1454953098146048_656087323_a.jpg",
          "Text": "@shahidkapoor OMG So Sweet 😍😍\nMr Expression 😚 \n#shahidkapoor \n#JhalakReloaded \n#jhalakdikhlajaa \n#indiancinema #bestactor #india #bollywood #handsome #dashing #great #cool #charisma #pyaar #perfection #shandaar #movie #lovely #boy ❤️",
          "Comments": "Shahid expression along with aalia's cuteness to make public crazy",
          "Flowlly": ""
      },
             {
                 "ID": "634978871973048320",
                 "Datasource": "Twitter",
                 "DocDate": "Sat Aug 22 06:42:15 +0000 2015",
                 "VideoUrl": "https://youtu.be/30fU76o1BuI",
                 "VideoSource": "Youtube",
                 "VideoID": "30fU76o1BuI",
                 "PhotoUrl": null,
                 "ProfileID": "@anuj_vyas",
                 "ProfileName": "@Anuj Vyas",
                 "ProfilePhotoUrl": "http://pbs.twimg.com/profile_images/378800000122305549/819ca8363e920c36215f847ae72a914c_normal.jpeg",
                 "Text": "#shandaar #zabardast #zindabaad #fame @Nawazuddin_S  https://t.co/nf28NznL2U",
                 "Comments": "now lets see the trailer of shaandar to see if the chemistry really clicks.",
                 "Flowlly": ""
             },
      {
          "ID": "1062699355727999967_1909053339",
          "Datasource": "Instagram",
          "DocDate": "1440903656.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11821340_391983644344081_511513436_n.jpg",
          "ProfileID": "bollywood__rocks",
          "ProfileName": "",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/1516222_885246851558536_468657096_a.jpg",
          "Text": "#shandaar @shahidkapoor #aliabhatt",
          "Comments": "Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.",
          "Flowlly": ""
      },
      {
          "ID": "1064504306528718804_1636460290",
          "Datasource": "Instagram",
          "DocDate": "1441118823.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11950717_1636556923253787_233382749_n.jpg",
          "ProfileID": "forevershahid",
          "ProfileName": "Shahid Kapoor ❤️ Turkish Fans",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/11849378_1454953098146048_656087323_a.jpg",
          "Text": "@shahidkapoor OMG So Sweet 😍😍\nMr Expression 😚 \n#shahidkapoor \n#JhalakReloaded \n#jhalakdikhlajaa \n#indiancinema #bestactor #india #bollywood #handsome #dashing #great #cool #charisma #pyaar #perfection #shandaar #movie #lovely #boy ❤️",
          "Comments": "Shahid expression along with aalia's cuteness to make public crazy",
          "Flowlly": ""
      },
      {
          "ID": "1062699355727999967_1909053339",
          "Datasource": "Instagram",
          "DocDate": "1440903656.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11821340_391983644344081_511513436_n.jpg",
          "ProfileID": "bollywood__rocks",
          "ProfileName": "",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/1516222_885246851558536_468657096_a.jpg",
          "Text": "#shandaar @shahidkapoor #aliabhatt",
          "Comments": "Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.",
          "Flowlly": ""
      },
      {
          "ID": "1064504306528718804_1636460290",
          "Datasource": "Instagram",
          "DocDate": "1441118823.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11950717_1636556923253787_233382749_n.jpg",
          "ProfileID": "forevershahid",
          "ProfileName": "Shahid Kapoor ❤️ Turkish Fans",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/11849378_1454953098146048_656087323_a.jpg",
          "Text": "@shahidkapoor OMG So Sweet 😍😍\nMr Expression 😚 \n#shahidkapoor \n#JhalakReloaded \n#jhalakdikhlajaa \n#indiancinema #bestactor #india #bollywood #handsome #dashing #great #cool #charisma #pyaar #perfection #shandaar #movie #lovely #boy ❤️",
          "Comments": "Shahid expression along with aalia's cuteness to make public crazy",
          "Flowlly": ""
      },
      {
          "ID": "1062699355727999967_1909053339",
          "Datasource": "Instagram",
          "DocDate": "1440903656.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11821340_391983644344081_511513436_n.jpg",
          "ProfileID": "bollywood__rocks",
          "ProfileName": "",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/1516222_885246851558536_468657096_a.jpg",
          "Text": "#shandaar @shahidkapoor #aliabhatt",
          "Comments": "Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.",
          "Flowlly": ""
      },
      {
          "ID": "1064504306528718804_1636460290",
          "Datasource": "Instagram",
          "DocDate": "1441118823.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11950717_1636556923253787_233382749_n.jpg",
          "ProfileID": "forevershahid",
          "ProfileName": "Shahid Kapoor ❤️ Turkish Fans",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/11849378_1454953098146048_656087323_a.jpg",
          "Text": "@shahidkapoor OMG So Sweet 😍😍\nMr Expression 😚 \n#shahidkapoor \n#JhalakReloaded \n#jhalakdikhlajaa \n#indiancinema #bestactor #india #bollywood #handsome #dashing #great #cool #charisma #pyaar #perfection #shandaar #movie #lovely #boy ❤️",
          "Comments": "Shahid expression along with aalia's cuteness to make public crazy",
          "Flowlly": ""
      },
      {
          "ID": "1062699355727999967_1909053339",
          "Datasource": "Instagram",
          "DocDate": "1440903656.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xfa1/t51.2885-15/s640x640/sh0.08/e35/11821340_391983644344081_511513436_n.jpg",
          "ProfileID": "bollywood__rocks",
          "ProfileName": "",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/1516222_885246851558536_468657096_a.jpg",
          "Text": "#shandaar @shahidkapoor #aliabhatt",
          "Comments": "Shahid and aalia at promotional event of Shaandar. 1000s of fans crowded the venue to the duo.",
          "Flowlly": ""
      },
      {
          "ID": "1064504306528718804_1636460290",
          "Datasource": "Instagram",
          "DocDate": "1441118823.0",
          "VideoUrl": null,
          "VideoSource": null,
          "VideoID": null,
          "PhotoUrl": "https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s640x640/sh0.08/e35/11950717_1636556923253787_233382749_n.jpg",
          "ProfileID": "forevershahid",
          "ProfileName": "Shahid Kapoor ❤️ Turkish Fans",
          "ProfilePhotoUrl": "http://photos-a.ak.instagram.com/hphotos-ak-xfa1/t51.2885-19/s150x150/11849378_1454953098146048_656087323_a.jpg",
          "Text": "@shahidkapoor OMG So Sweet 😍😍\nMr Expression 😚 \n#shahidkapoor \n#JhalakReloaded \n#jhalakdikhlajaa \n#indiancinema #bestactor #india #bollywood #handsome #dashing #great #cool #charisma #pyaar #perfection #shandaar #movie #lovely #boy ❤️",
          "Comments": "Shahid expression along with aalia's cuteness to make public crazy",
          "Flowlly": ""
      }
    ]
};
var Bubbly = new BubblyCard();
var containerStory = document.getElementById('story') ;
var paraStory ={
    "campaignId" : "bolly_data3618",
    "cardType" : "story",
    "returnUrl" : "http://bharatmovies.social",
    "styles" : { 'classnameStyle':'col s12 m7 l7'},
    "clientId" : "100" ,
    "limit" :"50"
};
Bubbly.showCard(paraStory,data,containerStory);
