import React, {Component} from './node_modules/react';
import {Link} from './node_modules/react-router-dom';

import {Riders} from '../../../Data/Riders';
import sortRiders from './SortRiders';
import IG from '../../../Images/Instagram-Icon.png';
import '../proRiders.css';


class FullRiderList extends Component {
  constructor() {
    super();
    sortRiders();
  }
  render() {
    return (
  <div>
    <ul className="pro_rider_list">
      {
        Riders.all().map(r => (
            <div key={r.id} className="interview_home_container">
              <li>
                <div className="pro_rider_interview">
                  <img className="rider_image" src={r.Logo} alt="" />
                  <div className="rider_info">
                    <div className="rider_name_location">
                      <h2 className="rider_name">{r.Title}</h2>
                      <h6 className="upload_date">Date Uploaded: {r.dateUpload.toLocaleString()}</h6>
                    </div>
                    <div className="sponsor_location">
                      <h4 className="sponsors">Sponsors: {r.Sponsonrs}</h4>
                      <h4 className="location">Location: {r.location}</h4>
                    </div>
                    <p className="interview">{r.Interview}</p>
                    <Link className="read_interview" to={`/prolist/${r.id}`}>Read Interview</Link>
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