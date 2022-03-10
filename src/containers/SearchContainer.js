import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleSearchChange from '../actions/search.js';

// needs to wrap the query

var SearchContainer = ReactRedux.connect(reduxStore) => {
  // return { query: reduxStore.query };
};

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.
//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;


// const VoteContainer = ReactRedux.connect(
//   // we need to map/translate the data in the redux store to the expected props object
//   (reduxStoreData) => {
//     debugger;
//     // the votes prop comes from reduxStoreData.votes
//     return { votes: reduxStoreData.votes }; // this object will become props
//   },
