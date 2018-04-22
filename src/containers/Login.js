import React, { Component } from 'react';
import HeaderA from '../components/HeaderA/HeaderA';
import './Login_style.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Login">
                <HeaderA title="登录" />
                <div className="top clear">
                    <img src="/img/kpan_l.png" className="kpan_l fl" />
                    <p>
                        <i className="iconfont icon-CN_bilibiliB" />
                        <i className="iconfont icon-bilibili" />    
                    </p>
                    <img src="/img/kpan_r.png" className="kpan_r fr" />
                </div>
                
                <div className="input-wrap clear">
                    <input type="text" placeholder="你的手机号/邮箱" />

                    <input type="password" placeholder="密码" />
                </div>

                <div className="btn">登录</div>

            </div>
         )
    }
}
 
export default Login;