import React from 'react'
import "./Sidebar.css"
import IconDashboard from "./analytics.svg"

// importer les liens des pages dans le menu de navigation 
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <nav className="sidenav">
        <img src={IconDashboard} alt="icône analytique"/>

        <Link to="/">FINANCES</Link>

        <Link to="/dashboardEmployees">EMPLOIS</Link>
      
    </nav>
  )
}
