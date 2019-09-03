import React, { Component } from "react";
import Memory from "./Memory";
import axios from "axios";
import DeleteButton from "./DeleteButton";;

export default class Memories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memories: []
        };
        this.updateMemories = this.updateMemories.bind(this);
    }

    updateMemories(memories) {
        this.setState({ memories: memories });
    }
    componentDidMount() {
        axios
            .get("/api/memories")
            .then(response => {
                console.log(response.data)
                this.setState({ memories: response.data });
            })
            .catch(err => {
                console.log(err);
            });
    }
    render() {
        const {memories} = this.state
        return (
            <section className="playbox">
            <div className="scroll" >
                {memories.map((memory, index) => (
                    <div>
                    <Memory
                        updateMemories={this.updateMemories}
                        image={memory.image}
                        event={memory.event}
                        date={memory.date}
                    />
                    <DeleteButton
                        path="memories"
                        index={index}
                        updateFunction={this.updateMemories}
                    />
                    </div>
                ))}
            </div>
            </section>
        )
    }
}