import React from 'react';
import { Link } from 'react-router-dom'

import {Riders} from '../../../Data/Riders';
import '../proRiders.css';
import IG from '../../../Images/Instagram-Icon.png'

const Rider = (props) => {
    console.log("Reached the rider page");
    const Rider = Riders.get(
        parseInt(props.match.params.id)
    )
    if(!Rider) {
        return <div>Sorry but no Rider was found</div>
    }
    return (
        <div className="interview_single_page_container">
            <h2>{Rider.name}</h2>
            <div className="interview_single_page_rider_info">
                <h3 className="interview_single_page_font_weight">Sponsorship: {Rider.Sponsonrs}</h3>            
                <h3 className="interview_single_page_font_weight">Location: {Rider.location}</h3>
            </div>
            <div className="interview_single_page_content">
                <img className="interview_single_page_img" src={Rider.Logo} alt="" />
                <p>{Rider.Interview}</p>            
            </div>
            <p>{Rider.dateUpload.toLocaleDateString()}</p>
            <a href={Rider.Ig}>
                <img className="ig_link" src={IG} alt="" />
            </a>
            <Link to={'/prolist'}>Go Back</Link>
        </div>
    )
}

export default Rider;