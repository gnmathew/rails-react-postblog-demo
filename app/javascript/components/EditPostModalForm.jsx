import React from "react";
import { useState } from "react"
import axios from "axios";
import { BsPencilFill } from "react-icons/bs";

export function EditPostModalForm({ setPosts, id, attributes }) {
  const [editPost, setEditPost] = useState({ title: attributes.title, description: attributes.description })

  const handleChangeEdit = (e) => {
    e.preventDefault()

    setEditPost({...editPost, [e.target.name]: e.target.value})
  }

  const handleUpdate = (e) => {
    e.preventDefault()

    axios.put(`/api/v1/posts/${id}`, { post: editPost } )
    .then( resp => {
      const updatedPost = resp.data.data;

      setPosts((currentPosts) =>
        currentPosts.map((p) =>
          p.id === updatedPost.id ? { ...p, attributes: { ...updatedPost.attributes } } : p
        )
      );
    })
    .catch( resp => {console.log(resp)})

  }

  return(
    <>
      <BsPencilFill className="me-4" type="button" data-bs-toggle="modal" data-bs-target={`#editModal-${id}`}/>

      <div className="modal fade" id={`editModal-${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">Edit this Post</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <label style={{ fontWeight: 'bold' }}>Title</label>
                <input
                className="form-control"
                value={editPost.title}
                name="title"
                onChange={handleChangeEdit}
                />
                <label style={{ fontWeight: 'bold' }}>Description</label>
                <textarea
                className="form-control"
                value={editPost.description}
                name="description"
                onChange={handleChangeEdit}
                />
              </form>
              <div className="modal-footer">
                <button type="button" onClick={handleUpdate} data-bs-dismiss="modal" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}