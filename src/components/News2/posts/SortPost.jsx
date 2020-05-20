import React from 'react';
import {Articles} from '../../../Data/Articles';

function sortedPosts() {Articles.articles.sort((a, b) => b.date - a.date)} 

export default sortedPosts;

