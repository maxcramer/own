import React from 'react';
import FullPostList from './posts/FullPostList';
import { Articles } from '../../Data/Articles';

class News extends React.Component {
  render() {
    return (
      <div>
        <h1>News</h1>
        <FullPostList params={Articles}/>
      </div>
    );
  }
}

export default News;
