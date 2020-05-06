import React from 'react';
import {Articles} from '../../Data/Articles.js';
import SinglePost from './SinglePost';

function ArticleList() {
  return (
        <ul>
          {Articles.Articles.map( article => {
              console.log(article);
            return (
              <div key={article.id}>
                <h3>{article.Title}</h3>
                <p>{article.Content}</p>
                <p>{article.Author}</p>
                <button onClick={SinglePost}>Read More</button>
              </div>
            );
          })}
        </ul>
  );
}

export default ArticleList;

