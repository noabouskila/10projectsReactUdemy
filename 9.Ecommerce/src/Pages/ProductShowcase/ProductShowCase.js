import React,{useState , useEffect, useRef} from 'react'
// useparam pour retrouver  la page du produit cliqué
import { useParams } from 'react-router-dom'
import "./ProductShowCase.css"
import inventory from "../../data/inventory"
import {useDispatch} from "react-redux"


export default function ProductShowCase() {

  const [nbMugs, setNbMugs] =useState(1)
  const dispacth = useDispatch()

  // recupere le titre de l'element selectionée dans le chemin de l'url
  const {id} = useParams()
  console.log(id)

  // findIndex : trouve l'index 
  // ici: pour chaque objet de inventory : trouve l'index de chaque titre que sera === a id de useParams

  // pour afficher le mug avec le meme titre que e id de useParams
  const productClicked = inventory.findIndex(obj => obj.title.replace(/\s+/g,"").trim()===id)

  console.log(productClicked)

  // setState  met a jour le nombre de mugs selectionés
  const updateMugs =(e)=>{
    setNbMugs(Number(e.target.value))
  }
  console.log("quantité :",nbMugs)

  const addingInfo = useRef()
  let timerInfo;
  let display = true

  // fonction au bouton onSubmit
  const addToCart = e => {
    e.preventDefault()

    const itemAdded = {
      ...inventory[productClicked] ,
      quantity : nbMugs
    }

    dispacth({
      type : "ADDITEM",
      // données associées 
      payload:  itemAdded
    })

    addingInfo.current.innerText = "le produit a bien été ajouté au panier ! "

    // laisser le msg ajouté au panier que 1/2 seconde
    if(display){
      display= false
      timerInfo = setTimeout(() => {
        addingInfo.current.innerText = "";
        display= true
      }, 600);
    }
  }

  // nettoyage du composant : si jamais l'utilisateur part du composant  avant la fin du setTimeout sinon ca fait une erreur
  useEffect(()=>{
    // return : au demontage du composant
    return ()=>{
      clearTimeout(timerInfo)
    }
  },[])

  return (
    <div className='showcase'>
      <div className='container-img-showcase'>
        <img 
        className='img-showcase' 
        src={process.env.PUBLIC_URL + `/images/${inventory[productClicked].img}.png`} 
        alt="imgClicked" 
        />
      </div>
      <div className='product-infos'>
        <h2>{inventory[productClicked].title}</h2>
        <p>Prix : {inventory[productClicked].price} €</p>
        <form onSubmit={addToCart} >
          <label htmlFor='quantity'>Quantité</label>
          <input 
          id='quantity'
          type= "number"
          value={nbMugs}
          onChange={updateMugs}
          />
          <button>Ajouter au panier</button>
          <span 
          ref={addingInfo}
          className='adding-info'></span>
        </form>
      </div>
      
    </div>
  )
}
