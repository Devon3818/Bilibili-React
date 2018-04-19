import React, { Component } from 'react';
import HeaderSmart from '../components/HeaderSmart/HeaderSmart';
import NavSmartMess from '../components/NavSmartMess/NavSmartMess';
import SwipeableViews from 'react-swipeable-views';
import DynamicCard from '../components/DynamicCard/DynamicCard';

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
                    <div>
                        <DynamicCard />
                        <DynamicCard />
                        <DynamicCard />
                    </div>
                    <div></div>
                    <div></div>
                </SwipeableViews>
            </div>
        )
    }
}
 
export default Dynamic;