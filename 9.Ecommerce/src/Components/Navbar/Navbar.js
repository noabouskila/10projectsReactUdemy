import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='nav-top'>
      <Link to="/">Accueil</Link>
      <Link to="/products">Produits</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}
