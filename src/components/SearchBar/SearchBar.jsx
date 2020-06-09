import React from 'react';
import ReactDOM from 'react-dom';

import SearchImg from '../../Images/search-icon.png';
import {Articles} from '../../Data/Articles';
import {Riders} from '../../Data/Riders';

function SearchBar() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [searchResults, setSearchResults] = React.useState([]);
    const handleChange = event => {
      setSearchTerm(event.target.value);
    };

    React.useEffect(() => {
        const results1 = Articles.articles.filter(
          article =>
            article.Title.toString()
              .toLowerCase()
              .includes(searchTerm.toLocaleLowerCase()) ||
            article.Author.toString()
              .toLowerCase()
              .includes(searchTerm.toLocaleLowerCase()) 
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
        const results2 = Riders.riders.filter(
            rider => 
                rider.name.toString()
                .toLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
        )
            setSearchResults([...results1, ...results2]);
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
            {searchResults.map(rider => (
                <li key={rider.id}>
                    {[rider.name]}
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