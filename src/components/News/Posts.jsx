import React from 'react';
import {Articles} from '../../Data/Articles.js';
import SinglePost from './SinglePost';

function ArticleList() {
  return (
        <ul>
              <div>
                <SinglePost />
              </div>
        </ul>
  );
}

export default ArticleList;

