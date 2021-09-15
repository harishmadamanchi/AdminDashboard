import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Buttons from "./Components/Buttons";
import Cards from "./Components/Cards";
import Dashboard from "./Components/Dashboard";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/buttons" component={Buttons} />
            <Route path="/cards" component={Cards} />
          </Switch>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
