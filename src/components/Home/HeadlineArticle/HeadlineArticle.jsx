import React from 'react';
import {Link} from 'react-router-dom';

import {Articles} from '../../../Data/Articles';

class HeadlineArticle extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <h2>Headline</h2>
                {
                    Articles.all().map(a => (
                        <div key={a.id}>
                            <h3>{a.Title}</h3>
                        </div>
                    ))
                }
            </div>
        )
    }
};

export default HeadlineArticle;