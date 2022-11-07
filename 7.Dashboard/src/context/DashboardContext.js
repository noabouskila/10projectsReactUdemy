import React,{createContext , useState} from 'react'
import fulldata from './fulldata'

// creation de contexte
export const DashboardContext = createContext()

// creation provider avec state et fonctions a l'interieur
export const DashboardContextProvider = props =>{

    // state  initial des données de l'année 
    const [dataChart , setDataChart] = useState(fulldata[2020])
    // state initial de l'année
    const [yearData , setYearData] = useState("2020")

    const changeYear = el =>{
        setDataChart(fulldata[el.target.value])
        setYearData(el.target.value)
    }

    return(
        <DashboardContext.Provider value={{changeYear,dataChart,yearData}}>
            {props.children}
        </DashboardContext.Provider>
    )
}
