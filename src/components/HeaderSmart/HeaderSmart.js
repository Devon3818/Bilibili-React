import React, { Component } from 'react';
import './HeaderSmart_style.scss';

class HeaderSmart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasShadow: this.props.hasShadow || true,
            title: this.props.title || null
        }
    }
    render() { 
        return ( 
            <div className={`${"HeaderSmart"} ${this.state.hasShadow?'hasShadow':''}`}>
                <div className="left-cont">
                    <i className="iconfont icon-weibiaoti12 openMenu" />
                    <img className="user-logo" src="https://avatars1.githubusercontent.com/u/11835988?s=460&v=4"/>
                </div>
                {this.state.title?<p className="title">{this.state.title}</p>:null}
                <div className="icons">
                    <i className="iconfont icon-POP_GitHub" />
                    <i className="iconfont icon-about" />
                    <i className="iconfont icon-xiazai" />
                    <i className="iconfont icon-xiazai5" />
                </div>
            </div>
         )
    }
}
 
export default HeaderSmart;