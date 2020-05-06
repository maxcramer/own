import React from 'react';
import { Articles } from '../../Data/Articles.js';
import Posts from './Posts';


function SinglePost(props) {
    console.log("Running single post component");
  return (
    <ul>
        <p>SINGLE POST PAGE</p>
      {/* {Articles.Articles.filter(article => {
        console.log(article.id);
        return (
          <div key={props.article.id}>
            <h3>{props.article.Title}</h3>
            <p>{props.article.Content}</p>
            <p>{props.article.Author}</p>
          </div>
        );
      })} */}
    </ul>
  );
}

export default SinglePost;
