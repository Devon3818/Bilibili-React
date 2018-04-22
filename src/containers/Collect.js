import React, { Component } from 'react';
import HeaderA from '../components/HeaderA/HeaderA';

class Collect extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Collect">
                <HeaderA title="我的收藏" />
            </div>
         )
    }
}
 
export default Collect;