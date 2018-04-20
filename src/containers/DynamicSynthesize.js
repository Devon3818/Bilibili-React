import React, { Component } from 'react';
import DynamicCard from '../components/DynamicCard/DynamicCard';

class DynamicSynthesize extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="DynamicSynthesize">
                <DynamicCard />
                <DynamicCard />
                <DynamicCard />
                <DynamicCard />
                <DynamicCard />
                <DynamicCard />
            </div>
         )
    }
}
 
export default DynamicSynthesize;