import { useState, useCallback } from "react";

function UseCallbackPractical() {

  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((prev) => prev - 1);
  }, []);

  return (
    <div style={{ backgroundColor: "#121212", color: "#fff", padding: "20px" }}>
      <h2>UseCallback Practical</h2>

      <h3>Count: {count}</h3>

      <button onClick={increment} style={{ width: "15%" }}>
        Increment
      </button>

      &nbsp;&nbsp;

      <button onClick={decrement} style={{ width: "15%" }}>
        Decrement
      </button>

    </div>
  );
}

export default UseCallbackPractical;