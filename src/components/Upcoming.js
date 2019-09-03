import React, {Component} from "react";
import "./Upcoming.css";
import Axios from "axios";


export default class Upcoming extends Component {

        render() {
        
        return (
            <div className="upcoming-container">
                <img 
                    src={this.props.image} alt="event"
                />
                <div className= "info">
                <h2 className="event-title">{this.props.event}</h2>
                <h2 className="date">{this.props.date}</h2>
        <button
            onClick={e => {
                e.stopPropagation();
                Axios.put(`/api/memories/${this.props.index}`)
                .then(response => {
                })
                .catch(error => {
                    this.setState({ error: "an error ocurred"});
                });
            }}
        >Move</button>
        </div>
            </div>
    )
    }

}
    