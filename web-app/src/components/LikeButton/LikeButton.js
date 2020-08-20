import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPostList } from '../../services/firestoreService';

import firebaseClient from '../../firebaseClient';


function ArticlesLikeButton () {
  const [articles, setArticles] = useState();
  const [article, setArticle] = useState();
  let { id } = useParams();
  const [likes, setLikes] = useState();
  const [like, setLike] = useState();

  useEffect(() => {
    async function fetchData() {
      const articles = await getPostList();
      setArticles(articles);
      const match = articles.find(article => article.id === parseInt(id));
      console.log('trying to console log article likes', match.likes) 
      setArticle(match);  
   
    }
    
    fetchData();
  }, [id])

  return (
    <div>
  {/* <p>{setArticles.likes}</p> */}
  <button>
    this is a button
  </button>
</div>
  )
}

export default ArticlesLikeButton;