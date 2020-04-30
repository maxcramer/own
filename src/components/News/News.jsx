import React from 'react';
import { articles } from '../../Data/Articles';


function News() {
  for (var i = 0; i < articles.length; i++) {
    var obj = articles[i];
    console.table('Author Name is:', obj.Author);
  }
  // console.log('articles author is:', Articles.Author);
  return (
    <div>
      <h1>News</h1>
      <h2>{obj.Title}</h2>
      <h3>{obj.Author}</h3>
      <p>{obj.Content}</p>
    </div>
  );
}

export default News;
