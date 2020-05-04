import React from 'react';
import RiderList from './RiderDetails';

function ProRiders() {
  return (
    <div>
      <h2>Pro Riders</h2>
      <div>
        <ul>
          <RiderList />
        </ul>
      </div>
    </div>
  )
}

export default ProRiders;



// import React from 'react';
// import { articles } from '../../Data/Articles';

// // var data = require('../../Data/Articles');

// function News() {
//   for (var i = 0; i < articles.length; i++) {
//     var obj = articles[i];
//     console.log('Name: ' + obj.Author);
//   }
//   // console.log('articles author is:', Articles.Author);
//   return (
//     <div>
//       <h1>News</h1>
//     </div>
//   );
// }

// export default News;
