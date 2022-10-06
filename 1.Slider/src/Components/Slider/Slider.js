import React, {useState} from 'react'
import './Slider.css'
import './dataSlider'
import dataSlider from './dataSlider'
import BtnSlider from './BtnSlider'

export default function Slider() {

    const [slideAnim, setSlideAnim] = useState({
        index : 1 ,
        inProgress : false // progression du sliede en fonction du click : false pour ne pas que ca aille trop vite
    })

    const nextSlide = () => {
        console.log("suivant")
        if(slideAnim.index !== dataSlider.length && !slideAnim.inProgress){
            setSlideAnim({index: slideAnim.index+1 , inProgress: true})

            // gestion du spam click : seulement apres 0,4 s quil repasse à false pour continuer à progresser
            setTimeout(() => {
                setSlideAnim({index: slideAnim.index+1 , inProgress: false})
            }, 400)
        }
        else if(slideAnim.index === dataSlider.length && !slideAnim.inProgress){
            setSlideAnim({index : 1 , inProgress: true})

            // gestion du spam click : seulement apres 0,4 s quil repasse à false pour continuer à progresser
            setTimeout(() => {
                setSlideAnim({index: 1 , inProgress: false})
            }, 400)
            
        }
    }

    const prevSlide = () => {
        console.log("precedent")
        if(slideAnim.index !== 1 && !slideAnim.inProgress){
            setSlideAnim({index : slideAnim.index - 1 , inProgress: true})

            // gestion du spam click : seulement apres 0,4 s quil repasse à false pour continuer à progresser
            setTimeout(() => {
                setSlideAnim({index: slideAnim.index - 1 , inProgress: false})
            }, 400)
        }
        else if(slideAnim.index === 1 && !slideAnim.inProgress){
            setSlideAnim({index: 5, inProgress: true})

            // gestion du spam click : seulement apres 0,4 s quil repasse à false pour continuer à progresser
            setTimeout(() => {
                setSlideAnim({index: 5, inProgress: false})
            }, 400)
        }
    }

    const moveDot = index => {
        setSlideAnim({index : index , inProgress:false})
    }

  return (
        <div className='container-slider'>  
            {dataSlider.map((obj, index) => { // obj: valeur courante
                return(
                    
                    <div 
                    key={obj.id} // id de la valeur courante
                    className={slideAnim.index === index +1 ?
                    "slide active-anim" : "slide"} // ajouter une classe css de facon conditionnel si l'index = à l'index du tableau
                    >
                        <img src={ process.env.PUBLIC_URL +`/Imgs/img${index+1}.jpg`} alt=""/> 
                    </div>   

                    //un seul slash fait reference à la racine du projet=> dossier public
                    // process.env.PUBLIC_URL  => correspond à l'url du site quil faur mettre à chaque image
                )
            })}

            <BtnSlider moveSlide={nextSlide} direction={"next"}/>
            <BtnSlider moveSlide={prevSlide} direction={"prev"}/>

            <div className='container-dots'>

                {Array.from({length : 5}).map((item , index) => {
                    return <div 
                    className={slideAnim.index === index + 1 ? "dot active" : "dot"}
                    onClick={()=> moveDot(index+1)}
                    >
                    </div>
                })}

            </div>
            
        </div>
    )
}
