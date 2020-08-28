import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link, useParams } from 'react-router-dom';
import SearchImg from '../../Images/search-icon.png';
import { getRiderList, getPostList } from '../../services/firestoreService'
import './SearchBar.css';



function SearchBar() {
  const [riders, setRiders] = useState([]);
  const [posts, setPosts] = useState([]);
  const [results, setResults] = useState([]);
  
  const handleChange = event => {
    results(event.target.value);
  };

  // THIS DOESNT WORK
  const clearSearch = () => {
    const inputElement = document.getElementById('input');
    inputElement.value = '';
    setResults([...posts, ...riders])
 };

 const filterResults = event => {
  const searchTerm = event.target.value;
  console.log('searchTerm: ', searchTerm);
  const postResults = posts.filter(post => post.Title.toLowerCase().includes(searchTerm));
  console.log('postResults: ', postResults);
  console.log('posts:', posts)
  const riderResults = riders.filter(rider => rider.Name.toLowerCase().includes(searchTerm));
  console.log('riderResults: ', riderResults);
  console.log('riders:', riders)

  setResults([...postResults, ...riderResults]);
}

  React.useEffect(() => {
  
    const fetchRiders = async () => {
      const ridersResponse = await getRiderList();
      setRiders(ridersResponse);
    }
    
    const fetchPosts = async () => {
      const postsResponse = await getPostList();
      setPosts(postsResponse);
    }

    const loadData = async() => {
      await Promise.all([fetchRiders(), fetchPosts()]);
      setResults([...riders, ...posts])
    }
    loadData();

  
//  if (searchTerm !== "") {
//       const results1 = fetchPosts.articles.filter(article =>
//         article.Title.toString()
//           .toLowerCase()
//           .includes(searchTerm.toLocaleLowerCase())
//       );
//       const results2 = fetchRiders.riders.filter(rider =>
//         rider.Title.toString()
//           .toLowerCase()
//           .includes(searchTerm.toLocaleLowerCase())
//       );
//       const result = results1.concat(results2);
//       fullSearchResults.sort((a, b) =>
//         a.Title > b.Title ? 1 : b.Title > a.Title ? -1 : 0
//       );
//       console.log(fullSearchResults);
//       return setSearchResults(result);
//     } 


    setResults([]);
  }, []);
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        id="input"
        onChange={filterResults}
      />
      {/* <img src={SearchImg} alt=""/> */}
      <ul id="search-results-full-list" className="search-results">
        {results.map(result => (
          <li className="search-results-list-item" key={result._id}>
            <Link
              onClick={clearSearch}
              to={
                results.Interview
                  ? `/prolist/${result._id}`
                  : `/postlist/${result._id}`
              }
            >
              {result.Title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SearchBar;
