import React from 'react';
import { Link } from 'react-router-dom';

import { Articles } from '../../../Data/Articles';
import './SubArticles.css';

class SubArticleTwo extends React.Component {
    render() {
        const subArticleTwo = Articles.articles.sort((a, b) => b.date - a.date)[2]
        if(subArticleTwo) {
            return (
                <div className="single_Sub_Article">
                    <h2>{subArticleTwo.Title}</h2>
                    <img className="Sub_Article_Img" src={subArticleTwo.image} alt="" />
                    <div className="Sub_Article_Auth_Date">
                        <h4 className="Sub_Article_Author">By {subArticleTwo.Author}</h4>
                        <p className="Sub_Article_Date">Uploaded {subArticleTwo.date.toLocaleString()}</p>
                    </div>
                    <p className="Sub_Article_Content">{subArticleTwo.Content}</p> 
                    <Link className="read_more_tag" to={`/postlist/${subArticleTwo.id}`}>Read More</Link> 
                </div>
            )

        } else {
            return null;
        }
    }
};

export default SubArticleTwo;