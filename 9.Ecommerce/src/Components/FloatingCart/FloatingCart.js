import React from 'react'
import "./FloatingCart.css"
import iconCart  from  "./shopping-cart.svg"
import {Link} from 'react-router-dom'
// selectionner le state depuis le store
import {useSelector} from "react-redux"

export default function FloatingCart() {

  // recuperer le state  de cart reducer appellé par le store
  const shoppingCart = useSelector(state => state)
  console.log(shoppingCart)

  // pour que la quantité soit enregistrée au panier
  let totalItems = 0 
  for (const item of shoppingCart.cart){
    totalItems += item.quantity
  }

  return (
    <Link to="/shoppingCart">
      <div className='floating-cart'>
        <p>Votre panier</p>
        <div className='img-notif-container'>
          <img src={iconCart} alt="cart icon"/>
          <span className='notif'>{totalItems}</span>
        </div>
      </div>
    </Link>
  )
}
