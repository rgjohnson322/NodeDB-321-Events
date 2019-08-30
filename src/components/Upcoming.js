import React from "react";
import "./Upcoming.css";
import Axios from "axios";

export default function Upcoming(props) {
        return (
            <div className="upcoming-container">
                <img 
                    src={props.image} 
                />
                <div className= "info">
                <h2 className="event-title">{props.event}</h2>
                <h2 className="date">{props.date}</h2>
                <button
                    onClick={e => {
                        e.stopPropagation();
                        Axios.delete(`/api/upcomings/${props.index}`).then(response => {
                        props.updateUpcomings(response.data);
        })
    }}
            >
        Delete</button>
        </div>
            </div>

    )
    }
    