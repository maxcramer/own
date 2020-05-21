import React from 'react';
import {Link} from 'react-router-dom';

import {Articles} from '../../../Data/Articles';
import './SubArticles.css';

class SubArticleOne extends React.Component {
    constructor() {
        super();
    }
    render() {
        const recentArticleOne = Articles.articles.sort((a, b) => b.date - a.date)[1]

        return (
            <div className="single_Sub_Article">
                <h2>{recentArticleOne.Title}</h2>
                <img className="Sub_Article_Img" src={recentArticleOne.image} alt=""/>
                <div className="Sub_Article_Auth_Date">
                    <h4>By {recentArticleOne.Author}</h4> 
                    <p>Uploaded {recentArticleOne.date.toLocaleString()}</p>
                </div>
                <p className="Sub_Article_Content">{recentArticleOne.Content}</p>     
                <Link className="read_more_tag" to={`/postlist/${recentArticleOne.id}`}>Read More</Link>          
            </div>
        )
    }
};

export default SubArticleOne;