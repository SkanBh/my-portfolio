import Navbar from "./components/Navbar";
import Home from "./components/Home"
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Toggle from "./components/toggle/Toggle";
import { useContext, useState } from "react";
import { ThemeContext } from "./context";


function App() {
  // const [dark,setDark]= useState(false);
  const theme =useContext(ThemeContext)
  const darkMode = theme.state.darkMode


//   background-color: #8EC5FC;
// background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);



// background-color: #FFDEE9;
// background-image: linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%);







  return (
    <div
      style={{
        backgroundColor: darkMode ? "#0a192f" : " #FFDEE9",
        backgroundImage: darkMode
          ? ""
          : " linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
      }}
    >
      <Toggle />
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
