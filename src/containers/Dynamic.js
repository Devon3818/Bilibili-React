import React, { Component } from 'react';
import HeaderSmart from '../components/HeaderSmart/HeaderSmart';
import NavSmartMess from '../components/NavSmartMess/NavSmartMess';
import SwipeableViews from 'react-swipeable-views';
import DynamicVideo from '../containers/DynamicVideo';
import DynamicSynthesize from '../containers/DynamicSynthesize';
import DynamicHot from '../containers/DynamicHot';

const icons = [
    "icon-bianji1"
]

class Dynamic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0
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
            <div className="Dynamic">
                <HeaderSmart icons={icons} title="动态" />
                <NavSmartMess index={this.state.tabIndex} handleChange={idx => this.handleChange(idx)} />
                <SwipeableViews index={this.state.tabIndex} animateHeight onChangeIndex={this.handleChangeIndex}>
                    <DynamicVideo />
                    <DynamicSynthesize />
                    <DynamicHot />
                </SwipeableViews>
            </div>
        )
    }
}
 
export default Dynamic;