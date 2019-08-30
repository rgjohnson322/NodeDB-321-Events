import React, { Component } from "react";
import Axios from "axios";

export default class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: "",
            event: "",
            date: "",
            // countdown: clock
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
}
    render () {
        console.log(this.state.date)
        return (
            <form
                onSubmit={e => {
                    e.preventDefault();
                    Axios.post("/api/upcomings", {
                        image : this.state.image,
                        event: this.state.event,
                        date: this.state.date
                    })
                    .then(response => {
                        this.props.changeSection();
                    })
                    .catch(error => {
                        this.setState({ error: "an error ocurred"});
                    });
                }}
                >
                <input
                    name="image"
                    onChange={this.handleChange}
                    value={this.state.image}
                    placeholder="Image URL"
                />
                <input
                    name="event"
                    onChange={this.handleChange}
                    value={this.state.event}
                    placeholder="Event Title"
                />
                    <input
                    name="date"
                    onChange={this.handleChange}
                    value={this.state.date}
                    placeholder="Date"
                />
                <button type="submit">Submit</button>
                </form>


        )
    }
}
