import React from 'react';

import {Articles} from '../../Data/Articles';

const Post = (props) => {
    console.log("Reacehd the Post Page");
    const Post = Articles.get(
        parseInt(props.match.params.id)
    )
    if(!Post) {
        return <div>Sorry, but the player was not found</div>;
    }
    return (
        <div>
        <h1>THIS is the ARTIcLe PagE</h1>
            <h1>{Post.Title}</h1>
            <h3>{Post.Author}</h3>
            <p>{Post.Content}</p>
        </div>
    )
}

export default Post;