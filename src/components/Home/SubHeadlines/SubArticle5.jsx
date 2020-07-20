import React from 'react';
import { Link } from 'react-router-dom';

import './SubArticles.css';

function SubArticleFive () {

    
            if(subArticleFive) {
            return (
                    <div className="single_Sub_Article">
                        <h2>{subArticleFive.Title}</h2>
                        <img className="Sub_Article_Img" src={subArticleFive.image} alt="" />
                        <div className="Sub_Article_Auth_Date">
                            <h4 className="Sub_Article_name">By {subArticleFive.name}</h4>
                            <p className="Sub_Article_Date">Uploaded {subArticleFive.date.toLocaleString()}</p>
                        </div>
                        <p className="Sub_Article_Content">{subArticleFive.Content}</p>
                        <Link className="read_more_tag" to={`/postlist/${subArticleFive.id}`}>Read More</Link>
                    </div>
                )
        } else {
            return null;
        }
};    


export default SubArticleFive;