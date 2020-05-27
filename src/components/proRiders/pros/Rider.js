import React from 'react';
import { Link } from 'react-router-dom'

import LikeButton from '../../LikeButton/LikeButton';
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
            <div className="interview_single_page_title_container">
                <div className="title_without_date">
                    <h2 className="interview_single_page_name">{Rider.name}</h2>
                    <a className="interview_single_page_ig_link_tag" href={Rider.Ig}>
                        <img className="interview_single_page_ig_link" src={IG} alt="" />
                    </a>
                </div> 
                <p className="interview_single_page_upload_date">Uploaded on {Rider.dateUpload.toLocaleDateString()}</p>
            </div>
            <div className="interview_single_page_rider_info">
            <h3 className="interview_single_page_font_weight">Sponsorship: {Rider.Sponsonrs}</h3>            
            <h3 className="interview_single_page_font_weight">Location: {Rider.location}</h3>
            </div>
            <div className="interview_single_page_content">
                <img className="interview_single_page_img" src={Rider.Logo} alt="" />
                <p>{Rider.Interview}</p>            
            </div>
            <Link className="under_article_nav_button" to={'/prolist'}>All Interviews</Link>
            <LikeButton />
        </div>
    )
}

export default Rider;