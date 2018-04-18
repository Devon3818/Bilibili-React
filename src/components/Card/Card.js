import React, { Component } from 'react';
import './Card_style.scss';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="Card">
                <img src="/card/card_0.png" />
                <div className="card_info">
                    <p className="card_title">
                    papi酱的周一放送——妈妈眼里：除了妈妈做的菜，都不是好东西！
                    </p>
                    <div className="card_tag clear">
                        <span className="fl">日常·吃货</span>
                        <i className="iconfont icon-iconfontmoreandroid fr" />
                    </div>
                </div>
            </div>
        )
    }
}
 
export default Card;