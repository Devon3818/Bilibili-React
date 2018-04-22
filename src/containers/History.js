import React, { Component } from 'react';
import HeaderA from '../components/HeaderA/HeaderA';

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="History">
                <HeaderA title="历史记录" />
            </div>
         )
    }
}
 
export default History;