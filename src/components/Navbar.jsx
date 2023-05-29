import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import DarkModeToggle from "./DarkModeToggle";
import "../App.css";
import logo from "../assets/images/logo/navbarSystech.png";

const Navbar = React.memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const navbarClassName = `navbar sticky w-full top-0 ${
    isScrolled
      ? "bg-white dark:bg-slate-800 shadow py-2 transition ease-in-out delay-50 duration-300"
      : ""
  }`;

  const dropdown =
    "p-2 mt-3 text-white bg-gradient-to-r from-blue-900 to-blue-400 shadow menu menu-compact dropdown-content rounded-box w-52";

  return (
    <nav className={`${navbarClassName} px-5 lg:px-10 py-2 pt-3 z-50`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#94A3B8" // Change the color here
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul tabIndex={0} className={dropdown}>
            <li>
              <Link to="/" key="home-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" key="services-link">
                Services
              </Link>
            </li>
            <li>
              <Link to="/aboutus" key="aboutus-link">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/aboutus" key="aboutus-link-2">
                About Us
              </Link>
            </li>
            <li>
              <Link to="https://digitalcv.id/id_new" key="career-link">
                Career
              </Link>
            </li>
            <li>
              <DarkModeToggle />
            </li>
          </ul>
        </div>
        <Link to="/" className="ml-5">
          <img src={logo} width={50} alt="logo" className="flex items-center" />
        </Link>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal text-slate-400">
          <li>
            <Link to="/" key="home-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" key="services-link">
              Services
            </Link>
          </li>
          <li tabIndex={0}>
            <a>
              Company
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="px-5 py-3 bg-gradient-to-r from-blue-900 to-blue-400 text-white mt-1">
              <li>
                <Link to="/aboutus" key="aboutus-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="https://digitalcv.id/id_new" key="career-link">
                  Career
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="pt-3 text-slate-400">
        <DarkModeToggle />
      </div>
      <div className="navbar-end">
        <Link to="/contact">
          <Button>Contact</Button>
        </Link>
      </div>
    </nav>
  );
});

export default Navbar;
