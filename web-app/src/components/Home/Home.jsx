import React from 'react';
import HeadlineArticle from './HeadlineArticle/HeadlineArticle';
import SubArticles from './SubHeadlines/SubArticles';
import LatestInterviews from './LatestInvterviews/LatestInterviews';
import {Link} from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="homepage_container">
      <h1 className="homepage_title">Onewheel News</h1>
      <h5 className="homepage_title">The Home of the Onewheel Community News</h5>
      <div className="articles_div_title">
        <h3 className="latest_news_title">Latest News</h3>
        <Link to="/postlist">
          <h3 className="latest_interviews_title interviews_list_link">All Articles</h3>
        </Link>
      </div>
      <HeadlineArticle />
      <SubArticles />
      <div className="interview_div_title">
      <h3 className="latest_interviews_title">Latest Pro Rider Interviews</h3>
      <Link to="/prolist">
          <h3 className="latest_interviews_title interviews_list_link">All Interviews</h3>
      </Link>
      </div>
      <LatestInterviews />
    </div>
  );
}

export default Home;
