import React, { Component } from 'react';
import './IconItem_style.scss';

class IconItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="IconItem">
                <img src={`/icon/${this.props.title}.png`} />
                <p>{this.props.title}</p>
            </div>
        )
    }
}
 
export default IconItem;