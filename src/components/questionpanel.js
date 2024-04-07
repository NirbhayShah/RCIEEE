import React from "react";

const Questionpanel = (props) => {
  return (
    <div className="[grid-area:2_/_1_/_5_/_4] text-center border-2 rounded-lg mr-20">
      <div className="text-left text-xl pt-2 pl-4">
        <p>{props.question}</p>
      </div>
    </div>
  );
};

export default Questionpanel;
