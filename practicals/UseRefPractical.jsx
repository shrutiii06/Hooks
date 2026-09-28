import { useRef } from "react";

function UseRefPractical() {

  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div style={{ backgroundColor: "#121212", color: "#fff", padding: "20px" }}>
      <h2>UseRef Practical</h2>

      <input
        ref={inputRef}
        type="text"
        placeholder="Enter text..."
        style={{ padding: "8px" }}
      />

      <br /><br />

      <button onClick={focusInput} style={{ width: "50%" }}>
        Focus Input
      </button>

    </div>
  );
}

export default UseRefPractical;