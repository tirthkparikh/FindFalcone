import "./App.css";
import React from "react";

import { BrowserRouter as Router,  Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Intro from "./components/intro";
import Results from "./components/Results";
import FindFalcon from "./components/FindFalcon";

function App() {
  return (
    <div className="App-header">
      
      <Router>
        <Header />
        
        <Route exact path="/" component={Intro} />
        <Route exact path="/findfalcon" component={FindFalcon} />
        <Route exact path="/results" component={Results}/>
       
      </Router>

      <Footer />
    </div>
  );
}

export default App;
