import React from "react";
import { useState } from "react";
import WinningMessage from "./WinningMessage"

//this is guess function, seeing that selected county from dropdown menu is same as pinpointed county
export default function Guess(props) {
  const [tempWin, setTempWin] = useState(false);
  function changeSelection(event) {
    if (event.target.value === props.location.county) {
      setTempWin(true);
      props.setGuess(false);
      <WinningMessage />
    } else console.log("you are wrong");
    setTempWin(false);
    console.log(props.location.county);
    props.setGuess(false)
  }
  props.setWin(tempWin);
  //options of counties. default is to make sure that first choice (addison) is actually selected/clicked to translate that information
  if (props.guess === true) {
    return (
      <div id="guess-county-wrapper">
        <div id="guess-county">
          <div id="submit-wrapper">
            <select>
              <option value="default">Please pick a county : </option>
              <option value="Addison County">Addison County</option>
              <option value="Bennington County">Bennington County</option>
              <option value="Caledonia County">Caledonia County</option>
              <option value="Chittenden County">Chittenden County</option>
              <option value="Essex County">Essex County</option>
              <option value="Franklin County">Franklin County</option>
              <option value="Grand-Isle County">Grand Isle County</option>
              <option value="Lamoille County"> Lamoille County</option>
              <option value="Orange County"> Orange County</option>
              <option value="Orleans County"> Orleans County</option>
              <option value="Rutland County">Rutland County</option>
              <option value="Washington County">Washington County</option>
              <option value="Windham County"> Windham County</option>
              <option value="Windsor County"> Windsor County</option>
            </select>
            <button onClick={changeSelection}>Submit</button>
          </div>
          <button onClick={() => props.setGuess(false)}>Cancel</button>
        </div>
      </div>
    );
  } else return null;
}
