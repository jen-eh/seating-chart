import logo from './logo.png';
import './App.css';
import React, { useState } from "react";
import { useMemo } from 'react';
import {findTableByName} from './utils/utils';
import Button from 'react-bootstrap/Button';

function App() {

  const [input, setInput] = useState("");
  const [submittedInput, setSubmittedInput] = useState("");

  const formattedName = useMemo(() => {
    const names = submittedInput.split(" ");
    const formattedNames = names.map((name) => {
      return (name.length > 1 ? `${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}` : `${name.charAt(0).toUpperCase()}`);
    });
    return formattedNames.join(" ");
  }, [submittedInput]);

  const tableName = useMemo(() => {
    if (submittedInput) {
      return findTableByName(submittedInput);
    } else {
      return "";
    }
  }, [submittedInput]);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} width={250} height={250} alt="Logo" />
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
          <div className="table-output">
            <h2>{formattedName}</h2>
            <h1>{tableName}</h1>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
