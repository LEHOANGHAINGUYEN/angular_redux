import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import combineReducers from './reducer/index.js';
import ListPr from './component/ListPr.js';
function App() {

const store = createStore(combineReducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// console.log(store.getState());

//  store.dispatch({type:'TOGGLE_STATUS'});

//  console.log('TOGGLE_STATUS', store.getState());
//  dispatch({type:'ADD_PRODUCT',item: this.refs.txt.value})


  return (
    <Provider store={store}>
      <ListPr/>
    </Provider>
  );
}

export default App;
