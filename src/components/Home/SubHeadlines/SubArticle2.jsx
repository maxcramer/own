import React from 'react';
import { Link } from 'react-router-dom';

import { Articles } from '../../../Data/Articles';
import './SubArticles.css';

class SubArticleTwo extends React.Component {
    constructor() {
        super();
    }
    render() {
        const subArticleTwo = Articles.articles.sort((a, b) => b.date - a.date)[2]

        return (
            <div className="single_Sub_Article">
                <h2>{subArticleTwo.Title}</h2>
                <img className="Sub_Article_Img" src={subArticleTwo.image} alt="" />
                <h2>{subArticleTwo.Author}</h2>
                <p>{subArticleTwo.Content}</p>  
            </div>
        )
    }
};

export default SubArticleTwo;