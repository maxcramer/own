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
                    <img src={recentArticle.image} alt="article image"/>
                </div>
                <div className="headline_text">
                    <h2>Headline</h2>
                    <h3>{recentArticle.Title}</h3>
                    <h3>{recentArticle.Author}</h3>
                    <p>{recentArticle.date.toLocaleString()}</p>
                </div>
            </div>
        )
    }
};

export default HeadlineArticle;