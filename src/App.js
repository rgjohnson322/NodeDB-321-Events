import React from 'react';
import './App.css';
import Header from "./components/Header";
import Upcomings from "./components/Upcomings";
import Add from "./components/Add";
import Memories from './components/Memories';


class App extends React.Component{
  constructor(props) {
    super(props);
      this.state = {
        section: "upcomings"
      };
    }
    render() {
      const {section} = this.state
      return (
        
        <main className="main">
          <section className="invis">
            <Header />
            <nav>
              <button onClick={() => this.setState({ section: "upcomings"})}>
                UPCOMING</button>
              <button onClick={() => this.setState({ section: "memories"})}>MEMORIES</button>
              <button onClick={() => this.setState({ section: "add"})}>NEW</button>
            </nav>
            {section === "upcomings" ? <Upcomings /> : null}
            {section === "add" ? (
              <Add changeSection={() => this.setState({ section: 'upcomings'})} />
            ) : null}
            {section === "memories" ? <Memories /> : null}
          </section>      
        </main>
        
        );
    };
  }


export default App;
