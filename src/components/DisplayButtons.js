import React from "react";
import Guess from "./Guess"
import {useState} from 'react'

//our buttons for guess, quit, i give up

export default function DisplayButtons(props) {

    if (props.start === true) {
 
      return (
        <div>
          <button id="guess" onClick={() => {props.setGuess(true)}}> Guess </button>
          <button id="quit" >Quit </button>
          <button id="give-up" onClick={() => {props.userGiveUp(true)}}  >I Give Up</button>
        </div> 
        
      );
    } else return null;
}
//guess and quit are started by onclicks -> set to true.
//Guess component is child of display buttons to pass thru info of click events

