import React, { createContext, useContext, useState, useEffect } from "react";

const ContactContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useContacts = () => {
  const context = useContext(ContactContext);
  if (!context)
    throw new Error("useContacts must be used within ContactProvider");
  return context;
};

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterOption, setFilterOption] = useState("default");

  // const API_URL = "http://localhost:3000/contacts";
  const API_URL =
    // "https://my-json-server.typicode.com/voiceofriyad/Assignment05-mern5/contacts";
    "https://assignment05-database-mern5.onrender.com/users";

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      setContacts(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const addContact = async (contact) => {
    try {
      const newContact = {
        ...contact,
        id: Date.now(),
        createdAt: new Date().toISOString(),
      };
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newContact),
      });
      const savedContact = await response.json();
      setContacts([...contacts, savedContact]);
      return true;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  };

  const updateContact = async (id, updatedContact) => {
    try {
      await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedContact),
      });
      setContacts(contacts.map((c) => (c.id === id ? updatedContact : c)));
      return true;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  };

  const deleteContact = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setContacts(contacts.filter((c) => c.id !== id));
      return true;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  };

  const getFilteredContacts = () => {
    let filtered = [...contacts];

    if (searchTerm) {
      filtered = filtered.filter(
        (contact) =>
          contact.firstName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.lastName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          contact.phone?.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    switch (filterOption) {
      case "firstName":
        filtered.sort((a, b) =>
          (a.firstName || "").localeCompare(b.firstName || ""),
        );
        break;
      case "lastName":
        filtered.sort((a, b) =>
          (a.lastName || "").localeCompare(b.lastName || ""),
        );
        break;
      case "oldest":
        filtered.sort(
          (a, b) => new Date(a.createdAt || 0) - new Date(b.createdAt || 0),
        );
        break;
      default:
        break;
    }

    return filtered;
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <ContactContext.Provider
      value={{
        contacts: getFilteredContacts(),
        loading,
        searchTerm,
        setSearchTerm,
        filterOption,
        setFilterOption,
        addContact,
        updateContact,
        deleteContact,
        fetchContacts,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
