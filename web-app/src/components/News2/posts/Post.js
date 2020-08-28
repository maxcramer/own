import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPostList, addLikeToArticle } from '../../../services/firestoreService';
import './postStyle.css';

import Heart from '../../../Images/heart-btn';

function Post () {
    const [article, setArticle] = useState(null);
    const [likeButtonClicked, setLikeButtonClicked] = useState(false);
    let { id } = useParams();

    const onLikeButtonClick = () => {
      addLikeToArticle(id);
      setArticle({
        ...article,
        likes: article.likes + 1
      });
      setLikeButtonClicked(true)
    }

    useEffect(() => {
      const fetchData = async () => {
        const results = await getPostList();
        const match = results.find(article => article._id === id);
        console.log('match: ', match);
        setArticle(match);
      }
      fetchData();
    }, [id])


		if(!article) {
			return <div>Article Loading...</div>;
		} else {
      return (
        <div className="single_post_page">
          <img className="single_post_img" src={article.image} alt="" />
          <h1 className="single_post_title">{article.Title}</h1>
        <div className="single_post_name_upload">
          <h3 className="single_post_name">By {article.Author}</h3>
          <h3 className="single_post_name">
          Uploaded {new Date(article.date).toDateString()}
          </h3>
        </div>
        <p className="single_post_content">{article.Content}</p>
        <div className="cta_single_post">
          <Link className="read_more_tag" to={'/postlist'}>
          See All Articles
          </Link>
          <div className="like_btn_count">
            <button id="like_btn" disabled={likeButtonClicked} onClick={onLikeButtonClick}>
              <Heart />
            </button>
            <p className="artc_likes">{article.likes}</p>
          </div>
        </div>
        </div>
      );
  }
}

export default Post;