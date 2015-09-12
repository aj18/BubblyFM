var React = require("react");
var Radium = require('radium');
var jQuery = require("jquery");
//var DoughnutChart = require("react-d3-components").DoughnutChart;;
var TagList = require('../../flowly/TagList.js');
var EmotionList = require('../../flowly/EmotionList.js');
var StatisticsTable = require('../../flowly/StatisticsTable.js');

var SIM = React.createClass({
    componentDidMount: function () {
       
        
    },
    render: function(){
        //debugger;
        //
       
        var fbUrl=this.props.returnurl+ '?id=' + this.props.id + '&type=source&page=1&q=Facebook';
        var twitUrl=this.props.returnurl+ '?id=' + this.props.id + '&type=source&page=1&q=Twitter';
        var tumbUrl=this.props.returnurl+ '?id=' + this.props.id + '&type=source&page=1&q=Tumblr';
        var maleUrl=this.props.returnurl+ '?id=' + this.props.id + '&type=gender&page=1&q=Male';
        var femaleUrl=this.props.returnurl+ '?id=' + this.props.id + '&type=gender&page=1&q=Female';
        var otherGenderUrl=this.props.returnurl+ '?id=' + this.props.id + '&type=gender&page=1&q=Others';
        var total=this.props.data.Stat.PosCount+this.props.data.Stat.NegCount+this.props.data.Stat.NeuCount;

        return(
       <div className="card z-depth-3">
            <div className="row" style={{"margin-bottom":"0px;"}}>
                <div className="col s12" style={{"padding":"1px"}}>
                     <ul id="projects-collection" className="collection" style={{"border":"none"}}>
                        <li className="collection-item avatar" style={{"border":"none"}}>
                            <span className="social-collection-header">Social Influence</span>
                            <p>Total Count : {total}</p>
                        </li>
                        <li className="collection-item" style={{"border":"none"}}>
                            <div className="card-content">
                                    <div id="doughnut-chart-wrapper">
                                        <DoughnutChart dataD={this.props.doughnutData} />
                                        <div style={{"top":"-125px"}} className="doughnut-chart-status">{total}
                                            <p className="ultra-small center-align">Counts</p>
                                        </div>
                                    </div>
                                <div style={{'text-align':'center'}}>
                                    <ul className="doughnut-chart-legend" style={{"display": "inline-flex"}}>
                                        <li className="kitchen ultra-small"><span className="legend-color"></span>Positive</li>
                                        <li className="mobile ultra-small"  style={{"padding-left": "20px;","padding-right": "20px;"}}><span className="legend-color"></span> Negative</li>
                                        <li className="home ultra-small"><span className="legend-color"></span> Neutral</li>
                                    </ul>
                                </div>
                            </div>
                       </li>
                       <li className="collection-item avatar" style={{"border":"none"}}>
                                        <i className="material-icons circle red darken-2">tv</i>
                                        
                                        <span className="social-collection-header">Channel</span>
                                        <p>Total Count : {this.props.Projects.Meter.Twitter + this.props.Projects.Meter.Facebook + this.props.Projects.Meter.Tumblr}</p>
                        </li>
                        <li className="collection-item" style={{"border":"none"}}>
                            <div className="row">
                                <div className="col s6">
                                    <p className="social-collections-title"><a href={twitUrl}><i className='fa fa-twitter fa-1x'></i> Twitter</a></p>
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
                        <li className="collection-item" style={{"border":"none"}}>
                            <div className="row">
                                <div className="col s6">
                                    <p className="social-collections-title"><a href={fbUrl}><i className='fa fa-facebook fa-1x'></i> Facebook</a></p>
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
                        <li className="collection-item" style={{"border":"none"}}>
                            <div className="row">
                                <div className="col s6">

                                    <p className="social-collections-title"><a href={tumbUrl}><i className='fa fa-tumblr fa-1x'></i> Tumblr</a></p>
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

                        <li className="collection-item avatar" style={{"border":"none"}}>
                        <i className="material-icons circle red darken-2">people</i>
                            
                            <span className="social-collection-header">Gender</span>
                            <p>Total Stats : {this.props.Projects.Meter.Male + this.props.Projects.Meter.Female + this.props.Projects.Meter.Others}</p>
                        </li>
                        <li className="collection-item" style={{"border":"none"}}>
                            <div className="row">
                                <div className="col s5">
                                    <p className="social-collections-title"><strong></strong> <a href={maleUrl}><i className="fa fa-male fa-1x"></i> Male</a></p>
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
                        <li className="collection-item" style={{"border":"none"}}>
                            <div className="row">
                                <div className="col s5">
                                    <p className="social-collections-title"><strong></strong> <a href={femaleUrl}><i className="fa fa-female fa-1x"></i> Female</a></p>
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
                        <li className="collection-item" style={{"border":"none"}}>
                            <div className="row">
                                <div className="col s5">
                                    <p className="social-collections-title"><strong></strong><a href={otherGenderUrl}> Others</a></p>
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
                        
                        <li className="collection-item avatar" style={{"border":"none"}}>

                        <i className="material-icons circle red darken-2 icon-demo">perm_media</i>
                            
                            <span className="social-collection-header">Media</span>
                            <p>Total Media counts : {this.props.data.VideosCount + this.props.data.PhotosCount}</p>
                        </li>
                        <li className="collection-item" style={{"border":"none"}}>
                            <div className="row">
                               <StatisticsTable videoCount={this.props.data.VideosCount} photoCount={this.props.data.PhotosCount} id={this.props.id}  returnurl={this.props.returnurl} />
                            </div>
                        </li>
                        <li className="collection-item avatar" style={{"border":"none"}}>
                            <i className="mdi-communication-location-on circle red darken-2"></i>
                            <span className="collection-header">Geo Location</span>
                            <p>World map, world regions, countries</p>
                        </li>
                        <li className="collection-item" style={{"padding":"1px 1px","border":"none"}}> 

                                <DBTSLocation id={this.props.id} 
                                polarChartData={this.props.polarChartData} 
                                wordMarkers={this.props.wordMarkers} 
                                title = { this.props.title } 
                                returnurl={this.props.returnurl} />
                           
                        </li>
                        <li className="collection-item" style={{"padding":"1px 1px","border":"none"}}>
                         
                            
                               
                                <div className="row">
                                  <div className="col s12">
                                    <ul className="tabs tab-demo-active z-depth-1" style={{"width": "100%;"}}>
                                      <li className="tab col s6" style={{"width": "50%;"}}><a className="white-text red darken-1 waves-effect waves-light active" href="#tags1">
                                      <i className="material-icons tiny">perm_identity</i> Tags</a>
                                      </li>
                                      

                                      <li className="tab col s6" style={{"width": "50%;"}}><a className="white-text light-blue darken-1 waves-effect waves-light" href="#emotions2">
                                      <i className="material-icons tiny">speaker_notes</i> Emotions</a>
                                      </li>
                                    <div className="indicator" style={{"right": "488px; left: 0px;"}}></div>
                                    <div className="indicator" style={{"right": "488px; left: 0px;"}}></div></ul>
                                  </div>
                                  <div className="col s12">
                                    <div id="tags1" className="col s12 lighten-3" style={{"display": "block;"}}>
                                       <TagList  data={this.props.data.Tags}   returnurl={this.props.returnurl} id={this.props.id} />

                                    </div>
                                    
                                    <div id="emotions2" className="col s12 lighten-3" style={{"display": "none;"}}>
                                      <EmotionList  data={this.props.data.Emotions} returnurl={this.props.returnurl} id={this.props.id} />
                                    </div>
                                  </div>
                                </div>
                             
                            
                       
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
        </div>
                                    
        );
        
    }
});

var DoughnutChart = React.createClass({
    componentDidMount: function() {
    //debugger;

    var doughnutChart = document.getElementById("doughnut-chart-socialinfluance").getContext("2d");
        window.myDoughnut = new Chart(doughnutChart).Doughnut(this.props.dataD, {
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


var DBTSLocation = React.createClass({
    componentDidMount: function () {
    
    },
    render: function(){
            var polarChartItem = this.props.polarChartData.map(function(item) {
                    return(  
                                <div className="row">
                                    <div className="col s10">
                                        <p className="collections-title"><strong> {item.label} </strong></p>
                                    </div>
                                    <div className="col s2">                                                
                                        <p className="task-cat light-green darken-3"><strong>{item.value} </strong></p>
                                    </div>
                                </div>
                            );
                        });
        return(
            
                
                    
                     <div>
                     <WorldMapMarkers data={this.props.wordMarkers}/>
                     
                     {polarChartItem}
                      </div>
        );
        
    }
});


var WorldMapMarkers = React.createClass({
    
    componentDidMount: function() {
    //debugger;
     $(this.refs.WordMapMarker.getDOMNode()).vectorMap({
        map: 'world_mill_en',
        scaleColors: ['#1fb5ac', '#1fb5ac'],        
        normalizeFunction: 'polynomial',
        hoverOpacity: 0.7,
        hoverColor: false,
        regionsSelectable: true,
        markersSelectable: true,
        markersSelectableOne: true,
        updateSize: true,
        onRegionOver: function(event, code) {
            //console.log('region-over', code);
        },
        onRegionOut: function(event, code) {
            //console.log('region-out', code);
        },
        onRegionClick: function(event, code) {
            //console.log('region-click', code);
        },
        onRegionSelected: function(event, code, isSelected, selectedRegions) {
            //console.log('region-select', code, isSelected, selectedRegions);
            if (window.localStorage) {
                window.localStorage.setItem(
                    'jvectormap-selected-regions',
                    JSON.stringify(selectedRegions)
                );
            }
        },

        panOnDrag: true,

        focusOn: {
            x: 0.5,
            y: 0.5,
            scale: 1.2,
            animate: true
        },


        regionStyle: {
            initial: {
                fill: '#b2ebf2',
                'fill-opacity': 1,
                stroke: 'false',
                'stroke-width': 0,
                'stroke-opacity': 1
            },
            hover: {
                fill: '#e0f7fa',
                'fill-opacity': 1,
                cursor: 'pointer'
            },
            selected: {
                fill: '#80deea'
            },
            selectedHover: {}
        },

        markerStyle: {
            initial: {
                fill: '#ff4081',
                stroke: '#f8bbd0',
                r: 6
            },
            hover: {
                stroke: '#f8bbd0',
                "stroke-width": 3,
                cursor: 'pointer'
            },
            selected: {
                fill: '#f50057',
                "stroke-width": 0,
            },
        },
        series: {
            markers: [{
                attribute: 'fill',
                scale: ['#FF0000', 'FF9900','#FFFF00'],
                values: [1,2,3]
            },{
                attribute: 'r',
                scale: [11,9,7],
                values: [1, 2 , 3]
            }]
        },
        backgroundColor: '#00bcd4',
        markers: this.props.data
    });
    },
    render : function() {
        return (<div id="world-map-markers" ref="WordMapMarker" style={{"height": "400px"}} ></div>);

    }

});


module.exports = SIM;


