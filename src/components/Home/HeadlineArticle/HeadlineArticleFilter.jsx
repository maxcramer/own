import React from 'react';
import { Articles } from '../../../Data/Articles';

function sortedPostsHeadline() { Articles.articles.sort((a, b) => b.date - a.date) }

export default sortedPostsHeadline;