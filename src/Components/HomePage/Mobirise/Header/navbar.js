import React from "react";
import Logo from "../Images/logo.png";
import Flag from "../Images/usa-flag-icon-vector-2770127.jpg";
import "./navbar.css";

function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <div className="brand">
          <a class="brand-logo" href="#">
              <img src={Logo} height="62px"/>
          </a>
           <a className="navbar-brand"> Mobirise </a>
           </div>
          <div className="header-part">
               <img src={Flag} width="40px"/>
              <button className="sale-btn">HUGE SALE - 97% OFF!</button>
          </div>
        </div>
      </nav>
     
    </div>
  );
}
export default Navbar;
