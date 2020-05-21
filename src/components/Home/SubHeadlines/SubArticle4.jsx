import React from 'react';
import { Link } from 'react-router-dom';

import { Articles } from '../../../Data/Articles';
import './SubArticles.css';

class SubArticleFour extends React.Component {
    constructor() {
        super();
    }
    render() {
        const subArticleFour = Articles.articles.sort((a, b) => b.date - a.date)[4]
            return (
                <div className="single_Sub_Article">
                    <h2>{subArticleFour.Title}</h2>
                    <img className="Sub_Article_Img" src={subArticleFour.image} alt="" />
                    <div className="Sub_Article_Auth_Date">
                        <h4>By {subArticleFour.Author}</h4>
                        <p>Uploaded {subArticleFour.date.toLocaleString()}</p>
                    </div>
                    <p className="Sub_Article_Content">{subArticleFour.Content}</p>
                    <Link className="read_more_tag" to={`/postlist/${subArticleFour.id}`}>Read More</Link>
                </div>
            )
    }
};

export default SubArticleFour;