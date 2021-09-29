import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"

import Projects from "./pages/Projects";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
      </Router>
    </div >
  );
}

export default App;
