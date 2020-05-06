import React from 'react';
import { Articles } from '../../Data/Articles.js';
import Posts from './Posts';


class PostPage extends React.Component {
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
              
          </ul>
        );
    }
}

export default  PostPage;
