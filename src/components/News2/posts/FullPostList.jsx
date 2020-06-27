import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPostList } from '../../../services/firestoreService';

import firebaseClient from '../../../firebaseClient';
import './postStyle.css';

function FullPostList() {
//   constructor() {
//     super();
//     this.state = {
//       data: {
//         articles: []
//       }
//     };
//   }

    const [articles, setArticles] = useState();

    useEffect(() => {
        async function fetchData() {
            const articles = await getPostList();
            setArticles(articles);
            console.log("running")
        }
        fetchData();
    })
if(articles) {

    return (
      <div>
        <ul className="post_list">
          {articles.map(a => (
            <li key={a.Author} className="full_post">
              <div className="post_content">
                <img
                  className="post_image"
                  src={a.image}
                  alt="onewheel_image"
                />
                <div className="title_content">
                  <h2 className="post_title">{a.Title}</h2>
                  <p className="post_article">{a.Content}</p>
                </div>
              </div>
              <div className="about_post">
                <p className="post_date_name">Written By {a.Author}</p>
                <p className="post_date_name">
                  Uploaded on {new Date(a.date).toDateString()}
                </p>
                <Link className="read_more_tag" to={`/postlist/${a.id}`}>
                  Read More
                </Link>
              </div>
              <div className="post_border"></div>
            </li>
          ))}
        </ul>
      </div>
    );
} else {
    return (
        <p>Loading Articles</p>
    )
}
}

export default FullPostList;



