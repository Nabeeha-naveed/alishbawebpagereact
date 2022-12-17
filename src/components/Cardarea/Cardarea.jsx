import React from 'react'
import "./cardarea.css"

export default function Cardarea(props) {
  return (
    <div className='cardarea'>
      <img src={props.img} alt="" className='card-img' />
      <h2 className="card-title">{props.title}</h2>
      <p className="card-paragraph">{props.paragraph}</p>
      <p className="card-link">{props.link}</p>
    </div>
  )
}
