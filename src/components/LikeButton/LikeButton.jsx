import React from 'react';

class Counter extends React.Component {
    state = {
        count: 0
    }

    handleClick = () => {
        this.setState(prev => ({ count: prev.count + 1}));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                </button>
                <p>{this.state.count}</p>
            </div>
        );
    }
}

export default Counter;