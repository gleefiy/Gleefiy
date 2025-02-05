import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [menu, openMenu] = useState(false);

  return (
    <nav className="navbar">
      <span className="navbar-logo">Gleefiy</span>

      <ul className={`navbar-menu ${menu ? "active" : ""}`}>
        <a href="#">
          <li>Value Proposition</li>
        </a>
        <a href="#">
          <li>Services</li>
        </a>
        <a href="#">
          <li>Pricing</li>
        </a>
        <a href="#">
          <li>Case Studies</li>
        </a>
        <a href="#">
          <li>Blog</li>
        </a>
        <a href="#">
          <li>Contact</li>
        </a>
      </ul>

      {menu ? (
        <RiCloseLine
          size={30}
          className="menu-icon"
          onClick={() => openMenu(false)}
        />
      ) : (
        <RiMenu2Line
          size={30}
          className="menu-icon"
          onClick={() => openMenu(true)}
        />
      )}
    </nav>
  );
};

export default Navbar;
