import React from 'react'
import '../components/Planets.css'
import donlon from '../assets/donlon.png'
import enchai from '../assets/enchai.png'
import jebing from '../assets/jebing.png'
import sapir from '../assets/sapir.png'
import lerbin from '../assets/lerbin.png'
import pingasor from '../assets/pingasor.png'
export default function Planets() {
  return (
<>
    <h2 class="header">PLANETS</h2>
    <div className="flex-container">
    <div className="planets"><img src={donlon} alt="donlon"/></div>
    <div class="planets"><img src={enchai} alt="enchai"/></div>
    <div class="planets"><img src={jebing} alt="jebing"/></div>
    <div class="planets"><img src={sapir} alt="sapir"/></div>
    <div className="planets"><img src={lerbin} alt="lerbin"/></div>
    <div class="planets"><img src={pingasor} alt="pingasor"/></div>
  </div>
  
  </>
  )
}
