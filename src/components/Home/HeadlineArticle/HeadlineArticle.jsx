import React from 'react';
import {Link} from 'react-router-dom';

import {Articles} from '../../../Data/Articles';
import './HeadlineArticle.css';

class HeadlineArticle extends React.Component {
    constructor() {
        super();
    }
    render() {
        const recentArticle = Articles.articles.sort((a, b) => b.date - a.date)[0]
        
        return (
            <div className="headline_container">
                <div>
                    <img className="headline_img" src={recentArticle.image} alt="article image"/>
                </div>
                <div className="headline_text">
                    <h2 className="headline_title">{recentArticle.Title}</h2>
                    <div className="headline_info">
                        <h4>Written By {recentArticle.Author}</h4>
                        <p>Uploaded on {recentArticle.date.toLocaleString()}</p>
                    </div>
                    <p className="headline_article">{recentArticle.Content}</p>
                    <Link className="read_more_tag" to={`/postlist/${recentArticle.id}`}>Read More</Link>

                </div>
            </div>
        )
    }
};

export default HeadlineArticle;