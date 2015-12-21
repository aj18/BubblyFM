var React = require("react");
var Share = require('../flowly/ShareIcon.js');

var Photo = React.createClass({
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
        var thumbnailStyle = { width: '100%' };
        var imageContainerStyle = {width: '100%', height: '250px', overflow: 'hidden' };
        var imgStyle = { width: '100%' };
        var s4={opacity: '1',float: 'left',height:'250px',overflow: 'hidden',width:'100%', display: 'block', 
        backgroundImage: 'url('+this.props.url+')', backgroundSize: 'cover',backgroundPosition:'25% 0%', backgroundRepeat: 'no-repeat' };
    
        return (<div style={s4} onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
                <Share show={this.state.hover} Shareurl={this.props.share}/>
            </div>);

}

});

module.exports = Photo;