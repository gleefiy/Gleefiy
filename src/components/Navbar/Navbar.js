import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [menu, openMenu] = useState(false);

  return (
    <nav className="navbar">
      <span className="navbar-logo"><a className="linknav" href="/">Gleefiy</a></span>

      <ul className={`navbar-menu ${menu ? "active" : ""}`}>
        <a href="/value">
          <li>Value Proposition</li>
        </a>
        <a href="/services">
          <li>Services</li>
        </a>
        <a href="/pricing">
          <li>Pricing</li>
        </a>
        <a href="/case">
          <li>Success stories</li>
        </a>
        <a href="/blog">
          <li>Blog</li>
        </a>
        <a href="/contact">
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
