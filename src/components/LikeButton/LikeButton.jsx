import React from 'react';
import firebase from 'firebase';

import Like from '../../Images/Facebook-Like-PNG-HD.png';
import './LikeButton.css';

class Counter extends React.Component {
    state = {
        count: 0
    }

    handleClick = () => {
        this.setState(prev => ({ count: prev.count + 1}));
    }

    render() {
        return (
            <div className="like_button_container">
                <button className="like_button" onClick={this.handleClick}>
                    <img className="like_button_img" src={Like} alt=""/>
                </button>
                <p>{this.state.count}</p>
            </div>
        );
    }
}

export default Counter;