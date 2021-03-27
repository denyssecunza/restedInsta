import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import UserPost from "./Components/UserPost";
import Dashboard from "./Components/Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/photos/:id" component={UserPost} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </BrowserRouter>
      <h1>RestedInsta</h1>
      <UserPost />
    </div>
  );
}

export default App;
