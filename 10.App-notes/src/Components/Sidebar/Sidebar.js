import React,{useState , useEffect} from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import LogoEdit from "./ImgsSidebar/edit.svg"
import FolderIcon from "./ImgsSidebar/folder.svg"
import Menu from "./ImgsSidebar/menu.svg"
import Tools from "./ImgsSidebar/settings.svg"
import SideNotes from '../SideNotes/SideNotes'


export default function Sidebar() {

  // state pour detecter la largeur de mon ecran pour etre responsive avec window.innerWidth , mais peut se faire tout a fait en media queries 
  const [checkWidth , setCheckWidth] = useState(window.innerWidth)

  // function
  const checkWidthFunc = () => {
    setCheckWidth(window.innerWidth)
    // console.log("update size : ",window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize',checkWidthFunc)

    // cleanUp function
    return () => { 
      window.removeEventListener('resize',checkWidthFunc)
    } 
  },[])

  // state pour afficher la nav en responsive
  const [toggleNav , setToggleNav] = useState(false)

  const toggleNavFunc = () => {
    setToggleNav(!toggleNav)
  }

  return (
    <>
      {checkWidth < 900 &&
        <button 
        onClick={toggleNavFunc}
        className="toggle-nav-btn">
          <img src={Menu} alt=" button responsive menu" />
        </button>
      }
     
      <nav className={toggleNav ? "container-sidebar visible-nav" : "container-sidebar" }>
        <div className='sidebar'>
          <div className='three-dots'>
            <div className='dot-nav d-red'></div>
            <div className='dot-nav d-yellow'></div>
            <div className='dot-nav d-green'></div>
          </div>
          
          <ul>
            <Link to="/">
              <li>
                <img src={FolderIcon} alt="logo folder" />
              </li>
            </Link>

            <Link to="/edit">
              <li>
                <img src={LogoEdit} alt="logo edit" />
              </li>
            </Link>

            <Link to="/tools">
              <li>
                <img src={Tools} alt="logo tools" />
              </li>
            </Link>
          </ul>
        </div>

        <SideNotes/>
      </nav>
    </>
  )
}
