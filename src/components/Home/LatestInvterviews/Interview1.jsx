import React from 'react';
import {Link} from 'react-router-dom';

import {Riders} from '../../../Data/Riders';
import IG from '../../../Images/Instagram-Icon.png'

import './LatestInterviews.css';

class InterviewOne extends React.Component {
    render() {
        const recentInterview = Riders.riders.sort((a, b) => b.dateUpload - a.dateUpload)[0]
        return (
            <div className="pro_rider_interview">
                <img className="rider_image" src={recentInterview.Logo} alt=""/>
                <div className="rider_info">
                    <div className="rider_name_location">
                        <h2 className="rider_name">{recentInterview.name}</h2>
                        <h6 className="upload_date">Date Uploaded: {recentInterview.dateUpload.toLocaleString()}</h6>
                    </div>
                    <div className="sponsor_location">
                        <h4 className="sponsors">Sponsors: {recentInterview.Sponsonrs}</h4>
                        <h4>Location: {recentInterview.location}</h4>   
                    </div>
                    <p className="interview">{recentInterview.Interview}</p>  
                    <Link className="read_interview" to={`/prolist/${recentInterview.id}`}>Read Interview</Link>
                    <div className="pro_socials">
                        <a href={recentInterview.Ig}>
                            <img className="ig_link" src={IG} alt=""/>
                        </a>
                        <p>{recentInterview.Fb}</p>
                    </div>
                </div>
            </div>
        )
    }
};

export default InterviewOne;