import Redux from 'redux';

var videoListReducer = (state = sampleData, action) => {
  switch (action.type) {
  case 'CHANGE_VIDEO_LIST':
    return {
      videoList: [state, action],
    };
  default:
    return {
      sampleData: []
    };
  }
  //TODO: define a reducer for the videoList field of our state.
};

export default videoListReducer;
