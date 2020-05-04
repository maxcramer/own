import React from 'react';
import { Articles } from '../../Data/Articles';

function Article() {
  return (
    <div>
        <ul>
          {Articles.map(function(article) {
              console.log(Articles);
            return <Article author={article.author} content={article.content} key={article.id}/>;
          })};
        </ul>
    </div>
  );
}

export default Article;



// Articles.map(function(Article, id, author) {
//   console.log(Article);
//   // return <Article key={Article.id} />;
// });