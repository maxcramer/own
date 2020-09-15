import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPostList } from '../../../services/firestoreService';

import './SubArticles.css';

function SubArticleOne () {
    const [articles, setArticles] = useState();

    useEffect(() => {
        async function fetchData() {
            const articles = await getPostList();
            setArticles(articles.slice(1, 7));
        }
        fetchData();
    }, [])
        if(articles) {
            return (
                    <ul id="Sub_Article_Container">
                        {articles.map(a => (
                            <li key={a._id} className="single_Sub_Article">
                                <div>
                                            <h2>{a.Title}</h2>
                                            <img className="Sub_Article_Img" src={a.image} alt=""/>
                                            <div className="Sub_Article_Auth_Date">
                                                <h4 className="Sub_Article_name">By {a.Author}</h4> 
                                                <p className="Sub_Article_Date">Uploaded on {new Date(a.date).toDateString()}</p>
                                            </div>
                                            <p className="Sub_Article_Content">{a.Content}</p>     
                                            <Link className="read_more_tag" to={`/postlist/${a._id}`}>Read More</Link>          
                                </div>
                            </li>
                                            
                        ))}
                    </ul>
            )

        } else {
            return <div>Articles Loading</div>
        }
    };

export default SubArticleOne;