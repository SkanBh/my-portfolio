import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import logo from "../assets/logo SB.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const navLi ="hover:scale-125 hover:text-pink-600 font-bold transition ease-in-out ";
  const mobileNavLi = "hover:text-pink-600 font-bold ";
  const asideIcon ="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300"
  const iconLink = "flex justify-between items-center w-full text-gray-300"
  const liMobile = "py-6 text-4xl";
  



  return (
    <div className=" z-50 fixed w-full h-[80px] flex justify-between items-center px-4  bg-[#0d1f3b]  text-gray-300 shadow-md ">
      <div>
        <span>
          <Link to="home" spy={true} smooth={true} duration={500}>
            <img
              className="hover:rotate-180 
              transition ease-in-out hover:scale-150"
              src={logo}
              alt="logo image"
              style={{ width: "130px", color: "white", cursor: "pointer" }}
            />
          </Link>
        </span>
      </div>

      {/* menu */}

      <ul className="hidden md:flex">
        <li className={navLi}>
          <Link to="home" spy={true} smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className={navLi}>
          <Link to="about" spy={true} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className={navLi}>
          <Link to="skills" spy={true} smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className={navLi}>
          <Link to="work" spy={true} smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className={navLi}>
          <Link to="contact" spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden  z-10 cursor-pointer  hover:text-pink-600 font-bold"
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : " absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex  flex-col justify-center items-center"
        }
      >
        <li className={liMobile}>
          {" "}
          <Link
            className={mobileNavLi}
            onClick={handleClick}
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className={liMobile}>
          {" "}
          <Link
            className={mobileNavLi}
            onClick={handleClick}
            to="about"
            spy={true}
            smooth={true}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className={liMobile}>
          {" "}
          <Link
            className={mobileNavLi}
            onClick={handleClick}
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
          >
            Skills
          </Link>
        </li>
        <li className={liMobile}>
          <Link
            className={mobileNavLi}
            onClick={handleClick}
            to="work"
            spy={true}
            smooth={true}
            duration={500}
          >
            Work
          </Link>
        </li>
        <li className={liMobile}>
          {" "}
          <Link
            className={mobileNavLi}
            onClick={handleClick}
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* {Social icons} */}
      <div className="hidden lg:flex fixed  flex-col top-[35%] left-0">
        <ul>
          <li className={`pl-5 font-medium bg-blue-700 ${asideIcon}`}>
            <a
              className={iconLink}
              href="https://www.linkedin.com/in/skander-bhoury/"
              target="blank"
            >
              LinkedIn <FaLinkedin size={30} />{" "}
            </a>
          </li>

          <li className={` pl-5 font-medium  bg-[#333333] ${asideIcon}`}>
            <a
              className={iconLink}
              href="https://github.com/SkanBh"
              target="blank"
            >
              Github <FaGithub size={30} />{" "}
            </a>
          </li>

          <li className={`${asideIcon} pl-5 font-medium bg-[#6fc2b0]`}>
            <Link
              className={iconLink}
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              Email
            </Link>{" "}
            <HiOutlineMail size={30} />{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
