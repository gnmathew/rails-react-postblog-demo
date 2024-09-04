import React from 'react'

export function PostForm(){

  return (
    <div className="d-flex justify-content-center mt-5">
      <form className="d-flex flex-column gap-2 w-100" style={{ maxWidth: '600px' }}>
        <input
          type="text"
          className="form-control w-100"
          onChange={e => setNewPost(e.target.value)}
          placeholder="Title"
          id="title"
        />
        <input
          type="text"
          className="form-control w-100"
          onChange={e => setNewPost(e.target.value)}
          placeholder="Description"
          id="description"
        />
        <button type="submit" className="btn btn-primary w-100">
          Add Data
        </button>
      </form>
    </div>
  )

}