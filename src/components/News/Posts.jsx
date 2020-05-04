import React from 'react';
import {Articles} from '../../Data/Articles.js';

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
              </div>
            );
          })}
        </ul>
  );
}

export default ArticleList;



// Articles.map(function(Article, id, author) {
//   console.log(Article);
//   // return <Article key={Article.id} />;
// });