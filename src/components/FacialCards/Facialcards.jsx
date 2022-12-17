import React from 'react'
import "./facialcard.css"
export default function Facialcards(props) {
  return (
    <div className='facialcards'>
      <div className="left">
        <div className="imgContainer">
          <img src={props.img} alt="" className='facial-img' />
        </div>
      </div>

      <div className="right">
        <h3 className="title">{props.title}</h3>
        <p className='paragraph'>{props.paragraph}</p>
      </div>
    </div>
  )
}
