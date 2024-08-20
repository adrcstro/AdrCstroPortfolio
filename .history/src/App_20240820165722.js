import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Toolsandtechnologies from "./components/Toolsandtechnologies";
import Footer from "./components/Footer";


function App() {
  return (
    <>
    <Navbar/>
    <Hero />
    <About/>
    <Toolsandtechnologies/>
    <Experience />
<Projects />
<Education />
<Contact/>
<Footer />

    </>
  );
}

export default App;
