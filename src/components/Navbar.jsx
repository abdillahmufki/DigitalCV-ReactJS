import { useState, useEffect } from "react";
import logo from "../assets/images/logo/navbarSystech.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const className = `bg-transparent py-2 z-50 ${
    isScrolled
      ? "bg-white z-50 shadow py-2 transition ease-in-out delay-50 duration-300"
      : ""
  }`;

  return (
    <nav className={`navbar sticky w-full top-0 ${className} px-10 py-2 pt-3`}>
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 text-white bg-blue-800 shadow menu menu-compact dropdown-content rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="ml-5">
          <img src={logo} width={50} alt="logo" className="flex items-center" />
        </Link>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/contact">
          <Button>Contact</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
