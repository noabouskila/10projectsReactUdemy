import React , {useState} from 'react'
import "./SubForm.css"

// 1er formulaire
export default function DietForm(props) {

    const [formData , setFormData] = useState({
        dietForm : "nodiet"
    })

    // prevenir le comportement par defaut du form : envoi des données et rafraichir la page ::: car on veut que ca passe au formulaire suivant sans envoyer encore les données
    const preventFunc = (e) => {e.preventDefault()}

    const HandleRadio = e => {
        setFormData({
            dietForm : e.target.value
        })
    }
    console.log(formData)

  return (
    <form onSubmit={preventFunc} className='diet-form'>
        <p>Quel est ton régime alimentaire ?</p>

        <label htmlFor='no-diet'>Pas de régime en particulier</label>
        <input 
        type="radio" 
        onChange={HandleRadio} 
        name="diet"
        id='no-diet'
        value="nodiet"/> 

        <label htmlFor='homnivorous'>Homnivore</label>
        <input 
        type="radio" 
        onChange={HandleRadio} 
        name="diet"
        id='homnivorous'
        value="homnivorous"/> 

        <label htmlFor='vegetarian'>Végétarien</label>
        <input 
        type="radio" 
        onChange={HandleRadio} 
        name="diet"
        id='vegetarian'
        value="vegetarian"/> 

        <label htmlFor='vegan'>Végan</label>
        <input 
        type="radio" 
        onChange={HandleRadio} 
        name="diet"
        id='vegan'
        value="vegan"/> 

        {/* envoyer aussi le contenu des données en passat formData à modifyIndex */}
        <button onClick={() => props.modifyIndex(3 , formData)}>Valider</button>
        
    </form>
  )
}
