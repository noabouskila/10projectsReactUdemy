import React, {createContext, useState} from 'react'

// creation du contexte
export const  Context = createContext();

// CREATION de detection de la langue 
const supportedLang =  ["FR" , "EN" , "ES"]

// detecter la langue du navigateur et la mettre en majuscule 
let browserLang = navigator.language.slice(0,2).toUpperCase()

if(supportedLang.indexOf(browserLang) === -1){ // n'existe pas
    console.log("not supported")
    browserLang = "EN" 
} 

// creation du provider qui va fournir le contexte  aux consumer/useContext AVEC le use state
const ContextProvider = props => {

    // creation de l'etat : useState
    const [lang, setLang] = useState(browserLang)

    // changement d'etat setState 
    // passer une fonction avec argument : changLang qui sera le setState 
    const toggleLang = changeLang =>{ 
        setLang(changeLang)
    }

    return(
        //provider : passer l'etat du usestate + le setState et entourer les enfants du provider 
        <Context.Provider value={{lang , toggleLang}}>
            {props.children}
        </Context.Provider>

    )   
}
export default ContextProvider;

