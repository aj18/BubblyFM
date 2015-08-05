var React = require("react");

var FooterPanel = React.createClass({
    render : function() {
        
        return (<div className="panel-footer" >{this.props.footerData}</div>);
    }
});

module.exports = FooterPanel;