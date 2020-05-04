import React from 'react';
import {Riders} from '../../Data/Riders.js';

function RiderList() {
    return (
        <ul>
            {Riders.Riders.map( rider => {
                return (
                    <div key={rider.id}>
                        <h3>{rider.name}</h3>
                    </div>
                )
            })}
        </ul>
    );
}

export default RiderList