import React, { Component } from 'react';
import './DynamicCard_style.scss';

class DynamicCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="DynamicCard">
                <div className="top clear">
                    <img className="fl" src="https://avatars1.githubusercontent.com/u/11835988?s=460&v=4" />
                    <div className="user-info fl clear">
                        <h5>Devon <span>投稿了视频</span></h5>
                        <p>24分钟前</p>
                    </div>
                    <i className="iconfont icon-iconfontmoreandroid more fr" />
                </div>
                <div className="video-info clear">
                    <div className="video-wrap fl">
                        <img className="video-img" src="/img/video.png" />
                    </div>
                    <div className="video-content fl">
                        <h5>[绝地求生]傻缺碉堡时刻-Better AIM than x50 SCOPE..?! | Best PUBG Moments and Funny Highlig</h5>
                        <p>367播放  29弹幕</p>
                    </div>
                </div>
                <div className="tags">
                    <p>
                        <i className="iconfont icon-fenxiang" />1
                    </p>
                    <p>
                        <i className="iconfont icon-icon--" />23
                    </p>
                    <p>
                        <i className="iconfont icon-dianzan1" />15
                    </p>
                </div>
            </div>
        )
    }
}
 
export default DynamicCard;