import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/currentVideo.js';

// needs to wrap the video id, etag, and title?

const VideoListContainer = () => {};
//   (reduxStore) => {
//   return {
//     etag: reduxStore.etag,
//     id: reduxStore.id,
//     title: reduxStore.title
//   };
// },
// (dispatch) => {
//   return {
//     VideoList: function('something') {
//       dispatch({etag: 'something', id: 'something', title: 'something'});
//       dispatch(VideoListEntry('something'));
//     }
//   }
// }



//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default VideoListContainer;

// ==================== example build ===============
// const VoteContainer = ReactRedux.connect(
//   // we need to map/translate the data in the redux store to the expected props object
//   (reduxStoreData) => {
//     debugger;
//     // the votes prop comes from reduxStoreData.votes
//     return { votes: reduxStoreData.votes }; // this object will become props
//   },
// ​
//   // we need to map/translate the ability to dispatch actions to the expected props object
//   (dispatch) => {
//     return {
//       updateVote: function (choiceName) {
//         // dispatch({ type: "VOTE", choice: choice });
//         debugger;
//         dispatch(voteActionCreator(choiceName));
//       },
//     };
//   }
// )(VoteComponent);