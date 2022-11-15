import React, {useState, useContext, useRef} from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

export default function SignInModal() {

    // context
    const {modalState, toggleModals, signIn} = useContext(UserContext)


    // creer plusieurs ref en les rajoutant dans un tableau de useRef
    const inputs = useRef([]) 
    const addInputs = (el) =>{
        if(el && !inputs.current.includes(el)){
            inputs.current.push(el)
        }
    }
    // pour recuperer toutes les donnees du formulaire 
    const formRef = useRef([])

    // useState
    const [validation , setValidation] = useState("")

    // navigate 
    const navigate = useNavigate()



    const handleForm = async (e)=>{
        e.preventDefault()
        // console.log(inputs)

        // enregistrement dans firebase de la creation dun user : avec getion des erreurs
        try {
        
            const cred = await signIn(
                inputs.current[0].value,
                inputs.current[1].value,
            )
            console.log(cred)

            // dans le cas de reussite de creation de users alors je vide les inputs  et le setValidation
            formRef.current.reset()
            setValidation("")
            toggleModals("close")
            // naviguer dans une route privee : 
           navigate("/private/private-home")
        } 
        // si on s'inscrit avec une addresse mail qui existe déjà
        catch{
            setValidation("Oups! email et/ou mot de passe incorrect(s).")
        }
    }

    // ferme le modal et vide le message de setValidation
    const closeModal=()=>{
        setValidation("")
        toggleModals("close")
    }


  return (
    <>
        {modalState.signInModal &&(
            <div  className="position-fixed top-0 vw-100 vh-100">
           
                <div 
                    onClick={closeModal}
                    className="w-100 h-100 bg-dark bg-opacity-75">
                </div>
                
                <div className="position-absolute top-50 start-50 translate-middle p-2 rounded" style={{minWidth :"400px" ,backgroundColor:"white"}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Sign In</h5>
                                <button onClick={closeModal}  className="btn-close"></button>
                            </div>
                            <div className="modal-body">
                                <form 
                                ref={formRef}
                                onSubmit={handleForm}
                                className="sign-up-form">
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="signInEmail">Email adress</label>
                                        <input ref={addInputs}
                                        type="email"
                                        name="email"
                                        id="signInEmail"
                                        required
                                        className="form-control"/>
                                    </div>

                                    <div className="mb-3">
                                        <label           className="form-label"     htmlFor="SignInPwd">password
                                        </label>
                                        <input ref={addInputs}
                                            type="password"
                                        name="pwd"
                                        id="SignInPwd"
                                        required
                                        className="form-control"
                                        />
                                    </div>

                                    <p className="text-danger mt-1">{validation}</p>

                                    <button className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
       
    </>
  )
}
