var React = require("react");

var Tags = React.createClass({


    render : function() {
        var styles = {
                s1 : { marginRight: '5px' , fontSize: '10px'},
                s2 : { marginTop: '5px', marginBottom: '5px' , overflow: 'hidden', fontSize:'8px'},
                s3 : { padding:'5px 5px'}
        }
        var tag1,tag2,tag3;
         if(this.props.tags){
            if(this.props.tags[0]){
                tag1=this.props.tags[0].key;
            }
            if(this.props.tags[1]){
                tag2=this.props.tags[1].key;
            }
            if(this.props.tags[2]){
                tag3=this.props.tags[2].key;
            }
        }

        return (


            <table className="table table-hover socialtd">
            <tbody>
                <tr>
                   <td style= {styles.s3 } ><a style= {styles.s1 } href="#">#{tag1}</a></td>
                   <td style= {styles.s3 }><a style= {styles.s1 } href="#">#{tag2}</a></td>
                   <td style= {styles.s3 }><a style= {styles.s1 } href="#">#{tag3}</a></td>
                   
                </tr>
                
            </tbody>
            </table>

         
            
        );

    }


});

module.exports = Tags;

/*
<div style={styles.s1}>
                <span className='card-title'>
             <a href="#"  style={styles.s1}>#{this.props.tags[0].key}</a> 
                </span>
                <span className='card-title'>
             <a href="#"  style={styles.s1}>#{this.props.tags[1].key}</a> 
              </span>
                <span className='card-title'>
             <a href="#"  style={styles.s1}>#{this.props.tags[2].key}</a>
                </span>
      </div>
 */