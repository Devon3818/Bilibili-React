import React, { Component } from 'react';
import Banner from '../components/Banner/Banner'
import Card from '../components/Card/Card';
import './Recommend_style.scss';

class Recommend extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() { 

        return ( 
            <div className="Recommend">
                <Banner/>
                <div className="cards">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
         )
    }
}
 
export default Recommend;