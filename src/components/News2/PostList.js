import React from 'react';
import { Switch, Route } from 'react-router-dom';

import FullPostList from './FullPostList';
import Post from './Post';

const PostList = () => (
    <Switch>
      <Route exact path='/postlist' component={FullPostList}/>
      <Route path='/postlist/:id' component={Post}/>
    </Switch>
)

export default PostList; 



