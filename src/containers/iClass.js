import React, { Component } from 'react';
import HeaderSmart from '../components/HeaderSmart/HeaderSmart';
import IconItem from '../components/IconItem/IconItem';

const style = {
    iClass: {
        background: '#fdfdfdc7'
    },
    classWrap: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    }
}

const icons = [
    'icon-xiazai',
    'icon-xiazai5'
]

class iClass extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div style={style.iClass} className="iClass">
                <HeaderSmart icons={icons} title="分区" hasShadow={true} />
                <div className="classWrap" style={style.classWrap}>
                    <IconItem title="直播"/>
                    <IconItem title="番剧"/>
                    <IconItem title="动画"/>
                    <IconItem title="国创"/>

                    <IconItem title="音乐"/>
                    <IconItem title="舞蹈"/>
                    <IconItem title="游戏"/>
                    <IconItem title="科技"/>

                    <IconItem title="生活"/>
                    <IconItem title="鬼畜"/>
                    <IconItem title="时尚"/>
                    <IconItem title="广告"/>

                    <IconItem title="娱乐"/>
                    <IconItem title="影视"/>
                    <IconItem title="放映厅"/>
                    <IconItem title="小视频"/>

                    <IconItem title="专栏"/>
                    <IconItem title="音频"/>
                    <IconItem title="相簿"/>
                    <IconItem title="游戏中心"/>
                </div>
            </div>
        )
    }
}
 
export default iClass;