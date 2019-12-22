//RSCE auto function
import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFeching_useReducer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(" ")
  const [post ,setPost] = useState([])
  const [id, setID] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        setLoading(false)
        setPost(res.data);
        setError('')
      })
      .catch(err => {
        setPost([])
         setError('Someting went wrong !')
      });
    return () => {};
  }, [id]);
  return (
    <div>
      <input type="text" value={id} onChange={e => setID(e.target.value)} />
      <div>
         {loading ? "Loading"  :  post.title}
         {error ? error : null}
      </div>
     
    </div>
  );
}

export default DataFeching_useReducer;
