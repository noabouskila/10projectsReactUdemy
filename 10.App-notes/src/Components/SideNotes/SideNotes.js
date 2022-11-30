import React,{useState, useEffect} from 'react'
import "./SideNotes.css"
// use selector pour selectionner le state du store
import {useSelector } from "react-redux"
import Note from './Note/Note'

export default function SideNotes() {

  const {notes} = useSelector(state => state.notesReducer)
  console.log(notes)

  // etat pour les notes
  const [noteList , setNoteList] = useState(notes)

  // au montage du composant a chaque fois que notes change, on met a jour l'etat de noteList
  useEffect(() => {
    setNoteList(notes)
  }, [notes]);

  const preventForm = (e) => e.preventDefault()

  // gestion de la barre de recherche 
  // pour comparer on met tout en majuscule
  const handleFilter = (e) =>{
    const stateCopy = [...notes]
    const filteredArr = stateCopy.filter((item)=> item.title.toLowerCase().includes(e.target.value.toLowerCase()))

    // mis a jour de l'etat
    setNoteList(filteredArr)
  }

  // la barre de listes de notes a gauche
  return (
    <div className='notes-display'>
      <h2>Mes notes</h2>

      <form onSubmit={preventForm}>
        <input
        onChange={handleFilter}
        type="text"
        id="search-notes" 
        placeholder='Rechercher...'/>
      </form>

      <ul className='notes-list'>
        {noteList.map(item=>(
          <Note
          key={item.id}
          // on rajoute l'id pour pouvoir retrouver dans le filtre de recherche ma note
          id={item.id}
          title ={item.title}
          subtitle = {item.subtitle}
          body={item.body}
          />
        ))}
      </ul>
      
    </div>
  )
}
