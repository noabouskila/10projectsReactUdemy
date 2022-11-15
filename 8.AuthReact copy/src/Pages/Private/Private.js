import React,{useContext} from 'react'
import { UserContext } from '../../context/UserContext'

// montrer des routes imbriquer , naviguer et localiser ces routes avec react router v6
import { Outlet, useLocation , Navigate } from 'react-router-dom'

export default function Private() {

    // importer l'etat du context
    const {currentUser} = useContext(UserContext)

    console.log("privée" , currentUser)

    // si currentUser === false => retourner a home 
    if(!currentUser){
        <Navigate to={"/"}/>
    }
    

  return (
    <div className="container">
        {/* contenu de ma route imbriquée */}
        <Outlet/> 
    </div>
  )
}
