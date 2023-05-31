import React, { useState } from "react";
import "./styles.css";

const UseState = () => {
  // const initialData = 15;
  const [myNum, setMyNum] = useState(0);

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        {/* we use () => func()  to prevent multiple calls to the function */}
        <div class="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div class="button2" onClick={() => setMyNum(myNum - 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  );
};

export default UseState;
