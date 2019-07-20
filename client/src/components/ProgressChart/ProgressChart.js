import React, { useEffect, Children } from 'react'
import { HorizontalBar } from 'react-chartjs-2'
import ChartContext from '../../utils/ChartContext'
import Chores from '../../utils/Chores'

const ProgressChart = _ => {

  const data = {
    labels: ['Hamza', 'Matthew', 'Jennifer', 'Marianna'],
    datasets: [
      {
        // label: `This Week's Totals`,
        backgroundColor: ['#FFBA00', '#60B0F5', '#FF9300', '#968AF2'],
        borderColor: ['#FFBA00', '#60B0F5', '#FF9300', '#968AF2'],
        borderWidth: 1,
        // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        // hoverBorderColor: 'rgba(255,99,132,1)',
        data: [390, 280, 250, 350]
      }
    ]
  }

  return (
    <div id='progressChart' style={{ position: 'relative', width: 'auto' }}>
      <HorizontalBar
        data={data}
        width={80}
        height={200}
        options={{
          legend: false,
          maintainAspectRatio: false,
          scales: {
            yAxes: [{
              barPercentage: 0.5,
              barThickness: 8,
              maxBarThickness: 8,
              minBarLength: 2,
              gridLines: {
                offsetGridLines: false
              }
            }]
          }
        }}
      />
    </div>
  )
}

export default ProgressChart