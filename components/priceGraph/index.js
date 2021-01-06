import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import axios from "axios";

export default function PriceGraph({ id }) {
    const [chartData, setChartData] = useState({});
    const [employeeSalary, setEmployeeSalary] = useState([]);
    const [employeeAge, setEmployeeAge] = useState([]);
    const url = `https://egs-data.herokuapp.com/price.php?id=${id}`;

  const chart = () => {
    let empSal = [];
    let empAge = [];
    axios
      .get(url)
      .then(res => {
        console.log(res);
        for (const dataObj of res.data.data) {
          empSal.push(parseInt(dataObj.price));
          empAge.push(parseInt(dataObj.date));
        }
        setChartData({
          labels: empAge,
          datasets: [
            {
              label: "Price in US$",
              data: empSal,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4
            }
          ]
        });
      })
      .catch(err => {
        console.log(err);
      });
    console.log(empSal, empAge);
  };

  useEffect(() => {
    chart();
  }, []);

    return (
        <Line
          data={chartData}
          width={100}
          height={50}
          options={{
            responsive: true,
            title: { text: "Price History", display: true },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true
                  },
                  gridLines: {
                    display: false
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  }
                }
              ]
            }
          }}
        />
    )
}