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

  // function isRider() {
  //   return (
  //     results2 ? `/prolist/${fullSearchResults.id}` : `/postlist/${fullSearchResults.id}`
  //   )
  //   }

  React.useEffect(() => {
    const results1 = Articles.articles.filter(
      article =>
        article.Title.toString()
          .toLowerCase()
          .includes(searchTerm.toLocaleLowerCase())
      //   ||
      // article.name.toString()
      //   .toLowerCase()
      //   .includes(searchTerm.toLocaleLowerCase())
      //   ||
      // article.date
      //   .toString()
      //   .toLowerCase()
      //   .includes(searchTerm.toLocaleLowerCase()) // THIS BREAKS IT ON SOME LETTERS SUCH AS A, C & G, WHY? Because its reading the string "Greenwich Mean Time", so technically all!
      //   ||
      // article.Content.toString()
      //   .toLowerCase()
      //   .includes(searchTerm.toLocaleLowerCase())// THIS WILL ALLOW THE SEARCH BAR TO SEARCH THROUGH ARTICLE CONTENT, TO MUCH?
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
          onChange={handleChange}
        />
        {/* <img src={SearchImg} alt=""/> */}
        <ul className="search-results">
          {searchResults.map(fullSearchResults => (
            <Link
              to={
                fullSearchResults.Interview
                  ? `/prolist/${fullSearchResults.id}`
                  : `/postlist/${fullSearchResults.id}`
              }
            >
              <li className="search-results-list-item" key={fullSearchResults}>
                {fullSearchResults.Title}
              </li>
            </Link>
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
