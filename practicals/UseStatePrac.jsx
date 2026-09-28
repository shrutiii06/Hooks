import { useState } from "react";

function UseStatePrac() {
  const [count, setCount] = useState(0);

  return (
    <div
        style={{ backgroundColor: "#000000", color: "#ffffff",padding: "20px" }}
    >
      <h2>Use State</h2>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      &nbsp; &nbsp;
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default UseStatePrac;
