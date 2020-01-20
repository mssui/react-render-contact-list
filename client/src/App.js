import React from 'react';
import Contacts from "./Contacts"

import './App.css';
import './index.css';

function App() {

  return (
    <div className="App">
      <h4>CONTACTS</h4>
      <divider />
      <div className="main-wrapper">
        <Contacts />
      </div>
    </div>
  );
}

export default App;
