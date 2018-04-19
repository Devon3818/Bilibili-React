import React, { Component } from 'react';
import './NavSmartMess_style.scss'

class NavSmartMess extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onTabChange(index){
        this.props.handleChange(index);
    }

    render() { 
        return ( 
            <div className="NavSmartMess">
                <div onClick={this.onTabChange.bind(this,0)} className="nav-tab">
                    <a>视频</a>
                </div>
                <div onClick={this.onTabChange.bind(this,1)} className="nav-tab">
                    <a>综合</a>
                </div>
                <div onClick={this.onTabChange.bind(this,2)} className="nav-tab">
                    <a>热门</a>
                </div>
                <span className={`left-${this.props.index}`}/>
            </div>
         )
    }
}
 
export default NavSmartMess;