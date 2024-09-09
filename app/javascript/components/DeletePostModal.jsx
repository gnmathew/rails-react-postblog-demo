import React from "react";
import { BsFillTrashFill } from "react-icons/bs";

export function DeletePostModal({ id, attributes, handleDestroy }){

  return(
    <>
      <BsFillTrashFill className="me-2" style={{ color: 'red' }} type="button" data-bs-toggle="modal" data-bs-target={`#deleteModal-${id}`}/>

      <div className="modal fade" id={`deleteModal-${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Delete This Post</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p style={{ fontWeight: 'bold', color: 'red' }}>Are you sure you want to delete this post?</p>

              <label style={{ fontWeight: 'bold' }}>Title</label>
              <input
                className="form-control"
                value={attributes.title}
                name="title"
                readOnly
                style={{ fontWeight: 'normal', color: '#6c757d' }}
              />

              <label style={{ fontWeight: 'bold' }}>Description</label>
              <input
                className="form-control"
                value={attributes.description}
                name="description"
                readOnly
                style={{ fontWeight: 'normal', color: '#6c757d' }}
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
              <button type="button" onClick={() => handleDestroy(id)} data-bs-dismiss="modal" className="btn btn-danger">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}