import React from 'react'
import Chart from 'react-apexcharts'

function DrugConsumption() {

    const data = {
        series: [
            {
                name: 'Review',
                data: [10, 50, 30, 90, 40, 120, 100],
            },
        ],
        options:{
            chart:{
                type: "area",
                height: "auto",
            },
            fill:{
                colors: ["#fff"],
                type: "gradient",
            },
            dataLabels: {
                enabled: false,
            },
            stroke:{
                curve:"smooth",
                colors: ["#ff929f"],
            },
            tooltip:{
                x:{
                    format: "dd/MM/yy HH:mm",
                },
            },
            grid: {
                show: false,
            },
            xaxis: {
                type: "datetime",
                categories:[
                    "2020-01-01T00:00:00.000Z",
                    "2020-01-02T00:00:00.000Z",
                    "2020-01-03T00:00:00.000Z",
                    "2020-01-04T00:00:00.000Z",
                    "2020-01-05T00:00:00.000Z",
                    "2020-01-06T00:00:00.000Z",
                    "2020-01-07T00:00:00.000Z",
                ],
            },
            yaxis:{
                show: false,
            },
            toolbar:{
                show: false,
            }
        },
    };



  return (
    <div className="DrugConsumption">
        <Chart series={data.series} options={data.options} type='area'/>
    </div>
  )
}

export default DrugConsumption
