import React from 'react'
import './Table.css'

export default function Table(props) {
    console.log(props.time)
  return (
    <divc class="table-container"> 
    <table class="table">
         <thead>
        <tr>
          <th>attempt</th>
          <th>time taken</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>{props.time[1]}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{props.time[2]}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{props.time[3]}</td>
          </tr>
          <tr>
            <td>4</td>
            <td>{props.time[4]}</td>
          </tr>
          <tr>
            <td>Total hours</td>
            <td>{props.time[1]+props.time[2]+props.time[3]+props.time[4]}</td>
          </tr>
        </tbody>
    </table>
    </divc>

  )
}
