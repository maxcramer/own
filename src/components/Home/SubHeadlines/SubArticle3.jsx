import React from 'react'; import { Link } from 'react-router-dom';

import { Articles } from '../../../Data/Articles';
import './SubArticles.css';

class SubArticleThree extends React.Component {
    render() {
        const subArticleThree = Articles.articles.sort((a, b) => b.date - a.date)[3]
        if(subArticleThree) {
            return (
                <div className="single_Sub_Article">
                    <h2>{subArticleThree.Title}</h2>
                    <img className="Sub_Article_Img" src={subArticleThree.image} alt="" />
                    <div className="Sub_Article_Auth_Date">
                        <h4 className="Sub_Article_name">By {subArticleThree.name}</h4>
                        <p className="Sub_Article_Date">Uploaded {subArticleThree.date.toLocaleString()}</p>
                    </div>
                    <p className="Sub_Article_Content">{subArticleThree.Content}</p>  
                    <Link className="read_more_tag" to={`/postlist/${subArticleThree.id}`}>Read More</Link> 
                </div>
            )
        } else {
            return null;
        }
    }
};

export default SubArticleThree;