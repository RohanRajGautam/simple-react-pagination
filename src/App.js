import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./components/Post";
import Pagination from "./components/Pagination";

import "./App.css";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  useEffect(() => {
    setLoading(true);
    const fetchPost = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");

      setPosts(res.data);
      setLoading(false);
    };

    fetchPost();
  }, []);

  // Get Current Post
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  // current page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container mb-5'>
      <h2 className='text-primary mb-3 text-center'>My Blog</h2>
      <Post posts={currentPost} loading={loading} />
      <Pagination
        postPerPage={postPerPage}
        totalPost={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
