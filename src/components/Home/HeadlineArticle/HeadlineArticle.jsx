import React from 'react';
import {Link} from 'react-router-dom';

import {Articles} from '../../../Data/Articles';
import sortedPostsHeadline from './HeadlineArticleSort';
// import HeadlineFilter from './HeadlineFilter';

class HeadlineArticle extends React.Component {
    constructor() {
        super();
        sortedPostsHeadline();
        // HeadlineFilter();
    }

    render() {
        return (
            <div>
                <h2>Headline</h2>
                {
                    Articles.all().map(a => (
                        <div key={a.id}>
                            <h3>{a.date.toLocaleDateString()}</h3>
                            <h3>{a.Title}</h3>
                        </div>
                    ))
                }
            </div>
        )
    }
};

export default HeadlineArticle;