import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import { getPostList } from '../../../services/firestoreService'

// import {Articles} from '../../../Data/Articles';
import './HeadlineArticle.css';

function HeadlineArticle () {
    const [articles, setArticles] = useState();
    const [article, setArticle] = useState();
    let { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            const articles = await getPostList();
            setArticles(articles);
            const match = articles.find(article => article.id === parseInt(id)[0]);
            console.log('match top article', match);
            setArticle(match);
        }
        fetchData();
    }, [id])

        // const firstArticle = article.sort((a, b) => b.date - a.date)[0]
        if(article) {
            return (
                <div className="headline_container">
                    <div>
                        <img className="headline_img" src={article.image} alt="article image"/>
                    </div>
                    <div className="headline_text">
                        <h2 className="headline_title">{article.Title}</h2>
                        <div className="headline_info">
                            <h4 className="mobile_name">By {article.name}</h4>
                            <p className="mobile_date">Uploaded on {article.date.toLocaleString()}</p>
                        </div>
                        <p className="headline_article">{article.Content}</p>
                        <Link className="read_more_tag" to={`/postlist/${article.id}`}>Read More</Link>
    
                    </div>
                </div>
            )

        } else {
            return null;
        }
    };

export default HeadlineArticle;