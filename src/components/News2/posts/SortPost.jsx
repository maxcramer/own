import React from 'react';
import {Articles} from '../../../Data/Articles';

let SortedList =  Articles.articles.sort((a, b) =>
 new Date(...a.Date.split('-')
 .sort(Date).join().localeCompare(b.Date.split('-').join())));

export default SortedList;