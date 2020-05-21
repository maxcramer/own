import React from 'react';
import {Link} from 'react-router-dom';

import {Articles} from '../../../Data/Articles';

class SubArticleOne extends React.Component {
    constructor() {
        super();
    }
    render() {
        const recentArticleOne = Articles.articles.sort((a, b) => b.date - a.date)[1]

        return (
            <div>
                <h3>SubArtilce 1</h3>
                <img src={recentArticleOne.image} alt=""/>
                <h2>{recentArticleOne.Title}</h2>
                <h2>{recentArticleOne.Author}</h2>                
            </div>
        )
    }
};

export default SubArticleOne;