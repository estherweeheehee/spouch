import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import dailyprice from '../Data/dailyprice';
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



const Graph = () => {

  

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };
      
      // const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
      const label = Object.keys(dailyprice["Time Series (Daily)"])
      const latest20labels = label.slice(0, 100)
      console.log(latest20labels)
      
      const pricedata = []
      for (let i = 0; i < latest20labels.length; i++) {
          pricedata.push(dailyprice["Time Series (Daily)"][latest20labels[i]]["4. close"])
      }
      console.log(pricedata)

      const fakedata = [1,2,3,4,5,6,7,8,9,10]

      
      
      const data = {
          labels: latest20labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: pricedata,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      };
    return (
        <>
    <Line options={options} data={data} />
    <br/>
    <br/>
    <br/>
    <br/>
    </>
    )
}

export default Graph;
