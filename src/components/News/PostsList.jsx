import React from 'react';
import {Articles} from '../../Data/Articles.js';
import PostItem from './PostItem'

// class
const PostsList = () => {
  return (
        <ul>
          {Articles.map( article => {
            return (
                <PostItem key={article.key} article={article} onclick={() => console.log('boom')} />
            );
          })}
        </ul>
  );
}

export default PostsList;
