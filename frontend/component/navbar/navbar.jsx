import React from "react";
import "./navbar.css";
import { LogoutIcon, NotificationBell, SearchIcon } from "../icons/icons";
import { Bell } from "lucide-react";

export default function NavBar({openSideBar,setOpenSideBar}) {

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="../../public/img/ChatGPT Image Sep 16, 2025, 11_05_42 AM.png"
          alt="Logo"
        />
        <span style={{color:"#11B8CE"}}>Every Deal Backed by Trust.</span>
      </div>

      <div
        className={`navbar-links `}
       
      >
        <SearchIcon/>
        <input className="navBarInputBox" placeholder="Enter Product Name..." type="text"/>
      </div>

      <div className="navbar-right">
        {/* <span className="notificationBox">
          <NotificationBell />
          <span className="notificationNumber">5</span>
        </span> */}
        <button className="notification-btn">
            <Bell size={20} />
            <span className="notification-badge" style={{marginLeft:2}}>{1}</span>
          </button>
        <button className="logout-btn">Log out <LogoutIcon/></button>
      </div>

      <div className="hamburger" onClick={()=>{setOpenSideBar(!openSideBar)}}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
