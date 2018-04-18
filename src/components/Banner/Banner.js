import React, { Component } from 'react';
import './Banner_style.scss'
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: this.props.index || 0
        }
    }

    handleChangeIndex = index => {
        this.setState({
          index,
        });
    };

    render() { 

        const { index } = this.state.index;

        return (
            <div className="Banner">
                <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                    <img src="/banner/banner_0.png" />
                    <img src="/banner/banner_1.png" />
                    <img src="/banner/banner_2.png" />
                    <img src="/banner/banner_3.png" />
                </AutoPlaySwipeableViews> 
            </div>
        )
    }
}
 
export default Banner;