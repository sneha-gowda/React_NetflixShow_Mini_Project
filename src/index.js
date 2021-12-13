import React from "react"
import ReactDOM from "react-dom"
import Card from "./Card.jsx"
import "./index.css"


let URL = ["https://resizing.flixster.com/NN5dYloXkEBc_DzNz3di2xtsET8=/fit-in/180x240/v2/https://resizing.flixster.com/RP1KKxlbEX5flfVjM6e8J3yHmqs=/ems.ZW1zLXByZC1hc3NldHMvdHZzZXJpZXMvUlRUVjI1Mzk5NS53ZWJw", "https://6793fdf6.widgets.sphere-engine.com/lp?hash=FfmicNuJF1", "https://6793fdf6.widgets.sphere-engine.com/lp?hash=FfmicNuJF1", "https://6793fdf6.widgets.sphere-engine.com/lp?hash=FfmicNuJF1", "https://6793fdf6.widgets.sphere-engine.com/lp?hash=FfmicNuJF1", "https://6793fdf6.widgets.sphere-engine.com/lp?hash=FfmicNuJF1", "https://6793fdf6.widgets.sphere-engine.com/lp?hash=FfmicNuJF1", "https://6793fdf6.widgets.sphere-engine.com/lp?hash=FfmicNuJF1", "https://6793fdf6.widgets.sphere-engine.com/lp?hash=FfmicNuJF1", "https://6793fdf6.widgets.sphere-engine.com/lp?hash=FfmicNuJF1","https://6793fdf6.widgets.sphere-engine.com/lp?hash=FfmicNuJF1"]
let Title=["Young Sheldon","Squid Games","Dark","Money Heist","Good Doctor","Kung fu Panda","Big Bang theory","Avengers","Marvel Heros","Red warrent"]

let card=[]
for (let i=0;i<10;i++){
  card[i] = <Card url={URL[i]} title={Title[i]} imgsrc="https://resizing.flixster.com/NN5dYloXkEBc_DzNz3di2xtsET8=/fit-in/180x240/v2/https://resizing.flixster.com/RP1KKxlbEX5flfVjM6e8J3yHmqs=/ems.ZW1zLXByZC1hc3NldHMvdHZzZXJpZXMvUlRUVjI1Mzk5NS53ZWJw"/> 
}

ReactDOM.render(
  card,
  document.getElementById("root")
  );