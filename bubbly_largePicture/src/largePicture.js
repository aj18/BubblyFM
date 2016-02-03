var Radium = require('radium');
var React = require("react");
var NameAndComment = require('../../flowly/NameAndComment.js');
var PhotoDynamic = require('../../flowly/PhotoDynamic.js');

var LargePicture = React.createClass({
    getInitialState: function () {
        return {
            hover: false,
            hover1: false,
            hover2: false
        };
    },
    onMouseEnterHandler: function () {
        this.setState({
            hover: true,
        });
        console.log('enter');
    },
    onMouseLeaveHandler: function () {
        this.setState({
            hover: false
        });
        console.log('leave');
    },
    onMouseEnterfb: function () {
        this.setState({
            hover1: true,
            hover: true
        });
        console.log('enter');
        //$("#fbimage").attr('src','images/fb_blue.png');
    },
    onMouseLeavefb: function () {
        this.setState({
            hover1: false
        });
        console.log('leave');
        //$("#fbimage").attr('src','images/fb_black.png');
    },
    onMouseEntertw: function () {
        this.setState({
            hover2: true,
            hover: true
        });
        console.log('enter');
        //$("#twimage").attr('src','images/tw_blue.png');
    },
    onMouseLeavetw: function () {
        this.setState({
            hover2: false
        });
        console.log('leave');
        //$("#twimage").attr('src','images/tw_black.png');
    },

    fbShare: function () {
        debugger;
        var winTop = (screen.height / 2) - (380 / 2);
        var winLeft = (screen.width / 2) - (520 / 2);
        var url = this.props.returnurl;
        var url1 = 'http://www.facebook.com/sharer.php?s=100&p[title]=Fb Share&p[summary]=Facebook share popup&p[url]=' + url + '&p[images][0]="http://goo.gl/dS52U"';
        window.open(url1, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=548,height=325');

    },
    onClicktw: function () {
        var winTop = (screen.height / 2) - (380 / 2);
        var winLeft = (screen.width / 2) - (520 / 2);
        var url = this.props.returnurl;
        window.open("http://twitter.com/share?url=" +
encodeURIComponent(url) + "&count=none/",
"tweet",'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=548,height=325')

    },
    render: function() {
        console.log("LargePicture :" + this.props.returnurl);
        var s2 = { 'z-index': '9999','position': 'absolute', 'list-style-type': 'none', 'margin': '0', 'padding-right': '20px', 'float': 'right', 'overflow': 'hidden', 'display': 'none' };
        if (this.state.hover)
            s2 = { 'z-index': '9999','position': 'absolute', 'list-style-type': 'none', 'margin': '0', 'padding-right': '20px', 'float': 'right', 'overflow': 'hidden'};

        return (          
                <div className="card-panel" style={this.props.styles.panelStyle}>
                    <ul id="icon" style={s2} >
                       <li style={{'float':'left'}}><img onClick={this.fbShare.bind(this)} onMouseEnter={this.onMouseEnterfb} onMouseLeave={this.onMouseLeavefb} style={{'width':'30px','border-radius': '50%'}} src={this.state.hover1 ? "../Scripts/images/fb_blue.png" : "../Scripts/images/fb_black.png" } /></li>
                       <li style={{'float':'left'}}><img onClick={this.onClicktw.bind(this)} onMouseEnter={this.onMouseEntertw} onMouseLeave={this.onMouseLeavetw} style={{'width': '30px','border-radius': '50%'}} src={this.state.hover2 ? "../Scripts/images/tw_blue.png": "../Scripts/images/tw_black.png" } /></li>
                    </ul>
                    <a  href={this.props.returnurl} style={this.props.styles.cardTitleAnchoStyle} onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
                        <div className="card-image">
                             <PhotoDynamic url= {this.props.data.Photo} pictureStyle={this.props.styles.pictureStyle}/>
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

module.exports = LargePicture;