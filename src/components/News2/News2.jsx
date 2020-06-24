import React from 'react';
import FullPostList from './posts/FullPostList';
import { Articles } from '../../Data/Articles';
// import firebaseClient from '../../../firebaseClient';

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
