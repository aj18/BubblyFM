var React = require("react");
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var Grid = require('react-bootstrap').Grid;


var PhotoGallery = React.createClass({
    handleClick: function(imageid) {
        var image =  imageid; 
        this.setState({heroimg: image});
        
    },
    getInitialState: function() {
        
        return {
            heroimg: this.props.data[0].Url
        }
    },
    render: function() {
        var styles = {
            s2:{ height: '60px', overflow: 'hidden', marginTop: '125px'},
            s3:{ boxShadow: '0px 3px 10px 0px rgba(50, 50, 50, 0.5)'},
            s4:{ marginTop: '10px'},
            imageStyle:{
             opacity: '1',
             float: 'left',
             height:'300px',
             overflow: 'hidden',
             width:'100%',
             display: 'block', 
             backgroundImage: 'url('+this.state.heroimg+')',
             backgroundSize: 'cover',
             backgroundPosition:'25% 0%',
             backgroundRepeat: 'no-repeat' 
            },
           
            
        }
        
        return (
             
         <div >
		    <div className='row container'>
		        <div className="col s12 m9 l10 hero-img" style={styles.imageStyle}>
		          
		        </div>
		    </div>
		    <div className='row container' >
		       	<div className='DocumentList' style={styles.s4}>     
		        	<ul className='list-inline'>
			           {this.props.data.map(function(item, i) {

			                var thumStyle = {
			                	thumImage:{
					            	opacity: '1',
					            	float: 'left',
					            	height:'75px',
					            	overflow: 'hidden',
					            	width:'100px',
					            	display: 'block', 
					            	backgroundImage: 'url('+item.url+')',
					            	backgroundSize: 'cover',
					            	backgroundPosition:'25% 0%',
					            	backgroundRepeat: 'no-repeat'
					            }
			                }
			                var s6={opacity: '1',float: 'left',height:'75px',overflow: 'hidden',width:'100px', display: 'block', 'background-image': 'url('+item.Url+')', 'background-size': 'cover','background-position':'25% 0%', 'background-repeat': 'no-repeat' };
			              return (
			               
			                <li onClick={this.handleClick.bind(this, item.Url)} key={i}>
			                    
			                    <div style={s6}></div>
			                   
			                </li>
			              );
						}, this)}
		        	</ul>
		    	</div>    
		      </div>          
  		</div>
    );
}
});

module.exports = PhotoGallery;