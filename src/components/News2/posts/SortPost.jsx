import React from 'react';
import {Articles} from '../../../Data/Articles';

// let SortedList =  Articles.articles.sort((a, b) =>
//  new Date(...a.Date.split('-')
//  .sort(Date).join().localeCompare(b.Date.split('-').join())));

// export default SortedList;

function sortedPosts() {
    console.log("sortedPosts function is running");
    Articles.articles.sort((a, b) => b.date - a.date);
} 

export default sortedPosts;