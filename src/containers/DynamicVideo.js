import React, { Component } from 'react';
import DynamicCard from '../components/DynamicCard/DynamicCard';

class DynamicVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="DynamicVideo">
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
 
export default DynamicVideo;