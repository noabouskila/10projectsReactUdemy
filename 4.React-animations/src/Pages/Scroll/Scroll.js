import React, {useState} from 'react'
import "./Scroll.css"
import {Waypoint} from "react-waypoint"
import { useSpring, animated} from 'react-spring'

// react waypoint : thrigger/declencher des elements au scroll

export default function Scroll() {

  // etat de depart a false 
  const [toggleTxt , setToggleTxt] = useState(false)

  // animation si  toogleText === true 
  const animation = useSpring({
    opacity : toggleTxt ? 1 : 0 ,
    transform : toggleTxt ? "translateX(0%)" : "translateX(-50%)"
  })

  return (
    <div>
      <p className='scroll-txt'> 
        Tempor Lorem pariatur elit duis minim deserunt. Commodo veniam amet sunt reprehenderit ea tempor consequat. In proident in et reprehenderit id fugiat est mollit in. Occaecat dolore proident adipisicing ad ad Lorem mollit dolore adipisicing nostrud ex aliquip et velit. Dolore deserunt reprehenderit aliqua anim ipsum et.
        Pariatur quis deserunt labore deserunt reprehenderit ipsum qui voluptate velit. Dolor Lorem ea ea dolore minim consequat dolor elit voluptate et quis elit labore. Officia irure cupidatat ut commodo ullamco. Elit eiusmod sit ipsum sint veniam cupidatat sit tempor eu consectetur cupidatat velit. In do excepteur consequat sunt eiusmod aliqua minim. Mollit qui veniam laboris consectetur culpa ea laborum sint magna id.  
      </p>
      <p className='scroll-txt'> 
        Tempor Lorem pariatur elit duis minim deserunt. Commodo veniam amet sunt reprehenderit ea tempor consequat. In proident in et reprehenderit id fugiat est mollit in. Occaecat dolore proident adipisicing ad ad Lorem mollit dolore adipisicing nostrud ex aliquip et velit. Dolore deserunt reprehenderit aliqua anim ipsum et.
        Pariatur quis deserunt labore deserunt reprehenderit ipsum qui voluptate velit. Dolor Lorem ea ea dolore minim consequat dolor elit voluptate et quis elit labore. Officia irure cupidatat ut commodo ullamco. Elit eiusmod sit ipsum sint veniam cupidatat sit tempor eu consectetur cupidatat velit. In do excepteur consequat sunt eiusmod aliqua minim. Mollit qui veniam laboris consectetur culpa ea laborum sint magna id.  
      </p>

      <Waypoint
      bottomOffset="30%" // declencher l'element plus tard : a partir de 30% du bottom
       onEnter={()=>{
        if(!toggleTxt){ // si toggleTxt === false alors mettre a true 
          setToggleTxt(true)
        }
        }
      }/>
      <animated.div style={animation} className="cta-section">
        <h2>N'en ratez pas une miette ! </h2>
        <form>
          <label htmlFor='email'>Inscrivez vous à la NewsLetter.</label>
          <input type="email" id="email"></input>
        </form>
      </animated.div>

      <p className='scroll-txt'> 
        Tempor Lorem pariatur elit duis minim deserunt. Commodo veniam amet sunt reprehenderit ea tempor consequat. In proident in et reprehenderit id fugiat est mollit in. Occaecat dolore proident adipisicing ad ad Lorem mollit dolore adipisicing nostrud ex aliquip et velit. Dolore deserunt reprehenderit aliqua anim ipsum et.
        Pariatur quis deserunt labore deserunt reprehenderit ipsum qui voluptate velit. Dolor Lorem ea ea dolore minim consequat dolor elit voluptate et quis elit labore. Officia irure cupidatat ut commodo ullamco. Elit eiusmod sit ipsum sint veniam cupidatat sit tempor eu consectetur cupidatat velit. In do excepteur consequat sunt eiusmod aliqua minim. Mollit qui veniam laboris consectetur culpa ea laborum sint magna id.  
      </p>
      <p className='scroll-txt'> 
        Tempor Lorem pariatur elit duis minim deserunt. Commodo veniam amet sunt reprehenderit ea tempor consequat. In proident in et reprehenderit id fugiat est mollit in. Occaecat dolore proident adipisicing ad ad Lorem mollit dolore adipisicing nostrud ex aliquip et velit. Dolore deserunt reprehenderit aliqua anim ipsum et.
        Pariatur quis deserunt labore deserunt reprehenderit ipsum qui voluptate velit. Dolor Lorem ea ea dolore minim consequat dolor elit voluptate et quis elit labore. Officia irure cupidatat ut commodo ullamco. Elit eiusmod sit ipsum sint veniam cupidatat sit tempor eu consectetur cupidatat velit. In do excepteur consequat sunt eiusmod aliqua minim. Mollit qui veniam laboris consectetur culpa ea laborum sint magna id.  
      </p>
    </div>
  )
}
