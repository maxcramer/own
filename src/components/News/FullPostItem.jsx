import React from 'react';
import { Link } from 'react-router-dom';

import { Articles, a, all } from '../../Data/Articles';
// link to - 
const PostsItem = (props) => {
  // console.log(props)
  const { Title, Content, Author } = props.article;
  console.log("this console log", props.article);
  return (
              <div>
                <ul>
                  {
                    Articles.all().map(a => (
                      <li key={a.id}>
                        <Link to={`/articles/${a.id}`}>{a.Title}</Link>
                      </li>
                    ))
                  }
                </ul>
                <h3>{Title}</h3>
                <p>{Content}</p>
                <p>{Author}</p>
                <button onClick={props.onclick}>ReadMore</button>
              </div>

  );
}

export default PostsItem;