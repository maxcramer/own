import React from 'react';
import { Link } from 'react-router-dom';

import { Articles } from '../../../Data/Articles';
import './SubArticles.css';

class SubArticleFive extends React.Component {
    constructor() {
        super();
    }
    render() {
        const subArticleFive = Articles.articles.sort((a, b) => b.date - a.date)[5]
            if(Articles.articles.length > 4) {
            return (
                    <div className="single_Sub_Article">
                        <h2>{subArticleFive.Title}</h2>
                        <img className="Sub_Article_Img" src={subArticleFive.image} alt="" />
                        <div className="Sub_Article_Auth_Date">
                            <h4>By {subArticleFive.Author}</h4>
                            <p>Uploaded {subArticleFive.date.toLocaleString()}</p>
                        </div>
                        <p className="Sub_Article_Content">{subArticleFive.Content}</p>
                        <Link className="read_more_tag" to={`/postlist/${subArticleFive.id}`}>Read More</Link>
                    </div>
                )

        } else {
            return null;
        }
        }    
    } 


export default SubArticleFive;