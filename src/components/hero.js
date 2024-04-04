import React, { useState } from "react";
import Questionno from "./questionno";
import Questionpanel from "./questionpanel";
import Time from "./time";
import Lifeline from "./lifeline";
import questions from "./questionlist";

const Hero = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [response1, setResponse1] = useState(false);
  const [response2, setResponse2] = useState(true);

  const handleInput = () => {
    if (count === 0) {
      if (name1.trim() === questions[currentQuestionIndex].answer) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setScore(score + 4);
        setName1("");
      } else {
        setResponse1(!response1);
        setResponse2(!response2);
        setScore(score - 1);
        setCount((prevIndex) => prevIndex + 1);
      }
    } else {
      if (name2.trim() === questions[currentQuestionIndex].answer) {
        setScore(score + 2);
      } else {
        setScore(score - 2);
      }
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setCount((prevIndex) => prevIndex - 1);
      setResponse2(!response2);
      setResponse1(!response1);
    }
    setName1("");
    setName2("");
  };
  return (
    <div className="grid grid-cols-[1fr_0.7fr_1.2fr_1fr] grid-rows-[0.3fr_0.3fr_1fr_1fr_0.5fr_0.3fr] gap-x-[20px] gap-y-[10px] w-[95vw] h-[84.3vh] mt-3 mx-6">
      <Questionno questionData={questions[currentQuestionIndex]} />
      <Questionpanel questionData={questions[currentQuestionIndex]} />
      <div className="[grid-area:5_/_1_/_6_/_2] content-around text-center mr-10 mt-1">
        <input
          type="text"
          id="response 1"
          onChange={(e) => setName1(e.target.value)}
          value={name1}
          disabled={response1}
          class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="Response 1"
        ></input>
      </div>
      <div className="[grid-area:5_/_3_/_6_/_4] content-around text-center mr-20 mt-1">
        <input
          onSubmit={handleInput}
          type="text"
          id="response 2"
          value={name2}
          disabled={response2}
          onChange={(e) => setName2(e.target.value)}
          class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="Response 2"
        ></input>
      </div>
      <Time />
      <div className="[grid-area:3_/_4_/_4_/_5] grid grid-cols-[2fr_1fr_1fr_1fr] grid-rows-[1fr_1fr] gap-x-[2px] gap-y-[2px] border-2 rounded-lg p-0.5 divide-y-2 divide-solid">
        <div className="[grid-area:1_/_1_/_2_/_3] text-center flex items-center justify-center">
          <p>Score</p>
        </div>
        <div className="[grid-area:1_/_3_/_2_/_5] text-center flex items-center justify-center">
          <p>{score}</p>
        </div>
        <div className="[grid-area:2_/_1_/_3_/_3] text-center flex items-center justify-center">
          <p>Marks</p>
        </div>
        <div className="[grid-area:2_/_3_/_3_/_4] text-center flex items-center justify-center">
          <p>+4</p>
        </div>
        <div className="[grid-area:2_/_4_/_3_/_5] text-center flex items-center justify-center">
          <p>-1</p>
        </div>
      </div>
      <Lifeline />
      <div className="[grid-area:6_/_1_/_7_/_4] content-around text-center">
        <button
          type="submit"
          onClick={handleInput}
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Hero;
