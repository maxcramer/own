import React from 'react';

import {Riders} from '../../../Data/Riders';

class InterviewOne extends React.Component {
    render() {
        const recentInterview = Riders.riders.sort((a, b) => b.dateUpload - a.dateUpload)[0]
        return (
            <div>
                <h3>{recentInterview.name}</h3>
                <p>{recentInterview.dateUpload.toLocaleString()}</p>
                <p>{recentInterview.location}</p>     
            </div>
        )
    }
};

export default InterviewOne;