import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <Main />
        </BrowserRouter>
    );
  }
}

export default App;
