import React from "react";
import axios from "axios"; // Import Axios

function Lifeline() {
  const handleLifelineClick = (endpoint) => {
    // Make Axios fetch request
    axios.get(`http://127.0.0.1:8000/api/lifeline?lifeline=${endpoint}`,{headers: {
      Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWFtbmFtZSI6IlRlYW0xMjMiLCJleHAiOjE3MTI1ODUzMDQsImlhdCI6MTcxMjU4MTcwNH0.y55LW96mEWGOio80jc0Wir7HC-Fyvm0qnriGquWhYCg'
    }})
      .then(response => {
        location.reload();
        // console.log(response.data);

      })
      .catch(error => {
        console.error("Error fetching lifeline data:", error);
      });
  };

  return (
    <div className="[grid-area:4_/_4_/_7_/_5] text-center flex flex-col mb-4 border-2 rounded-lg p-0.5 divide-y-2">
      <div className="flex-1 flex items-center justify-center">
        <p>Lifelines!!</p>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <button onClick={() => handleLifelineClick("aqua_point")}>Lifeline 1</button>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <button onClick={() => handleLifelineClick("time_freeze")}>Lifeline 2</button>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <button onClick={() => handleLifelineClick("poll")}>Lifeline 3</button>
      </div>
    </div>
  );
}

export default Lifeline;
