import { useState, useMemo } from "react";

function UseMemoPractical() {

  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const expensiveCalculation = (num) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        //Nothing to iterate
    }
    return num * 2;
  };

  const result = useMemo(() => {
    return expensiveCalculation(number);
  }, [number]);

  const themeStyle = {
    backgroundColor: dark ? "#121212" : "#ffffff",
    color: dark ? "#ffffff" : "#000000",
    padding: "20px"
  };

  return (
    <div style={themeStyle}>
      <h2>UseMemo Practical</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <h3>Result: {result}</h3>

      <button onClick={() => setDark(!dark)}>
        Toggle Theme
      </button>

    </div>
  );
}

export default UseMemoPractical;