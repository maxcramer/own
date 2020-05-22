import React from 'react';

import InterviewOne from './Interview1';
import InterviewTwo from './Interview2';
import InterviewThree from './Interview3';

import './LatestInterviews.css';

function LatestInterviews() {
    return (
        <div className="interview_home_container">
            <InterviewOne />
            <InterviewTwo />
            <InterviewThree />
        </div>
    );
}

export default LatestInterviews;