import { useEffect } from "react";
import Chart from 'chart.js/auto'
import { vals_nbr } from "@/data/StackesData";

export const BarChart = ({label, item, index}) => {
    const entries = Object.entries(item).filter(item => vals_nbr.includes(item[0]));
    const data = {
      labels: entries.map(item => item[0]),
      datasets: [{
        label,
        data: entries.map(item => parseInt(item[1])),
      }]
    };
    
    useEffect(() => {
        new Chart(document.getElementById(`chart-${index}`), {
            type: 'bar',
            data,
            options: {
                plugins: {
                  customCanvasBackgroundColor: {
                    color: '#ffffff88',
                  }
                },
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)',
                    'rgba(255, 159, 64, 0.4)',
                    'rgba(255, 205, 86, 0.4)',
                    'rgba(75, 192, 192, 0.4)',
                    'rgba(54, 162, 235, 0.4)',
                  ],
                  borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                  ],
                  borderWidth: 1
              }
        })
    }, [])

    return (
        <canvas width={900} height={500} key={index} id={`chart-${index}`}/>
    )
}