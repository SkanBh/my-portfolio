import React from "react";

import CSS from "../assets/css-3.png";
import JavaScript from "../assets/js.png";
import GitHub from "../assets/github.png";
import html from "../assets/html.png";
import Reacty from "../assets/structure.png";
import php from "../assets/php.png";
import wordpress from "../assets/wordpress.png";
import Tailwind from "../assets/tailwind-css.png";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../context";
import { SKILLS } from "../utils/constants";

const Skills = () => {
  const skillsCard ="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer"
  const skillsImg = "w-20 mx-auto"
  const skillsP ="my-4 font-bold"

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;



  return (
    <div
      name="skills"
      className={
        darkMode ? "  w-full    text-gray-300 " : "  w-full    text-[#0a192f] "
      }
      id="skills"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full ">
        <div className="">
          <p className="text-4xl   font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">
            These are some of the technologies that I've worked with{" "}
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8"
        >
          {SKILLS.map(({ alt, logo, name }, index) => (
            <div className={skillsCard} key={index.toString()}>
              <img className={skillsImg} src={logo} alt={alt} />
              <p className={skillsP}>{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
