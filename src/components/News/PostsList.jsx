import React from 'react';
import { Articles } from '../../Data/Articles';
import PostItem from './FullPostItem'

// class
const PostsList = () => {
  return (
    <ul>
      {Articles.articles.map(article => {
        return (
          <PostItem
            key={article.key}
            article={article}
            onclick={() => console.log('boom')}
          />
        );
      })}
    </ul>
  );
}

export default PostsList;
