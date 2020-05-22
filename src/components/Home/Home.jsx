import React from 'react';
import HeadlineArticle from './HeadlineArticle/HeadlineArticle';
import SubArticles from './SubHeadlines/SubHeadlinesComponent';
import LatestInterviews from './LatestInvterviews/LatestInterviewComponent';

import './Home.css';

function Home() {
  return (
    <div className="homepage_container">
      <h1 className="homepage_title">Onewheel News</h1>
      <h5 className="homepage_title">The Home of the Onewheel Community News</h5>
      <h3 className="latest_news_title">Latest News</h3>
      <HeadlineArticle />
      <SubArticles />
      <h3 className="latest_interviews_title">Latest Pro Rider Interviews</h3>
      <LatestInterviews />
    </div>
  );
}

export default Home;
