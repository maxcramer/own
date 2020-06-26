import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// import {Riders} from '../../../Data/Riders';
// import sortRiders from './SortRiders';

import firebaseClient from '../../../firebaseClient';
import '../proRiders.css';


class FullRiderList extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        riderInterviews: []
      }
    };
  }


  async componentDidMount(){
    firebaseClient.setup();
    const data = await firebaseClient.loadDatabase();
    data.riderInterviews.sort(function (a, b){
      var dateA = new Date(a.date),
        dateB = new Date(b.date);
      return dateB - dateA;
    });
    this.setState({ data });
  }

  render() {
    return (
      <div>
        <ul className="pro_rider_list">
          {this.state.data.riderInterviews.map(r => (
            <div key={r.Sponsors} className="interview_home_container">
              <li>
                <div className="pro_rider_interview">
                  <img className="rider_image" src={r.Logo} alt="" />
                  <div className="rider_info">
                    <div className="rider_name_location">
                      <h2 className="rider_name">{r.Name}</h2>
                      <p className="upload_date">
                        Date Uploaded: {new Date(r.date).toDateString()}
                      </p>
                    </div>
                    <div className="sponsor_location">
                      <h4 className="sponsors">Sponsors: {r.Sponsors}</h4>
                      <h4 className="location">Location: {r.location}</h4>
                    </div>
                    <p className="interview">{r.Interview}</p>
                    <Link className="read_interview" to={`/prolist/${r.id}`}>
                      Read Interview
                    </Link>
                  </div>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
};

export default FullRiderList;