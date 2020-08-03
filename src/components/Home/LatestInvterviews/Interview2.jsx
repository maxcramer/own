import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import { getRiderList } from '../../../services/firestoreService';

import IG from '../../../Images/Instagram-Icon.png'

function InterviewTwo () {
  const [riderInterviews, setRiderInterviews] = useState();
  const [riderInterview, setRiderInterview] = useState();
  let { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const riderInterviews = await getRiderList();
      setRiderInterviews(riderInterviews);
      const match = riderInterviews[1];
      setRiderInterview(match);
    }
    fetchData();
  }, [id])

  if(riderInterview) {
    return (
      <div className="pro_rider_interview">
        <img className="rider_image" src={riderInterview.Logo} alt="" />
        <div className="rider_info">
          <div className="rider_name_location">
            <h2 className="rider_name">{riderInterview.Name}</h2>
            <h6 className="upload_date">Date Uploaded: {new Date(riderInterview.date).toDateString()}</h6>
          </div>
          <div className="sponsor_location">
            <h4 className="sponsors">
              Sponsors: {riderInterview.Sponsonrs}
            </h4>
            <h4 className="location">
              Location: {riderInterview.location}
            </h4>
          </div>
          <p className="interview">{riderInterview.Interview}</p>
          <Link
            className="read_interview"
            to={`/prolist/${riderInterview.id}`}
          >
            Read Interview
          </Link>
        </div>
      </div>
    );
  } else {
    return <div>Latest rider interview loading</div>
}
};

export default InterviewTwo;