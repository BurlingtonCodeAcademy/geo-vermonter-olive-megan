import "./App.css";
import { useState } from "react";
import Map from "./components/Map";
import GeoData from "./components/GeoData";
import Compass from "./components/Compass";
import Score from "./components/Score";
import borderData from "./data/border";
import leafletPip from "leaflet-pip";
import L from "leaflet";
import DisplayButtons from "./components/DisplayButtons";
import Panel from "./components/Panel";
import Guess from "./components/Guess";

//--------some things we had imported but aren't working right now: ---------
// import Guess from "./components/Guess";
// import GameBox from "./components/Gamebox";
// import Nav from "./components/Nav";
// import Directions from "./components/Compass";
//import { map } from "leaflet";
// import {useMap} from 'leaflet'

function App() {
  // const [view, setView] = useState([43.88, -72.7317]);
  const [center, setCenter] = useState([43.88, -72.7317]);
  const [zoom, setZoom] = useState(8);
  const [start, setStart] = useState(false);
  const [droppedPin, setDroppedPin] = useState("");
  const [userGiveUp, setUserGiveUp] = useState(false);
  const [location, setLocation] = useState({ county: "", city: "" });
  const [win, setWin] = useState(false);
  const [guess, setGuess] = useState(false);

  //declare newX and newY to find new center
  let newX;
  let newY;

  //choose random lat and long and check and see if it's without hte bounds
  function gameStart(evt) {
    //layers = length of array where valid lat,long point is added
    let layers = 0;
    let xMin = -73.42613118833583;
    let xMax = -71.51022535353107;
    let yMin = 42.730315121762715;
    let yMax = 45.00541896831666;

    //use while loop to keep looping through until there is a point in VT
    while (layers !== 1) {
      //choose random lat and long within bounds
      newX = xMin + Math.random() * (xMax - xMin);
      newY = yMin + Math.random() * (yMax - yMin);
      //if new point is within VT, it will be added to array, array will have length of 1, so will exit loop
      layers = leafletPip.pointInLayer(
        [newX, newY],
        L.geoJSON(borderData),
        true
      ).length;
    }
    //change center to the valid lat and long values
    setCenter([newY, newX]);
    //make start button go away
    evt.target.style.display = "none";
    //start game = true
    setStart(true);
    //zoom in
    setZoom(18);
    //store the new location in dropped pin
    setDroppedPin([newY, newX]);
  }
  //changing direction
  let changeDirection = (evt) => {
    if (evt.target.id === "north") {
      setCenter([center[0] + 0.002, center[1]]);
    }
    if (evt.target.id === "east") {
      setCenter([center[0], center[1] + 0.002]);
    }
    if (evt.target.id === "south") {
      setCenter([center[0] - 0.002, center[1]]);
    }
    if (evt.target.id === "west") {
      setCenter([center[0], center[1] - 0.002]);
    }
  };

  return (
    <div id="App-wrapper">
      <div id = "map">
      <Map  center={center} zoom={zoom} droppedPin={droppedPin} />
      </div>
      <DisplayButtons
        droppedPin={droppedPin}
        start={start}
        userGiveUp={setUserGiveUp}
        location={location}
        setWin={setWin}
        win={win}
        setGuess={setGuess}
        guess={guess}
      />
      <Compass id = "compass"
        droppedPin={droppedPin}
        center={center}
        changeDirection={changeDirection}
        start = {start}
      />
      <GeoData
        start={start}
        droppedPin={droppedPin}
        userGiveUp={userGiveUp}
        setLocation={setLocation}
        location={location}
        win={win}
      />
      <Guess
        location={location}
        guess={guess}
        setGuess={setGuess}
        win={win}
        setWin={setWin}
      />
      <Panel id = "panel"
        start={start}
        location={location}
        droppedPin={droppedPin}
        userGiveUp={userGiveUp}
        win={win}
        // city = {city}
      />
      <Score />
      <button id="start-button" onClick={gameStart}>
        Start
      </button>
    </div>
  );
}

export default App;
