import React from 'react';
import ReactDOM from 'react-dom';

import {Articles} from '../../Data/Articles';

function SearchBar() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
      setSearchTerm(event.target.value);
    };

    React.useEffect(() => {
        const results = Articles.articles.filter(article => 
            article.Title.toString().toLowerCase().includes(searchTerm)
            );
            setSearchResults(results);
    }, [searchTerm])

    return (
      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        <ul>
            {searchResults.map(article => (
                <li>{[article.Title]}</li>
            ))}
        </ul>
      </div>
    );
} 

export default SearchBar;