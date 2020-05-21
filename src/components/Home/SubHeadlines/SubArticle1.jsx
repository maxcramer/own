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
                <h2>{recentArticleOne.Author}</h2> 
                <p>{recentArticleOne.Content}</p>               
            </div>
        )
    }
};

export default SubArticleOne;