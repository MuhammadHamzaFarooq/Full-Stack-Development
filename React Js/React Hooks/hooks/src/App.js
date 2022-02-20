import "./App.css";
import React, { useEffect, useState } from "react";
import User from "./components/User";
import style from './custom.module.css';

// or less ideally
import { Button } from 'react-bootstrap';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(139);

  return (
    <div className="App">
      <h1 className={style.success} >Lern UseEffect</h1>
      <User count={count} data={data} />
      <Button variant="secondary" onClick={() => setCount(count + 1)}>Update Count</Button>
      <br />
      <br />
      <Button variant="success" onClick={() => setData(data + 1)}>Update Data</Button>
    </div>
  );
}

export default App;
