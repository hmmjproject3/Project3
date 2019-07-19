import React from 'react'
import { HorizontalBar } from 'react-chartjs-2'

const ProgressChart = _ => {
  const data = {
    labels: [],
    datasets: [
      {
        label: 'Marianna',
        backgroundColor: '#968AF2',
        borderColor: '#968AF2',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [650]
      },
      {
        label: 'Jennifer',
        backgroundColor: '#60B0F5',
        borderColor: '#60B0F5',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [500]
      },
      {
        label: 'Hamza',
        backgroundColor: '#FFE200',
        borderColor: '#FFE200',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [275]
      },
      {
        label: 'Matthew',
        backgroundColor: '#FF9300',
        borderColor: '#FF9300',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [350]
      }
    ]
  };

  return (
    <div style={{ position: 'relative' }}>
      <HorizontalBar
        data={data}
        width={90}
        height={200}
        options={{ maintainAspectRatio: false }} />
    </div>
  )
}

export default ProgressChart