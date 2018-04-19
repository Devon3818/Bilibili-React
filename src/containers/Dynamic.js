import React, { Component } from 'react';
import HeaderSmart from '../components/HeaderSmart/HeaderSmart';

class Dynamic extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="Dynamic">
                <HeaderSmart />
                <p>Message</p>
            </div>
        )
    }
}
 
export default Dynamic;