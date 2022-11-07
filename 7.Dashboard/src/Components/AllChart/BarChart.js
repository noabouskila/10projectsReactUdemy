import React from 'react'
// importer le graphique en Bar de react-chartjs-2
import {Bar} from "react-chartjs-2"
import fulldata from "../../context/fulldata"

export default function BarChart(props) {
  return (
    <div className="chart-container">
      <Bar
      //redessiner le graphique a chaque changment de données
      redraw={true}
      data={{
        labels : ["Jan/Fev","Mar/Avr","Mai,Jui","Juil/Aout","Sept/Oct","Nov/Dec"],
        datasets: [
          {
            label : props.name,
            data : props.data,
            backgroundColor: [
              "rgba(255, 99, 132, 0.8)",
              "rgba(54, 162, 235, 0.8)",
              "rgba(255, 206, 86, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(255, 159, 64, 0.8)",
              "rgba(255, 159, 64, 0.8)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
          }
        ]
      }}
      options = {{
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              min: 0,
              max: 20
            }    
          }]
        },
        // remove box
        legend: {
          labels: {
            boxWidth: 0,
          }
         },
      }}
    />
    </div>
  )
}

