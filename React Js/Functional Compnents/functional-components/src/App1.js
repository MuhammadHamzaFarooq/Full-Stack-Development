import logo from "./logo.svg";
import "./App.css";
import react, { useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  const [status, setStatus] = useState(false);

  const getData = (e) => {
    // console.warn(e.target.value);
    let val = e.target.value;
    setData(val);
  };

  console.log(data);
  return (
    <div className="App">
      <h1>Input Data</h1>
      {print ? <h1>{data}</h1> : null}
      <input type="text" onChange={getData} />
      <button onClick={() => setPrint(true)}>Print</button>
      {status ? (
        <h1>
          Status : <span style={{ color: "green" }}>Online</span>{" "}
        </h1>
      ) : (
        // <h1> 
        //   Status : <span style={{ color: "red" }}>Offline</span>{" "}
        // </h1>
        null
      )}
      
      {/* <button onClick={()=>setStatus(true)}>show</button>
      <button onClick={()=>setStatus(false)}>hide</button> */}
      <button onClick={()=>setStatus(!status)}>Toggle</button>
    
    </div>
  );
}

export default App;
