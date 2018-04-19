import React, { Component } from 'react';
import HeaderSmart from '../components/HeaderSmart/HeaderSmart';

const style = {
    background: '#fdfdfdc7'
}

class iClass extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div style={style} className="iClass">
                <HeaderSmart />
                <p>iClass</p>
            </div>
        )
    }
}
 
export default iClass;