import React, { Component } from 'react';
import DynamicCard from '../components/DynamicCard/DynamicCard';

class DynamicHot extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="DynamicHot">
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
 
export default DynamicHot;