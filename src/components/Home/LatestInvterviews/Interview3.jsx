import React from 'react';

import { Riders } from '../../../Data/Riders';

class InterviewThree extends React.Component {
    render() {
        const recentInterviewThree = Riders.riders.sort((a, b) => b.dateUpload - a.dateUpload)[2]
        return (
            <div>
                <h3>{recentInterviewThree.name}</h3>
                <p>{recentInterviewThree.dateUpload.toLocaleString()}</p>
                <p>{recentInterviewThree.location}</p>
            </div>
        )
    }
};

export default InterviewThree;