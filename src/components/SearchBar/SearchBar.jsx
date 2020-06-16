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
  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
  };
  React.useEffect(() => {
 if (searchTerm !== "") {
      const results1 = Articles.articles.filter(article =>
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
      return setSearchResults(fullSearchResults);
    } 
    setSearchResults([]);
  }, [searchTerm]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        id="input"
        onChange={handleChange}
      />
      {/* <img src={SearchImg} alt=""/> */}
      <ul id="search-results-full-list" className="search-results">
        {searchResults.map(fullSearchResults => (
          <li className="search-results-list-item" key={fullSearchResults.id}>
            <Link
              onClick={clearSearch}
              to={
                fullSearchResults.Interview
                  ? `/prolist/${fullSearchResults.id}`
                  : `/postlist/${fullSearchResults.id}`
              }
            >
              {fullSearchResults.Title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SearchBar;
