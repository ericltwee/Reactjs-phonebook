import React from "react";
import "./styling/main.scss";
import { Route } from "react-router-dom";
import axios from "axios";

import AddNum from "./components/AddNum";
import NumList from "./components/NumList";

function App() {
  const addNewNumber = (name, number) => {
    axios({
      method: "POST",
      url: "https://api.airtable.com/v0/appUnP45WjGNkbufP/Contacts",
      headers: {
        Authorization: "Bearer key8txJ4DSHAMTJyD",
        "Content-Type": "application/json",
      },
      data: {
        fields: {
          Name: name,
          Num: number,
        },
      },
    })
      .then((result) => {
        console.log("Number added");
      })
      .catch((err) => {
        console.log("Error");
      });
  };

  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header">
          <a href="/">
            {" "}
            <i class="far fa-address-book fa-2x"></i>
          </a>
          <a href="/add">
            <i className="fas fa-user-plus fa-2x"></i>
          </a>
        </header>
        <div className="App-content">
          <Route exact path="/">
            <NumList />
          </Route>
          <Route exact path="/add">
            <AddNum addNewNumber={addNewNumber} />
          </Route>
        </div>
      </div>
    </div>
  );
}

export default App;
