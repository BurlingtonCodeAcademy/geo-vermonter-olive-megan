import React from "react";
import { useState } from "react";


//always set to/default as -  "?"  - unless player selects "I give up", then info is revealed
export default function Panel(props) {
    const [lat, setLat] = useState("?");
    const [long, setLong] = useState("?");
    const [county, setCounty] = useState("?");
    const [town, setTown] = useState("?");

    //if player selects i give up or wins and the county is still ? then set to info
    if ((props.userGiveUp === true && county === "?") || (props.win === true && county ==="?")) {
    
    setCounty(props.location.county)
    setTown (props.location.city)
    setLat(props.droppedPin[0])
    setLong(props.droppedPin[1])
    } 

  return (
    <div>
      <h3>Latitude: {lat}</h3>
      <h3>Longitude: {long}</h3>
      <h3>County: {county}</h3>
      <h3>Town: {town}</h3>

    </div>
  );
}
//and reveal info in the return.