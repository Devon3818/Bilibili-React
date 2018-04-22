import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Index from './index';
import iClass from './iClass';
import Dynamic from './Dynamic';
import Message from './Message';
import Footer from '../components/footer/footer';
import LeftMenu from '../components/LeftMenu/LeftMenu';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { connect } from 'react-redux';

class Main extends Component {
    constructor(props) {
        super(props);
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
                <CSSTransitionGroup
                    transitionName="example"
                    transitionAppear={true}
                    transitionAppearTimeout={300}
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                    {this.props.open?<LeftMenu/>:null}
                </CSSTransitionGroup>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{

    console.log(state)

	return{
		open:state.open
	}
}

export default connect(
	mapStateToProps,undefined,undefined,{pure:false}
)(Main);