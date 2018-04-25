import React, { Component } from 'react';
import DynamicCard from '../components/DynamicCard/DynamicCard';
import DynamicCardImg from '../components/DynamicCardImg/DynamicCardImg';

class DynamicSynthesize extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="DynamicSynthesize">
                <DynamicCard />
                <DynamicCardImg />
                <DynamicCard />
                <DynamicCard />
                <DynamicCardImg />
                <DynamicCard />
                <DynamicCardImg />
                <DynamicCard />
                <DynamicCardImg />
                <DynamicCard />
            </div>
         )
    }
}
 
export default DynamicSynthesize;