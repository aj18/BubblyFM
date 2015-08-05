var React = require("react");

var PhotoSmall = React.createClass({
    render : function() {
       
       	var styles = {

			imgStyle:{
		      width: '35%'
		    },
		    photoStyle: {
		    	opacity: '1',float: 'left',height:'90px',width:'40%', display: 'block',
		    	 backgroundImage: 'url('+this.props.url+')',
		    	 backgroundSize: 'cover',
		    	 backgroundPosition:'50% 0%', 
		    	 backgroundRepeat: 'no-repeat',
		    	 padding:'5px'
		    }
				    
		}
          
        return (
               <div style={styles.photoStyle}>
             
           		</div>
        );

}

});

module.exports = PhotoSmall;
