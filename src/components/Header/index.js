
import React from "react";
import './header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
          <div className="header__navbar">
            <Link to="/" className="header__link">3movie</Link>
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
