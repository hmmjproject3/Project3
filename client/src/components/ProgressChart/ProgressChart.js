import React, { useContext } from 'react'
import { HorizontalBar } from 'react-chartjs-2'
import ChoresContext from '../../utils/ChoresContext'
// import { Button } from '@material-ui/core';

const ProgressChart = _ => {
  const { childArr } = useContext(ChoresContext)

  let childArrToGraph = JSON.parse(JSON.stringify(childArr))

  const data = {
    labels: childArrToGraph.map(child => child.name),
    datasets: [
      {
        // label: `This Week's Totals`,
        backgroundColor: childArrToGraph.map(child => child.color),
        borderColor: childArrToGraph.map(child => child.color),
        borderWidth: 1,
        // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        // hoverBorderColor: 'rgba(255,99,132,1)',
        data: childArrToGraph.map(child => child.totalPoints)
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
              }]
            }
          }}
        />
      </div>
    </>
  )
}

export default ProgressChart
