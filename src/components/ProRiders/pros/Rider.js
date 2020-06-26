import React from 'react';
import { Link } from 'react-router-dom'

import firebaseClient from '../../../firebaseClient';

import '../proRiders.css';
import IG from '../../../Images/Instagram-Icon.png'

class Rider extends React.Component {
    state = {
        data: {
            riderInterviews: []
        }
    }

    async componentDidMount() {
        firebaseClient.setup()
        const data = await firebaseClient.loadDatabase();

        this.setState({ data });
    }

    render() {
        const riderInterview = this.state.data.riderInterviews.find(
            interview => (interview.id === parseInt(this.props.match.params.id))
        );
        if (!riderInterview) {
          return <div>Sorry but no Rider was found</div>;
        } else {
            return (
              <div className="interview_single_page_container">
                <div className="interview_single_page_title_container">
                  <div className="title_without_date">
                    <h2 className="interview_single_page_name">
                      {riderInterview.Name}
                    </h2>
                    <a
                      className="interview_single_page_ig_link_tag"
                      href={riderInterview.IG}
                    >
                      <img
                        className="interview_single_page_ig_link"
                        src={IG}
                        alt=""
                      />
                    </a>
                  </div>
                  <p className="interview_single_page_upload_date">
                    Uploaded on {new Date(riderInterview.date).toDateString()}
                  </p>
                </div>
                <div className="interview_single_page_rider_info">
                  <h3 className="interview_single_page_font_weight">
                    Sponsorship: {riderInterview.Sponsors}
                  </h3>
                  <h3 className="interview_single_page_font_weight">
                    Location: {riderInterview.location}
                  </h3>
                </div>
                <div className="interview_single_page_content">
                  <img
                    className="interview_single_page_img"
                    src={riderInterview.Logo}
                    alt=""
                  />
                  <p>{riderInterview.Interview}</p>
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

}

export default Rider;