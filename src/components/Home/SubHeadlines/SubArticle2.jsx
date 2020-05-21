import React from 'react';
import { Link } from 'react-router-dom';

import { Articles } from '../../../Data/Articles';

class SubArticleTwo extends React.Component {
    constructor() {
        super();
    }
    render() {
        const subArticleTwo = Articles.articles.sort((a, b) => b.date - a.date)[2]

        return (
            <div>
                <h3>SubArtilce 2</h3>
                <img src={subArticleTwo.image} alt="" />
                <h2>{subArticleTwo.Title}</h2>
                <h2>{subArticleTwo.Author}</h2>
            </div>
        )
    }
};

export default SubArticleTwo;