import React from 'react';
import './App.css';
import Header from "./components/Header";
import Upcomings from "./components/Upcomings";
import Add from "./components/Add";





class App extends React.Component{
  constructor(props) {
    super(props);
      this.state = {
        section: "upcomings"
      };
    }
    render() {
      return (
        
        <div className="main">
          <section className="invis">
            <Header />
            <nav>
              <button onClick={() => this.setState({ section: "upcomings"})}>
                UPCOMING</button>
              <button onClick={() => this.setState({ section: "memories"})}>MEMORIES</button>
              <button onClick={() => this.setState({ section: "add"})}>NEW</button>
            </nav>
            {this.state.section === "upcomings" ? <Upcomings /> : null}
            {this.state.section === "add" ? (
              <Add changeSection={() => this.setState({ section: 'upcomings'})} />
            ) : null}
          </section>      
        </div>
        
        );
    };
  }


export default App;
