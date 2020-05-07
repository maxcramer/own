import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import {Articles} from '../../Data/Articles';
// import PostItem from './FullPostItem'
import Post from './Post';
import FullPostItem from './FullPostItem';

// class
const PostsList = () => {
  return (
    <Switch>
    <Route exact path='/postList' component={FullPostItem}/>
    <Route path='/news/:article.id' component={Post}/>
  </Switch>
    // <ul>
    //   {Articles.articles.map(article => {
    //     return (
    //       <PostItem
    //         key={article.key}
    //         article={article}
    //         onclick={() => console.log('boom')}
    //       />
    //     );
    //   })}
    // </ul>
  );
}

export default PostsList;
