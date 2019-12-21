//RSCE auto function
import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFeching() {
  const [posts, setPosts] = useState([]);
  const [id, setID] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        setPosts(res.data);
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    return () => {};
  }, [id]);
  return (
    <div>
      <input type="text" value={id} onChange={e => setID(e.target.value)} />
      <p>{posts.title}</p>
      {/*
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
       */}
    </div>
  );
}

export default DataFeching;
