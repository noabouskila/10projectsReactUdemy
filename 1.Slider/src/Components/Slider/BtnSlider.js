import React from 'react'
import leftArrow from './icons/left-arrow.svg'
import rightArrow from './icons/right-arrow.svg'

// desctructuration des props du composant parent {Slider}
export default function BtnSlider({moveSlide , direction}) {
  return (
    <button 
    className={direction === "next" ? "btn-slide next" : "btn-slide prev" }
    onClick={moveSlide}>
        <img src={direction === "next" ? rightArrow : leftArrow} alt="icon arrow"/>
    </button>
  )
}
