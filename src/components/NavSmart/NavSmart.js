import React, { Component } from 'react';
import './NavSmart_style.scss'

class NavSmart extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onTabChange(index){
        this.props.handleChange(index);
    }

    render() { 
        return ( 
            <div className="NavSmart">
                <div onClick={this.onTabChange.bind(this,0)} className="nav-tab">
                    <a>直播</a>
                </div>
                <div onClick={this.onTabChange.bind(this,1)} className="nav-tab">
                    <a>推荐</a>
                </div>
                <div onClick={this.onTabChange.bind(this,2)} className="nav-tab">
                    <a>追番</a>
                </div>
                <div onClick={this.onTabChange.bind(this,3)} className="nav-tab">
                    <a>影视</a>
                </div>
                <div onClick={this.onTabChange.bind(this,4)} className="nav-tab">
                    <a>专栏</a>
                </div>
                <span className={`left-${this.props.index}`}/>
            </div>
         )
    }
}
 
export default NavSmart;