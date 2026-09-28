import { useState, useEffect } from "react";

function UseEffectPrac() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect triggered");
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div style={{ backgroundColor: "#1e1e1e", color: "#fff", padding: "20px" }}>
      <h2>Use Effect</h2>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button> &nbsp; &nbsp;
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default UseEffectPrac;
