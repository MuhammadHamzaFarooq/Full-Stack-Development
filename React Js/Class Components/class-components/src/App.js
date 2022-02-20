import React, { Component } from "react";
import "./App.css";
import Student from "./Components/Functional Components/Student";
import Students from "./Components/Class Components/Sudents";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Muhammad Hamza Farooq",
      count : 1
    };
  }

  updateName() {
   this.setState({
     name : "MERN Stack And AI Chatbot Developer",
     count : this.state.count + 1
   })
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.name}</h1>
        <h1>{this.state.count}</h1>
        <button onClick={()=> this.updateName()}>Update Name</button>
        <Student name = "Mirza Ziyad Ahmed Beg"/>
        <Students name={this.state.name}></Students>
      </div>
    );
  }
}

export default App;
