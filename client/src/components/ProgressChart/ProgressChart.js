import React, { useEffect, Children, useContext } from 'react'
import { HorizontalBar } from 'react-chartjs-2'
import ChoresContext from '../../utils/ChoresContext'
import { Button } from '@material-ui/core';

const ProgressChart = _ => {

  const { childArr } = useContext(ChoresContext)

  const data = {
    labels: childArr.map(child => child.name),
    datasets: [
      {
        // label: `This Week's Totals`,
        backgroundColor: ['#FFBA00', '#60B0F5', '#FF9300', '#968AF2'],
        borderColor: ['#FFBA00', '#60B0F5', '#FF9300', '#968AF2'],
        borderWidth: 1,
        // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        // hoverBorderColor: 'rgba(255,99,132,1)',
        data: childArr.map(child => child.totalPoints)
      }
    ]
  }

  return (
    <>
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
              minBarLength: 100,
              gridLines: {
                offsetGridLines: false
              },
              stacked: true
            }],
            xAxes: [{
              stacked: true
            }],      
          }
        }}
      />
    </div>
    </>
  )
}

export default ProgressChart