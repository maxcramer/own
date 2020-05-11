import React from 'react';
import { Link } from 'react-router-dom'

import {Riders} from '../../Data/Riders';

const Rider = (props) => {
    console.log("Reached the rider page");
    const Rider = Riders.get(
        parseInt(props.match.params.id)
    )
    if(!Rider) {
        return <div>Sorry but no Rider was found</div>
    }
    return (
        <div>
            <h1>Pro rider single page </h1>
            <h2>{Rider.name}</h2>
            <h3>{Rider.location}</h3>
            <Link to={'/prolist'}>Go Back</Link>
        </div>
    )
}

export default Rider;