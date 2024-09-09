import React from 'react'

export function NewPostForm({ newPost, handleChangeNew, submitNewForm }){

  return (
    <div className="d-flex justify-content-center mt-5">
      <form onSubmit={submitNewForm} className="d-flex flex-column gap-2 w-100" style={{ maxWidth: '600px' }}>
        <input
          type="text"
          className="form-control w-100"
          name="title"
          value={newPost.title || ""}
          onChange={handleChangeNew}
          placeholder="Title"
        />
        <textarea
          type="text"
          className="form-control w-100"
          name="description"
          value={newPost.description || ""}
          onChange={handleChangeNew}
          placeholder="Description"
        />
        <button type="submit" className="btn btn-primary w-100">
          Submit
        </button>
      </form>
    </div>
  )

}