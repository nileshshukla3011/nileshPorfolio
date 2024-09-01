//import React from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import Hero from "./components/hero";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 relative">
      <div className="fixed top-0 left-0 z-[-10] h-full w-full">
      <div className="absolute top-0 left-0 z-[-2] w-screen h-screen  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
    
      <div className="relative container mx-auto px-8">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default App;
