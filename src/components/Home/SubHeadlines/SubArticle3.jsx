import React, { useState, useEffect } from 'react'; 
import { Link, useParams } from 'react-router-dom';
import { getPostList } from '../../../services/firestoreService';

import './SubArticles.css';

function SubArticleThree () {
    
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
};

export default SubArticleThree;