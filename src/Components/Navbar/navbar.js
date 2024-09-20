import React, { useState, useEffect } from "react";
import './navbar.css'

const Navbar = () => {
  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    // Set default theme to light
    document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');

    if (currentTheme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }

    // Toggle Rotation
    setIsRotated(prev => !prev);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid justify-content-between">
        {/* Toggler for mobile view */}
        <div className="start-block">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* Brand */}
          <a className="navbar-brand" href="#">Brand</a>
        </div>

        {/* Center Navigation Items */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            {['Home', 'About', 'Services', 'Contact', 'Help'].map((item, index) => (
              <li className="nav-item" key={index}>
                <button className="navigation-buttons">
                  {item}
                  <div className="bottom-color"></div>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Search bar */}
        <form className="d-flex search-section" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        </form>

        {/* Profile and Theme SVG Buttons */}
        <div className="d-flex align-items-center end-block">
          {/* Profile Button */}
          <button className="nav-button profile-button">
            <svg
              className="svgs profile-svg"
              fill="var(--nav-bar-text-color)"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              id="profile"
            >
              <path d="M256 250.8a73.34 73.34 0 1 1 73.33-73.34A73.41 73.41 0 0 1 256 250.8zm0-125.53a52.2 52.2 0 1 0 52.19 52.19A52.25 52.25 0 0 0 256 125.27zm117.07 282.6H138.93l-10.57-10.57a127.64 127.64 0 1 1 255.28 0zM150 386.73h212a106.51 106.51 0 0 0-212 0z" />
            </svg>
            <div className="bottom-color"></div>
          </button>

          {/* Theme Button */}
          <button className="nav-button theme-button" id="theme_toggle" onClick={toggleTheme}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`svgs theme-svg ${isRotated ? "rotated" : ""}`} fill="var(--nav-bar-text-color)" x="0px" y="0px" width="35" height="35" viewBox="0 0 32 32">
              <path d="M 15 3 L 15 8 L 17 8 L 17 3 Z M 7.5 6.09375 L 6.09375 7.5 L 9.625 11.0625 L 11.0625 9.625 Z M 24.5 6.09375 L 20.9375 9.625 L 22.375 11.0625 L 25.90625 7.5 Z M 16 9 C 12.144531 9 9 12.144531 9 16 C 9 19.855469 12.144531 23 16 23 C 19.855469 23 23 19.855469 23 16 C 23 12.144531 19.855469 9 16 9 Z M 16 11 C 18.773438 11 21 13.226563 21 16 C 21 18.773438 18.773438 21 16 21 C 13.226563 21 11 18.773438 11 16 C 11 13.226563 13.226563 11 16 11 Z M 3 15 L 3 17 L 8 17 L 8 15 Z M 24 15 L 24 17 L 29 17 L 29 15 Z M 9.625 20.9375 L 6.09375 24.5 L 7.5 25.90625 L 11.0625 22.375 Z M 22.375 20.9375 L 20.9375 22.375 L 24.5 25.90625 L 25.90625 24.5 Z M 15 24 L 15 29 L 17 29 L 17 24 Z"></path>
            </svg>
            <div className="bottom-color"></div>
          </button>

          {/* Search Button */}
          <button className="nav-button search-button">
            <svg xmlns="http://www.w3.org/2000/svg" fill="var(--nav-bar-text-color)" x="0px" y="0px" width="35" height="35" viewBox="0 0 48 48">
              <path d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z"></path>
            </svg>
            <div className="bottom-color"></div>
          </button>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;
