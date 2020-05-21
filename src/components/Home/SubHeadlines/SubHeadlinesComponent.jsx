import React from 'react';
import SubArticleOne from './SubArticle1';
import SubArticleTwo from './SubArticle2';
import SubArticleThree from './SubArticle3';
import SubArticleFour from './SubArticle4';
import SubArticleFive from './SubArticle5';
import SubArticleSix from './SubArticle6';
import './SubArticles.css';

function SubArticles() {
    return (
        <div className="Sub_Articles">
            <SubArticleOne />
            <SubArticleTwo />
            <SubArticleThree />
            <SubArticleFour />
            <SubArticleFive />
            <SubArticleSix />
        </div>
    );
}

export default SubArticles;