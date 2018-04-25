import React, { Component } from 'react';
import './DynamicCardImg_style.scss';

class DynamicCardImg extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="DynamicCardImg">
                <div className="top clear">
                    <img className="fl" src="https://avatars1.githubusercontent.com/u/11835988?s=460&v=4" />
                    <div className="user-info fl clear">
                        <h5>Devon <span>投稿了视频</span></h5>
                        <p>24分钟前</p>
                    </div>
                    <i className="iconfont icon-iconfontmoreandroid more fr" />
                </div>
                <div className="content">
                    终于满20万粉丝，买份BK庆祝下，新阶段要改改自己喜欢说八卦的臭毛病，以后大家别再问谁谁谁是不是挂了，得罪的人不少。
                </div>
                <div className="imgs clear">
                    <div className="img" style={{backgroundImage: 'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524670174832&di=58bfa1f502ad621a83959ef78d1e82b3&imgtype=0&src=http%3A%2F%2Fs7.mogucdn.com%2Fb7%2Fpic%2F150329%2F10wqg5_ieywenbwha2wmyztgazdambqmeyde_722x511.jpg_880x999.jpg)'}}></div>
                    <div className="img" style={{backgroundImage: 'url(https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1524660304&di=6301f32b0903031c7e30a0b9a97ea524&src=http://img.25pp.com/uploadfile/app/icon/20170203/1486106513487903.jpg)'}}></div>
                    <div className="img" style={{backgroundImage: 'url(https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=500214470,4034251907&fm=27&gp=0.jpg)'}}></div>

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
 
export default DynamicCardImg;