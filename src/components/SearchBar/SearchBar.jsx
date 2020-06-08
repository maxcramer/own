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
                    />
                    <img id="search-icon" src={SearchIcon} alt=""/>
                </label>
            </div>
        )
    }
}

export default SearchBar;