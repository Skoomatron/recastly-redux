import { combineReducers } from 'redux';
import currentVideo from './currentVideo.js';
import videoList from './videoList.js';

var rootReducer = (state, action) => {
  switch (action.type) {
  case 'CHANGE_VIDEO_LIST':
    return {
      videoList: [state, action],
    };
  case 'CHANGE_VIDEO':
    return {
      currentVideo: [state, action],
    };
  default:
    return {
      currentVideo: null,
      videoList: []
    };
  }
};

//TODO: define the root reducer for this app

//HINT: you'll need to combine the other two reducers in this
//  app into a single reducer using the 'combineReducers' method
//  listed above.

export default rootReducer;
