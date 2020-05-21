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
                <div className="Sub_Article_Auth_Date">
                    <h4>By {subArticleTwo.Author}</h4>
                    <p>Uploaded {subArticleTwo.date.toLocaleString()}</p>
                </div>
                <p className="Sub_Article_Content">{subArticleTwo.Content}</p>  
            </div>
        )
    }
};

export default SubArticleTwo;