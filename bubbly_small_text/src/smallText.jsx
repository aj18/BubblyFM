var Radium = require('radium');
var React = require("react");
var NameAndComment = require('../../flowly/NameAndComment.js')
var PhotoSmall = require('../../flowly/PhotoSmall.js')


var SmallText = React.createClass({

	render() {
		
		return (
			<div className="social-card z-depth-3">
			<div className="main-box-social-smallmsn">
			    
		            <div className="side-contain-social-smallmsn">
		                <h4>{this.props.data.Description}</h4>
		                
		                <p><a className="socialTitleColor" href={this.props.returnurl} >{this.props.data.Name}</a></p>
		            </div>
		        <div className="clear"></div>
		  	</div>
		  	</div>
		);
	}
	
})

var cric_data3110_Small_data = {"ID":"cric_data3110","Name":"#NSrinivasan","Description":"Srinivasan re-elected TNCA president","Category":"2524","ShowDefaultPicture":true,"SearchQuery":"Srinivasan re-elected TNCA president","VideosCount":46,"PhotosCount":923,"PictureUrl":"https:\/\/pbs.twimg.com\/media\/CHSjyAYUkAAuEjM.jpg","Photos":[{"Url":"https:\/\/scontent.xx.fbcdn.net\/hphotos-xpf1\/v\/t1.0-9\/s130x130\/10351608_983737664977962_3688878820825314730_n.jpg?oh=05a780eaa7ef6f751e949935e54312a0&oe=55B34EFF","Description":null,"Count":0}],"Videos":[{"ID":"","Url":"https:\/\/youtu.be\/_BI2SCE_3cE","Source":"None","Count":0}],"Photo":"https:\/\/pbs.twimg.com\/media\/CHSjyAYUkAAuEjM.jpg","Video":"","Total":3156,"Stat":{"Type":"ALL","PosCount":606,"NegCount":30,"NeuCount":2520,"PosPercent":19,"NegPercent":0,"NeuPercent":79},"SocialStats":[{"Type":"TW","PosCount":475,"NegCount":29,"NeuCount":1998,"PosPercent":18,"NegPercent":1,"NeuPercent":79},{"Type":"FB","PosCount":131,"NegCount":1,"NeuCount":522,"PosPercent":13100,"NegPercent":100,"NeuPercent":52200},{"Type":"TM","PosCount":0,"NegCount":0,"NeuCount":0,"PosPercent":0,"NegPercent":0,"NeuPercent":0}],"GenderStats":[{"Type":"Male","Count":1232,"Percent":49.240607514},{"Type":"Female","Count":1210,"Percent":48.3613109512},{"Type":"Others","Count":1232,"Percent":0}],"Comments":[{"Source":"Facebook","Comment":"Ready with your #whistles?"}],"Tags":[{"key":"srinivasan","value":63,"valuestr":null,"label":null},{"key":"nsrinivasan","value":14,"valuestr":null,"label":null},{"key":"bcci","value":9,"valuestr":null,"label":null},{"key":"lalitmodi","value":9,"valuestr":null,"label":null},{"key":"blatter","value":7,"valuestr":null,"label":null}],"Emotions":[{"key":"resigns","value":5,"valuestr":null,"label":null},{"key":"good","value":3,"valuestr":null,"label":null},{"key":"no","value":2,"valuestr":null,"label":null},{"key":"resign","value":2,"valuestr":null,"label":null},{"key":"like","value":2,"valuestr":null,"label":null}],"Locations":null,"Trends":[{"Source":"TW","Data":"0,1,2,-1,-1"},{"Source":"FB","Data":"0"},{"Source":"TM","Data":"0"}],"Decision":"Mild","DecisionImage":"\/images\/mild.png","ReturnUrl":null,"ContainerID":null};


React.render(<SmallText data={cric_data3110_Small_data}/>,document.getElementById('smalltext'));