import React from "react";
import Logo from "../../src/Logo.svg";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="" id="kayakLogo" />
    </div>
  );
};

export default Navbar;
