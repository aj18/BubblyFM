var Radium = require('radium');
var React = require("react");
var NameAndComment = require('./NameAndComment.js');
var PhotoDynamic = require('./PhotoDynamic.js');

var LargePicture = React.createClass({

    render: function() {
        console.log("LargePicture :" + this.props.returnurl);
        return (
                <div className="card-panel" style={this.props.styles.panelStyle}>
                    <a href={this.props.returnurl} style={this.props.styles.cardTitleAnchoStyle}>
                        <div className="card-image">
                             <PhotoDynamic share={this.props.data.Photo} url={this.props.data.Photo} pictureStyle={this.props.styles.pictureStyle} />
                        </div>

                        <span className="card-title social-main-title" style={this.props.styles.titleStyle}>{this.props.data.Description}</span>
                        <br></br>

                        <span className="card-title social-sub-title" style={this.props.styles.subTitleStyle}>
                            {this.props.data.Name}
                        </span>
                    </a>

                </div>

            );

}

});
//module.exports = LargePicture;

var data = { "ID": "bolly_data235", "Name": "Shah Rukh With Abram", "Description": "Shah Rukh watches KKR match with AbRam", "Category": "", "ShowDefaultPicture": true, "SearchQuery": "Shah Rukh Khan watches KKR match with AbRam and Dilwale team", "VideosCount": 3415, "PhotosCount": 68311, "PictureUrl": "http://media2.intoday.in/indiatoday/images/stories//2015MAY/shah-rukh-story_650_051715020614.jpg", "Photos": [{ "Url": "http://pbs.twimg.com/media/CETh0Q_WYAAVkWL.jpg", "Description": null, "Count": 0 }], "Videos": [{ "ID": "", "Url": "http://youtu.be/c25GKl5VNeY,RT @SRK_DDLJ_Fan: Dilwale Dulhania Le Jayenge NEW TRAILER. Celebrating 1000 Weeks http://t.co/Jk8Wrz59WC  #DDLJ #SRK @iamsrk @KajolAtUN htt…", "Source": "None", "Count": 0 }], "Photo": "http://media2.intoday.in/indiatoday/images/stories//2015MAY/shah-rukh-story_650_051715020614.jpg", "share": "http://media2.intoday.in/indiatoday/images/stories//2015MAY/shah-rukh-story_650_051715020614.jpg", "Video": "", "Total": 178387, "Stat": { "Type": "ALL", "PosCount": 37516, "NegCount": 2529, "NeuCount": 138342, "PosPercent": 21.0, "NegPercent": 1.0, "NeuPercent": 77.0 }, "SocialStats": [{ "Type": "TW", "PosCount": 37217, "NegCount": 2506, "NeuCount": 137280, "PosPercent": 21.0, "NegPercent": 1.0, "NeuPercent": 77.0 }, { "Type": "FB", "PosCount": 257, "NegCount": 19, "NeuCount": 797, "PosPercent": 25700.0, "NegPercent": 1900.0, "NeuPercent": 79700.0 }, { "Type": "TM", "PosCount": 42, "NegCount": 4, "NeuCount": 265, "PosPercent": 4200.0, "NegPercent": 400.0, "NeuPercent": 26500.0 }], "GenderStats": [{ "Type": "Male", "Count": 108354, "Percent": 61.215911594718733580786766326 }, { "Type": "Female", "Count": 60512, "Percent": 34.186991180940436037807268803 }, { "Type": "Others", "Count": 108354, "Percent": 0.0 }], "Comments": [{ "Source": "Twitter", "Comment": "RT @iamsrk: This kid is so cool. May Allah bless him. Dinner time at the Asian Awards. http://t.co/l0gV12n0kv" }], "Tags": [{ "key": "shahrukhkhan", "value": 6900, "valuestr": null, "label": null }, { "key": "srk", "value": 3688, "valuestr": null, "label": null }, { "key": "bollywood", "value": 947, "valuestr": null, "label": null }, { "key": "salmankhan", "value": 475, "valuestr": null, "label": null }, { "key": "abram", "value": 439, "valuestr": null, "label": null }], "Emotions": [{ "key": "fan", "value": 515, "valuestr": null, "label": null }, { "key": "love", "value": 458, "valuestr": null, "label": null }, { "key": "good", "value": 407, "valuestr": null, "label": null }, { "key": "best", "value": 213, "valuestr": null, "label": null }, { "key": "like", "value": 194, "valuestr": null, "label": null }], "Locations": null, "Trends": [{ "Source": "TW", "Data": "0,41,-1,66,-1,28,78,-3,39,-4,19,47" }, { "Source": "FB", "Data": "0,1" }, { "Source": "TM", "Data": "0,1,2,3,-1,1,1,1,1" }], "Decision": "Medium", "DecisionImage": "/images/medium.png", "ReturnUrl": null, "ContainerID": null };
var data1 = { "ID": "bolly_data235", "Name": "Shah Rukh With Abram", "Description": "Shah Rukh watches KKR match with AbRam", "Category": "", "ShowDefaultPicture": true, "SearchQuery": "Shah Rukh Khan watches KKR match with AbRam and Dilwale team", "VideosCount": 3415, "PhotosCount": 68311, "PictureUrl": "http://media2.intoday.in/indiatoday/images/stories//2015MAY/shah-rukh-story_650_051715020614.jpg", "Photos": [{ "Url": "http://pbs.twimg.com/media/CETh0Q_WYAAVkWL.jpg", "Description": null, "Count": 0 }], "Videos": [{ "ID": "", "Url": "http://youtu.be/c25GKl5VNeY,RT @SRK_DDLJ_Fan: Dilwale Dulhania Le Jayenge NEW TRAILER. Celebrating 1000 Weeks http://t.co/Jk8Wrz59WC  #DDLJ #SRK @iamsrk @KajolAtUN htt…", "Source": "None", "Count": 0 }], "Photo": "http://media2.intoday.in/indiatoday/images/stories//2015MAY/shah-rukh-story_650_051715020614.jpg", "share": "https://www.facebook.com/1564130263840045/posts/1645796969006707", "Video": "", "Total": 178387, "Stat": { "Type": "ALL", "PosCount": 37516, "NegCount": 2529, "NeuCount": 138342, "PosPercent": 21.0, "NegPercent": 1.0, "NeuPercent": 77.0 }, "SocialStats": [{ "Type": "TW", "PosCount": 37217, "NegCount": 2506, "NeuCount": 137280, "PosPercent": 21.0, "NegPercent": 1.0, "NeuPercent": 77.0 }, { "Type": "FB", "PosCount": 257, "NegCount": 19, "NeuCount": 797, "PosPercent": 25700.0, "NegPercent": 1900.0, "NeuPercent": 79700.0 }, { "Type": "TM", "PosCount": 42, "NegCount": 4, "NeuCount": 265, "PosPercent": 4200.0, "NegPercent": 400.0, "NeuPercent": 26500.0 }], "GenderStats": [{ "Type": "Male", "Count": 108354, "Percent": 61.215911594718733580786766326 }, { "Type": "Female", "Count": 60512, "Percent": 34.186991180940436037807268803 }, { "Type": "Others", "Count": 108354, "Percent": 0.0 }], "Comments": [{ "Source": "Twitter", "Comment": "RT @iamsrk: This kid is so cool. May Allah bless him. Dinner time at the Asian Awards. http://t.co/l0gV12n0kv" }], "Tags": [{ "key": "shahrukhkhan", "value": 6900, "valuestr": null, "label": null }, { "key": "srk", "value": 3688, "valuestr": null, "label": null }, { "key": "bollywood", "value": 947, "valuestr": null, "label": null }, { "key": "salmankhan", "value": 475, "valuestr": null, "label": null }, { "key": "abram", "value": 439, "valuestr": null, "label": null }], "Emotions": [{ "key": "fan", "value": 515, "valuestr": null, "label": null }, { "key": "love", "value": 458, "valuestr": null, "label": null }, { "key": "good", "value": 407, "valuestr": null, "label": null }, { "key": "best", "value": 213, "valuestr": null, "label": null }, { "key": "like", "value": 194, "valuestr": null, "label": null }], "Locations": null, "Trends": [{ "Source": "TW", "Data": "0,41,-1,66,-1,28,78,-3,39,-4,19,47" }, { "Source": "FB", "Data": "0,1" }, { "Source": "TM", "Data": "0,1,2,3,-1,1,1,1,1" }], "Decision": "Medium", "DecisionImage": "/images/medium.png", "ReturnUrl": null, "ContainerID": null };
var returnurl = "http://www.cricket24x7.social/news/?id=bolly_data235";
var style1 = {
    panelStyle: { 'padding': '0px', 'height': '500px' },
    titleStyle: {
        'background-color': 'rgba(75, 188, 150, 0.85)',
        'font-size': '16px', 'color': '#fff'
    },
    subTitleStyle: {
        'background-color': 'rgba(255, 255, 255, 0.65)',
        'font-size': '14px', 'color': '#000'
    },
    pictureStyle: { 'height': '500px !important' }
};
React.render(<LargePicture data = { data } styles={style1} returnurl={returnurl} />, document.getElementById("bolly_data235_LargePicture"));
React.render( <LargePicture data = { data1 } styles={style1} returnurl={returnurl} /> , document.getElementById("bolly_data235_LargePicture0"));
//http://s24x7.azurewebsites.net/api/summary/min?id=bolly_data235