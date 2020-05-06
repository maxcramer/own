import React from 'react';
import Posts from './PostsList';


function News() {
    return (
      <div>
        <h1>News</h1>
        <div>
          <ul>
            <Posts />
          </ul>
        </div>
      </div>
    );
}

export default News;
