import React, { useRef } from 'react'
import "./SubForm.css"

export default function Allergies(props) {

    const preventFunc = (e) => {
        // prevenir parametre par defaut
        e.preventDefault()

        // selectionner que les valeurs cochées
        const styleData = {
            allergies : []
        }

        allcheckboxes.current.forEach(checkbox => {
            if(checkbox.checked){
                styleData.allergies.push(checkbox.value)
            }
        })

        props.modifyIndex(5,styleData)
    }

    // recuperer toutes les valeur des input  useRef
    const allcheckboxes = useRef([])

    const addCheck = (el) =>{
        if(el && !allcheckboxes.current.includes(el)){
            allcheckboxes.current.push(el)
        }
    }

    const handleReturn = () => {
        props.modifyIndex(3)
    }

  return (
    <form className='checkbox-form' onSubmit={preventFunc}>
    <p>As-tu des allergies ?</p>
    <span>Choix multiples.</span>

    <label htmlFor='milk'>Lait</label>
    <input  ref={addCheck}type="checkbox" id="milk" value="milk"/>
    
    <label htmlFor='pollen'>Pollen</label>
    <input ref={addCheck} type="checkbox" id="pollen" value="pollen"/>

    <label htmlFor='nut'>Noix</label>
    <input ref={addCheck} type="checkbox" id="nut" value="nut"/>

    <label htmlFor='eggs'>Oeufs</label>
    <input ref={addCheck} type="checkbox" id="eggs" value="eggs"/>

    <label htmlFor='seafood'>Fruits de mer</label>
    <input ref={addCheck} type="checkbox" id="seafood" value="seafood"/>

    <div className='container-nav-btns'>
        <button onClick={handleReturn}
        type='button' className='prev'>Précédent</button>
        {/* on met type button pour ne pas quil soit compté en tant que button */} 
        <button>Valider</button>  
    </div>

</form>
  )
}
