import React, { Component } from 'react';
import { string, number } from 'prop-types';

export default class Heart extends Component{
    constructor(props) {
        super(props)
        this.state = {
            fillColor: "red"
        }
    }

    heartClick = (e) => {
        this.setState({
            fillColor: "#AB0202"
        })
    }

    render() {
        const {color, size} = this.props 

        return (
            <svg style={{fill: this.state.fillColor}} onClick={this.heartClick} version="1.1" className="Red" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width={size} height={size} viewBox="0 0 510 510" xmlSpace="preserve" fill={color}>
                <g>
	                <g id="favorite">
		                <path d="M255,489.6l-35.7-35.7C86.7,336.6,0,257.55,0,160.65C0,81.6,61.2,20.4,140.25,20.4c43.35,0,86.7,20.4,114.75,53.55
			            C283.05,40.8,326.4,20.4,369.75,20.4C448.8,20.4,510,81.6,510,160.65c0,96.9-86.7,175.95-219.3,293.25L255,489.6z"/>
	                </g>
                </g>
            </svg>
        )
    }
}

Heart.propTypes = {
    color: string,
    size: number
};

Heart.defaultProps = {
    color: 'red',
    size: 30
};

