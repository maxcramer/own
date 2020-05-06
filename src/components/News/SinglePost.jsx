import React from 'react';
import { Articles } from '../../Data/Articles.js';


function SinglePost() {
  return (
    <ul>
      {Articles.Articles.id(article => {
        console.log(article);
        return (
          <div key={article.id}>
            <h3>{article.Title}</h3>
            <p>{article.Content}</p>
            <p>{article.Author}</p>
          </div>
        );
      })}
    </ul>
  );
}

export default SinglePost;
