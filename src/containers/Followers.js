import React, { Component } from 'react';
import HeaderA from '../components/HeaderA/HeaderA';

class Followers extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="Followers">
                <HeaderA title="我的关注" />
            </div>
         )
    }
}
 
export default Followers;