import React from 'react';
import { Articles } from '../../Data/Articles.js';
import Posts from './Posts';


class SinglePost extends React.Component {
    // super() {}
    constructor(props) {
        super(props)
        // console.log("Running single post component");
        this.state = { readMore: false }

        this.showReadMore = this.showReadMore.bind(this)
    }
    

    showReadMore() {
        this.setState({ readMore: true })
    }

    render() {
        return (
          <ul>
            {Articles.Articles.map((article) => (
                <div key={article.id}>
                  <h3>{article.Title}</h3>
                  <p>{article.Content}</p>
                  <p>{article.Author}</p>
                  {this.state.readMore && (<p>show extra readmore stuff</p>)}
                  <button onClick={this.showReadMore}>ReadMore</button>
                </div>
            ))}
          </ul>
        );
    }
}

export default SinglePost;
