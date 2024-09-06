import React from 'react'
import { useState } from "react"
import axios from "axios";

export function NewPostForm({ setPosts }){
  const [newPost, setNewPost] = useState({ title: "", description: "" })

  const handleChange = (e) => {
    e.preventDefault()

    setNewPost({...newPost, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
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

  return (
    <div className="d-flex justify-content-center mt-5">
      <form onSubmit={handleSubmit} className="d-flex flex-column gap-2 w-100" style={{ maxWidth: '600px' }}>
        <input
          type="text"
          className="form-control w-100"
          name="title"
          value={newPost.title || ""}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          type="text"
          className="form-control w-100"
          name="description"
          value={newPost.description || ""}
          onChange={handleChange}
          placeholder="Description"
        />
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  )

}