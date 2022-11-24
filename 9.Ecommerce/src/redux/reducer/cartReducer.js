const  INITIAL_STATE = {
    cart : []
}

export default function cartReducer(state = INITIAL_STATE , action) {

    switch(action.type){
        // rajouter ou enlever un
        case "ADDITEM" : 
        console.log("aticle ajouté au panier")

        // verifier si on a deja l'element ajouté dans cart
        const indexItemAdd = state.cart.findIndex(obj => obj.id === action.payload.id)

        // si il ya deja cet id : objet  dans cart 
        if(indexItemAdd !== -1){

            const updateQuantity = {
                ...state.cart[indexItemAdd],
                quantity : state.cart[indexItemAdd].quantity + action.payload.quantity
            }
            // decouper l'element de l'indexItemAdd et je le  remplace par updateQuantity
            const newArr = [...state.cart]
            newArr.splice(indexItemAdd , 1 , updateQuantity)
            console.log(newArr)
            return {
                cart : newArr
            }

        }else{
            // si il n'ya pas cet id dans cart on le rajoute
            const newArr = [...state.cart]
            newArr.push(action.payload)
            console.log(newArr)
            return {
                cart : newArr
            }
        }

        case "UPDATEITEM" : 
        const indexItemUpdate = state.cart.findIndex(obj => obj.id === action.payload.id)

        const newArr = [...state.cart]
        newArr.splice(indexItemUpdate, 1, action.payload)
        return {
            cart : newArr
        }
       
        default : 
    }

    // retourner le state
    return state
}
