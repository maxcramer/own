import React from 'react';
import {Link} from 'react-router-dom';

import firebaseClient from '../../../firebaseClient';
import './postStyle.css';

class FullPostList extends React.Component {
	state = {
		data: {
			articles: []
		}
    }
    
	async componentDidMount() {
        firebaseClient.setup()
		const data = await firebaseClient.loadDatabase();
		// console.log('data: ', data);
        this.setState({ data });
        data.articles.sort((a, b) => b.date - a.date);
      }
      
      
      render() {
          return (
              <div>
        <ul className="post_list">
            {
                this.state.data.articles.map(a => (
                    <li key={a.Author} className="full_post">
                        <div className="post_content">
                            <img className="post_image" src={a.image} alt="onewheel image"/>
                            <div className="title_content">
                                <h2 className="post_title">{a.Title}</h2>
                                 <p className="post_article">{a.Content}</p>
                            </div>
                        </div>
                            <div className="about_post">
                                <p className="post_date_name">Written By {a.Author}</p>
                                <p className="post_date_name">Uploaded on {new Date(a.date.seconds).toLocaleDateString()}</p>
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



