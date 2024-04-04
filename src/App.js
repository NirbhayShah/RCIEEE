import React from "react";
import "./styles.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";

export default function App() {
  return (
    <div className="bg-[linear-gradient(blue,_cyan)]">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
