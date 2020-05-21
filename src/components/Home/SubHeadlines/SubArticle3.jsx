import React from 'react';
import { Link } from 'react-router-dom';

import { Articles } from '../../../Data/Articles';
import './SubArticles.css';

class SubArticleThree extends React.Component {
    constructor() {
        super();
    }
    render() {
        const subArticleThree = Articles.articles.sort((a, b) => b.date - a.date)[3]

        return (
            <div className="single_Sub_Article">
                <h2>{subArticleThree.Title}</h2>
                <img className="Sub_Article_Img" src={subArticleThree.image} alt="" />
                <h2>{subArticleThree.Author}</h2>
                <p>{subArticleThree.Content}</p>  
            </div>
        )
    }
};

export default SubArticleThree;