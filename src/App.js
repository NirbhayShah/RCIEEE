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



  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/get_question`, {
      headers: {
        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWFtbmFtZSI6IlRlYW0xMjMiLCJleHAiOjE3MTI0OTgzMzQsImlhdCI6MTcxMjQ5NDczNH0.X5gfhguBFmO5-KNsPsPaTAJYXJSXJ6GyNtsnrPtpyH0'
      }
    })
    .then(res => {
      setScore(res.data['score']);
      setAttempts(res.data['attempts']);
      setQuestion(res.data['question']);
      setQueno(res.data['Current_Question']);
      setHrs(res.data['hours']);
      setSec(res.data['seconds']);
      setMin(res.data['minutes']);
      setPrevans(res.data['prev_ans']);
    });
  }, []);

  return (
    <div className="bg-[linear-gradient(blue,_cyan)]">
      <Navbar />
      <Hero score={score} attempts={attempts} question={question} queno={queno}  time= {[hrs,min,sec]} prevans ={prevans}/>
      <Footer />
    </div>
  );
}
