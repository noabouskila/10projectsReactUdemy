import React, {useState, useContext, useRef} from 'react'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

export default function SignUpModal() {

    // context
    const {modalState, toggleModals, signUp} = useContext(UserContext)

    // console.log(signUp)

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
    
    // gerer la validation du formulaire (async car on utilise  un try catch avec await)
    const handleForm = async (e)=>{
        e.preventDefault()
        console.log(inputs)
        
        if((inputs.current[1].value.length || inputs.current[2].value.length) < 6 ){
            setValidation("6 caracteres minimum")
            return; // => je sors immédiatement de handlForm
        }
        else if(inputs.current[1].value !== inputs.current[2].value){
            setValidation("Password do not match")
            return; // => je sors immédiatement de handlForm
        }

        // enregistrement dans firebase de la creation dun user : avec getion des erreurs
        try {
            const cred = await signUp(
                inputs.current[0].value,
                inputs.current[1].value,
            )
            // dans le cas de reussite de creation de users alors je vide les inputs  et le setValidation
            formRef.current.reset()
            setValidation("")
            console.log(cred)
            toggleModals("close")
            // naviguer dans une route privee : 
           navigate("/private/private-home")
        } 
        // si on s'inscrit avec une addresse mail qui existe déjà
        catch (error) {
            // console.dir => pour voir les propriétés que retourne un objet
            console.dir(error)

            if(error.code ==="auth/invalid-email"){
                setValidation("format email invalide")
            }
            else if(error.code ==="auth/email-already-in-use"){
                setValidation("cet email existe déja")
            }
            
        }
    }

    // ferme le modal et vide le message de setValidation
    const closeModal=()=>{
        setValidation("")
        toggleModals("close")
    }

  return (
   
    <>
        {modalState.signUpModal &&(
            <div  className="position-fixed top-0 vw-100 vh-100">
           
                <div 
                    onClick={closeModal}
                    className="w-100 h-100 bg-dark bg-opacity-75">
                </div>
                
                <div className="position-absolute top-50 start-50 translate-middle p-2 rounded" style={{minWidth :"400px" ,backgroundColor:"white"}}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Sign Up</h5>
                                <button onClick={closeModal}  className="btn-close"></button>
                            </div>
                            <div className="modal-body">
                                <form 
                                ref={formRef}
                                onSubmit={handleForm}
                                className="sign-up-form">
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="signUpEmail">Email adress</label>
                                        <input ref={addInputs}
                                        type="email"
                                        name="email"
                                        id="signUpEmail"
                                        required
                                        className="form-control"/>
                                    </div>

                                    <div className="mb-3">
                                        <label           className="form-label"     htmlFor="SignUpPwd">password
                                        </label>
                                        <input ref={addInputs}
                                            type="password"
                                        name="pwd"
                                        id="SignUpPwd"
                                        required
                                        className="form-control"
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="repeatPwd">Repeat password</label>
                                        <input ref={addInputs}
                                        type="password"
                                        name="pwd"
                                        id="repeatPwd"
                                        required
                                        className="form-control"/>
                                        <p className="text-danger mt-1">{validation}</p>
                                    </div>

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
