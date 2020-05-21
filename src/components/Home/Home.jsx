import React from 'react';
import HeadlineArticle from './HeadlineArticle/HeadlineArticle';
import SubArticles from './SubHeadlines/SubHeadlinesComponent';

function Home() {
  return (
    <div>
      <h1>OneWheel News Home Page</h1>
      <HeadlineArticle />
      <SubArticles />
    </div>
  );
}

export default Home;
