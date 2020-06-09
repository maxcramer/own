import React from 'react';
import ReactDOM from 'react-dom';

import {Articles} from '../../Data/Articles';
import {Riders} from '../../Data/Riders';

function SearchBar() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
      setSearchTerm(event.target.value);
    };

    React.useEffect(() => {
        const results = Articles.articles.filter(
          article =>
            article.Title.toString()
              .toLowerCase()
              .includes(searchTerm.toLocaleLowerCase()) ||
            article.Author.toString()
              .toLowerCase()
              .includes(searchTerm.toLocaleLowerCase()) ||
            article.date
              .toString()
              .toLowerCase()
              .includes(searchTerm.toLocaleLowerCase()) ||
            article.Content.toString()
              .toLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
        );
            setSearchResults(results);
    }, [searchTerm])

    if(searchTerm) {
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
                <li key={article.id}>
                {[article.Title]}
                {[article.Author]}
              </li>
            ))}
          </ul>
            </div>
        );
    }


    return (
      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        
      </div>
    );
} 

export default SearchBar;