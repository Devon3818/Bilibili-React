import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';

import HeaderSmart from '../components/HeaderSmart/HeaderSmart';
import NavSmart from '../components/NavSmart/NavSmart';
import Live from './Live';
import Recommend from './Recommend';
import Bangumi from './Bangumi';
import Cinephile from './Cinephile';
import Category from './Category';

const icons = [
    'icon-POP_GitHub',
    'icon-about',
    'icon-xiazai',
    'icon-xiazai5'
];

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
                <HeaderSmart icons={icons} hasShadow={false} />
                <NavSmart index={this.state.tabIndex} handleChange={idx => this.handleChange(idx)} />
                
                <SwipeableViews index={this.state.tabIndex} animateHeight onChangeIndex={this.handleChangeIndex}>
                    <Live />
                    <Recommend />
                    <Bangumi />
                    <Cinephile />
                    <Category />
                </SwipeableViews>
                
            </div>
        )
    }
}
 
export default Index;