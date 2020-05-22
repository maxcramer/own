import React from 'react';

import { Riders } from '../../../Data/Riders';

class InterviewTwo extends React.Component {
    render() {
        const recentInterviewTwo = Riders.riders.sort((a, b) => b.dateUpload - a.dateUpload)[1]
        return (
            <div>
                <h3>{recentInterviewTwo.name}</h3>
                <p>{recentInterviewTwo.dateUpload.toLocaleString()}</p>
                <p>{recentInterviewTwo.location}</p>
            </div>
        )
    }
};

export default InterviewTwo;