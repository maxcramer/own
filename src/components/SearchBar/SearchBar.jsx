import React from 'react';
// import axios from 'axios';

// import SearchIcon from '../../Images/search-icon.png';
// import './SearchBar.css';

// class SearchBar extends React.Component {

//     constructor(props) {
//         super(props); 

//         this.state = {
//             query: '',
//             results: {},
//             loading: false,
//             message: ''
//         }

//         this.cancel = '';
//     }

//     fetchSearchResult = (query) => {
//         const searchURL = `localhost:3000${query}`;

//         if( this.cancel ) {
//             this.cancel.cancel()
//         }

//         this.cancel = axios.CancelToken.source();

//         axios.get()
//     }

//     handleOnInputChange = (event) => {
//         const query = event.target.value;
//         this.setState({ query, loading: true, message: '' });
//         // console.log(query);
//     };

//     render() {
//         const { query } = this.state;
//         console.log(this.state);
//         return(
//             <div className="searchBar-container">
//                 {/* <h2 className="searchBar_heading">Live search React</h2> */}
//                 <label className="search-label" htmlFor="search-input">
//                     <input 
//                         type="text"
//                         value={query}
//                         name="query"
//                         id="search-input"
//                         placeholder="Search"
//                         onChange={this.handleOnInputChange}
//                     />
//                     <img id="search-icon" src={SearchIcon} alt=""/>
//                 </label>
//             </div>
//         )
//     }
// }

// export default SearchBar;