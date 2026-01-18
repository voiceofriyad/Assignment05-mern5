import React, { useState } from "react";
import { ContactProvider } from "./context/ContactContext";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import AddContactPage from "./components/AddContactPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <ContactProvider>
      <div
        style={{
          fontFamily: '"Varela Round", sans-serif',
          backgroundColor: "#f7f7f7",
          minHeight: "100vh",
        }}
      >
        <Navbar />
        {currentPage === "home" && <HomePage onNavigate={setCurrentPage} />}
        {currentPage === "add" && (
          <AddContactPage onNavigate={setCurrentPage} />
        )}
      </div>
    </ContactProvider>
  );
}

export default App;
