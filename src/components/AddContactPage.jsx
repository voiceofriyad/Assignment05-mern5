import React, { useState } from "react";
import { useContacts } from "../context/ContactContext";

const AddContactPage = ({ onNavigate }) => {
  const { addContact } = useContacts();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleSubmit = async () => {
    if (
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phone
    ) {
      const success = await addContact(formData);
      if (success) onNavigate("home");
    } else {
      alert("Please fill in all required fields");
    }
  };

  return (
    <main className="py-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header card-title">
                <strong>Add New Contact</strong>
              </div>
              <div className="card-body">
                <div className="form-group row mb-3">
                  <label className="col-md-3 col-form-label">First Name</label>
                  <div className="col-md-9">
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
                </div>
                <div className="form-group row mb-3">
                  <label className="col-md-3 col-form-label">Last Name</label>
                  <div className="col-md-9">
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
                </div>
                <div className="form-group row mb-3">
                  <label className="col-md-3 col-form-label">Email</label>
                  <div className="col-md-9">
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
                </div>
                <div className="form-group row mb-3">
                  <label className="col-md-3 col-form-label">Phone</label>
                  <div className="col-md-9">
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
                </div>
                <div className="form-group row mb-3">
                  <label className="col-md-3 col-form-label">Address</label>
                  <div className="col-md-9">
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
                <hr />
                <div className="form-group row mb-0">
                  <div className="col-md-9 offset-md-3">
                    <button onClick={handleSubmit} className="btn btn-primary">
                      Save
                    </button>
                    <button
                      onClick={() => onNavigate("home")}
                      className="btn btn-outline-secondary ms-2"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddContactPage;
