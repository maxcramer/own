import React from 'react';
import {Link} from 'react-router-dom';

import {Articles} from '../../../Data/Articles';
import './SubArticles.css';

class SubArticleOne extends React.Component {
    render() {
        const recentArticleOne = Articles.articles.sort((a, b) => b.date - a.date)[1]
        if(recentArticleOne) {
            return (
                <div className="single_Sub_Article">
                    <h2>{recentArticleOne.Title}</h2>
                    <img className="Sub_Article_Img" src={recentArticleOne.image} alt=""/>
                    <div className="Sub_Article_Auth_Date">
                        <h4 className="Sub_Article_name">By {recentArticleOne.name}</h4> 
                        <p className="Sub_Article_Date">Uploaded {recentArticleOne.date.toLocaleString()}</p>
                    </div>
                    <p className="Sub_Article_Content">{recentArticleOne.Content}</p>     
                    <Link className="read_more_tag" to={`/postlist/${recentArticleOne.id}`}>Read More</Link>          
                </div>
            )

        } else {
            return null;
        }
    }
};

export default SubArticleOne;