import React from 'react';
import {Articles} from '../../Data/Articles.js';

function ArticleList() {
  return (
    <div>
        <ul>
          {Articles.Articles.map( article => {
              console.log(article);
            return (
              <div key={article.id}>
                <p>{article.content}</p>
                <p>{article.author}</p>
              </div>
            );
          })};
        </ul>
    </div>
  );
}

export default ArticleList;



// Articles.map(function(Article, id, author) {
//   console.log(Article);
//   // return <Article key={Article.id} />;
// });