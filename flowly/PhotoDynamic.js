var React = require("react");
var Share = require('./ShareIcon.js');

var PhotoDynamic = React.createClass({
    getInitialState: function () {
        return {
            hover: false
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
    render : function() {
        console.log("pic prop " + this.props.pictureStyle);
        
        var imageContainerStyle = {width: '100%', height: '400', overflow: 'hidden' };
        
        var imgStyle = { width: '100%' };
        var s4={opacity: '1',float: 'left',height:this.props.pictureStyle.height,overflow: 'hidden',width:'100%', display: 'block', 'background-image': 'url('+this.props.url+')', 'background-size': 'cover','background-position':'25% 0%', 'background-repeat': 'no-repeat' };
    
        return (<div style={s4} onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler} >    
                <Share show={this.state.hover} Shareurl={this.props.share}/>
            </div>);

}

});





module.exports = PhotoDynamic;