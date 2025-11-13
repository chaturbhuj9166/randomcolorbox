import React, { useState } from 'react'
import './App.css';

const App = () => {
  const [text, setText] = useState("")
  const [display, setDisplay] = useState([])

  function showText(e) {
    setText(e.target.value)
  }

  function addText() {
   
    setDisplay([...display, text])
    setText("")
  }

  return (
    <> 
      <div className='main'> 
        <div className='first'>
          <div>
            <textarea 
              placeholder='//Write a note here' 
              className='textarea'
              onChange={showText} 
              value={text}
            />
            <input type="color" />
          </div>
          <button className='add' onClick={addText}>Add note</button>
        </div>

        <div className='second'>
          <h1>Your Notes</h1>

         
          {display.map((note, index) => (
            <div key={index} className='box'>
              {note}
            </div>
          ))}

        
          {/* <ul>
            {display.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul> */}
        </div>
      </div>
    </>
  )
}

export default App
