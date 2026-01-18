import React from "react";

const ViewModal = ({ contact, onClose, onEdit, onDelete }) => {
  return (
    <div
      className="modal show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Contact Details</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="form-group row mb-3">
              <label className="col-md-3 col-form-label">First Name</label>
              <div className="col-md-9">
                <p className="form-control-plaintext text-muted">
                  {contact.firstName}
                </p>
              </div>
            </div>
            <div className="form-group row mb-3">
              <label className="col-md-3 col-form-label">Last Name</label>
              <div className="col-md-9">
                <p className="form-control-plaintext text-muted">
                  {contact.lastName}
                </p>
              </div>
            </div>
            <div className="form-group row mb-3">
              <label className="col-md-3 col-form-label">Email</label>
              <div className="col-md-9">
                <p className="form-control-plaintext text-muted">
                  {contact.email}
                </p>
              </div>
            </div>
            <div className="form-group row mb-3">
              <label className="col-md-3 col-form-label">Phone</label>
              <div className="col-md-9">
                <p className="form-control-plaintext text-muted">
                  {contact.phone}
                </p>
              </div>
            </div>
            <div className="form-group row mb-3">
              <label className="col-md-3 col-form-label">Address</label>
              <div className="col-md-9">
                <p className="form-control-plaintext text-muted">
                  {contact.address || "N/A"}
                </p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button onClick={onEdit} className="btn btn-info">
              Edit
            </button>
            <button onClick={onDelete} className="btn btn-outline-danger">
              Delete
            </button>
            <button onClick={onClose} className="btn btn-outline-secondary">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
