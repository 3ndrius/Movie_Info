import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

export default function Header({ padding }) {
  const padd = "header header--without";
  const none = "header";
  return (
    <header className={padding ? padd : none}>
      <div className="container">
        <div className="header__navbar">
          <Link to="/" className="header__link">
            3movie
          </Link>
          <nav className="header__nav">
           
          </nav>
        </div>
      </div>
    </header>
  );
}
