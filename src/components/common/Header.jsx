import React, { useEffect } from "react";
import { useState } from "react";

const Header = () => {
  const [showNav, setNav] = useState(false);

  const showMenu = () => {
    document.getElementById("menu").classList.toggle("show");
  };

  const hideMenu = () => {
    document.getElementById("menu").classList.remove("show");
  };

  useEffect(() => {
    window.onscroll = function (e) {
      var top = window.pageYOffset || document.documentElement.scrollTop;

      if (top >= 20) {
        document.getElementById("header").classList.add("navbar-white");
      } else {
        document.getElementById("header").classList.remove("navbar-white");
      }
    };
  }, []);

  return (
    <header id="header">
      <div className="container navbar">
        <div className="logo">agd.</div>
        <nav id="menu">
          <ul>
            <li>
              <a
                onClick={(e) => {
                  hideMenu();
                }}
                href="#home"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  hideMenu();
                }}
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  hideMenu();
                }}
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  hideMenu();
                }}
                href="#experience"
              >
                Experience
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  hideMenu();
                }}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <svg
          onClick={(e) => {
            showMenu();
          }}
          onBlur={(e) => {
            hideMenu();
          }}
          id="burger"
          fill=" #fff"
          viewBox="0 0 448 512"
          title="bars"
        >
          <path
            fill="#000"
            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
