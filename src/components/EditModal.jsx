import React, { useState } from "react";
import { useContacts } from "../context/ContactContext";

const EditModal = ({ contact, onClose }) => {
  const { updateContact } = useContacts();
  const [formData, setFormData] = useState(contact);

  const handleSubmit = async () => {
    const success = await updateContact(contact.id, formData);
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
            <h5 className="modal-title">Edit Contact</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="form-group mb-3">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                className="form-control"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </div>
            <div className="form-group mb-3">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>
            <div className="form-group mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="form-group mb-3">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <div className="form-group mb-3">
              <label>Address</label>
              <textarea
                name="address"
                rows="3"
                className="form-control"
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
              ></textarea>
            </div>
          </div>
          <div className="modal-footer">
            <button onClick={handleSubmit} className="btn btn-primary">
              Save Changes
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

export default EditModal;
