import React, { useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(100);

  useEffect(() => {
    console.warn("Call useEffect Count"+ props.count);
  }, [props.count]);

  return (
    <div>
      <h1>Count Props :{props.count} </h1>
      <h1>Data Props : {props.data}</h1>
    </div>
  );
};

export default User;
