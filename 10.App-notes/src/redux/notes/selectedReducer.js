// on cree ce second reducer pour enregistrer les données des nouvelles notes crée par le user

const INITIAL_STATE ={
    selectedNotes : {
        title : "",
        subtitle : "",
        body : "",
        id: "" ,
        // toggle pour faire passer l'element cliqué a true afin de pouvoir lafficher
        toggle :false
    }
}

export default function selectedReducer(state = INITIAL_STATE, action){

    switch(action.type){

        case "VISUALIZENOTE" :{
            return{
                // dabord afficher la note 
                selectedNotes:{
                    ...action.payload,
                    toggle : true
                }
            }
        } 

        // reinitialiser la note à l'enregistrement de la note
        case "RESETNOTE" : {
            return{
                selectedNotes : {
                    title : "",
                    subtitle : "",
                    body : "",
                    id: "" ,
                    toggle :false
                }
            }
        } 

       
    }
    return state
}