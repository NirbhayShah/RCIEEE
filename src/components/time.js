import React from "react";

function Time() {
  return (
    <div className="[grid-area:1_/_4_/_3_/_5] flex border-2 rounded-lg p-0.5 divide-x-2 divide-dashed">
      <div className="flex-1 flex items-center justify-center">
        <p>Time</p>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <p>0:00</p>
      </div>
    </div>
  );
}

export default Time;
