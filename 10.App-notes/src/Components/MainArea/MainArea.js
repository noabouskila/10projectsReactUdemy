import React,{useState, useEffect } from 'react'
import "./MainArea.css"
import {useDispatch , useSelector} from "react-redux"
import {v4 as uuidv4} from "uuid"

export default function MainArea() {

  // etat des input quand on rempli pour la premier fois une note
  const [inputInfo , setInputInfo] = useState({
    title : "",
    subtitle : "",
    body:""
  })

  // gerer l'enregistrment de la modification de la note quand toggle= true (dans le selectedReducer)
  const [inputModify , setInputModify] = useState({
    title : "",
    subtitle : "",
    body:""
  })

  // selectionner le selectedReducer grace a useSelector
  const selected = useSelector(state=>state.selectedReducer.selectedNotes)
  console.log(selected)

  // au changement de l'etat de selected : le mettre a jour 
  useEffect(() => {
    setInputModify(selected)
  }, [selected]);

  // gerer la validation si mal rempli = false
  const [validation , setValidation] = useState(true)

  // gerer l'enregistrment de la modification de la note

  // envoyer les données au reducer
  const dispatch = useDispatch()

  // PAS BESOIN DE RECUPERER LES INPUT EN USEREF ILS SONT DEJA RECUPERE AVEC LE TWO WAY DATA BINDING
  // // recuperer les inputs
  // const allInput = useRef([])
  // const addInput = (el) =>{
  //   if(el && !allInput.current.includes){
  //     allInput.current.push(el)
  //   }
  // }

  // cest un two way data binding pour la mise a jour de l'input en fonction de inputInfo ou inputModify
  const updateInput = (e) =>{

    // 1) selectionner l'id
    const actualInput = e.target.getAttribute("id")

    // console.log("OH MY INPUT is :" , actualInput) 
    
    // 2)mise a jour de l'input 
    // si toggle est true = on modifie  :  selectedReducer
    if(selected.toggle){
      // met ajour l'etat avec le nouvel input
      const newObjState = {...inputModify , [actualInput] : e.target.value}

      // console.log("What is My newObjstate :",newObjState)

      // mise a jour de l'etat
      setInputModify(newObjState)

    }  // si toggle  est false  = on insere une nouvelle donnée : notesReducer
    else if(selected.toggle === false){
      const newObjState = {...inputInfo , [actualInput] : e.target.value}

      // mise a jour de l'etat
      setInputInfo(newObjState)
    }
  }

  // ONSUBMIT DU FORMULAIRE
  const handleForm = (e) =>{
    e.preventDefault()

    // SELECTED.TOGGLE EST TRUE : 
    if(selected.toggle){
      if(inputModify.title.length <1){
        setValidation(false)
        return ; // return : je sors de la condition
      }
      setValidation(true)

      // dispatch les données modifiées
      dispatch({
        type : "UPDATENOTE",
        payload : inputModify //sans avoir besoin de passer un nouvel id car il a deja ete crée , ici cest juste pour modifier

      })

      // reset la note UNE FOIS ENREGISTREE pour afficher une autre vide
      dispatch({
        type : "RESETNOTE"
      })

      // remettre a 0 l'etat APRESSS l'avoir dipatché au reducer pour que une nouvelle note vide s'affiche
      setInputModify({
        title : "",
        subtitle : "",
        body:""
      })

    } // SELECTED.TOGGLE EST FALSE :
    else if(selected.toggle === false){

      //  gestion du message si le titre nest pas rempli
      if(inputInfo.title.length <1){
        setValidation(false)
        return ; // return : je sors de la condition
      }

      setValidation(true)

      // dispatch les données
      dispatch({
        type: "ADDNOTE" ,
        payload : {
          ...inputInfo , 
          // ... : on ne peut rajouter si ce n'est qu'en copiant
          id: uuidv4()
        }
      })

      // remettre a 0 l'etat APRESSS l'avoir dipatché au reducer pour que une nouvelle note vide s'affiche
      setInputInfo({
        title : "",
        subtitle : "",
        body:""
      })
    }
  }


  return (
    <div className='container-content'>
      <h2>Votre plume.</h2>
      <form onSubmit={handleForm}>
        <label htmlFor='title'>Le titre</label>
        <input 
        // ref={addInput}
        value={inputModify.toggle ? inputModify.title : inputInfo.title}
        onChange={updateInput}
        type='text' 
        id="title" 
        />

        {!validation &&(
          <span className='info-validation'>Veuillez renseigner un titre.</span>
        )}

        <label htmlFor='subtitle'>Sous-titre</label>
        <input 
        // ref={addInput}
        value={inputModify.toggle ? inputModify.subtitle : inputInfo.subtitle}
        onChange={updateInput}
        type='text'
        id="subtitle"
        />

        <label htmlFor='body'>Votre texte</label>
        <textarea 
        // ref={addInput}
        value={inputModify.toggle ? inputModify.body : inputInfo.body}
        onChange={updateInput}
        id='body'
        placeholder='Votre texte...'
        ></textarea>

        <button>Enregistrer</button>
      </form>
    </div>
  )
}
