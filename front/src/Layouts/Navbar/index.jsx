import React from "react";
import "./index.scss"
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar_container">
      <div className="navbar">
        <img
          src="https://preview.colorlib.com/theme/consultingbiz/assets/img/logo/logo.png.webp"
          alt=""
        />
        <div className="navmenu">
          <ul>
            <li>Home</li>
            <Link to={"/addpage"}><li>Add Page</li></Link>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
