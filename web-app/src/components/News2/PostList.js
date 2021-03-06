import React from 'react';
import { Switch, Route } from 'react-router-dom';

import News from './News2';
import Post from './posts/Post';

const PostList = () => (
    <Switch>
      <Route exact path='/postlist' component={News}/>
      <Route path='/postlist/:id' component={Post}/>
    </Switch>
)

export default PostList; 



