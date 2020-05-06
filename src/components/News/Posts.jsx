import React from 'react';
import {Articles} from '../../Data/Articles.js';
import { Link } from 'react-router-dom';


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
                <Link to="/articles/article{id}">
                  Read More
                </Link>
              </div>
            );
          })}
        </ul>
  );
}

export default ArticleList;

