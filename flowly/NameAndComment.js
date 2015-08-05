var React = require("react");



var NameAndComment = React.createClass({
    render : function() {
    	
      

        return (<div  style={this.props.styles.base}>
                    <p style={this.props.styles.descriptionStyle}>{this.props.description}</p>
                    <span className="card-title">
                    <a className="socialTitleColor" href={this.props.returnurl} > {this.props.name} </a>
                   </span>
                </div>
                );
        }
});

module.exports = NameAndComment;