        var styles = {

            s2:{ 'height': '60px', overflow: 'hidden','margin-top': '125px'},
            s3:{'box-shadow': '0px 3px 10px 0px rgba(50, 50, 50, 0.5)'},
            s4:{'margin-top': '10px'},
            s6:{
             opacity: '1',
             float: 'left',
             height:'300px',
             overflow: 'hidden',
             width:'100%',
             display: 'block', 'background-image': 'url('+this.state.heroimg+')',
            'background-size': 'cover','background-position':'25% 0%',
            'background-repeat': 'no-repeat' 
            }      
        }
        
        return (
             
           <div >
              <div className="row">
                <div className="col-sm-12 hero-img" style={styles.s6}>
                  
                </div>
              </div>
              <div className="row">
                  <div  className="DocumentList" style={styles.s4}>     
                    <ul className="list-inline">
                       {this.props.data.map(function(item, i) {
                           
                           return (
                           
                              <li onClick={this.handleClick.bind(this, item.Url)} key={i}>
                                <div  style={styles.s6} >
                                
                                </div>
                         
                       
                              </li>
                            );
                        }, this)}
                    </ul>
                  </div>    
              </div>          
           </div>
    );