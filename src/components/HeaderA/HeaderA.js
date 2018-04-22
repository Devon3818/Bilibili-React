import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HeaderA_style.scss';

class HeaderA extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
        this.iopenMenu = this.iopenMenu.bind(this);
    }

    iopenMenu(){
        this.props.closeMenu(true);
    }

    render() { 
        return ( 
            <div className="HeaderA hasShadow">
                <i onClick={this.iopenMenu} className="iconfont icon-caidan fl menu" />
                <p className="title fl">{this.props.title}</p>
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
)(HeaderA);