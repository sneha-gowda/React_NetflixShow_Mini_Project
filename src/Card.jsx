import React from "react"
import "./index.css"
function Card(props){
    console.log(props.imgsrc);
    return (<>
        <div className="card">
            <img src={props.imgsrc} height="200px" width="200px" alt="IMG Not found" />
            <h3>{props.title}</h3>
            <a href={props.url}>Watch</a>
        </div>
    </>)
}
export default Card