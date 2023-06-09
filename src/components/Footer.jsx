import React from "react";
import logo from "../assets/images/logo/footerSystech.png";
import { Link } from "react-router-dom";
import "../App.css";

const ServicesLinks = () => (
  <>
    <Link to="/" className="link link-hover">
      CalcNote
    </Link>
    <Link to="/" className="link link-hover">
      CalcSales
    </Link>
    <Link to="/" className="link link-hover">
      CalcStaff
    </Link>
    <Link to="/" className="link link-hover">
      CountList
    </Link>
    <Link to="/" className="link link-hover">
      DigitalCV
    </Link>
    <Link to="/" className="link link-hover">
      GDS
    </Link>
  </>
);

const CompanyLinks = () => (
  <>
    <Link to="/aboutus" className="link link-hover">
      About us
    </Link>
    <Link to="https://digitalcv.id/id_new" className="link link-hover">
      Careers
    </Link>
    <Link to="/" className="link link-hover">
      Portfolio
    </Link>
  </>
);

const SocialLinks = () => (
  <>
    <Link to="/" className="link link-hover">
      Twitter
    </Link>
    <Link to="/" className="link link-hover">
      Instagram
    </Link>
    <Link to="/" className="link link-hover">
      Facebook
    </Link>
  </>
);

const Footer = () => (
  <>
    <footer className="footer p-10 py-20 bg-slate-100 dark:bg-slate-800  text-dark dark:text-white">
      <div>
        <Link to="/">
          <img src={logo} width={350} height={100} alt="logo" />
        </Link>
      </div>
      <div>
        <span className="footer-title">SERVICES</span>
        <ServicesLinks />
      </div>
      <div>
        <span className="footer-title">COMPANY</span>
        <CompanyLinks />
      </div>
      <div>
        <span className="footer-title">Social</span>
        <SocialLinks />
      </div>
      <div className="dark:text-white">
        <span className="footer-title">CONTACT</span>
        <a href="mailto:support@gestaltsys.tech" className="link link-hover">
          support@gestaltsys.tech
        </a>
        <span className="link link-hover">
          Istana Pasteur Regency, <br /> Kompleks Ruko Kav. CRB <br /> 91 B,
          Kota Bandung, <br /> Jawa Barat 40175
        </span>
        <a href="tel:+622286065353" className="link link-hover">
          (022) 86065353
        </a>
      </div>
    </footer>
    <div className="footer footer-center p-4 bg-base-300 dark:bg-[#111827] text-base-content">
      <div>
        <p className="dark:text-white">
          Copyright © 2023 - All right reserved by PT. Gestalt Systech
        </p>
      </div>
    </div>
  </>
);

export default Footer;
