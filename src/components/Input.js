import React, { Component } from 'react';
import './Input.css';

class Input extends Component {
    render() {
        return (
            <div className="input">
                {this.props.childen}
            </div >
        );
    }
}

export default Input;