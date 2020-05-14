import React from 'react';
import {Link} from 'react-router-dom';

import {Riders} from '../../../Data/Riders';

const FullRiderList = () => (
  <div>
    <ul>
      {
        Riders.all().map(r => (
            <li key={r.id}>
              <h3>Interview with {r.name}</h3>
              <h4>Sponsorship: {r.Sponsonrs}</h4>
              <p>{r.dateUpload.toLocaleDateString()}</p>
              <Link to={`/prolist/${r.id}`}>Read Interview</Link>
            </li>
        ))
    }
    </ul>
  </div>
);

export default FullRiderList;