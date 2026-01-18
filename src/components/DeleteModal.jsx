import React from "react";
import { useContacts } from "../context/ContactContext";

const DeleteModal = ({ contact, onClose }) => {
  const { deleteContact } = useContacts();

  const handleDelete = async () => {
    const success = await deleteContact(contact.id);
    if (success) onClose();
  };

  return (
    <div
      className="modal show d-block"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Delete Contact</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <p>
              Are you sure you want to delete{" "}
              <strong>
                {contact.firstName} {contact.lastName}
              </strong>
              ?
            </p>
          </div>
          <div className="modal-footer">
            <button onClick={handleDelete} className="btn btn-danger">
              Yes, Delete
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

export default DeleteModal;
