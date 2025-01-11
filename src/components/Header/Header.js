import React from "react";
import "./Header.css";
import logo from "../../assets/stackline_logo.svg";

const Header = () => {
    return(
        <header className="header">
            <img src={logo} alt="Stackline logo" />
        </header>
    )
  
};
export default Header;
