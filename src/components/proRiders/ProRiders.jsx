import React from 'react';
import { riders } from "../../Data/Riders";

// console.log(riders);

function ProRiders() {
  for (var i = 0; i < riders.length; i++) {
    var obj = riders[i];
    console.log("The pro riders are:", obj.name);
    return (
      <div>
        <h1>Pro Riders</h1>
        <h3>{obj.name}</h3>
      </div>
    );
  }
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
