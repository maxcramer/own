import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import { getRiderList } from '../../../services/firestoreService';

import IG from '../../../Images/Instagram-Icon.png'

function InterviewThree () {
    const [riderInterviews, setRiderInterviews] = useState();
    const [riderInterview, setRiderInterview] = useState();
    let { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            const riderInterviews = await getRiderList();
            setRiderInterviews(riderInterviews);
            const match = riderInterviews[2];
            setRiderInterview(match);
        }
        fetchData();
    }, [id])
    return (
            <div className="pro_rider_interview">
                <img className="rider_image" src={recentInterviewThree.Logo} alt="" />
                <div className="rider_info">
                    <div className="rider_name_location">
                        <h2 className="rider_name">{recentInterviewThree.Title}</h2>
                        <h6 className="upload_date">Date Uploaded: {recentInterviewThree.dateUpload.toLocaleString()}</h6>
                    </div>
                    <div className="sponsor_location">
                        <h4 className="sponsors">Sponsors: {recentInterviewThree.Sponsonrs}</h4>
                        <h4 className="location">Location: {recentInterviewThree.location}</h4>
                    </div>
                    <p className="interview">{recentInterviewThree.Interview}</p>
                    <Link className="read_interview" to={`/prolist/${recentInterviewThree.id}`}>Read Interview</Link>
                </div>
            </div>
        )
};

export default InterviewThree;