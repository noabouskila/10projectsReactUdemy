import React from 'react'
import "./Note.css"
import delIcon from "./remove.svg"
import edit from "./edit.svg"
import {Link} from "react-router-dom"
import { useDispatch } from 'react-redux'


export default function Note(props) {
  // props ce sont les parametes qu'on a inséere dans <Notes/> dans le composant SideNote
  console.log("mes props de SideNotes:", props)

  // qui permet d'envoer les données a mon reducer pour quil les traite et rentre dans le switch
  const dispatch = useDispatch()

  const deleteNote =() =>{
    dispatch({
      type: "DELETENOTE", 
      payload : props.id
    })
  }

  const modifyNote = () =>{
    dispatch({
      type : "VISUALIZENOTE",
      payload : props
    })
  }


  return (
  <li className='txt-note-prev'>
    {/* div qui decrit la note  a gauche */}

    <Link to={{
      pathname : `/displaynote/${props.title}`
    }}>
    <div className='bloc-note-left'>
      <p>{props.title}</p>
      <p>{props.subtitle}</p>
    </div>
    </Link>

    {/* div qui decrit la note  a droite */}
    <div className="bloc-note-right">
      <button onClick={deleteNote}>
        <img src={delIcon} alt="btn supprimer"/>
      </button>
      
      {/* link au cas ou on est sur une autre page on met un Link */}
      <Link to="/edit">
        <button onClick={modifyNote}>
          <img src={edit} alt="btn editer"/>
        </button>
      </Link>
      

    </div>

  </li>
  )
}
