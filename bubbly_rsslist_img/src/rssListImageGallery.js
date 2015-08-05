var Radium = require('radium');
var React = require("react");
var jQuery = require('jquery');
var PhotoFull = require('../../flowly/PhotoFull.js');
 



var ImageGallery = React.createClass({

    componentDidMount: function(){

       $(document).ready(function(){
          $('.slider').slider({
            full_width: false,
            interval:10000,
            transition:400,
            
          });
        });

   //    $('.slider').slider('pause');
    
    

    },
	render: function() {
		var styles = {
       	 		 
                 s2 : {maxWidth: '100%',height: '100%'}
       	 	 
    	}
        //console.log("rss : "+ JSON.stringify(this.props.data));
        console.log(this.props.data.Photos.length);
        var reminder = this.props.data.Photos.length%4;
        var k = 0;
        var j = 0;
        console.log(this.props.data.Photos.length%4);
        var indents = [];
        for(var i = 0 ; i < this.props.data.Photos.length-1 ; i=i+9) {
                                                  
            
                if (typeof this.props.data.Photos[i] == 'undefined' ) {

                    indents.push( <li>
                            
                            <div className="social-leftright-1">
                                                
                            </div>  
                            
                        </li>);
                }
                else{
                console.log("ITEM 1 " + i   + " " + JSON.stringify(this.props.data.Photos[i]));  
                     indents.push( <li>
                            
                            <div className="social-leftright-1">
                                    <PhotoFull className="responsive-img" url= {this.props.data.Photos[i].Url} />
                                                 
                            </div>  
                            
                        </li>);

                }

                if (typeof this.props.data.Photos[i+1] == 'undefined' ||  typeof this.props.data.Photos[i+2] == 'undefined') {
                    indents.push(<li>
                        <div className="social-left"></div>
                        <div className="social-right"></div>
                        </li>);
                }

                else{
                  console.log("ITEM 2  " +  ( i + 1 ) + " " + JSON.stringify(this.props.data.Photos[i+1].Url)); 
                    indents.push(
                    <li>

                            <div className="social-left">
                                            <PhotoFull className="responsive-img" url= {this.props.data.Photos[i+1].Url} />
                                            
                            </div>
                            <div className="social-right">
                                            <PhotoFull className="responsive-img" url= {this.props.data.Photos[i+2].Url} />
                                           
                            </div>  
                            
                            
                    </li> );   
                }
                
                if (typeof this.props.data.Photos[i+3] == 'undefined' || typeof this.props.data.Photos[i+4] == 'undefined' || typeof this.props.data.Photos[i+5] == 'undefined' ) {
                        indents.push(<li><div className="social-left"></div>
                                        <div className="social-left-1-right-2">
                                            <div className="social-right-top"></div>
                                            <div className="social-right-bottom"></div>
                                        </div></li>);
                }

                else{
                    console.log("ITEM 3 " + ( i + 3 )   + " " + JSON.stringify(this.props.data.Photos[i+3].Url));  
                   indents.push( 
                        <li>
                            <div className="social-left">
                                    <PhotoFull className="responsive-img" url= {this.props.data.Photos[i+3].Url} />
                                        
                            </div>
                            <div className="social-left-1-right-2">
                                <div className="social-right-top">
                                    <PhotoFull className="responsive-img" url= {this.props.data.Photos[i+4].Url} />
                                    
                                </div>
                                <div className="social-right-bottom" style={{'height':'240px !important'}}>
                                   <PhotoFull className="responsive-img" url= {this.props.data.Photos[i+5].Url} />
                                
                                </div>
                            </div>      
                        </li>);
                }

                if (typeof this.props.data.Photos[i+6] == 'undefined' || typeof this.props.data.Photos[i+7] == 'undefined' || typeof this.props.data.Photos[i+8] == 'undefined' ) {

                         indents.push(<li><div className="social-left-center-rigth">
                                               <div className="social-left-center-rigth-1"></div>
                                               <div className="social-left-center-rigth-1"></div>
                                               <div className="social-left-center-rigth-1"></div>
                                       </div></li>);
                }
                else{
                    console.log("ITEM  4 " + (i  + 8 )  + " " + JSON.stringify(this.props.data.Photos[i+8].Url));  
                
                    indents.push(
                    <li>
                            <div className="social-left-center-rigth">
                                <div className="social-left-center-rigth-1">
                                   
                                   <PhotoFull className="responsive-img" url= {this.props.data.Photos[i+6].Url} />
                                   
                                </div>  
                                <div className="social-left-center-rigth-1">
                                    <PhotoFull className="responsive-img" url= {this.props.data.Photos[i+7].Url} />
                                                 
                                </div> 
                                <div className="social-left-center-rigth-1">
                                    <PhotoFull className="responsive-img" url= {this.props.data.Photos[i+8].Url} />

                                </div>   
                            </div>
                    </li> ); 
                }
               
               
        }

        /*this.props.data.map(function (currentvalue,item,i=i+4) {
           console.log(  i + " " + currentvalue );
        });*/
        return (  
 

            
                
               
                       <div className="card">
                       <div className="slider" style={{'height':'475px !important'}}>
                        <ul className="slides" style={{'height':'475px !important'}}>
                          
                          {indents}
                         
                          
                        </ul>
                      </div>
                      </div>
                    
                
            );
   
 	}

});


module.exports=ImageGallery;



//http://s24x7.azurewebsites.net/api/summary/min?id=bolly_data235