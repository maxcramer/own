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
  
  // THIS DOESNT WORK
  const clearSearch = () => {
    const inputElement = document.getElementById('input');
    inputElement.value = '';
    console.log("search being cleared:", inputElement.value)
    setResults([...posts, ...riders])
 };

 const filterResults = event => {
  const searchTerm = event.target.value;

  const postResults = posts.filter(post => post.Title.toLowerCase().includes(searchTerm.toLowerCase()));
  const riderResults = riders.filter(rider => rider.Name.toLowerCase().includes(searchTerm.toLowerCase()));

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
                results.content ? `/prolist/${result._id}` : `/postlist/${result._id}`
              }
            >
              {result.Name}
              {result.Title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SearchBar;
