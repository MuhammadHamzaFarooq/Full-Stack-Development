import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setname] = useState("");
  const [course, setCourse] = useState("");
  const [termCondition, setTermCondition] = useState(false);
  const getFormData = (e) => {
    e.preventDefault();
    console.warn(name);
    console.warn(course);
    console.warn(termCondition);
  };
  return (
    <div className="App">
      <h1>Input Form</h1>
      <form onSubmit={getFormData}>
        <input
          type="text"
          placeholder="Enter name "
          onChange={(e) => setname(e.target.value)}
        />{" "}
        <br />
        <br />
        <select onChange={(e) => setCourse(e.target.value)}>
          <option>Selcet Option</option>
          <option>IOT</option>
          <option>Chatbot</option>
          <option>Cloud Computing</option>
          <option>BlockChain</option>
        </select>
        <br />
        <br />
        <input
          type="checkbox"
          onChange={(e) => setTermCondition(e.target.checked)}
        />{" "}
        <span>Accept Terms And Conditions</span>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
