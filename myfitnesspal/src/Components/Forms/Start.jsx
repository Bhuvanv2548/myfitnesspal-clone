import React from 'react'  //1
import { Link } from "react-router-dom";
import Name from './Name';
import "./Start.css";

export default function Start() {
  return (
    <div>
      <div  id='header' >
        <img 
        src="https://seekvectorlogo.com/wp-content/uploads/2022/02/myfitnesspal-vector-logo-2022.png" 
        style={{height:"90px"}}
        />
        <Link style={{textDecoration:"none",color: "black"}} to='/start'><h4>LOG IN</h4></Link>
      </div>
      <div id='mainDiv'>
        <h2>Welcome! Let’s customize MyFitnessPal for your goals.</h2><br/>
        <Link id='continue-button' to='/Name'>CONTINUE</Link>
      </div>
    </div>
  )
}

