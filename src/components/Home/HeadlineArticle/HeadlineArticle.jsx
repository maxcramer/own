import React from 'react';
import {Link} from 'react-router-dom';

import {Articles} from '../../../Data/Articles';

class HeadlineArticle extends React.Component {
    constructor() {
        super();
    }
    render() {
        const recentArticle = Articles.articles.sort((a, b) => b.date - a.date)[0]
        
        return (
            <div>
                <h2>Headline</h2>
                <h3>{recentArticle.Title}</h3>
                <h3>{recentArticle.Author}</h3>
                <p>{recentArticle.date.toLocaleString()}</p>
            </div>
        )
    }
};

export default HeadlineArticle;