import React, {useState , useContext} from 'react'
import "./DashboardFinance.css"
import BarChart from '../../Components/AllChart/BarChart'
import { DashboardContext } from '../../context/DashboardContext'
import LineChart from '../../Components/AllChart/LineChart'


export default function DashboardFinance() {

    // useContext 
    const {dataChart , yearData ,changeYear} = useContext(DashboardContext)

  return (
    <div className="global-container">
      <h1>LES RESULTATSDE L'année {yearData}</h1>
      <form>
        <label htmlFor="year">Choisissez votre date :</label>
        <select onChange={changeYear} id="year">
            <option selected={yearData === "2020" && "selected"} value="2020">2020</option>
            <option selected={yearData === "2019" && "selected"} value="2019">2019</option>
            <option selected={yearData === "2018" && "selected"} value="2018">2018</option>
            <option selected={yearData === "2017" && "selected"} value="2017">2017</option>
        </select>
      </form>

      <div className="dashboard-container">
        {/* inserer dans le composant barChart ces données */}
        <BarChart data={dataChart.chart1} name={"Chiffres bimestriels"} />

        <LineChart data={dataChart.chart2} name={"Nombre d'abonnés (en milliers)"}/>

        <LineChart data={dataChart.chart3} name={"Nombre de clients (en milliers)"}/>

        <BarChart data={dataChart.chart4} name={"Budget Marketing"} />

        
      </div>
    </div>
  )
}
