var React = require("react");
var jQuery = require("jquery");
//var DoughnutChart = require("react-d3-components").DoughnutChart;;

var SIM = React.createClass({
	componentDidMount: function () {
		
  	},
	render: function(){
	    //debugger;
		return(
        <div classname="row">
		        <div className="col s12">
				     <ul id="projects-collection" className="collection">
                        <li className="collection-item avatar">
                            <span className="social-collection-header">Social Influence</span>
							<p>Total Count : {this.props.doughnutData[0].value+this.props.doughnutData[1].value+this.props.doughnutData[2].value}</p>
                        </li>
						<li className="collection-item">
							<div className="card-content">
									<div id="doughnut-chart-wrapper">
										<DoughnutChart data={this.props.doughnutData} />
										<div style={{top:'-125px'}} className="doughnut-chart-status">{this.props.doughnutData[0].value+this.props.doughnutData[1].value+this.props.doughnutData[2].value}
											<p className="ultra-small center-align">Counts</p>
										</div>
									</div>
								<div style={{'text-align':'center'}}>
									<ul className="doughnut-chart-legend" style={{'display': 'inline-flex'}}>
										<li className="kitchen ultra-small"><span className="legend-color"></span>Positive</li>
										<li className="mobile ultra-small"  style={{'padding-left': '20px','padding-right': '20px'}}><span className="legend-color"></span> Negative</li>
										<li className="home ultra-small"><span className="legend-color"></span> Neutral</li>
									</ul>
								</div>
							</div>
					   </li>
                       <li className="collection-item avatar">
                                        <i className="mdi-social-pages circle red darken-2"></i>
                                        <span className="social-collection-header">Channel</span>
                                        <p>Total Count : {this.props.Projects.Meter.Twitter + this.props.Projects.Meter.Facebook + this.props.Projects.Meter.Tumblr}</p>
                        </li>
                        <li className="collection-item">
                            <div className="row">
                                <div className="col s6">
                                    <p className="social-collections-title">Twitter</p>
                                    <p className="social-collections-content">Count : {this.props.Projects.Meter.Twitter}</p>
                                </div>
                                <div className="col s3">
                                    <span className="social-task-cat cyan">{this.props.Projects.Meter.TwitterPer}%</span>
                                </div>
                                <div className="col s3">
                                    <Projectline data={this.props.Projects.Twitter} />
                                </div>
                            </div>
                        </li>
                        <li className="collection-item">
                            <div className="row">
                                <div className="col s6">
                                    <p className="social-collections-title">Facebook</p>
                                    <p className="social-collections-content">Count : {this.props.Projects.Meter.Facebook}</p>
                                </div>
                                <div className="col s3">
                                    <span className="social-task-cat grey darken-3">{this.props.Projects.Meter.FacebookPer}%</span>
                                </div>
                                <div className="col s3">
                                    <Projectline data={this.props.Projects.Facebook} />
                                </div>
                            </div>
                        </li>
                        <li className="collection-item">
                            <div className="row">
                                <div className="col s6">
                                    <p className="social-collections-title">Tumblr</p>
                                    <p className="social-collections-content">Count : {this.props.Projects.Meter.Tumblr}</p>
                                </div>
                                <div className="col s3">
                                    <span className="social-task-cat teal">{this.props.Projects.Meter.TumblrPer}%</span>
                                </div>
                                <div className="col s3">
                                    <Projectline data={this.props.Projects.Tumblr} />
                                </div>
                            </div>
                        </li>

                        <li className="collection-item avatar">
                            <i className="mdi-social-people circle red darken-2"></i>
                            <span className="social-collection-header">Gender</span>
                            <p>Total Stats : {this.props.Projects.Meter.Male + this.props.Projects.Meter.Female + this.props.Projects.Meter.Others}</p>
                        </li>
                        <li className="collection-item">
                            <div className="row">
                                <div className="col s5">
                                    <p className="social-collections-title"><strong></strong> Male</p>
                                    <p className="social-collections-content">Count : {this.props.Projects.Meter.Male}</p>
                                </div>
                                <div className="col s3">
                                    <span className="social-task-cat pink accent-2">{this.props.Projects.Meter.MalePer}</span>
                                </div>
                                <div className="col s4">
                                    <div className="progress">
                                         <div className="determinate" style={{width: this.props.Projects.Meter.MalePer}}></div>   
                                    </div>                                                
                                </div>
                            </div>
                        </li>
                        <li className="collection-item">
                            <div className="row">
                                <div className="col s5">
                                    <p className="social-collections-title"><strong></strong> Female</p>
                                    <p className="social-collections-content">Count : {this.props.Projects.Meter.Female}</p>
                                </div>
                                <div className="col s3">
                                    <span className="social-task-cat yellow darken-4">{ this.props.Projects.Meter.FemalePer }</span>
                                </div>
                                <div className="col s4">
                                    <div className="progress">
                                        <div className="determinate" style={{width: this.props.Projects.Meter.FemalePer}}></div>   
                                    </div>                                                
                                </div>
                            </div>
                        </li>
                        <li className="collection-item">
                            <div className="row">
                                <div className="col s5">
                                    <p className="social-collections-title"><strong></strong> Others</p>
                                    <p className="social-collections-content">Count : {this.props.Projects.Meter.Others}</p>
                                </div>
                                <div className="col s3">                                                
                                    <span className="social-task-cat light-green darken-3">{this.props.Projects.Meter.OthersPer}</span>
                                </div>
                                <div className="col s4">
                                    <div className="progress">
                                        <div className="determinate" style={{width: this.props.Projects.Meter.OthersPer}}></div>   
                                    </div>                                                
                                </div>
                            </div>
                        </li>
				    </ul>
				</div>
        </div>
			            			
		);
		
	}
});

var DoughnutChart = React.createClass({
    componentDidMount: function() {
    //debugger;

    var doughnutChart = document.getElementById("doughnut-chart-socialinfluance").getContext("2d");
        window.myDoughnut = new Chart(doughnutChart).Doughnut(this.props.data, {
            segmentStrokeColor : "#fff",
            tooltipTitleFontFamily: "'Roboto','Helvetica Neue', 'Helvetica', 'Arial', sans-serif",// String - Tooltip title font declaration for the scale label        
            percentageInnerCutout : 50,
            animationSteps : 100,
            segmentStrokeWidth : 4,
            animateScale: true,
            percentageInnerCutout : 60,
            responsive : true
        });
    },
    render : function() {
        return (<canvas id="doughnut-chart-socialinfluance" height="200"></canvas>);

    }

});



var Projectline = React.createClass({
    
    componentDidMount: function() {
    //debugger;
    $(this.refs.Projectline.getDOMNode()).sparkline(this.props.data, {
        type: 'line',
        width: '100%',
        height: '30',
        lineWidth: 2,
        lineColor: '#00bcd4',
        fillColor: 'rgba(0, 188, 212, 0.5)',
        });
    },
    render : function() {
        return (<div ref='Projectline'></div>);

    }

});

module.exports = SIM;


