import React from 'react';
import {Articles} from '../../../Data/Articles';

// let SortedList =  Articles.articles.sort((a, b) =>
//  new Date(...a.Date.split('-')
//  .sort(Date).join().localeCompare(b.Date.split('-').join())));

// export default SortedList;

function sortedPosts() {
    console.log("sortedPosts function envoked");
    Articles.articles.sort((a, b) => b.date - a.date);

} 

// const dateArray = Articles.articles.date;

// const sortDates = 

export default sortedPosts;