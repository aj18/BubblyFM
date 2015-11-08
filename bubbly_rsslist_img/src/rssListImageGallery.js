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
        var url=this.props.returnurl+ '?id=' + this.props.id;
		var styles = {
       	 		 
                 s2 : {maxWidth: '100%',height: '100%'}
       	 	 
    	}

        //console.log("rss : "+ JSON.stringify(this.props.data));
        console.log('length '+this.props.data.Photos.length);
        var reminder = this.props.data.Photos.length%4;
        var k = 0;
        var j = 0;
        console.log(this.props.data.Photos.length%4);
        var indents = [];
        for(var i = 0 ; i < this.props.data.Photos.length-1 ; i=i+6) {
                                                  
                k = k + 1;
                console.log(k);

                if(k == this.props.data.Photos.length-1)
                    break;

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
                                <a href={url}>
                                    <PhotoFull className="responsive-img" url= {this.props.data.Photos[i].Url} />
                                </a>

                            </div>  
                            
                        </li>);

                }

               

                k = k + 2;
                console.log(k);

                if(k == this.props.data.Photos.length-1)
                    break;

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
                                <a href={url}>
                                            <PhotoFull className="responsive-img" url= {this.props.data.Photos[i+1].Url} />
                                 </a>            
                            </div>
                            <div className="social-right">
                                <a href={url}>
                                            <PhotoFull className="responsive-img" url= {this.props.data.Photos[i+2].Url} />
                                 </a>           
                            </div>  
                            
                            
                    </li> );   
                }

                k = k + 3;
                console.log(k);

                if(k == this.props.data.Photos.length-1)
                    break;
                
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
                                <a href={url}>
                                    <PhotoFull className="responsive-img" url= {this.props.data.Photos[i+3].Url} />
                                </a>       
                            </div>
                            <div className="social-left-1-right-2">
                                <div className="social-right-top">
                                    <a href={url}>
                                        <PhotoFull className="responsive-img" url= {this.props.data.Photos[i+4].Url} />
                                    </a> 
                                </div>
                                <div className="social-right-bottom" style={{'height':'240px !important'}}>
                                    <a href={url}>
                                        <PhotoFull className="responsive-img" url= {this.props.data.Photos[i+5].Url} />
                                    </a>
                                </div>
                            </div>      
                        </li>);
                }

               

                /*if (typeof this.props.data.Photos[i+6] == 'undefined' || typeof this.props.data.Photos[i+7] == 'undefined' || typeof this.props.data.Photos[i+8] == 'undefined' ) {

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
                                    <a href={url}>
                                   
                                   <PhotoFull className="responsive-img" url= {this.props.data.Photos[i+6].Url} />
                                    </a>
                                </div>  
                                <div className="social-left-center-rigth-1">
                                    <a href={url}>
                                        <PhotoFull className="responsive-img" url= {this.props.data.Photos[i+7].Url} />
                                    </a>             
                                </div> 
                                <div className="social-left-center-rigth-1">
                                    <a href={url}>
                                      <PhotoFull className="responsive-img" url= {this.props.data.Photos[i+8].Url} />
                                    </a>
                                </div>   
                            </div>
                    </li> ); 
                }*/
               
               
        }

        /*this.props.data.map(function (currentvalue,item,i=i+4) {
           console.log(  i + " " + currentvalue );
        });*/
        return (  
                   
                           <div className="card-panel" style={this.props.styles.cardStyle}>
                               <div className="slider" style={this.props.styles.sliderStyle}>
                                    <ul className="slides" style={this.props.styles.slidesStyle}>
                                     
                                      {indents}
                                         
                                    </ul>
                              </div>
                              <span className="card-title social-main-title" style={this.props.styles.cardTitleStyle} ><a href={url} style={{'color':'#ffffff'}}>{this.props.data.Name}</a></span>
                              <br></br>
                              <span className="card-title social-sub-title" style={this.props.styles.cardSubTitleStyle} ><a href={url} style={{'color':'#ffffff'}}>{this.props.data.Description}</a></span>
                              
                          </div>
                     
                    
            );
   
 	}

});


module.exports=ImageGallery;

/* <div className="card-panel" style={this.props.styles.cardStyle}>
                               <div className="slider" style={{'height':'475px !important'}}>
                                    <ul className="slides" style={{'height':'475px !important'}}>
                                     
                                      {indents}
                                         
                                    </ul>
                              </div>
                              <span className="card-title social-main-title" style={{'z-index':'10 !important'}} ><a href={url} >{this.props.data.Name}</a></span>
                              <br></br>
                              <span className="card-title social-sub-title" style={{'z-index':'10 !important'}} ><a href={url} >{this.props.data.Description}</a></span>
                              
                          </div>*/



//http://s24x7.azurewebsites.net/api/summary/min?id=bolly_data235