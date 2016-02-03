var React = require('react');
var StorySliderLB = require("../../flowly/StorySliderLB.js");

var popupS = require('popups');

var CardPanelStory = React.createClass({
    getInitialState: function () {
        return {
            hover: false,
            hover1: false,
            hover2: false
        };
    },
    onMouseEnterHandler: function () {
        this.setState({
            hover: true,
        });
        console.log('enter');
    },
    onMouseLeaveHandler: function () {
        this.setState({
            hover: false
        });
        console.log('leave');
    },
    onMouseEnterfb: function () {
        this.setState({
            hover1: true,
            hover: true
        });
        console.log('enter');
        //$("#fbimage").attr('src','images/fb_blue.png');
    },
    onMouseLeavefb: function () {
        this.setState({
            hover1: false
        });
        console.log('leave');
        //$("#fbimage").attr('src','images/fb_black.png');
    },
    onMouseEntertw: function () {
        this.setState({
            hover2: true,
            hover: true
        });
        console.log('enter');
        //$("#twimage").attr('src','images/tw_blue.png');
    },
    onMouseLeavetw: function () {
        this.setState({
            hover2: false
        });
        console.log('leave');
        //$("#twimage").attr('src','images/tw_black.png');
    },

    fbShare: function () {
        debugger;
        var winTop = (screen.height / 2) - (380 / 2);
        var winLeft = (screen.width / 2) - (520 / 2);
        var url = this.props.returnurl +"?id="+ this.props.id +"&storyid="+ this.props.storyid;
        var url1 = 'http://www.facebook.com/sharer.php?s=100&p[title]=Fb Share&p[summary]=Facebook share popup&p[url]=' + encodeURIComponent(url);
        window.open(url1, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=548,height=325');

    },
    onClicktw: function () {
        var winTop = (screen.height / 2) - (380 / 2);
        var winLeft = (screen.width / 2) - (520 / 2);
        var url = this.props.returnurl +"?id="+ this.props.id +"&storyid="+ this.props.storyid;
        window.open("http://twitter.com/share?url=" +
encodeURIComponent(url) + "&count=none/",
"tweet", 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=548,height=325')

    },  
	openModal: function() {
        console.log(this.props.data);
        console.log("id " + this.props.id);
        console.log("returnurl " + this.props.returnurl);
        
        popupS.modal({
            content: '<div id="cardpanelstorylb"></div>'
                
        });

        React.render(<StorySliderLB id={this.props.id} storyid = { this.props.data.storyId} data={this.props.data.Data} title={this.props.data.Title} discription={this.props.data.Description} PictureUrl={this.props.data.PictureUrl}  returnurl={this.props.returnurl} styles={this.props.styles}/>
                ,document.getElementById('cardpanelstorylb'));
    },
	render(){
		 console.log("storycardpanel " + JSON.stringify(this.props.data));
		 var url = this.props.returnurl +"?id="+ this.props.id +"&storyid="+ this.props.storyid ;
		 var s2 = {'position': 'absolute', 'list-style-type': 'none', 'margin': '0', 'padding-right': '20px', 'float': 'right', 'overflow': 'hidden', 'display': 'none', 'z-index': '9999 !important' };
		 if (this.state.hover)
		     s2 = {'position': 'absolute', 'list-style-type': 'none', 'margin': '0', 'padding-right': '20px', 'float': 'right', 'overflow': 'hidden','z-index': '9999  !important'};

		 if(this.props.storyLB === true  || this.props.storyLB === "True") {

		 	return(
				<div>
                <ul id="icon" style={s2} >
                    <li style={{'float':'left'}}><img onClick={this.fbShare.bind(this)} onMouseEnter={this.onMouseEnterfb} onMouseLeave={this.onMouseLeavefb} style={{'width':'30px','border-radius': '50%'}} src={this.state.hover1 ? "../Scripts/images/fb_blue.png" : "../Scripts/images/fb_black.png" } /></li>
                    <li style={{'float':'left'}}><img onClick={this.onClicktw.bind(this)} onMouseEnter={this.onMouseEntertw} onMouseLeave={this.onMouseLeavetw} style={{'width': '30px','border-radius': '50%'}} src={this.state.hover2 ? "../Scripts/images/tw_blue.png": "../Scripts/images/tw_black.png" } /></li>
                </ul>
		        <div className="card-panel" style={this.props.styles.cardStyle} onClick={this.openModal} onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
		        	
			          <span style={this.props.styles.cardTitleStyle}>{this.props.data.Title}</span>
			          <span className="card-content white-text" style={this.props.styles.cardDiscriptionStyle}>
				              <p>{this.props.data.Description}</p>
		           	  </span>
	           	 
		        </div>
			</div>    
			   
			);


		 } else {

			return(
				
			   <div>
                <ul id="icon" style={s2} >
                           <li style={{'float':'left'}}><img onClick={this.fbShare.bind(this)} onMouseEnter={this.onMouseEnterfb} onMouseLeave={this.onMouseLeavefb} style={{'width':'30px','border-radius': '50%'}} src={this.state.hover1 ? "../Scripts/images/fb_blue.png" : "../Scripts/images/fb_black.png" } /></li>
                           <li style={{'float':'left'}}><img onClick={this.onClicktw.bind(this)} onMouseEnter={this.onMouseEntertw} onMouseLeave={this.onMouseLeavetw} style={{'width': '30px','border-radius': '50%'}} src={this.state.hover2 ? "../Scripts/images/tw_blue.png": "../Scripts/images/tw_black.png" } /></li>
                        </ul>
	        	<a  href={url} onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler}>
		        <div className="card-panel" style={this.props.styles.cardStyle}>
			          <span style={this.props.styles.cardTitleStyle}>{this.props.data.Title}</span>
			          <span className="card-content white-text" style={this.props.styles.cardDiscriptionStyle}>
				              <p>{this.props.data.Description}</p>
		           	  </span>
	           	 
		        </div>
			   	</a>
            </div>
			);
		}
	}

});


module.exports  = CardPanelStory;