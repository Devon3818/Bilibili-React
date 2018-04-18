import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './index';
import Footer from '../components/footer/footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Index} />
          <Switch>
            <Footer/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
