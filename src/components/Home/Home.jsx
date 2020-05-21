import React from 'react';
import HeadlineArticle from './HeadlineArticle/HeadlineArticle';
import SubArticles from './SubHeadlines/SubHeadlinesComponent';

import './Home.css';

function Home() {
  return (
    <div>
      <h1 className="homepage_title">OneWheel News</h1>
      <h3 className="latest_news_title">Latest News</h3>
      <HeadlineArticle />
      <SubArticles />
    </div>
  );
}

export default Home;
