import React from 'react';

import { Riders } from '../../../Data/Riders';
import IG from '../../../Images/Instagram-Icon.png'


class InterviewThree extends React.Component {
    render() {
        const recentInterviewThree = Riders.riders.sort((a, b) => b.dateUpload - a.dateUpload)[2]
        return (
            <div className="pro_rider_interview">
                <img className="rider_image" src={recentInterviewThree.Logo} alt="" />
                <div className="rider_info">
                    <div className="rider_name_location">
                        <h2 className="rider_name">{recentInterviewThree.name}</h2>
                        <h6 class="upload_date">Date Uploaded: {recentInterviewThree.dateUpload.toLocaleString()}</h6>
                    </div>
                    <div className="sponsor_location">
                        <h4 className="sponsors">Sponsors: {recentInterviewThree.Sponsonrs}</h4>
                        <h4>Location: {recentInterviewThree.location}</h4>
                    </div>
                    <p className="interview">{recentInterviewThree.Interview}</p>
                    <div className="pro_socials">
                        <a href={recentInterviewThree.Ig}>
                            <img className="ig_link" src={IG} alt="" />
                        </a>
                        <p>{recentInterviewThree.Fb}</p>
                    </div>
                </div>
            </div>
        )
    }
};

export default InterviewThree;