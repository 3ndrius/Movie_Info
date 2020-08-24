import React from "react";
import Logo from '../../assets/logo.png';
import './header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
          <div className="header__navbar">
            <a href="#" className="header__link"><img src={Logo} alt="app-logo" /></a>
            <nav className="header__nav">
            <ul>
              <li>
                like
              </li>
            </ul>
            </nav>
          </div>
      </div>
    </header>
  );
}
