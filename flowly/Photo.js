var React = require("react");
var Share = require('./ShareIcon.js');

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
    deleteTask: function(e) {
        var taskIndex = parseInt(e.target.value, 10);
        console.log('remove task: %d', taskIndex, this.state.items[taskIndex]);
        this.setState(state => {
            state.items.splice(taskIndex, 1);
            return {items: state.items};
        });
    },
    render : function() {
        var thumbnailStyle = { width: '100%' };
        var imageContainerStyle = {width: '100%', height: '250px', overflow: 'hidden' };
        var imgStyle = { width: '100%' };
        var s4={opacity: '1',float: 'left',height:'250px',overflow: 'hidden',width:'100%', display: 'block', 
        backgroundImage: 'url('+this.props.url+')', backgroundSize: 'cover',backgroundPosition:'25% 0%', backgroundRepeat: 'no-repeat' };
    
        return (<div style={s4} onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
                {this.state.hover ? <Share Shareurl={this.props.share}/> : this.props.deleteTask }
            </div>);

}

});

module.exports = Photo;