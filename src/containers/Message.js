import React, { Component } from 'react';
import HeaderSmart from '../components/HeaderSmart/HeaderSmart';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="Message">
                <HeaderSmart />
                <p>Message</p>
            </div>
        )
    }
}
 
export default Message;