import { v4 as uuidv4 } from "uuid";

const INITIAL_STATE = {
  notes: [
    {
      title: "Cuisine",
      subtitle: "Préparer un Osso buco",
      body: "Preserved defective offending he daughters on or. Rejoiced prospect yet material servants out answered men admitted. Sportsmen certainty prevailed suspected am as. Add stairs admire all answer the nearer yet length. Advantages prosperous remarkably my inhabiting so reasonably be if. Too any appearance announcing impossible one. Out mrs means heart ham tears shall power every. ",
      id: uuidv4(),
    },
    {
      title: "Sport",
      subtitle: "Courir 10km",
      body: "In to am attended desirous raptures declared diverted confined at. Collected instantly remaining up certainly to necessary as. Over walk dull into son boy door went new. At or happiness commanded daughters as. Is handsome an declared at received in extended vicinity subjects. Into miss on he over been late pain an. Only week bore boy what fat case left use. Match round scale now sex style far times. Your me past an much. ",
      id: uuidv4(),
    },
    {
      title: "Piano",
      subtitle: "Jouer l'Impromptu",
      body: "Pasture he invited mr company shyness. But when shot real her. Chamber her observe visited removal six sending himself boy. At exquisite existence if an oh dependent excellent. Are gay head need down draw. Misery wonder enable mutual get set oppose the uneasy. End why melancholy estimating her had indulgence middletons. Say ferrars demands besides her address. Blind going you merit few fancy their. ",
      id: uuidv4(),
    },
  ],
};


// Alternative à useContext
// stocker le state dans le store 
// la function noteReducer prend en parametre le state et laction (changement d'etat)
export default function notesReducer(state = INITIAL_STATE, action){

  switch(action.type){

    // ajouter une note
    case "ADDNOTE" : {
      const newNoteArr = [...state.notes]
      newNoteArr.push(action.payload)
    
      return{
        notes : newNoteArr
      }
    } 

    // MODIFIER LA NOTE
    case "UPDATENOTE": {

      // copie
      const newNoteArr = [...state.notes]

      // la modification faite par le user
      const actionPayload = action.payload

      // trouver lelement de l'id modifié  qui match avec l'id du state 
      const index = newNoteArr.findIndex(obj=>obj.id ===actionPayload.id)

      // remplacer l'element de l'id modifié stocké dans index par action.payload
      newNoteArr.splice(index, 1, actionPayload)

      return{
        notes : newNoteArr
      }
    }  

    // supprimer une note
    case "DELETENOTE": {
      
      const newNoteArr = [...state.notes].filter(note => note.id !== action.payload)
      //  ca filtre et retourne que les notes qui ont des id deifferent que action.payload 

      // payload : ce sont les information quon a envoyé dans payload via dispatch  que le reducer recoit

      // filter : methode en js qui va filtrer selon une condition et retourner un nouveau tableau : filter a la meme  synthaxe que .map()

      return{
        notes : newNoteArr
      }
    }
 
  }

  return state
}