import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HeaderSmart_style.scss';

class HeaderSmart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasShadow: this.props.hasShadow?true:false,
            title: this.props.title || null,
            icons: this.props.icons || []
        }
        console.log(this.props.open);
        this.iopenMenu = this.iopenMenu.bind(this);
        
    }

    iopenMenu(){
        this.props.openMenu(true);
    }

    render() { 
        return ( 
            <div className={`${"HeaderSmart"} ${this.state.hasShadow?'hasShadow':''}`}>
                <div onClick={this.iopenMenu} className="left-cont">
                    <i className="iconfont icon-weibiaoti12 openMenu" />
                    <img className="user-logo" src="https://avatars1.githubusercontent.com/u/11835988?s=460&v=4"/>
                </div>
                {this.state.title?<p className="title">{this.state.title}</p>:null}
                <div className="icons">
                {
                    this.state.icons.map((name,index)=>(
                        <i className={`iconfont ${name}`} />
                    ))
                }
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
		openMenu:(data)=>{
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
)(HeaderSmart);