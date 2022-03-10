import Redux from 'redux';

var currentVideoReducer = (state, action) => {
  switch (action.type) {
  case 'CHANGE_VIDEO':
    return {
      video: [state, action],
    };
  default:
    return null;
  }
};

export default currentVideoReducer;


/*
import {CHANGE_VIDEO} from './actions/currentVideo';
constant initialState = {
  testState: null,
  state: something
}

constant currentVideoReducer = (state = initialState, action) => {
  switch(action.type)
  case CHANGE_VIDEO:
    return ...state,
    testState: state.testState'do something here'
    return;
    default:
      return state;
}
S
export default currentVideoReducer;
*/