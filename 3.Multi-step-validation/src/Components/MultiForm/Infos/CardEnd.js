import React from 'react'
import "./Card.css"

export default function CardEnd(props) {

  console.log(typeof(props.AllFormData))

  return (
    <div className='card'>
        <h1>Bravissimo ! </h1>
        <p>On peut maintenant te proposer des plats en fonction de tes goûts.</p>

        {/* CODE NON REUSSI ci dessous */}
        <ul>
          {Array.from(props.AllFormData).map((item,index)=>{
            return <li>{props.AllFormData[item]}</li>
          })}
        </ul>

    </div>
  )
}
