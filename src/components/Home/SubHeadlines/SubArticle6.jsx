import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';
import { getPostList } from '../../../services/firestoreService';


import './SubArticles.css';

function SubArticleSix () {
        if (subArticleSix) {
            return (
                <div className="single_Sub_Article">
                    <h2>{subArticleSix.Title}</h2>
                    <img className="Sub_Article_Img" src={subArticleSix.image} alt="" />
                    <div className="Sub_Article_Auth_Date">
                        <h4 className="Sub_Article_name">By {subArticleSix.name}</h4>
                        <p className="Sub_Article_Date">Uploaded {subArticleSix.date.toLocaleString()}</p>
                    </div>
                    <p className="Sub_Article_Content">{subArticleSix.Content}</p>
                    <Link className="read_more_tag" to={`/postlist/${subArticleSix.id}`}>Read More</Link>
                </div>
            )

        } else {
            return null;
        }
};

export default SubArticleSix;