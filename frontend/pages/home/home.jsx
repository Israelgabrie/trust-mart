import React from "react";
import NavBar from "../../component/navbar/navbar.jsx";
import Sidebar from "../../component/sideBar/sidebar.jsx";
import "./home.css";

export default function Home() {
  return (
    <div className="homeContainer">
      <NavBar />
      <div className="home-layout">
        <Sidebar />
        <main className="home-content">
          {/* Page content goes here */}
        </main>
      </div>
    </div>
  );
}
