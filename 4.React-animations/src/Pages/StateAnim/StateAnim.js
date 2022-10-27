import React,{useState , useRef , useEffect} from 'react'
import "./StateAnim.css"
import { useTransition , animated} from 'react-spring'
import { v4 as uuidv4 } from 'uuid'

// use transition: animation quand un element est rajouté
// uuid id unique : ici pour animer seulement les elements rajoutés
export default function StateAnim() {

  // creation detat qui change a false a bout de 1 seconde : pour que les elements monté la 1ere fois soient a true => les premiers elements : n'on pas d'amimation 
  const [firstDisplay , setFirstDisplay] = useState(true)

  // au montage du composant pour la premier fois 
  useEffect(()=>{
    setTimeout(() => {
      setFirstDisplay(false)
    }, 1000);

  },[])
  
  // etat de base du tableau
  const [inputData , setInputData] = useState([
    {
      id: uuidv4(),
      txt : "chopin"
    },
    {
      id: uuidv4(),
      txt : "mozart"
    },
    {
      id: uuidv4(),
      txt : "corneille"
    },
  ])

  // useRef pour ecouter l'input
  const inputRef = useRef() // pas besoin d'une fonction car il ya que un input 
  
  // au submit du formulaire :
  const handleData = (e) =>{
    // prevenir le comportement par defaut
    e.preventDefault() 

    // recuperer la valeur
    const newObj = {
      id: uuidv4(),
      txt: inputRef.current.value
    }

    // changer letat de base et creer un nouvel etat avec letat de base et le nouvel objet
    setInputData([...inputData ,newObj])

    // vider l'input
    inputRef.current.value = "" ;
  }

  // animation  du bas vers le haut 
  const listTransitions = useTransition(inputData,{
    from : {opacity:0 , transform: "translateY(10px)" },
    enter : {opacity:1 , transform: "translateY(0px)" },
    keys : inputData.map((item)=>item.id) // retourne un tableau avec les id deja existants dans le tableua pour reperer les nouveaux elements
  })

  return (
    <form onSubmit={handleData}>
      <label htmlFor='piano'>Renseignez vos pianistes favoris.</label>
      <input ref={inputRef} type="text" id="piano"/>


      {/* si firstDisplay === true afficher les items sans animation sinon avec */}
      {firstDisplay ? 
        (
          <ul>
            {inputData.map((item)=>{
              return <li key={item.id}>{item.txt}</li>
            })}
          </ul>
        ) 
        :   // sinon afficher les nvx elements avec animations 
        (
          <ul>
            {listTransitions((styles , item)=>{
              return <animated.li style={styles}> {item.txt} </animated.li>
            })}
          </ul> 
        )
      }

    </form>
  )
}
