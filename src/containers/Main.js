import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './index';
import iClass from './iClass';
import Dynamic from './Dynamic';
import Message from './Message';
import Footer from '../components/footer/footer';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="Main">
                <Route exact path="/" component={Index} />
                <Route path="/iclass" component={iClass} />
                <Route path="/dynamic" component={Dynamic} />
                <Route path="/message" component={Message} />
                <Switch>
                    <Footer/>
                </Switch>
            </div>
        )
    }
}
 
export default Main;