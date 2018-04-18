import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';

import HeaderSmart from '../components/HeaderSmart/HeaderSmart'
import NavSmart from '../components/NavSmart/NavSmart';
import Recommend from './Recommend';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 1
        }
        this.handleChangeIndex = this.handleChangeIndex.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChangeIndex = index => {
        this.setState({
            tabIndex: index
        });
    };

    handleChange(index){
        this.setState({
            tabIndex: index
        });
    }

    
    render() { 

        return (
            <div className="Index">
                <HeaderSmart hasShadow={false} />
                <NavSmart index={this.state.tabIndex} handleChange={idx => this.handleChange(idx)} />
                
                <SwipeableViews index={this.state.tabIndex} animateHeight onChangeIndex={this.handleChangeIndex}>
                    <div>lide n°1</div>
                    <Recommend />
                    <div>slide n°3</div>
                    <div>slide n°4</div>
                    <div>slide n°5</div>
                </SwipeableViews>
                
            </div>
        )
    }
}
 
export default Index;