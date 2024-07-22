import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return   <>
      <nav>Get ready to complete your daily goals.</nav>
      <div className="header">
        <Link to ="/">home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/user/tempid">User</Link>
      </div>
    </>
 
}

export default Header;
