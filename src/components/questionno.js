import React from "react";

const Questionno = ({ questionData }) => {
  return (
    <div className="[grid-area:1_/_1_/_2_/_2] text-center flex items-center justify-center border-2 rounded-lg gap-y-0">
      <p>Question {questionData.id}</p>
    </div>
  );
};

export default Questionno;
