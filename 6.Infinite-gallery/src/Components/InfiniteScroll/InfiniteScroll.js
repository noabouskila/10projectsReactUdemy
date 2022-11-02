import React,{useState , useEffect , useRef } from 'react'
import "./InfiniteScroll.css"
import {v4  as uuidv4} from "uuid"

export default function InfiniteScroll() {

  // state qui stock les données en 3 collones d'images
  const [dataImg , setDataImg] = useState([[],[],[]])

  // generer des pages à l'infini
  const [pageIndex , setPageIndex] = useState(1)

  // chercher et generer des img : etat initial aleatoire
  const [searchState , setSearchState] = useState("random")

  // en fonction de son etat le useEffect de recherche s'excecutera ou non
  const [firstCall , setFirstCall] = useState(true)



  const infiniteFetchData =() =>{
    fetch(`https://api.unsplash.com/search/photos?page=${pageIndex}&per_page=30&query=${searchState}&client_id=YM-c-fclit9UkTTgUdqSA5K66UKtoqoTuWJ8JmfNL3Q`).then((response)=>{
      return response.json()
    })
    .then((data)=>{
      console.log(data)
      const imgsReceived = []

      // pusser les url dans le tableau imgsReceived
      data.results.forEach(img => {
        imgsReceived.push(img.urls.regular)
      });

      // creer des nouveaux tableaux avec comme contenu les données des anciens tableaux
      const newFreshState = [
        [...dataImg[0]],
        [...dataImg[1]],
        [...dataImg[2]],
      ]

      let index = 0 
      // creation de boucle dans une boucle pour inserer les données dans les sous tableaux
      for(let i=0; i<3; i++){
        for(let j=0; j<10; j++){
          newFreshState[i].push(imgsReceived[index])
          index++
        }
      }

      // mise a jour de letat avec les nouveux tableaux
      setDataImg(newFreshState)

      // on met firstCall a false a la fin de l'appel des données
      setFirstCall(false)
    })
    
  }
  console.log(dataImg)
  
  useEffect(()=>{
    infiniteFetchData()
  },[pageIndex])

  // Au submit de linput moteur de recherche
  const handleSearch = (e) => {
    e.preventDefault()

    // change letat de searchState qui nest plus a 0
    setSearchState(inpRef.current.value)

    // remettre l'index à 1 au submit de linput
    setPageIndex(1)
  }
  useEffect(()=>{
    // pour ne pas que ce useEffect se lance au premier affichage du composant (perd en performance) : je dis :  firstCall === true => je return => cad , je sors du composant sinon j'excecute le composant : on mettra au debut le firstCall a true et puis a la fin de infiniteFetchData() je le met à false
    if(firstCall){return;}
    searchFetchData()
  },[searchState])

  // fetcher des images avec lutilisation du moteur de recherche
  const searchFetchData =() =>{
    fetch(`https://api.unsplash.com/search/photos?page=${pageIndex}&per_page=30&query=${searchState}&client_id=YM-c-fclit9UkTTgUdqSA5K66UKtoqoTuWJ8JmfNL3Q`).then((response)=>{
      return response.json()
    })
    .then((data)=>{
      console.log(data)
      const imgsReceived = []

      // pusser les url dans le tableau imgsReceived
      data.results.forEach(img => {
        imgsReceived.push(img.urls.regular)
      });

      // creer des nouveaux tableaux avec comme contenu les données des anciens tableaux
      const newFreshState = [
        [],
        [],
        [],
      ]

      let index = 0 
      // creation de boucle dans une boucle pour inserer les données dans les sous tableaux
      for(let i=0; i<3; i++){
        for(let j=0; j<10; j++){
          newFreshState[i].push(imgsReceived[index])
          index++
        }
      }

      // mise a jour de letat avec les nouveux tableaux
      setDataImg(newFreshState)
    })
  }

  const inpRef = useRef()


  // SCROLLHEIGHT mesure de la hauteur du contenu d'un élément, y compris le contenu non visible à l'écran
  // CLIENTHEIGHT : hauteur intérieure d'un élément en pixels
  // Element.scrollTop : obtient ou définit le nombre de pixels de défilement vertical du contenu d'un élément.

  // scroll infini : mesurer si lutilisateur est arrivé au bout de la page
  const infiniteCheck =()=>{
    console.log("hello infinitecheck")
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement

    if(Math.abs(scrollHeight - clientHeight - scrollTop) < 1) {
      console.log("tu as touché le fond!")
      setPageIndex(pageIndex => pageIndex+1)
    }
  } 

  // OU if(scrollHeight - scrollTop === clientHeight){...}
  

  useEffect(()=>{
    // ecouter levenement au scroll de la page : declencher la fonction infinteCheck
    window.addEventListener("scroll", infiniteCheck)
    
    // demontage du composant
    return ()=>{
      window.removeEventListener("scroll",infiniteCheck)
    }
  },[])

  return (
    <div className="container">

      <form onSubmit={handleSearch}>
        <label htmlFor="search">Votre recherche</label>
        <input type="text" id="search"  ref={inpRef}/>
      </form>

      <div className="card-list">
        <div>
          {dataImg[0].map(img=>{
            return <img key={uuidv4()} src={img} alt=""/>
          })}
        </div>

        <div>
          {dataImg[1].map(img=>{
            return <img key={uuidv4()} src={img} alt=""/>
          })}
        </div>

        <div>
          {dataImg[2].map(img=>{
            return <img key={uuidv4()} src={img} alt=""/>
          })}
        </div>

      </div>

    </div>
  )
}
