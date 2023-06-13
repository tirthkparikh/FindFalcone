import React from 'react'
import spacePod from '../assets/spacePod.png'
import spaceShuttle from '../assets/spaceShuttle.png'
import spaceShip from '../assets/spaceShip.png'
import spaceRocket from '../assets/spaceRocket.png'
import '../components/vehicle.css'

export default function Vehicles() {
  return (
    <>
    <h2 class="header">VEHICLES</h2>
    <div className="vehicle-container">
    <div className="vehicle"><img src={spacePod} alt="spacePod"/>
<div>space Pod</div>
<div>2 units</div>
<div>max-dis 200meg</div>
</div>
    <div class="vehicle"><img src={spaceShuttle} alt="spaceShuttle"/>
    <div>space spaceShuttle</div>
    
    <div>1 unit</div>
<div>max-dis 400meg</div></div>
    <div class="vehicle"><img src={spaceShip} alt="spaceShip"/>
    <div>space Ship</div>
    <div>2 units</div>
    <div>max-dis 600meg</div></div>
    <div class="vehicle"><img src={spaceRocket} alt="spaceRocket"/>
    <div>space Rocket</div>
    <div>1 unit</div>
    <div>max-dis 300meg</div>
    </div>
  </div>
  </>
  )
}
