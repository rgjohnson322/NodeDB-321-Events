import React, { Component } from "react";
import Upcoming from "./Upcoming";
import axios from "axios";
import DeleteButton from "./DeleteButton";

export default class Upcomings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            upcomings: []
        };
        this.updateUpcomings = this.updateUpcomings.bind(this);
    }

    updateUpcomings(upcomings) {
        this.setState({ upcomings: upcomings });
    }
    componentDidMount() {
        axios
            .get("/api/upcomings")
            .then(response => {
                this.setState({ upcomings: response.data });
                console.log(response.data)
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {

        return (
            <section className="playbox">
            <div className="scroll">
                {this.state.upcomings.map((upcoming, index) => (
                    <div >
                    <Upcoming
                        updateUpcomings={this.updateUpcomings}
                        image={upcoming.image}
                        event={upcoming.event}
                        date={upcoming.date}
                        index={index}
                    />
                    <DeleteButton
                        path="upcomings"
                        index={index}
                        updateFunction= {this.updateUpcomings}
                    /> 
                    </div>
                ))}
            </div>
            </section>
        )
    }
}