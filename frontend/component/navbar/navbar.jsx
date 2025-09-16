import React, { useState } from "react";
import "./navbar.css";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="../../public/img/ChatGPT Image Sep 16, 2025, 11_05_42 AM.png"
          alt="Logo"
        />
        <span>Every Deal Backed by Trust.</span>
      </div>

      <div
        className={`navbar-links ${open ? "active" : ""}`}
       
      >
        🔍
        <input className="navBarInputBox" placeholder="Enter Product Name..." type="text"/>
      </div>

      <div className="navbar-right">
        <span className="username">Gabriel Israel</span>
        <button className="logout-btn">Log Out</button>
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
