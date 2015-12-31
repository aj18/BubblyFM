var React = require("react");

var Share = React.createClass({
    componentDidMount: function () {

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https'; if (!d.getElementById(id)) { js = d.createElement(s); js.id = id; js.src = p + '://platform.twitter.com/widgets.js'; fjs.parentNode.insertBefore(js, fjs); }
        }(document, 'script', 'twitter-wjs'));

           
    },
    render : function() {
        var s1 = { 'display': 'block', 'color': 'white', 'text-align': 'center', 'padding': '14px 10px', 'text-decoration': 'none','font-size':'30px' };
        var s2 = {'list-style-type': 'none','margin':'0','padding-right':'20px','float':'right','overflow':'hidden'};
        return ( <ul style={s2}>
                <li id="id" style={{'float':'left'}}><div className="fb-share-button" data-href={this.props.Shareurl} data-layout="button"></div></li>
                <li id="id1" style={{'float':'left','margin-top':'2px'}}><a href="https://twitter.com/share" data-href={this.props.Shareurl} className="twitter-share-button" >Tweet</a></li>
            </ul>);

}

});

module.exports = Share;