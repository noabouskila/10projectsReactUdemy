import {createContext , useState, useEffect} from 'react'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword,onAuthStateChanged} from 'firebase/auth'

// se connecter avec nos identifiants firebase
import { auth } from '../firebase-config'

export const UserContext = createContext()

export function UserContextProvider(props){
   
    // 1° LIENS AVEC FIREBASE ////
    
    // creation  dans fierebase d'un user
    const signUp=(email,pwd)=>createUserWithEmailAndPassword(auth,email,pwd)

        // CONNEXION  dans fierebase d'un user
        const signIn=(email,pwd)=>signInWithEmailAndPassword(auth,email,pwd)


    // 2 ° GESTIONS USERS  ETATS/////

    // etat de la creation nouvel utilisateur
    const [currentUser , setCurrentUser] = useState()

    // reponse le temps de chargment de firebase
    const [loadingData , setLoadingData] = useState(true)

    // au montage du composant 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            // mise a jour de currentUser avec les infos enregistrés du user
            setCurrentUser(currentUser)

            // mise a false pour dire dans props.children => seulement si je suis connecté j'arais acces aux routes privés
            setLoadingData(false)
        })
        // démontage du composant cleanUp function de unsubscribe
        return unsubscribe
    }, []);


    //3° MODAL////
    const [modalState , setModalState] = useState({
        signUpModal : false,
        signInModal : false
    })

    const toggleModals = (modal) => {
        if(modal ==="signIn"){
            setModalState({
                signUpModal : false,
                signInModal : true
            })
        }
        else if(modal ==="signUp"){
            setModalState({
                signUpModal : true,
                signInModal : false
            })
        }
        else if(modal ==="close"){
            setModalState({
                signUpModal : false,
                signInModal : false
            })
        }
    }

    return(
        <UserContext.Provider  value={{modalState , toggleModals,signUp,signIn,currentUser}}>
            {!loadingData && props.children}
        </UserContext.Provider>
    )
}