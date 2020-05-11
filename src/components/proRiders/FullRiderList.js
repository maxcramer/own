import React from 'react';
import { Link } from 'react-router-dom';

import {Riders} from '../../Data/Riders';

const FullRiderList = () => (
    <div>
        <ul>
            {
                Riders.all().map(r => (
                    <li key={r.id}>
                        <Link to={`/riderlist/${r.id}`}>{r.name}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)

export default FullRiderList;