import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import { getRiderList } from '../../../services/firestoreService';

import './LatestInterviews.css';
import IG from '../../../Images/Instagram-Icon.png'

function InterviewOne () {
    const [interviews, setInterviews] = useState();

    useEffect(() => {
        async function fetchData() {
            const interviews = await getRiderList();
            setInterviews(interviews.slice(0, 3));
        }
        fetchData();
    }, [])
    
    if(interviews) {
        return (
            <div>
                <ul>
                    {interviews.map(r => (
                        <div key={r._id} className="pro_rider_interview">
                            <li>
                            <img className="rider_image" src={r.Logo} alt=""/>
                        <div className="rider_info">
                            <div className="rider_name_location">
                                <h2 className="rider_name">{r.Name}</h2>
                                <h6 className="upload_date">Date Uploaded: {new Date(r.date).toDateString()}</h6>
                            </div>
                            <div className="sponsor_location">
                                <h4 className="sponsors">Sponsors: {r.Sponsors}</h4>
                                <h4 className="location">Location: {r.location}</h4>   
                            </div>
                            <p className="interview">{r.Interview}</p>  
                            <Link className="read_interview" to={`/prolist/${r._id}`}>Read Interview</Link>
                        </div>
                            </li>
                    </div>
        ))}
                </ul>
            </div>
            
        )
    } else {
        return <div>Latest rider interview loading</div>
    }

};

export default InterviewOne;