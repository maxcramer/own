import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { getRiderList } from '../../../services/firestoreService';

import firebaseClient from '../../../firebaseClient';
import '../proRiders.css';


function FullRiderList()  {
  const [interviews, setInterviews] = useState();

  useEffect(() => {
    async function fetchData() {
      const interviews = await getRiderList();
      setInterviews(interviews);
    }
    fetchData();
  }, [])
  
  if(interviews) {
    return (
      <div>
        <ul className="pro_rider_list">
          {interviews.map(r => (
            <div key={r.Name} className="interview_home_container">
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
  } else {
    return (
      <p>Loading Interviews</p>
    )
  }
};

export default FullRiderList;