import React, { useState } from "react";
import NavBar from "../../component/navbar/navbar.jsx";
import Sidebar from "../../component/sideBar/sidebar.jsx";
import "./home.css";
import { Outlet } from "react-router-dom";

export default function Home() {
    const [openSideBar,setOpenSideBar] = useState(false)
  return (
    <div className="homeContainer" style={{
        overflow:"hidden",
        width:"100%",
        height:"100%"
    }}>
      <NavBar openSideBar={openSideBar}
      setOpenSideBar={setOpenSideBar} />
      <div className="home-layout" >
        <Sidebar openSideBar={ openSideBar} />
        <div className="home-content" style={{backgroundColor:"#f8fafc",overflow:"scroll",marginBottom:40}}>
          <Outlet/>
        </div>
      </div>
    </div>
  );
}
