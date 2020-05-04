import React from 'react';
import ArticleList from './Posts';


function News() {
    return (
      <div>
        <h1>News</h1>
        <div>
          <ul>
            <ArticleList />
          </ul>
        </div>
      </div>
    );
}

export default News;
 

// NOTES //
// Look into react For Loops (this is currenlty vanilla js for loop)

// id, Author, dateUpload, Title, Content;