import "./App.css";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Editor from "./Components/Editor";
import React from "react";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/editor">
          <Editor />
        </Route>
        <Route path="/">
          <Hero />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
