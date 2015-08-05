var React = require("react");

var SingleComment = React.createClass({

    render : function() {
        return (
             <p>
         {this.props.comment}
      </p>);
    }

});

module.exports = SingleComment;