import React from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import { HiOutlineMail } from "react-icons/hi";
import { HiPhone } from "react-icons/hi";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../context";

const Contact = () => {




 


      const theme = useContext(ThemeContext);
      const darkMode = theme.state.darkMode;

      
     const inputClass = darkMode
       ? "shadow-lg placeholder-gray-500 my-4 rounded-[7px] p-2 bg-[#ccd6f6] "
       : " shadow-lg placeholder-white my-4 rounded-[7px] p-2 bg-[#0d1f3b] ";

      const mobileIcon = darkMode
        ? "hover:scale-125 hover:text-pink-600 transition ease-in-ou text-gray-300"
        : "hover:scale-125 hover:text-pink-600 transition ease-in-ou ";
      const color = darkMode ? "text-gray-300" : "text-[#0a192f]";

      const collaborateBtn = darkMode
        ? " rounded-[10px]  text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-lg "
        : " rounded-[10px]  text-black border-2 border-black font-bold hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-lg ";
  return (
    <>
      <div
        name="contact"
        className=" w-full    flex justify-center items-center p-4 "
        id="contact"
      >
        <form
          action="https://getform.io/f/3e0fba87-fe14-4236-87c9-852a5c845be3"
          method="POST"
          className="flex flex-col max-w-[600px] w-full "
        >
          <div className="pb-8">
            <p
              className={`text-4xl font-bold inline border-b-4 border-pink-600 ${
                darkMode ? "text-gray-300" : "text-[#0a192f]"
              } `}
            >
              Contact
            </p>
            <p className={`${color} text-lg py-4`}>
              <HiOutlineMail
                style={{ display: "inline", paddingRight: "4px" }}
                className={mobileIcon}
                size={30}
              />
              Hire me -{" "}
              <span className="font-bold text-1xl">Bahaeddkh@gmail.com </span>{" "}
            </p>
            <p className={`text-xl ${color}`}>
              <HiPhone
                style={{ display: "inline", paddingRight: "4px" }}
                className={mobileIcon}
                size={30}
              />
              +216 55 756 171
            </p>
          </div>
          <input
            className={inputClass}
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className={inputClass}
            required
          />
          <textarea
            className={inputClass}
            placeholder="Message"
            name="message"
            rows="10"
            required
          ></textarea>
          <button className={collaborateBtn}>
            Let's Collaborate
          </button>
        </form>
      </div>
      <div
        className=" lg:hidden  pt-10 pb-[30px] w-full  flex justify-center  space-x-12 "
        id="contactIcon"
      >
        <a href="https://www.linkedin.com/in/baha-khmeissi/" target="blank">
          <FaLinkedin className={mobileIcon} size={40} />
        </a>

        <a href="https://github.com/BahaKhmeissi" target="blank">
          <FaGithub className={mobileIcon} size={40} />
        </a>

      
          <Link
            className="cursor-pointer"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            <HiOutlineMail className={mobileIcon} size={40} />
          </Link>
      
      </div>
    </>
  );
}

export default Contact


