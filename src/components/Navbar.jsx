import { useState, useEffect } from "react";
import logo from "../assets/images/logo/logoDcv2.png";
// import Button from "./Button";
import { Link } from "react-router-dom";
import ButtonOutline from "./ButtonOutline";
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let className = "bg-transparent py-2";
  if (isScrolled) {
    className =
      "bg-white z-50 drop-shadow-md py-2 transition ease-in-out delay-100 duration-300";
  }

  return (
    <nav className={`navbar fixed w-full top-0 ${className} px-10`}>
      <div className="navbar-start">
        <div className="dropdown absolute top-5 left-5">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-100 rounded-box w-52 mr-64"
          >
            <li>
              <Link to="/">
                <a className="font-bold">Pencari Kerja</a>
              </Link>
            </li>
            <li>
              <Link to="/company">
                <a>Perusahaan</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="px-3">
          <img src={logo} width={70} alt="logo" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">
              <a>Pencari Kerja</a>
            </Link>
          </li>
          <li>
            <Link to="/company">
              <a>Perusahaan</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="hidden sm:block">
          <ButtonOutline text="Daftar" />
          {/* <Button text="Masuk" /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
