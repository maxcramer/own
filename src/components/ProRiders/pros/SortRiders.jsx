import {Riders} from '../../../Data/Riders';

function sortRiders() {Riders.riders.sort((a, b) => b.dateUpload - a.dateUpload)}

export default sortRiders;