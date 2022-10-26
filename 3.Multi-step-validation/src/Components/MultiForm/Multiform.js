import React , {useState} from 'react'
import "./MultiForm.css"
import Indicator from './Indicator/Indicator'
import CardEnd from './Infos/CardEnd'
import CardBegin from './Infos/CardBegin'
import DietForm from './SubForms/DietForm'
import FoodStyle from './SubForms/FoodStyle'
import Allergies from './SubForms/Allergies'
import HateLove from './SubForms/HateLove'


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

            // le premier parametre du nouvel objet = au premier parametre de data 
            newData[firstPropNewData] = data[firstPropNewData]  

            console.log(newData[firstPropNewData])

            // mettre a jour l'etat
            setAllFormData(newData)
            
            console.log(newData)
        }    
    }
    console.log({AllFormData})


    // rendu des composant sous forme de tableau
    const elements = [
        <CardBegin modifyIndex={modifyIndex} /> ,
        <DietForm modifyIndex={modifyIndex} />  ,
        <FoodStyle modifyIndex={modifyIndex} /> ,
        <Allergies modifyIndex={modifyIndex} /> ,
        <HateLove modifyIndex={modifyIndex} />  ,
        <CardEnd modifyIndex={modifyIndex} AllFormData={AllFormData} /> 
    ]

    return (
        <div className='container-multiform'>
            <Indicator formIndex={formIndex}/>

            {/* rendu des composant a travers map */}
            {elements.map((item,index) => {
                if(formIndex === (index+1)){
                   return  elements[index]
                }
            })}


            {/* {formIndex ===1 
            ? <CardBegin modifyIndex={modifyIndex} /> 
            : formIndex ===2 
            ? <DietForm modifyIndex={modifyIndex}/>
            : formIndex ===3
            ? <FoodStyle modifyIndex={modifyIndex}/>
            : formIndex ===4
            ? <Allergies modifyIndex={modifyIndex}/>
            : formIndex ===5
            ? <HateLove modifyIndex={modifyIndex}/>
            : formIndex ===6
            ? <CardEnd modifyIndex={modifyIndex}/>
            :""
            } */}

        </div>
       
    )
}
