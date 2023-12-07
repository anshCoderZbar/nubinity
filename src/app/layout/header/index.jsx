import { LAYOUT_IMG } from "app/images";
import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrollY >= 50 ? "blur-class" : ""}`}>
      <div className="container-fluid">
        <div className="navigation_bar">
          <Link to="/">
            <img src={LAYOUT_IMG.headerLogo} alt="logo" className="logo" />
          </Link>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="icons overlay">
            <div className="bx bx-menu" id="menu-icon">
              <Menu />
            </div>
            <div className="bx bx-x" id="close-icon">
              <X />
            </div>
          </label>
          <div className="navbar">
            <Link to="/" className="nav-item" style={{ "--i": "0" }}>
              Home
            </Link>
            <Link to="/about" className="nav-item" style={{ "--i": "1" }}>
              About
            </Link>
            <a href="/services" className="nav-item" style={{ "--i": "2" }}>
              Services
            </a>
            <Link to="/contact-us" className="nav-item" style={{ "--i": "3" }}>
              Contact
            </Link>
            <Link to="/" className="nav-button">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
