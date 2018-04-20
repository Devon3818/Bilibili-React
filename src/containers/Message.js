import React, { Component } from 'react';
import HeaderSmart from '../components/HeaderSmart/HeaderSmart';
import IconItem from '../components/IconItem/IconItem';

const icons = [
    'icon-yonghu1',
    'icon-iconfontmoreandroid'
]

const style = {
    menuWrap: {
        background: '#fff',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
}

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="Message">
                <HeaderSmart icons={icons} title="消息"  hasShadow={true}/>
                <div className="menuWrap" style={style.menuWrap}>
                    <IconItem title="回复我的"/>
                    <IconItem title="@我"/>
                    <IconItem title="收到的赞"/>
                    <IconItem title="系统通知"/>
                </div>
            </div>
        )
    }
}
 
export default Message;