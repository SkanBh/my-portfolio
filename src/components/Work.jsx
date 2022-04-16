import React from 'react';
import { FaGithub } from "react-icons/fa";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../context";
import {WORK} from "../utils/workData"



const Work = () => {
  const workCard =
    "shadow-lg shadow-[#040c16] hover:opacity-75 cursor-pointer group container rounded-md flex justify-center items-center mx-auto content-div";
    const hovSpan = "text-3xl font-bold text-[#0a192f] tracking-wider ";
    const cardAnim="opacity-0 transition ease-in-out delay-10 group-hover:opacity-100"
    const hovBtn =
      "text-center rounded-lg px-4 py-3 m-2 bg-white  font-bold text-lg bg-pink-600 text-black";
      const hovTxt = "pt-8 text-center ";

      <FaGithub size={30} />;
      const theme = useContext(ThemeContext);
      const darkMode = theme.state.darkMode;

      



  return (
    <div
      name="work"
      className={
        darkMode
          ? "w-full  text-gray-300 pb-[100px]"
          : "w-full  text-[#0a192f] pb-[100px]"
      }
      id="work"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full ">
        <div className="pb-8 pt-10">
          <p className="text-4xl  font-bold inline border-b-4  border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid Item */}
          {WORK.map(({ img, name, link }, index) => (
            <div
              style={{ backgroundImage: `url(${img})` }}
              className={workCard}
              key={index.toString()}
            >
              {/* Hover Effects */}
              <div className={cardAnim}>
                <span className={hovSpan}>{name}</span>
                <div className={hovTxt}>
                  <a href={link} target="blank">
                    <button className={hovBtn}>
                      <FaGithub size={30} />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work


