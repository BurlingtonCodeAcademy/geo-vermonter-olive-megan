import React from "react";
import {useState} from "react"

const Message = (props) => {
const [hidden, setHidden] = useState(false)
  if (props.displayMessage === "win") {
    return (
      <div class="message-wrapper" style ={hidden? {display: 'none'} : {display: 'flex'}}>
        <div class="message">
          <h1> Congratulations, you won!</h1>
          <h3> Your score was a score!</h3>
          <button onClick = {function () {
            setHidden(true)
          }}>Exit</button>
        </div>
      </div>
    );
  } else if (props.displayMessage === "lose") {
    return (
      <div class="message-wrapper" style ={hidden? {display: 'none'} : {display: 'flex'}}>
        <div class="message">
          <h1>Sucks to Suck!</h1>
          <h3>You lose 10 points.</h3>
          <button onClick = {function () {
            setHidden(true)
          }}>Exit</button>
        </div>
      </div>
    );
  } else return null 
};

export default Message;
