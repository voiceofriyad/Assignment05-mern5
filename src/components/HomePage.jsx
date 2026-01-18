import React, { useState } from "react";
import { useContacts } from "../context/ContactContext";
import ViewModal from "./ViewModal";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";

const HomePage = ({ onNavigate }) => {
  const {
    contacts,
    loading,
    searchTerm,
    setSearchTerm,
    filterOption,
    setFilterOption,
  } = useContacts();
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <>
      <main className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header card-title">
                  <div className="d-flex align-items-center justify-content-between">
                    <h2 style={{ margin: 0 }}>All Contacts</h2>
                    <div className="input-group" style={{ width: "50%" }}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="search contact"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <button className="btn btn-success" type="button">
                        Search
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={() => onNavigate("add")}
                        className="btn btn-success"
                      >
                        <i className="fa fa-plus-circle"></i> Add New
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between p-3">
                  <div className="fs-2">
                    <i className="fa fa-filter text-success"></i> Filter
                  </div>
                  <select
                    className="form-select"
                    value={filterOption}
                    onChange={(e) => setFilterOption(e.target.value)}
                  >
                    <option value="default">Default</option>
                    <option value="firstName">First Name (A → Z)</option>
                    <option value="lastName">Last Name (A → Z)</option>
                    <option value="oldest">Oldest To First</option>
                  </select>
                </div>
                <div className="card-body">
                  {loading ? (
                    <div className="text-center py-5">Loading...</div>
                  ) : contacts.length === 0 ? (
                    <div className="text-center py-5">
                      <h4>No Contact Information</h4>
                    </div>
                  ) : (
                    <table className="table table-striped table-hover">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {contacts.map((contact, index) => (
                          <tr key={contact.id}>
                            <td>{index + 1}</td>
                            <td>{contact.firstName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phone}</td>
                            <td width="150">
                              <button
                                onClick={() => {
                                  setSelectedContact(contact);
                                  setShowViewModal(true);
                                }}
                                className="btn btn-sm btn-circle btn-outline-info"
                                title="Show"
                              >
                                <i className="fa fa-eye"></i>
                              </button>
                              <button
                                onClick={() => {
                                  setSelectedContact(contact);
                                  setShowEditModal(true);
                                }}
                                className="btn btn-sm btn-circle btn-outline-secondary"
                                title="Edit"
                              >
                                <i className="fa fa-edit"></i>
                              </button>
                              <button
                                onClick={() => {
                                  setSelectedContact(contact);
                                  setShowDeleteModal(true);
                                }}
                                className="btn btn-sm btn-circle btn-outline-danger"
                                title="Delete"
                              >
                                <i className="fa fa-times"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {showViewModal && (
        <ViewModal
          contact={selectedContact}
          onClose={() => setShowViewModal(false)}
          onEdit={() => {
            setShowViewModal(false);
            setSelectedContact(selectedContact);
            setShowEditModal(true);
          }}
          onDelete={() => {
            setShowViewModal(false);
            setSelectedContact(selectedContact);
            setShowDeleteModal(true);
          }}
        />
      )}
      {showEditModal && (
        <EditModal
          contact={selectedContact}
          onClose={() => setShowEditModal(false)}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          contact={selectedContact}
          onClose={() => setShowDeleteModal(false)}
        />
      )}
    </>
  );
};

export default HomePage;
