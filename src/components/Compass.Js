import React from "react";

//compass buttons that on click/mousedown will prompt the changedirection function
const Compass = (props) => {
  if (props.start) {
  
  return (
    <div>
      <button
        id="north"
        onMouseDown={props.changeDirection}
      >
        North
      </button>
      <button id="east" onMouseDown={props.changeDirection}>
        East
      </button>
      <button id="south" onMouseDown={props.changeDirection}>
        South
      </button>
      <button id="west" onMouseDown={props.changeDirection}>
        West
      </button>
    </div>
  );
} else return null 
};

export default Compass;
