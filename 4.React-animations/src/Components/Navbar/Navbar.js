import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

// importer Link de react rooter dom : pour intergrer les liens dans la navbar avec un to="" qui est relié au path de App.js

export default function Navbar() {
  return (
    <nav>
        <Link to="/">LISTE</Link>
        <Link to="/stateanim">STATEANIM</Link>
        <Link to="/scroll">SCROLL</Link>
    </nav>
  )
}
