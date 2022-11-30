// importer le combineReducers car on a 2 reducers
import { createStore , combineReducers } from "redux";
import notesReducer from "./notes/notesReducer";
import selectedReducer from "./notes/selectedReducer";

// combiner les reducer quand on en a plus que 1
const rootReducer = combineReducers({
    notesReducer ,
    selectedReducer
})

// stocker les reducer combinés dans le store
const store = createStore(rootReducer)

export default store