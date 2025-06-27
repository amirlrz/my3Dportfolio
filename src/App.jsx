import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
//import Contacts from "./components/Contacts";
import StarsCanvas from "./components/StarsCanvas";
import EarthPart from "./components/EarthPart";
import ContactForm from "./components/ContactForm";

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
        <StarsCanvas />
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen gap-12 px-4 py-12 md:py-24">
          {/* Earth/3D Component - Full width on mobile, constrained on desktop */}
          <div className="w-full  lg:w-1/2 lg:pr-8">
            <EarthPart className="w-full h-auto aspect-square" />
          </div>

          {/* Contact Form - Stays properly aligned with better spacing */}
          <div className="w-full max-w-[500px] lg:w-1/2 lg:pl-8">
            <div className="  rounded-xl shadow-lg p-6 md:p-8 ">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
