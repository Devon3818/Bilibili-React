import React, { Component } from 'react';
import HeaderA from '../components/HeaderA/HeaderA';

class Cache extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Cache">
                <HeaderA title="管理缓存" />
            </div>
         )
    }
}
 
export default Cache;