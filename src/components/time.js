import React, { useEffect, useState } from "react";

const Time = (props) => {
  const [hrs, setHrs] = useState(props.time[0]);
  const [min, setMin] = useState(props.time[1]);
  const [sec, setSec] = useState(props.time[2]);
  let interval;

  useEffect(() => {
    setHrs(props.time[0]);
    setMin(props.time[1]);
    setSec(props.time[2]);
    interval = setInterval(() => {
      updateTimer();
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [props.time,hrs,sec,min]); // Include hrs, min, sec in the dependency array

  const updateTimer = () => {
    if (sec > 0) {
      setSec(prevSec => prevSec - 1); // Functional update for sec
    } else {
      if (min > 0) {
        setMin(prevMin => prevMin - 1); // Functional update for min
        setSec(59);
      } else {
        if (hrs > 0) {
          setHrs(prevHrs => prevHrs - 1); // Functional update for hrs
          setMin(59);
          setSec(59);
        } else {
          console.log("Over");
          clearInterval(interval); // Clear interval when the timer is over
        }
      }
    }
  };

  return (
    <div className="[grid-area:1_/_4_/_3_/_5] flex border-2 rounded-lg p-0.5 divide-x-2 divide-dashed">
      <div className="flex-1 flex items-center justify-center">
        <p>Time</p>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <p>{hrs} : {min} : {sec}</p>
      </div>
    </div>
  );
}

export default Time;
