import React from "react";
import logo from "../../assets/svgs/logo.svg";
import { navLinks } from "../home/mock/data";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="border border-b-2 border-grey-100 sticky top-0 z-10 bg-white-100">
      <div className="flex justify-between items-center py-4 md:py-8 px-4 md:px-24">
        <div onClick={() => navigate("/")}>
          <img src={logo} alt="app logo" />
        </div>
        <ul className="hidden gap-10 md:flex">
          {navLinks.map((item) => (
            <li
              key={item.title}
              className="cursor-pointer hover:text-primary-light-blue hover-underline-animation transition duration-100"
            >
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className="cursor-pointer hidden md:block hover-underline-animation hover:text-primary-light-blue transition duration-100">
          <p className="text-lg font-semibold hidden md:block" onClick={() => navigate("/login")}>Get Started</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
