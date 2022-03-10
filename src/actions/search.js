import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  return function (q) {
    console.log({q});
    return $.get('https://www.youtube.com/results?search_query=' + {q});
  };
  //TODO:  Write an asynchronous action to handle a video search!
};

export default handleVideoSearch;

// handleInputChange(e) {
//   this.props.getYouTubeVideos(e.target.value);
//   this.setState({
//     value: e.target.value
//   });
// }
