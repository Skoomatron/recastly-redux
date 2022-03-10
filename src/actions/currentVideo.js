import React from 'react'; // remove later?
import PropTypes from 'prop-types'; // remove later?



var changeVideo = (video) => {
  return {
    type: 'CHANGE_VIDEO',
    video: video
  };
  //TODO:  Return some action object to change the currently playing video.
};

export default changeVideo;



