/*

Actions - Describe what happens =========================

const selectVideo = 'SELECT_VIDEO' {type: 'SELECT_VIDEO'}

Search Video - {type: 'SEARCH_VIDEO'}

Specifies state changes
DOES NOT DIRECTLY update the state object but are responsible for transformations
App dispatches actions to update state

Action Creator - ========================================

function selectVideo() {
  return {
    type: selectVideo,
    info: 'select video'
  }
}

Reducers - Ties store to action =========================

(previousState, action) => newState

const initialState = {
  currentVideo: 'something',
  currentQuery: 'something
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SELECT_VIDEO: return {
      process changes to state here, but return new state object
      you are not updateing state
      '...state' -- makes copy of state object - spread operator functionality

    }
    default: return state
  }
}

Handles action dispatches to apply changes
Determines how changes to the state are made through actions
Pure functions which take previous state and an action and returns a NEW STATE (switch statements)

Store - =================================================

Maintains all states for the whole application in a SINGLE object
Main application is subscribed to store but can not directly update state
Changes are made through dispatches


Access state through getState()
Update state through dispatch(action)
Register listners through subscribe(listener)


First -
  Top of page -
  const redux = require('redux')
  const createStore = redux.createStore

  Bottom of page -
  const store = createStore(reducer functions)
Second -
  console.log('initial stat', store.getState()) should return initial state

  const unsubscribe = store.subscribe() => console.log('updated state', store.getState())

Third -
  store.dispatch(action creator goes here)

  Unsubscribe by calling unsubscribe

  unsubscribe();












*/