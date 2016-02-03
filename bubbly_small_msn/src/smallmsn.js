var Radium = require('radium');
var React = require("react");
var NameAndComment = require('../../flowly/NameAndComment.js')
var PhotoSmall = require('../../flowly/PhotoSmall.js')


var SmallMSN = React.createClass({
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
        var url = this.props.returnurl +"?id="+ this.props.id;
        var url1 = 'http://www.facebook.com/sharer.php?s=100&p[title]=Fb Share&p[summary]=Facebook share popup&p[url]=' + encodeURIComponent(url);
        window.open(url1, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=548,height=325');

    },
    onClicktw: function () {
        var winTop = (screen.height / 2) - (380 / 2);
        var winLeft = (screen.width / 2) - (520 / 2);
        var url = this.props.returnurl +"?id="+ this.props.id;
        window.open("http://twitter.com/share?url=" +
encodeURIComponent(url) + "&count=none/",
"tweet", 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=548,height=325')

    },  
    render() {
		 var s2 = {'position': 'absolute', 'list-style-type': 'none', 'margin': '0', 'padding-right': '20px', 'float': 'right', 'overflow': 'hidden', 'display': 'none', 'z-index': '9999 !important' };
    if (this.state.hover)
        s2 = {'position': 'absolute', 'list-style-type': 'none', 'margin': '0', 'padding-right': '20px', 'float': 'right', 'overflow': 'hidden','z-index': '9999  !important'};
    var url = this.props.returnurl +"?id="+ this.props.id ;
        return (
			<div className="small_card_main" style={this.props.styles.mainBoxStyle} onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
                <div className="col s5 m5 l5">
                  <div className="small_card">
                   <ul id="icon" style={s2} >
                        <li style={{'float':'left'}}><img onClick={this.fbShare.bind(this)} onMouseEnter={this.onMouseEnterfb} onMouseLeave={this.onMouseLeavefb} style={{'width':'30px','border-radius': '50%'}} src={this.state.hover1 ? "../Scripts/images/fb_blue.png" : "../Scripts/images/fb_black.png" } /></li>
                        <li style={{'float':'left'}}><img onClick={this.onClicktw.bind(this)} onMouseEnter={this.onMouseEntertw} onMouseLeave={this.onMouseLeavetw} style={{'width': '30px','border-radius': '50%'}} src={this.state.hover2 ? "../Scripts/images/tw_blue.png": "../Scripts/images/tw_black.png" } /></li>
                    </ul>
                    <a href={url} style={{'margin':'0px'}} >
                    <PhotoSmall  url= {this.props.data.PictureUrl} />
                   </a>
                  </div>
                </div>
                <div className="col s7 m7 l7 left_pad_rmv">
                  <div className="small_card_detail" style={this.props.styles.smallBoxStyle}>
                    <p><a  href={url} style={this.props.styles.cardTitleAnchoStyle} >{this.props.data.Title}</a></p>
                  </div>
                </div>
              </div>
		);
}
	
})

module.exports=SmallMSN;