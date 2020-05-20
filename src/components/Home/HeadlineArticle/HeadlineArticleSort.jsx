import React from 'react';
import { Articles } from '../../../Data/Articles';

function sortedPostsHeadline() { Articles.articles.map(a => (
    Articles.articles.sort((a, b) => b.date - a.date) 
))}

export default sortedPostsHeadline;