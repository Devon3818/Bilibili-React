import React, { Component } from 'react';
import HeaderSmart from '../components/HeaderSmart/HeaderSmart';

class iClass extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="iClass">
                <HeaderSmart />
                <p>iClass</p>
            </div>
        )
    }
}
 
export default iClass;