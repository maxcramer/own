import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import SearchImg from '../../Images/search-icon.png';
import { Articles } from '../../Data/Articles';
import { Riders } from '../../Data/Riders';

import './SearchBar.css';

function SearchBar() {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  function clearSearch() {
    document.getElementById('list-item').addEventListener('click', int());  
  }

  function int() {
    console.log("running functions on click of li item");
  }


  React.useEffect(() => {

    const results1 = Articles.articles.filter(
      article =>
        article.Title.toString()
          .toLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
    );

    const results2 = Riders.riders.filter(rider =>
      rider.Title.toString()
        .toLowerCase()
        .includes(searchTerm.toLocaleLowerCase())
    );

    const fullSearchResults = results1.concat(results2);
    fullSearchResults.sort((a, b) =>
      a.Title > b.Title ? 1 : b.Title > a.Title ? -1 : 0
    );
    console.log(fullSearchResults);

    
    setSearchResults(fullSearchResults);

  }, [searchTerm]);

  if (searchTerm) {
    return (
      <div>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          // id="input"
          onChange={handleChange}
        />
        {/* <img src={SearchImg} alt=""/> */}
        <ul className="search-results">
          {searchResults.map(fullSearchResults => (
            <li onClick={clearSearch()} id="list-item" className="search-results-list-item" key={fullSearchResults.id}>
              <Link to={fullSearchResults.Interview ? `/prolist/${fullSearchResults.id}` : `/postlist/${fullSearchResults.id}` }>
                {fullSearchResults.Title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
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
}

export default SearchBar;
