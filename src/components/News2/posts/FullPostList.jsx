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
        <ul class="post_list">
            {
                Articles.all().map(a => (
                    <li key={a.id} className="full_post">
                        <div class="post_header">
                            <h2>{a.Title}</h2>
                            <h3>Written By {a.Author}</h3>
                        </div>
                        <div className="post_content">
                            <img className="post_image" src={a.image} alt="onewheel image"/>
                            <p className="post_article">{a.Content}</p>
                        </div>
                        <p>{a.date.toLocaleDateString()}</p>
                        <Link className="read_more_tag" to={`/postlist/${a.id}`}>Read More</Link>
                    </li>
                ))
            }
        </ul>
    </div>

        )

    }
}

export default FullPostList;



