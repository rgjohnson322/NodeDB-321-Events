import React from "react";
import "./Upcoming.css";
// import Axios from "axios";
// import Memories from "./Memories";


export default function Memory(props) {
    console.log(props)
    return (
        <div className="upcoming-container">
            <img src={props.image} alt="memory"/>
            <div className= "info">
                <h2 className="event-title">{props.event}</h2>
                <h2 className="date">{props.date}</h2>
                <button>Edit</button>
            </div>
        </div>
    )
}


