import React from "react";
import logo from '../assests/logo.png'

const NavComp = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        backgroundColor: "#000",
        color: "#fff",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="IndusGo Logo"
          style={{ height: "40px", marginRight: "10px" }}
        />
        <h1 style={{ fontSize: "22px", margin: 0 }}>INDUS GO</h1>
      </div>
      <nav>
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li style={{ margin: "0 15px" }}>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Home
            </a>
          </li>
          <li style={{ margin: "0 15px" }}>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Subscription
            </a>
          </li>
          <li style={{ margin: "0 15px" }}>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Blog
            </a>
          </li>
          <li style={{ margin: "0 15px" }}>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Locations
            </a>
          </li>
          <li style={{ margin: "0 15px" }}>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Offers
            </a>
          </li>
          <li style={{ margin: "0 15px" }}>
            <a href="#" style={{ color: "#fff", textDecoration: "none" }}>
              Login / Sign Up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavComp;