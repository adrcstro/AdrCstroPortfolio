import React, { useState } from 'react';
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PortfolioFooter from "./components/PortfolioFooter";
import Projects from "./components/Projects";
import Toolsandtechnologies from "./components/Toolsandtechnologies";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <Hero isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Toolsandtechnologies isDarkMode={isDarkMode} />
      <Experience isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Education isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <PortfolioFooter isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
