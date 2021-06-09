import React, { useState, useEffect } from "react"
import { Line } from "react-chartjs-2"
import axios from "axios"

export default function PriceGraph({ id }) {
  let selectedCountry
  if (typeof window !== "undefined") {
    selectedCountry = localStorage.getItem("selectedCountry")
  }

  const [chartData, setChartData] = useState({})
  const [employeeSalary, setEmployeeSalary] = useState([])
  const [employeeAge, setEmployeeAge] = useState([])
  const url = `https://api.egdata.app/price.php?id=${id}&country=${
    selectedCountry || "US"
  }`

  const chart = () => {
    const empSal = []
    const empAge = []
    axios
      .get(url)
      .then((res) => {
        console.log(res)
        for (const dataObj of res.data.data) {
          empSal.push(dataObj.price)
          empAge.push(Date.parse(dataObj.date))
        }
        setChartData({
          labels: empAge,
          datasets: [
            {
              label: `Price in ${selectedCountry}`,
              data: empSal,
              backgroundColor: ["rgba(75, 192, 192, 0.6)"],
              borderWidth: 4,
            },
          ],
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    chart()
  }, [])

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
                beginAtZero: true,
              },
              gridLines: {
                display: false,
              },
            },
          ],
          xAxes: [
            {
              type: "time",
              time: {
                parser: "YYYY-MM-DD HH:mm:ss",
                unit: "month",
              },
            },
          ],
        },
      }}
    />
  )
}
