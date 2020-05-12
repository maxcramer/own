import React, {Component} from 'react';
import FullPostList from './posts/FullPostList';

import SortPosts from './posts/SortPost';


class News extends React.Component {
  constructor() {
    super();
    SortPosts();
  }
  render() {
    return (
      <div>
        <h1>News</h1>
        <FullPostList />
      </div>
    );
  }
}

export default News;
