import React from 'react';

import Meme from '../assets/Meme.PNG'
import airBnb from '../assets/airBnb.PNG'
import Foodies from '../assets/foodies.PNG'
import DiceGame from '../assets/diceGame.PNG'
import Mapty from '../assets/mapty.PNG'
import Hulu from '../assets/hulu.PNG'
import Bankist from '../assets/Bankist.PNG'
import Forkify from '../assets/forkify.PNG'
import Linkedin from '../assets/linkedin.PNG'

import { FaGithub } from "react-icons/fa";
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../context";



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
      // className={
      //   darkMode
      //     ? "  w-full h-screen   text-gray-300 "
      //     : "  w-full h-screen   text-[#0a192f] "
      // }
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

          <div style={{ backgroundImage: `url(${Meme})` }} className={workCard}>
            {/* Hover Effects */}
            <div className={cardAnim}>
              <span className={hovSpan}>Meme Generator</span>
              <div className={hovTxt}>
                <a
                  href="https://github.com/BahaKhmeissi/MemeGen"
                  target="blank"
                >
                  <button className={hovBtn}>
                    <FaGithub size={30} />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${airBnb})` }}
            className={workCard}
          >
            {/* Hover Effects */}
            <div className={cardAnim}>
              <span className={hovSpan}>airBnb Clone</span>
              <div className={hovTxt}>
                <a href="https://github.com/BahaKhmeissi/airBnb" target="blank">
                  <button className={hovBtn}>
                    <FaGithub size={30} />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Foodies})` }}
            className={workCard}
          >
            {/* Hover Effects */}
            <div className={cardAnim}>
              <span className={hovSpan}>Foodie App</span>
              <div className={hovTxt}>
                <a
                  href="https://github.com/BahaKhmeissi/Foodies"
                  target="blank"
                >
                  <button className={hovBtn}>
                    <FaGithub size={30} />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${DiceGame})` }}
            className={workCard}
          >
            {/* Hover Effects */}
            <div className={cardAnim}>
              <span className={hovSpan}>Dice Game</span>
              <div className={hovTxt}>
                <a
                  href="https://github.com/BahaKhmeissi/last-game-"
                  target="blank"
                >
                  <button className={hovBtn}>
                    <FaGithub size={30} />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Mapty})` }}
            className={workCard}
          >
            {/* Hover Effects */}
            <div className={cardAnim}>
              <span className={hovSpan}>Mapty App</span>
              <div className={hovTxt}>
                <a href="https://github.com/BahaKhmeissi/Mapty" target="blank">
                  <button className={hovBtn}>
                    <FaGithub size={30} />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div style={{ backgroundImage: `url(${Hulu})` }} className={workCard}>
            {/* Hover Effects */}
            <div className={cardAnim}>
              <span className={` text-white ${hovSpan} `}>Hulu clone</span>
              <div className={hovTxt}>
                <a href="https://github.com/BahaKhmeissi/hulu" target="blank">
                  <button className={hovBtn}>
                    <FaGithub size={30} />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Bankist})` }}
            className={workCard}
          >
            {/* Hover Effects */}
            <div className={cardAnim}>
              <span className={hovSpan}>Bankist App</span>
              <div className={hovTxt}>
                <a
                  href="https://github.com/BahaKhmeissi/bankApp"
                  target="blank"
                >
                  <button className={hovBtn}>
                    <FaGithub size={30} />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Forkify})` }}
            className={workCard}
          >
            {/* Hover Effects */}
            <div className={cardAnim}>
              <span className={hovSpan}>Forkify App</span>
              <div className={hovTxt}>
                <a
                  href="https://github.com/BahaKhmeissi/Forkify"
                  target="blank"
                >
                  <button className={hovBtn}>
                    <FaGithub size={30} />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Linkedin})` }}
            className={workCard}
          >
            {/* Hover Effects */}
            <div className={cardAnim}>
              <span className={hovSpan}>Linkedin Clone</span>
              <div className={hovTxt}>
                <a
                  href="https://github.com/BahaKhmeissi/LinkidinClone"
                  target="blank"
                >
                  <button className={hovBtn}>
                    <FaGithub size={30} />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work


