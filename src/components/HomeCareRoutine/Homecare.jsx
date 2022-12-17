import React from 'react'
import "./homecare.css"
import img1 from "../../assets/home1.jpeg"
import img2 from "../../assets/home1.jpg"

export default function Homecare() {
  return (
    <div className='homecare'>
      <div className="homecare-left">
        <img src={img1} alt="" className="careRoutineImg1" />
      </div>

      <div className="homecare-right">
        <img src={img2} alt="" className="rightCareRoutineImg2" />

        <h2 className="careTitle">Home Skin Care</h2>
        <p className="careParagraph">Vel fringilla est ullamcorper eget nulla facilisi. Nibh cras pulvinar mattis nunc. Massa id neque aliquam vestibulum morbi blandit.</p>

        <div className="homecare-btnContainer">
          <button className="homeCareBtn">
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}
