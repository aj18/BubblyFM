'use strict';

var React = require('react');
var ImageGallery = require('react-image-gallery');

var App = React.createClass({

  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {
      isPlaying: true,
      slideInterval: 4000,
      showThumbnails: true,
      showBullets: true,
      currentIndex: null
    };
  },

  componentDidUpdate: function(prevProps, prevState) {
    if (this.state.slideInterval !== prevState.slideInterval) {
      // refresh setInterval
      this._pauseSlider();
      this._playSlider();
    }
  },

  _pauseSlider: function() {
    if (this.refs.imageGallery) {
      this.refs.imageGallery.pause();
      this.setState({isPlaying: false});
    }
  },

  _playSlider: function() {
    if (this.refs.imageGallery) {
      this.refs.imageGallery.play();
      this.setState({isPlaying: true});
    }
  },

  _handleSlide: function(index) {
    this.setState({currentIndex: index});
  },

  render: function() {
    var images = [];
 

    console.log(JSON.stringify(this.props.data));

    this.props.data.map(function(item, i) {
          console.log(item.Url);
          images.push({original:item.Url,thumbnail:item.Url});           
                    
    });

    console.log(JSON.stringify(images));

    return (
      <div className="card-panel z-depth-3">
      <section className='app'>
        <ImageGallery
          ref='imageGallery'
          items={images}
          showBullets={this.state.showBullets}
          showThumbnails={this.state.showThumbnails}
          slideInterval={parseInt(this.state.slideInterval)}
          autoPlay={true}
          onSlide={this._handleSlide}
        />

        <div className='app-sandbox'>

          <h2> Playground </h2>

          <ul>
            <li>
              <a
                className={'app-button ' + (this.state.isPlaying ? 'active' : '')}
                onClick={this._playSlider}>
                Play
              </a>
            </li>
            <li>
            <a
              className={'app-button ' + (!this.state.isPlaying ? 'active' : '')}
              onClick={this._pauseSlider}>
              Pause
            </a>
            </li>
            <li>
              <div>Slide interval</div>
              <input
                type='text'
                placeholder='SlideInterval'
                valueLink={this.linkState('slideInterval')}/>
            </li>
            <li>
              <input
                type='checkbox'
                checkedLink={this.linkState('showBullets')}>
                show bullets?
              </input>
            </li>
            <li>
              <input
                type='checkbox'
                checkedLink={this.linkState('showThumbnails')}>
                show Thumbnails?
              </input>
            </li>
            {
              this.state.currentIndex !== null &&
                <li>
                  Event: slid to index {this.state.currentIndex}
                </li>
            }
          </ul>

        </div>
      </section>
      </div>
    );
  }

});


(function() {
  var dataFromPageG = {"ID":"bolly_data3342","Name":"Hamari Adhuri Kahani","Description":"Is Vidya Balan's 'Hamari Adhuri Kahani' a love triangle?","Category":"","ShowDefaultPicture":true,"SearchQuery":"Is Vidya Balan's 'Hamari Adhuri Kahani' a love triangle?","VideosCount":80,"PhotosCount":100,"PictureUrl":"http://i.ytimg.com/vi/94TekYJRAnE/0.jpg","Photos":[{"Url":"http://pbs.twimg.com/media/CFB5GY5UkAApYLU.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CFDzWr-UgAEnf27.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CEzuC73UkAIcb7a.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/ext_tw_video_thumb/599418226162827264/pu/img/sB4Hx9lLDDGctCac.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CFDpgy7XIAA0LZB.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CE0cxClVIAIhUqp.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CEzrYXVVEAEMFph.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CE0fetVUkAETHPh.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CEz1F21UMAEM_XX.jpg","Description":null,"Count":0},{"Url":"http://pbs.twimg.com/media/CFFsyO3UIAAx1Tb.jpg","Description":null,"Count":0}],"Videos":[{"ID":"17Ebfhs6pMo","Url":"https://www.youtube.com/watch?v=17Ebfhs6pMo","Source":"Youtube","Count":23},{"ID":"2fiT_TJlySk","Url":"https://www.youtube.com/watch?v=2fiT_TJlySk","Source":"Youtube","Count":2},{"ID":"sU9o6GkbTpM","Url":"http://youtu.be/sU9o6GkbTpM","Source":"Youtube","Count":1}],"Photo":"http://i.ytimg.com/vi/94TekYJRAnE/0.jpg","Video":null,"Total":458,"Stat":{"Type":"ALL","PosCount":135,"NegCount":7,"NeuCount":316,"PosPercent":29.0,"NegPercent":1.0,"NeuPercent":68.0},"SocialStats":[{"Type":"TW","PosCount":133,"NegCount":7,"NeuCount":302,"PosPercent":30.0,"NegPercent":1.0,"NeuPercent":68.0},{"Type":"TM","PosCount":2,"NegCount":0,"NeuCount":14,"PosPercent":12.0,"NegPercent":0.0,"NeuPercent":87.0}],"GenderStats":[{"Type":"Male","Count":291,"Percent":65.837104072398190045248868778},{"Type":"Female","Count":134,"Percent":30.316742081447963800904977376}],"Comments":null,"Tags":[{"key":"hamariadhurikahani","value":314,"valuestr":null,"label":null},{"key":"humnava","value":146,"valuestr":null,"label":null},{"key":"emraanhashmi","value":104,"valuestr":null,"label":null},{"key":"vidyabalan","value":91,"valuestr":null,"label":null},{"key":"hak","value":31,"valuestr":null,"label":null},{"key":"rajkumarrao","value":27,"valuestr":null,"label":null},{"key":"vidya","value":25,"valuestr":null,"label":null},{"key":"emraan","value":21,"valuestr":null,"label":null},{"key":"mithoon","value":15,"valuestr":null,"label":null},{"key":"bollywoodfanatic","value":10,"valuestr":null,"label":null}],"Emotions":[{"key":"love","value":43,"valuestr":null,"label":null},{"key":"good","value":15,"valuestr":null,"label":null},{"key":"best","value":13,"valuestr":null,"label":null},{"key":"perfect","value":13,"valuestr":null,"label":null},{"key":"god","value":9,"valuestr":null,"label":null},{"key":"stop","value":8,"valuestr":null,"label":null},{"key":"super","value":8,"valuestr":null,"label":null},{"key":"beautiful","value":7,"valuestr":null,"label":null},{"key":"amazing","value":7,"valuestr":null,"label":null},{"key":"huge","value":5,"valuestr":null,"label":null}],"Locations":[{"key":"undefined","value":0,"valuestr":"undefined","label":null},{"key":"in","value":0,"valuestr":"india","label":null},{"key":"ir","value":0,"valuestr":"iran","label":null},{"key":"pk","value":0,"valuestr":"pakistan","label":null},{"key":"qa","value":0,"valuestr":"qatar","label":null},{"key":"gr","value":0,"valuestr":"greece","label":null},{"key":"us","value":0,"valuestr":"united states","label":null},{"key":"bd","value":0,"valuestr":"bangladesh","label":null},{"key":"gb","value":0,"valuestr":"united kingdom","label":null}],"Trends":[{"Source":"TW","Data":"0,55,-2,52,-2,16,-3,2,1"},{"Source":"FB","Data":"0"},{"Source":"TM","Data":"0,1"}],"Decision":"Medium","DecisionImage":"/images/medium.png","ReturnUrl":"http://bharatmovies.social","ContainerID":null};

  React.render(<App data={dataFromPageG.Photos}/>, document.getElementById('container'));
})();
