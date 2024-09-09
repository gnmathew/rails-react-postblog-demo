import React from "react";
import { useState, useEffect } from "react"
import axios from "axios";
import { NewPostForm } from "./NewPostForm";
import { PostItems } from "./PostItems";

export default function Posts(){
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState({ title: "", description: "" })

  useEffect(() =>{
    axios.get('/api/v1/posts')
    .then( resp => { setPosts(resp.data.data)})
    .catch( err => console.log(err))
  }, [])

  const handleChangeNew = (e) => {
    e.preventDefault()

    setNewPost({...newPost, [e.target.name]: e.target.value})
  }

  const submitNewForm = (e) => {
    e.preventDefault()

    const csrfToken =document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
    console.log('newPost:', newPost)

    axios.post('/api/v1/posts', { post: newPost } )
    .then( resp => {
      setNewPost({title: "", description: ""});
      setPosts( currentPosts => [...currentPosts, resp.data.data]);
    })
    .catch( resp => {console.log(resp)})
  }

  const handleDestroy = async (id) => {
    try {
      await axios.delete(`/api/v1/posts/${id}`);
      setPosts(posts.filter((p) => p.id !== id));
    } catch (error) {
      console.error("Error deleting the post:", error);
    }
  }

  return (
    <>
      <NewPostForm
        handleChangeNew={handleChangeNew}
        submitNewForm={submitNewForm}
        newPost={newPost}
      />
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
                <PostItems
                  posts={posts}
                  setPosts={setPosts}
                  handleDestroy={handleDestroy}
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
