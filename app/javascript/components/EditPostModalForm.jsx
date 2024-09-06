import React from "react";
import { BsPencilFill, BsFillTrashFill } from "react-icons/bs";

export function EditPostModalForm() {


  return(
    <>
      <BsPencilFill className="me-4" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
      <BsFillTrashFill className="me-2" style={{ color: 'red' }}/>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit this Post</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <label>Title</label>
                <input className="form-control"/>
                <label>Description</label>
                <textarea className="form-control"/>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary">Save changes</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}