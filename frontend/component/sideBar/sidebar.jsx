import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sideBarItems">
        <li className="sideBarItem">Dashboard</li>
        <li className="sideBarItem">Buy Items</li>
        <li className="sideBarItem">Sell Items</li>
        <li className="sideBarItem">Orders</li>
        <li className="sideBarItem">Settings</li>
      </ul>
    </aside>
  );
}
