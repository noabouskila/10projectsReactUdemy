import React, { useRef } from 'react'
import "./SubForm.css"

export default function FoodStyle(props) {

    const preventFunc = (e) => {
        // prevenir parametre par defaut
        e.preventDefault()

        // selectionner que les valeurs cochées
        const styleData = {
            foodStyle : []
        }

        allcheckboxes.current.forEach(checkbox => {
            if(checkbox.checked){
                styleData.foodStyle.push(checkbox.value)
            }
        })
        
        props.modifyIndex(4,styleData)
    }

    // recuperer toutes les valeur des input  useRef
    const allcheckboxes = useRef([])

    const addCheck = (el) =>{
        if(el && !allcheckboxes.current.includes(el)){
            allcheckboxes.current.push(el)
        }
    }


    const handleReturn = () => {
        props.modifyIndex(2)
    }

  return (
    
    <form className='checkbox-form' onSubmit={preventFunc}>
        <p>Quelles sont tes cuisines préférées ?</p>
        <span>Choix multiples.</span>

        <label htmlFor='italian'>Italien</label>
        <input  ref={addCheck}type="checkbox" id="italian" value="italian"/>
        
        <label htmlFor='japanese'>Japonaise</label>
        <input ref={addCheck} type="checkbox" id="japanese" value="japanese"/>

        <label htmlFor='indian'>Indienne</label>
        <input ref={addCheck} type="checkbox" id="indian" value="indian"/>

        <label htmlFor='thaï'>Thaïlandaise</label>
        <input ref={addCheck} type="checkbox" id="thaï" value="thaï"/>

        <label htmlFor='french'>Francaise</label>
        <input ref={addCheck} type="checkbox" id="french" value="french"/>

        <label htmlFor='chinese'>Chinoise</label>
        <input ref={addCheck} type="checkbox" id="chinese" value="chinese"/>

        <div className='container-nav-btns'>
            <button onClick={handleReturn}
            type='button' className='prev'>Précédent</button>
            {/* on met type button pour ne pas quil soit compté en tant que button */} 
            <button>Valider</button>

            
        </div>

    </form>
      
   
  )
}
