import React from 'react';
import SubArticleOne from './SubArticle1';
import SubArticleTwo from './SubArticle2';
import SubArticleThree from './SubArticle3';
import './SubArticles.css';

function SubArticles() {
    return (
        <div className="Sub_Articles">
            <SubArticleOne />
            <SubArticleTwo />
            <SubArticleThree />
        </div>
    );
}

export default SubArticles;