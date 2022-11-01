import React , {useState, useEffect , useReducer} from 'react'
import "./Chrono.css"
import PauseImg from "../Images/pause.svg"
import PlayImg from "../Images/play.svg"
import ResetImg from "../Images/reset.svg"

export default function Chrono() {

  // state de la session qui se decompte: etat initialisé a 25min => 1500 (1500/60)
  const [sessionTime , setSessionTime] = useState(120)

  // state de la session fixe: etat initialisé a 25min => 1500 (1500/60)
  const [sessionTimeFixed , setSessionTimeFixed] = useState(120)

  // state du temps de pause break qui se decompte de 5 min => 300 (300/60)
  const [breakTime , setBreakTime] = useState(60)

  // state du temps de pause break fixe de 5 min => 300 (300/60)
  const [breakTimeFixed , setBreakTimeFixed] = useState(60)

  // state pour faire tourner le chrono play et pause et reset => demarré a false : non demarré
  const [workingChrono , setWorkingChrono] = useState(false)

  // toggle  bouton play pause !workingChrono = toggle
  const playPause = () => {
    setWorkingChrono(!workingChrono) 
  }

  // useEffect  gestion du montage et demontage du composant => a chaque fois que le composant est monté , effectuer qqchose puis le demonter 
  // le useeffect englobe le changement de state quand il ya un settime ou setinterval ... 
  useEffect(()=>{
    let id;
    if(workingChrono){
      id = window.setInterval(() => {

        console.log("hello timer")
        dispatch({type : "TICK"})

      },1000);
    }
    // nettoyer setinterval au demontage du composant : cleanup function
    return ()=>{
      window.clearInterval(id)
    }

  },[workingChrono])

  // useReducer : gerer plusieurs changment detat a l'exterieur du useEffect 

  const [state , dispatch] = useReducer(reducer)

  function reducer(state , action){
    switch(action.type){

      case "TICK" : 
      if(sessionTime>= 0){
        setSessionTime(sessionTime -1)
      }
      else if(breakTime >=1){
        setBreakTime(breakTime -1)
      }
      else if(sessionTime<= 0 && breakTime<=0){
        setSessionTime(sessionTimeFixed)
        setBreakTime(breakTimeFixed)
      }
      break;
      default: console.log("ne rentre dans aucune condition")
    }
  }

  // SESSION MINUS
  const handleSession = (e) => {
    const el = e.target
    if(el.classList.contains('minus') ){
      if(sessionTime/ 60 > 1){
        setSessionTimeFixed(sessionTimeFixed -60)
        setSessionTime(sessionTime -60)
        console.log("sessionminus")
      }
      else{
        setSessionTimeFixed(sessionTimeFixed)
        setSessionTime(sessionTime)
      }
    }
    else{
      setSessionTimeFixed(sessionTimeFixed + 60)
      setSessionTime(sessionTime + 60)
      console.log("sessionplus")
    }
  }

  // BREAK MINUS
  const handleBreak = (e) => {
    const el = e.target

    if(el.classList.contains("minus")){
      if(breakTimeFixed>1){
        setBreakTimeFixed(breakTimeFixed -60)
        setBreakTime(breakTime - 60)
        console.log("breakminus")
      }
      else{
        setBreakTimeFixed(breakTimeFixed)
        setBreakTime(breakTime)
      }
    }
    else{
      setBreakTimeFixed(breakTimeFixed + 60)
      setBreakTime(breakTime + 60)
      console.log("breakplus")
    }
  }
  
  const resetFunc = () =>{
    if(workingChrono){
      setWorkingChrono(!workingChrono)
      console.log(" arrete le chrono : workingChrono : false")
    }
    setSessionTime(sessionTimeFixed)
    console.log("reset")
  }

  return (
    <div className={workingChrono ? "container-chrono anim-glow" : "container-chrono" }>
      <div className="container-config">

        {/* SESSION */}
        <div className="box-btns session">
          <button className="minus" onClick={handleSession}>
            -
          </button>

          {/* session fixe :  */}
          <span>{sessionTimeFixed / 60}</span> 

          <button className="plus" onClick={handleSession}>
            +
          </button>
        </div>

        {/* BREAK */}
        <div className="box-btns break">
          <button className="minus" onClick={handleBreak}>
            -
          </button>
          {/* session fixe :  */}
          <span>{breakTimeFixed / 60}</span> 

          <button className="plus" onClick={handleBreak}>
            +
          </button>
        </div>
      </div>

      <h1> 
        {sessionTime >=0
          ?(
            <span>
              {`${Math.trunc(sessionTime / 60)} : ${sessionTime % 60 <10 ? `0${
              sessionTime%60}` : `${sessionTime%60}`}`}
            </span>
          ):(
            <span>
              {`${Math.trunc(breakTime / 60)} : ${breakTime % 60 <10 ? `0${
                breakTime%60}` : `${breakTime%60}`}`}
            </span>
          )
        }
      </h1>

      {/* Boutons controller play/pause  ET reset */}
      <div className="container-controllers">
        <button onClick={playPause}>
          <img src={workingChrono ? PauseImg : PlayImg} alt=""/>
        </button>
        <button onClick={resetFunc}>
          <img src={ResetImg} alt=""/>
        </button>
      </div>

    </div>
  )
}
