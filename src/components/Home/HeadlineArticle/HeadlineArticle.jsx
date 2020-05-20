import React from 'react';
import {Link} from 'react-router-dom';

import {Articles} from '../../../Data/Articles';
import sortedPostsHeadline from './HeadlineArticleSort';
// import HeadlineFilter from './HeadlineFilter';

class HeadlineArticle extends React.Component {
    constructor() {
        super();
        sortedPostsHeadline();
    }

    render() {
        return (
            <div>
                <h2>Headline</h2>
                {
                    <div key={sortedPostsHeadline.id}>
                        <h3>{sortedPostsHeadline.date.toLocaleDateString()}</h3>
                        <h3>{sortedPostsHeadline.Title}</h3>
                    </div>
                }
            </div>
        )
    }
};

export default HeadlineArticle;