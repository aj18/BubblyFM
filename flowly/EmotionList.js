var React = require('react');

var EmotionList = React.createClass({
    render: function() {
                
        var s2 = { 'margin': '5px','padding':'1px'};
        var s3 = {'position': 'static',marginTop: '5px', marginBottom: '5px' , overflow: 'hidden', fontSize:'10px'};
        var url=this.props.returnurl+ '?id=' + this.props.id + '&type=Emotion&page=1&q=';
        var tagNodes = this.props.data.map(function (item) {
                   
            return (
                    <a href={url+item.key}>
                    <button className="waves-effect waves-light blue lighten-3" type="button" style={s2}>
                        {item.key} <span className="badge" style={s3}>{item.value}</span>
                        </button>
                    </a>
                );
        });
        return (
                     
        <div  >
                         
                  
                {tagNodes}
                  
                        
        </div>
        );
    }
});

module.exports = EmotionList ;