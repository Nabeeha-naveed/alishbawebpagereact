import React from 'react'
import "./hero.css"

export default function Hero() {
  return (
    <div className='hero'>
      <h1 className='hero-text hero-title'>Welcome</h1>
      <h2 className='hero-text hero-name'>to A&A Beauty Salon,</h2>
      <h2 className='hero-text hero-place'>an Organic Beauty Salon in Istanbul</h2>

      <button className="hero-text hero-btn">Learn More</button>
    </div>
  )
}
