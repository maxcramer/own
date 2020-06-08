import React from 'react';

import SearchIcon from '../../Images/search-icon.png';
import './SearchBar.css';

class SearchBar extends React.Component {

    constructor(props) {
        super(props); 

        this.state = {
            query: '',
            results: {},
            loading: false,
            message: ''
        }
    }

    handleOnInputChange = (event) => {
      const query = event.target.value;
      console.log("The query is", query);   
    };

    render() {
        return(
            <div className="searchBar-container">
                {/* <h2 className="searchBar_heading">Live search React</h2> */}
                <label className="search-label" htmlFor="search-input">
                    <input 
                        type="text"
                        value=""
                        id="search-input"
                        placeholder="Search"
                        onChange={this.handleOnInputChange}
                    />
                    <img id="search-icon" src={SearchIcon} alt=""/>
                </label>
            </div>
        )
    }
}

export default SearchBar;