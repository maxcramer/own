import React from 'react';
import {Link} from 'react-router-dom';

import {Articles} from '../../Data/Articles';

const FullPostList = () => (
    <div>
        <ul>
            {
                Articles.all().map(a => (
                    <li key={a.id}>
                        <h3>{a.Title}</h3>
                        <Link to={`/postlist/${a.id}`}>{a.Author}</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)

export default FullPostList;



