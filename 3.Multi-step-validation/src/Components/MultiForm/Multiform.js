import React , {useState} from 'react'
import "./MultiForm.css"
import Indicator from './Indicator/Indicator'
import CardEnd from './Infos/CardEnd'
import CardBegin from './Infos/CardBegin'
import DietForm from './SubForms/DietForm'
import FoodStyle from './SubForms/FoodStyle'
import Allergies from './SubForms/Allergies'


export default function MultiForm() {

    // Use State pour se deplacer entre les formulaire
    const  [formIndex , setFormIndex] = useState(1)

    //Usestate qui enregistre les données entrées du formulaire
    const [AllFormData , setAllFormData] = useState({
        dietForm : " " ,  //prend une seule donnée en string
        foodStyle : [] , // prend plusieurs données
        allergies : [] , // prend plusieurs données
        prefs : {}       // prend plusieurs donnée en string
    })

    // modify index : permet de passer à l'index suivant , qu'on passe au boutton onclick de card begin
    const modifyIndex = (index , data) => {
        setFormIndex(index)

        // si en plus de changer l'index on veut aussi recolter des données : copie le grand objet + obtenir le premier parametre de lobjet data pour => l'assigner a l'objet copie AllFormData 
        // Object.keys Renvoie un tableau avec les propriete de chaque elements du tableau
        if(data){
            const newData = {...AllFormData}

            const firstPropNewData = Object.keys(data)[0]
            // const firstPropNewData = Object.keys(newData)[0]
           
            // console.log(data[firstPropData])

            // le premier parametre du nouvel objet = au premier parametre de data 
            newData[firstPropNewData] = data[firstPropNewData]  


            console.log(newData[firstPropNewData])

            // mettre a jour l'etat
            setAllFormData(newData)
            
            console.log(newData)
        }

       
       
        
    }


    return (
        <div className='container-multiform'>
            <Indicator/>

            {formIndex ===1 
            ? <CardBegin modifyIndex={modifyIndex} /> 
            : formIndex ===2 
            ? <DietForm modifyIndex={modifyIndex}/>
            : formIndex ===3
            ? <FoodStyle modifyIndex={modifyIndex}/>
            : formIndex ===4
            ? <Allergies modifyIndex={modifyIndex}/>
            : ""
            }
        </div>
    )
}
