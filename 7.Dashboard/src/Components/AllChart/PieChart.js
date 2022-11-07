import React from 'react'
import { Pie } from 'react-chartjs-2'

export default function PieChart(props) {
  return (
    <div className="chart-container-pies">
        <Pie
        redraw={true}
        data={{
            labels:props.label,
            datasets : [{
                data : props.data,
                backgroundColor :[
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ]
            }]
        }}
        />
    </div>
  )
}
