import React from "react";
import "../components/Header.css";
import { Link } from "react-router-dom";



export default function Header() {

  
 
  
  
  return (
    <header class="header-bar">
      <h1 className="heading">FINDING FALCONE</h1>
      <div class="button-container">

      <Link to="/"><button>Home</button></Link>
      <Link to="/findfalcon"><button>Finding Falcone</button></Link>
     
        
      
      </div>
    </header>
  );
}
