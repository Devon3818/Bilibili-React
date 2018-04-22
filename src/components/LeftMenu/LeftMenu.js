import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './LeftMenu_style.scss';

class LeftMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.icloseMenu = this.icloseMenu.bind(this);
    }

    icloseMenu(){
        this.props.closeMenu(false);
    }

    render() { 
        return ( 
            <div className="LeftMenu" onClick={this.icloseMenu}>
                <div className="content">
                    <div className="user-info">
                        <img className="uhead" src="https://avatars1.githubusercontent.com/u/11835988?s=460&v=4" />
                        <p className="uname">Devon</p>
                        <p className="ubi">
                            <span>硬币：4</span>
                            <span>B币：0.0</span>
                        </p>
                        <div className="icon clear">
                            <i className="iconfont icon-qianbao" />
                            <i className="iconfont icon-erweima" />
                        </div>
                        <i className="iconfont icon-CN_bilibiliB BILIBILI" />
                    </div>
                    <ul className="ulMenu">
                        <NavLink  to="/" exact activeClassName='active'>
                        <li>
                            <i className="iconfont icon-shouyexuanzhong" />
                            首页
                        </li>
                        </NavLink>
                        <li>
                            <i className="iconfont icon-lishijilu" />
                            历史记录
                        </li>
                        <li>
                            <i className="iconfont icon-yunxiazai" />
                            离线缓存
                        </li>
                        <li>
                            <i className="iconfont icon-shoucang" />
                            我的收藏
                        </li>
                        <li>
                            <i className="iconfont icon-zhibohuifang" />
                            稍后再看
                        </li>
                        <li>
                            <i className="iconfont icon-zhibo1" />
                            直播中心
                        </li>
                        <li>
                            <i className="iconfont icon-custom-service" />
                            联系客服
                        </li>
                    </ul>
                    <div className="flex-nav">
                        <p><i className="iconfont icon-shezhi" /> 设置</p>
                        <p><i className="iconfont icon-theme" /> 主题</p>
                        <p><i className="iconfont icon-yejianmoshi" /> 夜间</p>
                    </div>
                </div>
            </div>
         )
    }
}

const mapStateToProps=(state)=>{
	return{
		open:state
	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		closeMenu:(data)=>{
			dispatch({
                type:'OPEN',
                open: data
            })
		}
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LeftMenu);