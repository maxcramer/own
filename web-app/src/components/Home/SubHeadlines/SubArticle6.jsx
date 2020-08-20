import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import { getPostList } from '../../../services/firestoreService';

import './SubArticles.css';

function SubArticleSix () {
    const [articles, setArticles] = useState();
    const [article, setArticle] = useState();
    let { id } = useParams();
    useEffect(() => {
        async function fetchData() {
            const articles = await getPostList();
            setArticles(articles);
            const match = articles[6];
            setArticle(match);
        }
        fetchData();
    }, [id])
        if (article) {
            return (
                <div className="single_Sub_Article">
                    <h2>{article.Title}</h2>
                    <img className="Sub_Article_Img" src={article.image} alt="" />
                    <div className="Sub_Article_Auth_Date">
                        <h4 className="Sub_Article_name">By {article.Author}</h4>
                        <p className="Sub_Article_Date">Uploaded {new Date(article.date).toDateString()}</p>
                    </div>
                    <p className="Sub_Article_Content">{article.Content}</p>
                    <Link className="read_more_tag" to={`/postlist/${article._id}`}>Read More</Link>
                </div>
            )

        } else {
            return null;
        }
};

export default SubArticleSix;