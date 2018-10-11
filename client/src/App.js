import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Main from './containers/main';
import configureStore from './store';

import './App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
