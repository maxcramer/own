import React, { useState, createRef, useEffect } from 'react';
// import ReactDOM from 'react-dom';
import { Link, useParams, Router } from 'react-router-dom';
// import SearchImg from '../../Images/search-icon.png';
import { getRiderList, getPostList } from '../../services/firestoreService'
import './SearchBar.css';



function SearchBar() {
  const [riders, setRiders] = useState([]);
  const [posts, setPosts] = useState([]);
  const [results, setResults] = useState([]);
  const searchInput = createRef();
  

 const filterResults = () => {
  const searchTerm = searchInput.current.value;
  const postResults = posts.filter(post => post.Title.toLowerCase().includes(searchTerm.toLowerCase()));
  const riderResults = riders.filter(rider => rider.Name.toLowerCase().includes(searchTerm.toLowerCase()));
  setResults([...postResults, ...riderResults]);
  console.log(results);
}

const onResultClick = () => {
  console.log("this runs a lot");
  setResults([]);  
  searchInput.current.value = '';
}


useEffect(() => {
    
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
      setResults([])
    }
    loadData();
    setResults([]);
  }, []);
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        ref={searchInput}
        onChange={filterResults}
      />
      <div id="search-results-container-div">
      <ul id="search-results-full-list" className="search-results">
        {results.map(result => (
          <li className="search-results-list-item" key={result._id}>
            <Link
              onClick={onResultClick}
              to={
                result.Interview ? `/prolist/${result._id}` : `/postlist/${result._id}`
              }
            >
              {result.Name}
              {result.Title}
            </Link>
          </li>
        ))}
      </ul>
      </div>

    </div>
  );
}
export default SearchBar;
