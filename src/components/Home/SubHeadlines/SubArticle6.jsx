import React from 'react';
import { Link } from 'react-router-dom';

import { Articles } from '../../../Data/Articles';
import './SubArticles.css';

class SubArticleSix extends React.Component {
    render() {
        const subArticleSix = Articles.articles.sort((a, b) => b.date - a.date)[6]
        if (subArticleSix) {
            return (
                <div className="single_Sub_Article">
                    <h2>{subArticleSix.Title}</h2>
                    <img className="Sub_Article_Img" src={subArticleSix.image} alt="" />
                    <div className="Sub_Article_Auth_Date">
                        <h4 className="Sub_Article_Author">By {subArticleSix.Author}</h4>
                        <p className="Sub_Article_Date">Uploaded {subArticleSix.date.toLocaleString()}</p>
                    </div>
                    <p className="Sub_Article_Content">{subArticleSix.Content}</p>
                    <Link className="read_more_tag" to={`/postlist/${subArticleSix.id}`}>Read More</Link>
                </div>
            )

        } else {
            return null;
        }
    }
};

export default SubArticleSix;