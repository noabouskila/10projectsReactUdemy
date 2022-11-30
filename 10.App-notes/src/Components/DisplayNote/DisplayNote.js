import React from 'react'
import "./DisplayNote.css"
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function DisplayNote() {

  // selectionner l'id de l'url 
  const {id} = useParams()

  const {notes} = useSelector(state=>state.notesReducer)

  // matcher le titre de la note avec l'id du useParams
  const indexArticle = notes.findIndex(obj=>obj.title === id)
  console.log('MY INDEX ARTICLE ' , indexArticle)

  return (
    <div className='display-txt-zone'>
      <h2 className='title-display'>
        {/* si la l'id de useParams a bien matché avecle le title de note : alors on affiche le titre : on met [indexArticle] car il correspond a une chaine de caractere */}
        {notes[indexArticle] ? notes[indexArticle].title : ""}
      </h2>
      <span className='subtitle-display'>
       {notes[indexArticle] ? notes[indexArticle].subtitle : ""}
      </span>
      <p className='txt-display'>
       {notes[indexArticle] ? notes[indexArticle].body : ""}
      </p>
    </div>
  )
}
