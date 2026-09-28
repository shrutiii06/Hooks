import { useState, useLayoutEffect, useRef } from "react";

function UseLayoutEffectPrac() {
  const [text, setText] = useState("");
  const textAreaRef = useRef(null);

  // Resize textarea BEFORE browser paints+
  useLayoutEffect(() => {
    const textarea = textAreaRef.current;
    textarea.style.height = "auto"; // Reset height
    textarea.style.height = textarea.scrollHeight + "px"; // Set new height
  }, [text]);
  
  return (
    <div
        style={{ backgroundColor: "#000000", color: "#ffffff",padding: "20px" }}
    >      <h2>Use Layout Effect </h2>

      <textarea
        ref={textAreaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type Your Message Here..."
        style={{
          width: "97%",
          resize: "none",
          overflow: "hidden",
          padding: "10px",
          fontSize: "16px",
        }}
      />

      <p>Your Message Character Count is : {text.length}</p>
    </div>
  );
}

export default UseLayoutEffectPrac; 
/*
import { useState, useLayoutEffect, useRef } from "react";

function UseLayoutEffectPrac() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi 👋", sender: "other" }
  ]);
  const [input, setInput] = useState("");

  const chatEndRef = useRef(null);
  const textAreaRef = useRef(null);     

  // 1️⃣ Auto scroll to bottom BEFORE paint
  useLayoutEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "instant" });
  }, [messages]);

  // 2️⃣ Auto resize textarea BEFORE paint
  useLayoutEffect(() => {
    const textarea = textAreaRef.current;
    textarea.style.height = "auto";                      
    textarea.style.height = textarea.scrollHeight + "px";
  }, [input]);

  const sendMessage = () => {
    if (input.trim() === "") return;

    setMessages([
      ...messages,
      { id: Date.now(), text: input, sender: "me" }
    ]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>WhatsApp Style Chat (useLayoutEffect)</h2>

      {/* Chat Window */ /*}
      <div
        style={{
          height: "300px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "10px",
          marginBottom: "10px",
          backgroundColor: "#f5f5f5"
        }}
      >
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              textAlign: msg.sender === "me" ? "right" : "left",
              marginBottom: "8px"
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "8px 12px",
                borderRadius: "15px",
                backgroundColor:
                  msg.sender === "me" ? "#0084ff" : "#e4e6eb",
                color: msg.sender === "me" ? "#fff" : "#000",
                maxWidth: "70%"
              }}
            >
              {msg.text}
            </span>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area */  /*}
      <div style={{ display: "flex", gap: "10px" }}>
        <textarea
          ref={textAreaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message"
          rows={1}
          style={{
            flex: 1,
            resize: "none",
            overflow: "hidden",
            padding: "10px",
            borderRadius: "20px",
            border: "1px solid #ccc"
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            padding: "8px 15px",
            borderRadius: "20px",
            border: "none",
            backgroundColor: "#0084ff",
            color: "#fff",
            cursor: "pointer"
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default UseLayoutEffectPrac;
*/
/*

import { useState, useLayoutEffect, useRef } from "react";

function UseLayoutEffectPrac() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");

  const textAreaRef = useRef(null);
  const bottomRef = useRef(null);

  // 1️⃣ Auto resize textarea BEFORE paint
  useLayoutEffect(() => {
    const textarea = textAreaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  }, [input]);

  // 2️⃣ Scroll to latest note BEFORE paint
  useLayoutEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "instant" });
  }, [notes]);

  const addNote = () => {
    if (input.trim() === "") return;

    setNotes([
      ...notes,
      { id: Date.now(), text: input }
    ]);
    setInput("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Note Taking App (useLayoutEffect)</h2>

      {/* Input Section */     /*}
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "8px",
          marginBottom: "20px"
        }}
      >
        <textarea
          ref={textAreaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write your note..."
          rows={1}
          style={{
            width: "100%",
            resize: "none",
            overflow: "hidden",
            padding: "10px",
            fontSize: "16px",
            border: "none",
            outline: "none"
          }}
        />

        <button
          onClick={addNote}
          style={{
            marginTop: "10px",
            padding: "8px 12px",
            borderRadius: "6px",
            border: "none",
            backgroundColor: "#007bff",
            color: "#fff",
            cursor: "pointer"
          }}
        >
          Add Note
        </button>
      </div>

      {/* Notes List */   /*}
      <div  
        style={{
          maxHeight: "300px",
          overflowY: "auto",
          border: "1px solid #eee",
          padding: "10px"
        }}
      >
        {notes.map((note) => (
          <div
            key={note.id}
            style={{
              padding: "10px",
              marginBottom: "10px",
              backgroundColor: "#f5f5f5",
              borderRadius: "6px"
            }}
          >
            {note.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

export default UseLayoutEffectPrac; */
