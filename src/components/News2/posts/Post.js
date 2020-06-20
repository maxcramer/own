import React from 'react';
import {Link} from 'react-router-dom'

import firebaseClient from '../../../firebaseClient';
import ConnectedCounter from '../../LikeButton/LikeButton';
import './postStyle.css';

class Post extends React.Component {

	state = {
		data: {
			articles: []
		}
	  }

	async componentDidMount() {
		firebaseClient.setup()
		const data = await firebaseClient.loadDatabase();

		this.setState({ data });
	  }

	render() {
		const Post = this.state.data.articles.find(article => article.id = this.props.match.params.id);
		if(!Post) {

			return <div>Sorry, but the Article was not found</div>;
		}

		return (
		  <div className="single_post_page">
			<img className="single_post_img" src={Post.image} alt="" />
			<h1 className="single_post_title">{Post.Title}</h1>
			<div className="single_post_name_upload">
			  <h3 className="single_post_name">By {Post.name}</h3>
			  <h3 className="single_post_name">
				Uploaded {new Date(Post.date.seconds).toLocaleDateString()}
			  </h3>
			</div>
			<p className="single_post_content">{Post.Content}</p>
			<div className="cta_single_post">
			  <Link className="read_more_tag" to={'/postlist'}>
				See All Articles
			  </Link>
			  <ConnectedCounter />
			</div>
		  </div>
		);
	}

}

export default Post;