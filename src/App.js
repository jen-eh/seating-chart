import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { useMemo } from 'react';
import {findTableByName} from './utils/utils';
import Button from 'react-bootstrap/Button';

function App() {


  /*State*/
  const [input, setInput] = useState("");
  // new state variable
  const [submittedInput, setSubmittedInput] = useState("");
  /*On Form Submit*/

  const tableName = useMemo(() => {
    if (submittedInput) {
      return findTableByName(submittedInput);
    } else {
      return ""
    }
  }, [submittedInput])

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <form class="form-group" onSubmit={(e) => e.preventDefault()}>
            <input
              class="form-control form-control-lg"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="Guest Name"
              placeholder=""
            ></input>
            <Button className="submit-button" onClick={()=>setSubmittedInput(input)}>Find Table</Button>
          </form>
          <h2>{submittedInput}</h2>
          <h1>{tableName}</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
