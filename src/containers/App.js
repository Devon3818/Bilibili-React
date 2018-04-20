import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <Provider>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
