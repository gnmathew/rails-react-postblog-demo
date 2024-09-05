import React from "react";
import { useState, useEffect } from "react"
import axios from "axios";
import { NewPostForm } from "./NewPostForm";
import { PostItems } from "./PostItems";

export default function Posts(){
  const [posts, setPosts] = useState([])

  useEffect(() =>{
    axios.get('/api/v1/posts')
    .then( resp => { setPosts(resp.data.data)})
    .catch( resp => console.log(resp))
  }, [])

  return (
    <>
      <NewPostForm setPosts={setPosts}/>
      <div className="container my-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h3> Posts </h3>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <PostItems posts={posts}/>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
