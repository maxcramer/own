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
        <ul className="post_list">
            {
                Articles.all().map(a => (
                    <li key={a.id} className="full_post">
                        <div className="post_content">
                            <img className="post_image" src={a.image} alt="onewheel image"/>
                            <div className="title_content">
                                <h2 className="post_title">{a.Title}</h2>
                                 <p className="post_article">{a.Content}</p>
                            </div>
                        </div>
                            <div className="about_post">
                                <p className="post_date_author">Written By {a.Author}</p>
                                <p className="post_date_author">Uploaded on {a.date.toLocaleDateString()}</p>
                                <Link className="read_more_tag" to={`/postlist/${a.id}`}>Read More</Link>
                            </div>
                            <div className="post_border"></div>
                    </li>
                ))
            }
        </ul>
    </div>

        )

    }
}

export default FullPostList;



