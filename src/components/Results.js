import React, { useState } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import './Results.css'

export default function Results() {
    const [result,SetResult]=useState('')
    const history = useHistory();
    
    useEffect(()=>{
        let data = localStorage.getItem("response")
        let final = JSON.parse(data)
        console.log(final)
        SetResult(final["status"])
        console.log(result)
        
    },[])
    const ResetGame =()=>{
        
        history.push('/findfalcon')
        window.location.reload()
    }
  return ( <>
  {result=="success"?<div className='success text'>
   <h1>success!</h1>  Congratulations on Finding Falcone. King Shan is  mighty pleased   
  </div>:<div className="failure text">
    <h1>Failure!</h1> Failure on Finding Falcone. King Shan is Angry Try again  
    </div>}
    <button className={"reset-button"} onClick={ResetGame}>Reset</button> 
  </>
    
  )
}
