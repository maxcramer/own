import React from 'react';

import {Riders} from '../../../Data/Riders';

import './LatestInterviews.css';

class InterviewOne extends React.Component {
    render() {
        const recentInterview = Riders.riders.sort((a, b) => b.dateUpload - a.dateUpload)[0]
        return (
            <div className="pro_rider_interview">
                <img className="rider_image" src={recentInterview.Logo} alt=""/>
                <div className="rider_info">
                    <div className="rider_name_location">
                        <h3 className="rider_name">{recentInterview.name}</h3>
                        <p>Location: {recentInterview.location}</p>   
                        <p>Date Uploaded: {recentInterview.dateUpload.toLocaleString()}</p>
                    </div>
                    <p className="sponsors">Sponsors: {recentInterview.Sponsonrs}</p>
                    <p className="interview">{recentInterview.Interview}</p>  
                </div>
                {/* <div className="pro_socials">
                    <p>{recentInterview.Ig}</p>
                    <p>{recentInterview.Fb}</p>
                </div> */}
            </div>
        )
    }
};

export default InterviewOne;