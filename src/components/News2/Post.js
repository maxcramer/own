import React from 'react';
import { Link } from 'react-router-dom';

import {Articles} from '../../Data/Articles';

const Post = (props) => {
    console.log("Reacehd the Post Page");
    const post = Articles.get(
        parseInt(props.match.params.id)
    )
    if(!post) {
        return <div>Sorry, but the player was not found</div>;
    }
    return (
        <div>
            <h1>{post.Title}</h1>
            <h3>{post.Author}</h3>
            <p>{post.content}</p>
        </div>
    )
}

export default Post;