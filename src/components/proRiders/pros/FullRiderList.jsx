import React from 'react';
import {Link} from 'react-router-dom';

import {Riders} from '../../../Data/Riders';

const FullRiderList = () => (
  <div>
    <ul>
      {
        Riders.all().map(r => (
            <li key={r.id}>
              <h3>{r.location}</h3>
              <Link to={`/prolist/${r.id}`}>{r.name}</Link>
            </li>
        ))
    }
    </ul>
  </div>
);

export default FullRiderList;