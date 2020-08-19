import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPostList } from '../../../services/firestoreService';


import firebaseClient from '../../../firebaseClient';
import ConnectedCounter from '../../LikeButton/LikeButton';
import './postStyle.css';

function Post () {
    const [articles, setArticles] = useState();
    const [article, setArticle] = useState();
    let { id } = useParams();

    const LikeButton = ({likes, setLikes}) => (
      <div>
        <button onClick={() => setLikes(likes +1 )}>
          Like
        </button>
      </div>
    );


    useEffect(() => {
        async function fetchData() {
            const articles = await getPostList();
            setArticles(articles);
            const match = articles.find(article => article.id === parseInt(id));
            console.log('match', match);
            setArticle(match);
        }
          fetchData();
    }, [id])

		if(!article) {

			return <div>Article Loading</div>;
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
          <div>
          <p>{article.likes}</p>
          <button>Like</button>
            
          </div>
        </div>
        </div>
      );

    }

}

export default Post;