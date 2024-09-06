import React from "react";
import { useState } from "react"
import { BsPencilFill, BsFillTrashFill } from "react-icons/bs";
import axios from "axios";

export function EditPostModalForm({ post, setPosts }) {
  const [editPost, setEditPost] = useState({ id: post.id, title: post.title, description: post.description })

  const handleChangePost = (e) => {
    e.preventDefault()

    setEditPost({...editPost, [e.target.name]: e.target.value})
  }

  const handleUpdate = (e) => {
    e.preventDefault()

    axios.put(`/api/v1/posts/${editPost.id}`, { post: editPost } )
    .then( resp => {
      const updatedPost = resp.data.data;
      
      console.log(updatedPost.id)
      setPosts((currentPosts) =>
        currentPosts.map((p) =>
          p.id === updatedPost.id ? { ...p, attributes: { ...updatedPost.attributes } } : p
        )
      );
    })
    .catch( resp => {console.log(resp)})

  }

  const modalId = `editModal-${post.id}`;

  return(
    <>
      <BsPencilFill className="me-4" type="button" data-bs-toggle="modal" data-bs-target={`#${modalId}`}/>
      <BsFillTrashFill className="me-2" style={{ color: 'red' }}/>

      <div className="modal fade" id={modalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Edit this Post</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <label>Title</label>
                <input
                className="form-control"
                value={editPost.title}
                name="title"
                onChange={handleChangePost}
                />
                <label>Description</label>
                <textarea
                className="form-control"
                value={editPost.description}
                name="description"
                onChange={handleChangePost}
                />

              </form>
              <div className="modal-footer">
                <button type="submit" onClick={handleUpdate} data-bs-dismiss="modal" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}