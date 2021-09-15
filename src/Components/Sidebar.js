import React from "react";
import { Link } from "react-router-dom";

import "../sb-admin-2.css";

export default function Sidebar() {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        <Link
          to="/"
          className="sidebar-brand d-flex align-items-center justify-content-center"
        >
          <li className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </li>
        </Link>

        <hr className="sidebar-divider my-0" />

        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Dashboard
          </Link>
        </li>

        <hr className="sidebar-divider" />

        <div className="sidebar-heading">Interface</div>

        <li className="nav-item">
          <Link className="nav-link" to="/buttons">
            Buttons
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/cards">
            Cards
          </Link>
        </li>
      </ul>
    </>
  );
}
