import React , {useContext}from 'react'
import { Context } from '../../context/LangContext'
import FrenchFlag from "../../assets/france.svg"
import EnglishFlag from "../../assets/united-kingdom.svg"
import SpanishFlag from "../../assets/spain.svg"
import "./ToggleLangs.css"

export default function ToggleLangs() {
    
    const {toggleLang} = useContext(Context)
    console.log(toggleLang)

  return (
    <div className='container-langs'>
      <img onClick={()=>toggleLang("FR")} src={FrenchFlag} alt="Drapeau francais"/>
      <img onClick={()=>toggleLang("EN")} src={EnglishFlag} alt="Drapeau Anglais"/>
      <img onClick={()=>toggleLang("ES")} src={SpanishFlag} alt="Drapeau Espagnol"/>
    </div>
  )
}


