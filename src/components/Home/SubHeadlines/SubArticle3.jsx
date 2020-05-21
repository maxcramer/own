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
                <div className="Sub_Article_Auth_Date">
                    <h4>By {subArticleThree.Author}</h4>
                    <p>Uploaded {subArticleThree.date.toLocaleString()}</p>
                </div>
                <p className="Sub_Article_Content">{subArticleThree.Content}</p>  
                <Link className="read_more_tag" to={`/postlist/${subArticleThree.id}`}>Read More</Link> 
            </div>
        )
    }
};

export default SubArticleThree;