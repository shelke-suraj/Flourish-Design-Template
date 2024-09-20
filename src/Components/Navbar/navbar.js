import React, { useState, useEffect} from "react";
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
            <svg
              className={`svgs theme-svg ${isRotated ? "rotated" : ""}`}
              fill="var(--nav-bar-text-color)"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
            >
              <path d="M 11.875 0.1875 C 11.371094 0.25 10.996094 0.679688 11 1.1875 L 11 3.1875 ..." />
            </svg>
            <div className="bottom-color"></div>
          </button>

          {/* Search Button */}
          <button className="nav-button search-button">
            <svg
              className="svgs search-svg"
              fill="var(--nav-bar-text-color)"
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 50 50"
            >
              <path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 ..." />
            </svg>
            <div className="bottom-color"></div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
