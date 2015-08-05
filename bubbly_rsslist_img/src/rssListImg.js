var Radium = require('radium');
var React = require("react");
var jQuery = require('jquery');
var PhotoFull = require('../../flowly/PhotoFull.js');
 



var RSSListImg = React.createClass({

    componentDidMount: function(){

      $(document).ready(function(){
          $('.slider').slider({
            full_width: false,
            interval:5000,
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
        console.log(this.props.data.length);
        var reminder = this.props.data.length%4;
        var k = 0;
        var j = 0;
        console.log(this.props.data.length%4);
        var indents = [];
        for(var i = 0 ; i < this.props.data.length-1 ; i=i+9) {
                                                  
            
                if (typeof this.props.data[i] == 'undefined' ) {

                    indents.push( <li>
                            
                            <div className="social-leftright-1">
                                                
                            </div>  
                            
                        </li>);
                }
                else{
                console.log("ITEM 1 " + i   + " " + JSON.stringify(this.props.data[i]));  
                     indents.push( <li>
                            
                            <div className="social-leftright-1">
                                                <PhotoFull className="responsive-img" url= {this.props.data[i].image.url} />
                                                 <div className="social-text-classs">
                                                         <a href={this.props.data[i].url}>
                                                            <h5 light grey-text text-lighten-3>{this.props.data[i].title}</h5>
                                                         </a>
                                                
                                                        
                                                 </div>
                            </div>  
                            
                        </li>);

                }

                if (typeof this.props.data[i+1] == 'undefined' ||  typeof this.props.data[i+2] == 'undefined') {
                    indents.push(<li>
                        <div className="social-left"></div>
                        <div className="social-right"></div>
                        </li>);
                }

                else{
                  console.log("ITEM 2  " +  ( i + 1 ) + " " + JSON.stringify(this.props.data[i+1])); 
                    indents.push(
                    <li>

                            <div className="social-left">
                                            <PhotoFull className="responsive-img" url= {this.props.data[i+1].image.url} />
                                             <div className="social-left-text-classs">
                                                <a href={this.props.data[i+1].url}><h5 light grey-text text-lighten-3>{this.props.data[i+1].title}</h5>
                                
                                                </a>
                                             </div>
                            </div>
                            <div className="social-right">
                                            <PhotoFull className="responsive-img" url= {this.props.data[i+2].image.url} />
                                            <div className="social-right-text-classs">
                                                <a href={this.props.data[i+2].url}>
                                                <h5 light grey-text text-lighten-3>{this.props.data[i+2].title}</h5>
                                                </a>
                                            </div>
                            </div>  
                            
                            
                    </li> );   
                }
                
                if (typeof this.props.data[i+3] == 'undefined' || typeof this.props.data[i+4] == 'undefined' || typeof this.props.data[i+5] == 'undefined' ) {
                        indents.push(<li><div className="social-left"></div>
                                        <div className="social-left-1-right-2">
                                            <div className="social-right-top"></div>
                                            <div className="social-right-bottom"></div>
                                        </div></li>);
                }
                else{
                    console.log("ITEM 3 " + ( i + 3 )   + " " + JSON.stringify(this.props.data[i+3]));  
                   indents.push( 
                        <li>
                            <div className="social-left">
                                        <PhotoFull className="responsive-img" url= {this.props.data[i+3].image.url} />
                                        <div>
                                            <div className="social-left-text-classs">
                                                 <a href={this.props.data[i+3].url}>
                                                    <h5 light grey-text text-lighten-3>{this.props.data[i+3].title}</h5>
                                                 </a>
                                            </div>
                                        </div>
                            </div>
                            <div className="social-left-1-right-2">
                                <div className="social-right-top">
                                    <PhotoFull className="responsive-img" url= {this.props.data[i+4].image.url} />
                                    <div>
                                        <div className="social-right-top-left-text-classs">
                                             <a href={this.props.data[i+4].url}>
                                                <h5 light grey-text text-lighten-3>{this.props.data[i+4].title}</h5>
                                            </a>

                                         </div>
                                     </div>
                                </div>
                                <div className="social-right-bottom">
                                   <PhotoFull className="responsive-img" url= {this.props.data[i+5].image.url} />
                                     <div>
                                       <div className="social-right-text-classs">
                                                  <a href={this.props.data[i+5].url}>
                                                           <h5 light grey-text text-lighten-3>{this.props.data[i+5].title}</h5>
                                                 </a>
                                        </div>
                                    </div>
                                </div>
                            </div>      
                        </li>);
                }

                if (typeof this.props.data[i+6] == 'undefined' || typeof this.props.data[i+7] == 'undefined' || typeof this.props.data[i+8] == 'undefined' ) {

                         indents.push(<li><div className="social-left-center-rigth">
                                               <div className="social-left-center-rigth-1"></div>
                                               <div className="social-left-center-rigth-1"></div>
                                               <div className="social-left-center-rigth-1"></div>
                                       </div></li>);
                }
                else{
                    console.log("ITEM  4 " + (i  + 6 )  + " " + JSON.stringify(this.props.data[i+6]));  
                
                    indents.push(
                    <li>
                            <div className="social-left-center-rigth">
                                <div className="social-left-center-rigth-1">
                                   <div className="imgbra"></div>
                                   <PhotoFull className="responsive-img" url= {this.props.data[i+6].image.url} />
                                   <div className="social-left-center-right-text-classs">
                                        <a href={this.props.data[i+6].url}>
                                                   <h5 light grey-text text-lighten-3>{this.props.data[i+6].title}</h5>
                                        </a>
                                    </div>
                                </div>  
                                <div className="social-left-center-rigth-1">
                                    <PhotoFull className="responsive-img" url= {this.props.data[i+7].image.url} />
                                     <div className="social-center-left-right-text-classs">
                                            <a href={this.props.data[i+7].url}>
                                                   <h5 light grey-text text-lighten-3>{this.props.data[i+7].title}</h5>
                                            </a>
                                     </div>            
                                </div> 
                                <div className="social-left-center-rigth-1">
                                    <PhotoFull className="responsive-img" url= {this.props.data[i+8].image.url} />
                                    <div className="social-right-left-center-text-classs">
                                        <a href={this.props.data[i+8].url}>
                                               <h5 light grey-text text-lighten-3>{this.props.data[i+8].title}</h5>
                                        </a>

                                    </div>  

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
                       <div id="slider" className="slider" style={{'height':'400px !important'}}>
                        <ul className="slides">
                          
                          {indents}
                         
                          
                        </ul>
                      </div>
                      </div>
                    
                
            );
   
 	}

});


module.exports=RSSListImg;



//http://s24x7.azurewebsites.net/api/summary/min?id=bolly_data235