import React from 'react'
import "./Products.css"
import heart from "./heart.svg"
import { Link } from "react-router-dom"
import inventory from '../../data/inventory'

export default function Products() {
  return (
    <div className='container-products'>
      {inventory.map(item =>(
        <Link to={{
          pathname : `/products/${item.title.replace(/\s+/g ,"").trim()}`
          // on supprime les espaces pour l'url
          // replace : remplace les espaces dns le mot par "" : rien 
          // trim remplace les espaces avant et apres le mot
        }}
        key={item.id}
        >
          <div className='bloc-card'>
            <div className='product-card'>
              <div className='visual-aspect'>
                <img className='img-product' src={process.env.PUBLIC_URL + `/images/${item.img}.png`} alt="product-img"/>
                <div className='like-container'>
                  <img src={heart} alt="heart"/>
                </div>
              </div>
              <div className='info'>
                <p>{item.title}</p>
                <p>{item.price} €</p>
              </div>
            </div>
            <div className='back-card'></div>
          </div>
        </Link>
      ))}
    </div>
  )
}
