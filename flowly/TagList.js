var React = require("react");

var TagList = React.createClass({
    render: function() {
            
        var s2 = { 'margin': '2px','padding':'1px'};
        var s3 = {'position': 'static',marginTop: '5px', marginBottom: '5px' , overflow: 'hidden', fontSize:'10px'};
                
        var url=this.props.returnurl+ '/Comments?id=' + this.props.id + '&type=Hashtag&page=1&q=';
        var tagNodes = this.props.data.map(function (item) {
                    
            return (
                <a href={url+item.key}>
                <button className="waves-effect waves-light btn red lighten-1" type="button" style={s2}>
                    #{item.key} <span className="badge" style={s3}>{item.value}</span>
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

module.exports = TagList;