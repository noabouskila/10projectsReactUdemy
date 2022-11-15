import React,{useContext} from 'react'
import { UserContext} from '../../context/UserContext'


export default function Home() {

  const {currentUser} = useContext(UserContext)

  return (
    <div className="container p-3">
      <h1 className="display-2 text-light">
         {currentUser ? "Hi buddy !"  //connecté
         : 
         "Hi , Sign-up or Sign-in !" //deconnecté
         }
        
      </h1>
    </div>
  )
}
