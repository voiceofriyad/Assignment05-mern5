import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{
        background: "#fff",
        boxShadow: "rgba(0, 0, 0, 0.09) 0 2px 0",
        padding: "10px 16px",
      }}
    >
      <div className="container">
        <a
          className="navbar-brand text-uppercase"
          href="#"
          style={{
            fontWeight: "bold",
            letterSpacing: "-1px",
            fontSize: "20px",
            color: "#dd5638",
          }}
        >
          <strong>Riyad's Contact</strong> App
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
