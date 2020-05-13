import React from 'react';
import {Link} from 'react-router-dom';

import {Articles} from '../../../Data/Articles';
import sortedPosts from './SortPost';
import './postStyle.css';

class FullPostList extends React.Component {
    constructor() {
        super();
        sortedPosts();
    }
    render() {
        return (
    <div>
        <ul>
            {
                Articles.all().map(a => (
                    <li key={a.id}>
                        <div class="post_header">
                            <h2>{a.Title}</h2>
                            <h3>Written By {a.Author}</h3>
                        </div>
                        <p>{a.date.toLocaleDateString()}</p>
                        <Link to={`/postlist/${a.id}`}>Read More</Link>
                    </li>
                ))
            }
        </ul>
    </div>

        )

    }
}

export default FullPostList;



