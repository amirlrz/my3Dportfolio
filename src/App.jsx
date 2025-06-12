import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contacts from "./components/Contacts";
import StarsCanvas from "./components/StarsCanvas";
import EarthPart from "./components/EarthPart";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0  text-white ">
        <div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
      </div>
      <div className="relative ">
        <EarthPart />
        <Contacts />
        <StarsCanvas />
      </div>
    </BrowserRouter>
  );
}

export default App;
