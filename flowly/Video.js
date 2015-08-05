var React = require("react");


var Video = React.createClass({

    render : function() {

        var imgStyle = { width: '100%',height:'200px' };
        return (
                        
        <div className="bs-example"  data-example-id="responsive-embed-16by9-iframe-youtube">
        <div className="embed-responsive embed-responsive-16by9" >
            <iframe className="embed-responsive-item" src={"http://www.youtube.com/embed/"+this.props.id + "?rel=0"} allowfullscreen style={imgStyle} ></iframe>
        </div>
        </div>
                   
        ) ;


    }

});



module.exports = Video;