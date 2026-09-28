import { useState, useInsertionEffect } from "react";

function UseInsertionEffectPrac() {
  const [color, setColor] = useState("blue");

  useInsertionEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .dynamic-text {
        color: ${color};
        font-weight: bold;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [color]);

  return (
    <div style={{ backgroundColor: "#121212", color: "#fff", padding: "20px" }}>
      <h2>Use Insertion Effect</h2>
      <p className="dynamic-text">This text changes color</p>

      <button onClick={() => setColor("red")} style={{width : "15%"}}>Red</button>
      &nbsp; &nbsp;
      <button onClick={() => setColor("green") } style={{width : "15%"}}>Green</button>
    </div>
  );
}

export default UseInsertionEffectPrac;
