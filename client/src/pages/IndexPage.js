import Post from "../Post";
import {useEffect, useState} from "react";
import { SearchBar } from "./Searchbar";
import { SearchResultsList } from "./Searchresultlist";

export default function IndexPage() {
  const [posts,setPosts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);
  const [results, setResults] = useState([]);
  return (
    <>
     <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
      {/* results && results.length > 0 && */}


      {posts.length > 0 && posts.map(post => (
        <Post {...post} />
      ))}
    </>
  );
}