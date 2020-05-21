import React from 'react';
import HeadlineArticle from './HeadlineArticle/HeadlineArticle';
import SubArticles from './SubHeadlines/SubHeadlinesComponent';

import './Home.css';

function Home() {
  return (
    <div>
      <h1 className="homepage_title">OneWheel News</h1>
      <HeadlineArticle />
      <SubArticles />
    </div>
  );
}

export default Home;
