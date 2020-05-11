import React from 'react';

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
        </div>
    )
}

export default Rider;