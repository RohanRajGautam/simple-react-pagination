import React from "react";
import Spinner from "./Spinner";

const Post = ({ posts, loading }) => {
  if (loading) {
    return <Spinner />;
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map((post) => (
        <li key={post.id} className='list-group-item'>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Post;
