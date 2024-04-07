import React, { useState } from "react";
import Questionno from "./questionno";
import Questionpanel from "./questionpanel";
import Time from "./time";
import Lifeline from "./lifeline";
import axios from 'axios';


const  Hero = (props) => {
  const [val,setVal] = useState();

  function submitResponse() {
    axios.post(
      'http://127.0.0.1:8000/api/get_question', 
      { answer: val },
      { 
        headers: { 
          Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWFtbmFtZSI6IlRlYW0xMjMiLCJleHAiOjE3MTI0OTgzMzQsImlhdCI6MTcxMjQ5NDczNH0.X5gfhguBFmO5-KNsPsPaTAJYXJSXJ6GyNtsnrPtpyH0' 
        } 
      }
    )
    .then(response => {
      location.reload();
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  return (
    <div className="grid grid-cols-[1fr_0.7fr_1.2fr_1fr] grid-rows-[0.3fr_0.3fr_1fr_1fr_0.5fr_0.3fr] gap-x-[20px] gap-y-[10px] w-[95vw] h-[84.3vh] mt-3 mx-6">
      <Questionno  queno={props.queno}/>
      <Questionpanel question={props.question}/>
      {props.attempts=== 2 ?
      <div className="[grid-area:5_/_1_/_6_/_2] content-around text-center mr-10 mt-1">
        <input type="text" id="response 1" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="Response 1"
          onChange={(e) => {
            setVal(e.target.value);
          }}/>
      </div>:
      <div className="[grid-area:5_/_1_/_6_/_2] content-around text-center mr-10 mt-1">
      <input type="text" id="response 1" class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
        placeholder="Response 1"
        disabled
        value={props.prevans}
        />
      </div>

      }
      <div className="[grid-area:5_/_3_/_6_/_4] content-around text-center mr-20 mt-1">
        <input
          type="text"
          id="response 2"
          class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          placeholder="Response 2"
          disabled = {props.attempts=== 2 ? true : false }
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
      </div>
      <Time time = {props.time}/>
      <div className="[grid-area:3_/_4_/_4_/_5] grid grid-cols-[2fr_1fr_1fr_1fr] grid-rows-[1fr_1fr] gap-x-[2px] gap-y-[2px] border-2 rounded-lg p-0.5 divide-y-2 divide-solid">
        <div className="[grid-area:1_/_1_/_2_/_3] text-center flex items-center justify-center">
          <p>Score</p>
        </div>
        <div className="[grid-area:1_/_3_/_2_/_5] text-center flex items-center justify-center">
          <p>{[props.score]}</p>
        </div>
        <div className="[grid-area:2_/_1_/_3_/_3] text-center flex items-center justify-center">
          <p>Marks</p>
        </div>
        {props.attempts=== 2 ?
        (<>
        <div className="[grid-area:2_/_3_/_3_/_4] text-center flex items-center justify-center">
          <p>+4</p>
        </div>
        <div className="[grid-area:2_/_4_/_3_/_5] text-center flex items-center justify-center">
          <p>-2</p>
        </div> 
        </>):
       (<>
       <div className="[grid-area:2_/_3_/_3_/_4] text-center flex items-center justify-center">
       <p>+2</p>
     </div>
     <div className="[grid-area:2_/_4_/_3_/_5] text-center flex items-center justify-center">
       <p>-1</p>
     </div> 
     </>)}
      </div>
      <Lifeline />
      <div className="[grid-area:6_/_1_/_7_/_4] content-around text-center">
        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={submitResponse}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Hero;
