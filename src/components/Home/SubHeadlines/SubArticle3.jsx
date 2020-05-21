import React from 'react';
import { Link } from 'react-router-dom';

import { Articles } from '../../../Data/Articles';

class SubArticleThree extends React.Component {
    constructor() {
        super();
    }
    render() {
        const subArticleThree = Articles.articles.sort((a, b) => b.date - a.date)[3]

        return (
            <div>
                <h3>SubArtilce 2</h3>
                <img src={subArticleThree.image} alt="" />
                <h2>{subArticleThree.Title}</h2>
                <h2>{subArticleThree.Author}</h2>
            </div>
        )
    }
};

export default SubArticleThree;