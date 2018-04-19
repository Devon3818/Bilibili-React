import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './index';
import iClass from './iClass';
import Dynamic from './Dynamic';
import Message from './Message';
import Footer from '../components/footer/footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Index} />
          <Route path="/iclass" component={iClass} />
          <Route path="/dynamic" component={Dynamic} />
          <Route path="/message" component={Message} />
          <Switch>
            <Footer/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
