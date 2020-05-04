import React from 'react';
import Articles from './Articles';

function News() {
    return (
      <div>
        <h1>News</h1>
        <div>
        <ul>
          < Articles />
        </ul>
        </div>
      </div>
    );
}

export default News;
 

// NOTES //
// Look into react For Loops (this is currenlty vanilla js for loop)

// id, Author, dateUpload, Title, Content;