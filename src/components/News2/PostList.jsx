import React from 'react';
import {Link} from 'react-router-dom';

import {Articles} from '../../Data/Articles';

const PostList = () => (
    <div>
        <ul>
            {
                Articles.all().map(a => (
                    <li key={a.id}>
                        <h3>{a.Title}</h3>
                        <Link to={`/news/${a.id}`}>{a.Author}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)

export default PostList;