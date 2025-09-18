import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./sidebar.css";
import {
  BuyIcon,
  DashboardIcon,
  OrdersIcon,
  SellIcon,
  SettingsIcon,
} from "../icons/icons";

export default function Sidebar({ openSideBar }) {
  const location = useLocation(); // ✅ get current path

  return (
    <aside className={`sidebar ${openSideBar ? "mobile-open" : ""}`}>
      <ul className="sideBarItems">
        <NavLink
          to="/home/dashboard"
          className={({ isActive }) =>
            `sideBarItem ${isActive ? "active" : ""}`
          }
        >
          {({ isActive }) => (
            <>
              <DashboardIcon color={isActive ? "white" : "black"} />
              Dashboard
            </>
          )}
        </NavLink>

        <NavLink
          to="/home/buy"
          className={({ isActive }) =>
            `sideBarItem ${isActive ? "active" : ""}`
          }
        >
          <BuyIcon
            color={location.pathname === "/home/buy" ? "white" : "black"}
          />
          Buy Items
        </NavLink>

        <NavLink
          to="/home/sellItems"
          className={({ isActive }) =>
            `sideBarItem ${isActive ? "active" : ""}`
          }
        >
          <SellIcon
            color={location.pathname === "/home/sellItems" ? "white" : "black"}
          />
          Sell Items
        </NavLink>

        <NavLink
          to="/home/orders"
          className={({ isActive }) =>
            `sideBarItem ${isActive ? "active" : ""}`
          }
        >
          <OrdersIcon
            color={location.pathname === "/home/orders" ? "white" : "black"}
          />
          Orders
        </NavLink>

        <NavLink
          to="/home/settings"
          className={({ isActive }) =>
            `sideBarItem ${isActive ? "active" : ""}`
          }
        >
          <SettingsIcon
            color={location.pathname === "/home/settings" ? "white" : "black"}
          />
          Settings
        </NavLink>
      </ul>
    </aside>
  );
}
