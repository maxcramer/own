import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import { getRiderList } from '../../../services/firestoreService';

import firebaseClient from '../../../firebaseClient';

import '../proRiders.css';
import IG from '../../../Images/Instagram-Icon.png'

function Rider () {
    const [riders, setRiders] = useState();
    const [rider, setRider] = useState();
    let { id } = useParams();

    useEffect(() => {
      async function fetchData() {
        const riders = await getRiderList();
        setRiders(riders);
        const match = riders.find(rider => rider.id === parseInt(id));
        console.log('match', match);
        setRider(match);
      }
      fetchData();
    }, [id])

        if (!rider) {
          return <div>Sorry but no Rider was found</div>;
        } else {
            return (
              <div className="interview_single_page_container">
                <div className="interview_single_page_title_container">
                  <div className="title_without_date">
                    <h2 className="interview_single_page_name">
                      {rider.Name}
                    </h2>
                    <a
                      className="interview_single_page_ig_link_tag"
                      href={rider.IG}
                    >
                      <img
                        className="interview_single_page_ig_link"
                        src={IG}
                        alt=""
                      />
                    </a>
                  </div>
                  <p className="interview_single_page_upload_date">
                    Uploaded on {new Date(rider.date).toDateString()}
                  </p>
                </div>
                <div className="interview_single_page_rider_info">
                  <h3 className="interview_single_page_font_weight">
                    Sponsorship: {rider.Sponsors}
                  </h3>
                  <h3 className="interview_single_page_font_weight">
                    Location: {rider.location}
                  </h3>
                </div>
                <div className="interview_single_page_content">
                  <img
                    className="interview_single_page_img"
                    src={rider.Logo}
                  />
                  <p>{rider.Interview}</p>
                </div>
                <div className="interview_single_page_cta">
                  <Link className="under_article_nav_button" to={'/prolist'}>
                    All Interviews
                  </Link>
                </div>
              </div>
            );

        }

}

export default Rider;