import React, { useEffect,useState } from "react";
import "./styles.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";
import axios from 'axios';


export default function App() {
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(2);
  const [question, setQuestion] = useState("");
  const [queno, setQueno] = useState(1);
  const [hrs, setHrs] = useState(0);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [prevans, setPrevans] = useState(0);



  

  return (
    <div className="bg-[linear-gradient(blue,_cyan)]">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}
