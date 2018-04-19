import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './footer_style.scss';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <nav className="Footer">
                <NavLink  to="/" exact activeClassName='active'>
                    <i className="iconfont icon-shouyexuanzhong" />
                    <span>首页</span>
                </NavLink>
                <NavLink  to="/iclass" exact activeClassName='active'>
                    <i className="iconfont icon-fenquxuanzhong" />
                    <span>分区</span>
                </NavLink>
                <NavLink  to="/dynamic" exact activeClassName='active'>
                    <i className="iconfont icon-dongtaixuanzhong" />
                    <span>动态</span>
                </NavLink>
                <NavLink  to="/message" exact activeClassName='active'>
                    <i className="iconfont icon-xiaoxi" />
                    <span>消息</span>
                </NavLink>
            </nav>
         )
    }
}
 
export default Footer;