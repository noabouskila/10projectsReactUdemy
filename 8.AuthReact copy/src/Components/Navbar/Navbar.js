import React ,{useContext} from 'react'
import {Link} from "react-router-dom"
import { UserContext } from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase-config'
import { async } from '@firebase/util'
import { signOut } from 'firebase/auth'

export default function Navbar() {

  const {modalState,toggleModals} = useContext(UserContext)

  // pour avoir accès à la méthode de useNavigate
  const navigate = useNavigate()

  // fonction asynchrone quand on attend la reponse de firebase
  const logOut =  async () =>{
    try {
      await signOut(auth)
      navigate("/")
      console.log("vous avez bien été déconnecté !")
    } catch (error) {
      alert("impossible de se déconecter, erreur: ", error)
    }
  }

  return (
    <nav className="navbar-light navbar bg-light px-4">
        <Link to="/" className="navbar-brand">AuthJs</Link>

        <div>
            <button
              onClick={()=>toggleModals("signIn")}
              className="btn btn-primary"
            >Sign In</button>

            <button 
              onClick={()=>toggleModals("signUp")} 
              className="btn btn-primary ms-2"
            >Sign Up</button>

            <button  
              onClick={logOut}
              className="btn btn-danger ms-2">Log Out</button>
        </div>
    </nav>
  )
}
