import React from "react";

function Scoremark() {
  return (
    <div className="[grid-area:3_/_4_/_4_/_5] grid grid-cols-[2fr_1fr_1fr_1fr] grid-rows-[1fr_1fr] gap-x-[2px] gap-y-[2px] border-2 rounded-lg p-0.5 divide-y-2 divide-solid">
      <div className="[grid-area:1_/_1_/_2_/_3] text-center flex items-center justify-center">
        <p>Score</p>
      </div>
      <div className="[grid-area:1_/_3_/_2_/_5] text-center flex items-center justify-center">
        <p>0</p>
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
  );
}

export default Scoremark;
