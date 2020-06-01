import React from 'react';
import {Link} from 'react-router-dom';

import { Riders } from '../../../Data/Riders';
import IG from '../../../Images/Instagram-Icon.png'

class InterviewTwo extends React.Component {
    render() {
        const recentInterviewTwo = Riders.riders.sort((a, b) => b.dateUpload - a.dateUpload)[1]
        return (
          <div className="pro_rider_interview">
            <img className="rider_image" src={recentInterviewTwo.Logo} alt="" />
            <div className="rider_info">
              <div className="rider_name_location">
                <h2 className="rider_name">{recentInterviewTwo.name}</h2>
                <h6 className="upload_date">
                  Date Uploaded:{' '}
                  {recentInterviewTwo.dateUpload.toLocaleString()}
                </h6>
              </div>
              <div className="sponsor_location">
                <h4 className="sponsors">
                  Sponsors: {recentInterviewTwo.Sponsonrs}
                </h4>
                <h4 className="location">
                  Location: {recentInterviewTwo.location}
                </h4>
              </div>
              <p className="interview">{recentInterviewTwo.Interview}</p>
              <Link
                className="read_interview"
                to={`/prolist/${recentInterviewTwo.id}`}
              >
                Read Interview
              </Link>
            </div>
          </div>
        );
    }
};

export default InterviewTwo;