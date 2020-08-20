import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import { getPostList } from '../../../services/firestoreService'

import './HeadlineArticle.css';

function HeadlineArticle () {
    const [articles, setArticles] = useState();
    const [article, setArticle] = useState();

    useEffect(() => {
        async function fetchData() {
            const articles = await getPostList();
            setArticles(articles);
            const match = articles[0];
            setArticle(match);
        }
        fetchData();
    }, [])
        if(article) {
            return (
                <div className="headline_container">
                    <div>
                        <img className="headline_img" src={article.image} alt="article image"/>
                    </div>
                    <div className="headline_text">
                        <h2 className="headline_title">{article.Title}</h2>
                        <div className="headline_info">
                            <h4 className="mobile_name">By {article.Author}</h4>
                            <p className="mobile_date">Uploaded on {new Date(article.date).toDateString()}</p>
                        </div>
                        <p className="headline_article">{article.Content}</p>
                        <Link className="read_more_tag" to={`/postlist/${article.id}`}>Read More</Link>
    
                    </div>
                </div>
            )

        } else {
            return <div>Articles Loading</div>;
        }
    };

export default HeadlineArticle;