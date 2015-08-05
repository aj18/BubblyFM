

var DriveIn = require('react-drive-in');

var $mountNode = document.getElementById('drive-in');


var videoWithFallbacks = [
    "http://raw.githubusercontent.com/ronik-design/react-drive-in/master/example/glacier.mp4",
    "http://raw.githubusercontent.com/ronik-design/react-drive-in/master/example/glacier.webm",
    "http://raw.githubusercontent.com/ronik-design/react-drive-in/master/example/glacier.ogv"
];

/*var playlist = [
    [
      'https://github.com/ronik-design/react-drive-in/blob/master/example/pelo.mp4?raw=true',
      'https://github.com/ronik-design/react-drive-in/blob/master/example/pelo.ogv?raw=true',
      'https://github.com/ronik-design/react-drive-in/blob/master/example/pelo.jpg?raw=true'
    ],
    [
      'https://github.com/ronik-design/react-drive-in/blob/master/example/kaledo.mp4?raw=true',
      'https://github.com/ronik-design/react-drive-in/blob/master/example/kaledo.ogv?raw=true',
      'https://github.com/ronik-design/react-drive-in/blob/master/example/kaledo.jpg?raw=true'
    ],
    [
      'http://raw.githubusercontent.com/ronik-design/react-drive-in/master/example/glacier.mp4',
      'http://raw.githubusercontent.com/ronik-design/react-drive-in/master/example/glacier.ogv',
      'http://raw.githubusercontent.com/ronik-design/react-drive-in/master/example/glacier.jpg'
    ]
  ];*/

  var playlist = [
    [
      "./src/vid1.mp4"
    ],
    [
      "./src/vid2.mp4"
    ],
    [
      'http://raw.githubusercontent.com/ronik-design/react-drive-in/master/example/glacier.mp4',
      'http://raw.githubusercontent.com/ronik-design/react-drive-in/master/example/glacier.ogv',
      'http://raw.githubusercontent.com/ronik-design/react-drive-in/master/example/glacier.jpg'
    ]
  ];

  var onPlaying = function(itemNum) {};
  var onPause = function() {};


var posterurl = "http://raw.githubusercontent.com/ronik-design/react-drive-in/master/example/glacier.jpg";
//React.render(<DriveIn show={videoWithFallbacks} poster={posterurl}/>,$mountNode );
React.render(
    <DriveIn 
      showPlaylist={playlist}
      onPlaying={onPlaying}
      onPause={onPause}
      loop={true}
      slideshow={false}
      mure={true}
      poster={posterurl}
    />,
    $mountNode
  );