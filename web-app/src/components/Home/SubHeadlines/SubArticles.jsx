import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import { getPostList } from '../../../services/firestoreService';

import './SubArticles.css';

function SubArticleOne () {
    const [articles, setArticles] = useState();
    // const [article, setArticle] = useState();
    // let { id } = useParams();

    useEffect(() => {
        async function fetchData() {
            const articles = await getPostList();
            // setArticles(articles);
            // const match = articles[1];
            setArticles(articles);
        }
        fetchData();
    }, [])
        if(articles) {
            return (
                <div>
                    <ul>
                        {articles.map(a => (
                                            <div key={a._id} className="single_Sub_Article">
                                            <h2>{a.Title}</h2>
                                            <img className="Sub_Article_Img" src={a.image} alt=""/>
                                            <div className="Sub_Article_Auth_Date">
                                                <h4 className="Sub_Article_name">By {a.Author}</h4> 
                                                <p className="Sub_Article_Date">Uploaded on {new Date(a.date).toDateString()}</p>
                                            </div>
                                            <p className="Sub_Article_Content">{a.Content}</p>     
                                            <Link className="read_more_tag" to={`/postlist/${a._id}`}>Read More</Link>          
                                        </div>
                        ))}
                    </ul>
                </div>

            )

        } else {
            return <div>Articles Loading</div>
        }
    };

export default SubArticleOne;