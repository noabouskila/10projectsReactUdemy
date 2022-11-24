import React from 'react'
import "./Home.css"
import imgHomeShop from "./shopping.jpg"

export default function Home() {
  return (
    <div className='global-container'>
      <h1 className='home-title'>Bienvenue au <span>shop</span>.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, recusandae iure officiis repellendus illum, consectetur est nostrum molestias accusantium vero dignissimos eius impedit quibusdam itaque sed mollitia, culpa cum. Aperiam</p>
      <img src={imgHomeShop} alt="shop-home"/>
    </div>
  )
}
