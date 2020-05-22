import React from "react";
import "./App.css";
import Leaderboard from "./Components/Leaderboard";
import About from "./Components/About";
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/'>
            <Leaderboard />
          </Route>
          <Route path='/about'>
            <About />
          </Route>

        </Switch>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
