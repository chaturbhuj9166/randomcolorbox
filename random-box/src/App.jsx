import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [text, setText] = useState("");
  const [color, setColor] = useState("#000000");
  const [display, setDisplay] = useState([]);

  function showText(e) {
    setText(e.target.value);
  }

  function colorChange(e) {
    setColor(e.target.value);
  }

  function addText() {
    if (text.trim() === "") return;
    const newNote = { text, color };
    setDisplay([...display, newNote]);
    setText("");
    setColor("#000000");
  }


  function deleteNote(index) {
    const newList = display.filter((_, i) => i !== index);
    setDisplay(newList);
  }

  return (
    <>
      <div className="main">
        <div className="first">
          <textarea
            placeholder="// Write a note here"
            className="textarea"
            onChange={showText}
            value={text}
          />
          <input type="color" value={color} onChange={colorChange} />
          <button className="add" onClick={addText}>
            Add note
          </button>
        </div>

        <div className="second">
          <h1>Your Notes</h1>

          {display.map((note, index) => (
            <div
              key={index}
              className="box"
              style={{
                backgroundColor: note.color,
                width: "200px",
                height: "200px",
                padding: "10px",
                margin: "10px",
                borderRadius: "8px",
                position: "relative",
                color: "white",
              }}
            >
              <span
                className="deletebtn"
                onClick={() => deleteNote(index)}
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  top: "5px",
                  right: "10px",
                  color: "red",
                  fontWeight: "bold",
                }}
              >
                X
              </span>
              {note.text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
