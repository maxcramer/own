import React from 'react';
import {Link} from 'react-router-dom'

import {Articles} from '../../../Data/Articles';
import ConnectedCounter from '../../LikeButton/LikeButton';
import './postStyle.css';

const Post = (props) => {
    console.log("Reacehd the Post Page");
    const Post = Articles.get(
        parseInt(props.match.params.id)
    )
    if(!Post) {
        return <div>Sorry, but the Article was not found</div>;
    }
    return (
      <div className="single_post_page">
        <img className="single_post_img" src={Post.image} alt="" />
        <h1 className="single_post_title">{Post.Title}</h1>
        <div className="single_post_author_upload">
          <h3 className="single_post_author">By {Post.Author}</h3>
          <h3 className="single_post_author">
            Uploaded {Post.date.toLocaleDateString()}
          </h3>
        </div>
        <p className="single_post_content">{Post.Content}</p>
        <div className="cta_single_post">
          <Link className="read_more_tag" to={'/postlist'}>
            See All Articles
          </Link>
          <ConnectedCounter />
        </div>
      </div>
    );
}

export default Post;