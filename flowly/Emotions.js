var React = require("react");

var Emotions = React.createClass({

	render : function() {
		var styles = {
				s1 : { margin: '10px'},
        		s2 : { marginTop: '10px', marginBottom: '10px' , overflow: 'hidden'}

		}
        
        return (<div style={styles.s2}>
             <a href="#"  style={styles.s1}>{this.props.emotions[0].key}</a>
             <a href="#"  style={styles.s1}>{this.props.emotions[1].key}</a>
             <a href="#"  style={styles.s1}>{this.props.emotions[2].key}</a>
      </div>);
    }

});

module.exports = Emotions;