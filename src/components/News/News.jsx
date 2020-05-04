import React from 'react';
import { articles } from '../../Data/Articles';

function News() {
  var Articles = articles;
  // console.log(Articles);
  // for (var i = 0; i < articles.length; i++) {
    //   var obj = articles[i];
    // console.log('Author Name is:', articles.Author);
    return (
      <div>
        <h1>News</h1>
        <ul>
          {Articles.map((id, Author, dateUpload, Title, Content) => {
            console.log(id);
          return <li key={id}>{Articles.Author}</li>;
          })}
        </ul>
      </div>
    );
// }
}

export default News;
 

// NOTES //
// Look into react For Loops (this is currenlty vanilla js for loop)

// id, Author, dateUpload, Title, Content;