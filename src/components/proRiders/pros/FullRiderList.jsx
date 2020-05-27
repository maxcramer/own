import React from 'react';
import {Link} from 'react-router-dom';

import {Riders} from '../../../Data/Riders';
import sortRiders from './SortRiders';
import IG from '../../../Images/Instagram-Icon.png';
import '../proRiders.css';


class FullRiderList extends React.Component {
  constructor() {
    super();
    sortRiders();
  }
  render() {
    return (
  <div>
    <ul>
      {
        Riders.all().map(r => (
            <div className="interview_home_container">
              <li key={r.id}>
                <div className="pro_rider_interview">
                  <img className="rider_image" src={r.Logo} alt="" />
                  <div className="rider_info">
                    <div className="rider_name_location">
                      <h2 className="rider_name">{r.name}</h2>
                      <h6 class="upload_date">Date Uploaded: {r.dateUpload.toLocaleString()}</h6>
                    </div>
                    <div className="sponsor_location">
                      <h4 className="sponsors">Sponsors: {r.Sponsonrs}</h4>
                      <h4>Location: {r.location}</h4>
                    </div>
                    <p className="interview">{r.Interview}</p>
                    <Link className="read_interview" to={`/prolist/${r.id}`}>Read Interview</Link>
                    <div className="pro_socials">
                      <a href={r.Ig}>
                        <img className="ig_link" src={IG} alt="" />
                      </a>
                      <p>{r.Fb}</p>
                    </div>
                  </div>
                </div>
              </li>
            </div>
        ))
    }
    </ul>
  </div>
    )
  }
};

export default FullRiderList;