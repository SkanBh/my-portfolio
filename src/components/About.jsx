import React from 'react'
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "../context"
import Aos from "aos"; 
import "aos/dist/aos.css"; 



const About = () => {
  useEffect(()=>{
    Aos.init({duration:2000}); 


  },[]
  )
  
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      name="about"
      className={
        darkMode
          ? "  w-full     text-gray-300 "
          : "  w-full   text-[#0a192f] "
      }
      id="About"
    >
      <div className="flex flex-col  items-center w-full h-full ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
          <div data-aos="fade-down" className=" sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4  border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="max-w-[1000px]  w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div data-aos="fade-up" className="sm:text-right text-4xl font-bold">
            <p className="pt-3">
              Hi, I'm Skander, Nice to meet you, Please take a look around.
            </p>
          </div>
          <div data-aos="fade-right" className="leading-loose sm:my-[20px]">
            Able to work on different size projects, 
            I am specialized in building websites and web applications in order to answer to different demandes
            and customer's expectations. 
            I am always keen on providing both of technical and visual aspects of digital products, 
            with the objectif of creating a perfect user experience.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About











