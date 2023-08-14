import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2'


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);
//, 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'

const getGradient = (ctx, chartArea) => {
    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
    gradient.addColorStop(0, '#E2EFFF');
    gradient.addColorStop(1, 'rgba(0, 103, 251, 0)');
    return gradient;
}

const data = () => {
    return {
        labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL'],
        datasets: [
            {
                label: '',
                fill: true,
                lineTension: 0.5,
                backgroundColor: (context) => {

                    const chart = context.chart;
                    const { ctx, chartArea } = chart;

                    if (!chartArea) {
                        // This case happens on initial chart load
                        return;
                    }
                    return getGradient(ctx, chartArea);

                },
                borderColor: 'rgba(1, 119, 251, 1)',

                borderDashOffset: 0.0,
                borderJoinStyle: '#B57295',
                pointBorderColor: '#B57295',
                pointBackgroundColor: '#fff',
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: '#0177FB',
                pointHoverBorderColor: '#FFFFFF',
                pointHoverBorderWidth: 4,
                pointRadius: 0,
                pointHitRadius: 10,
                data: [0, 30, 40, 70, 10, 4, 56, 68, 9, 23, 45, 87]
            },

        ],
    }
}
const options = {
    scales: {
        x: {
            grid: {
                display: false,
            },
            border: {
                width: 0
            }
        },
        y: {
            grid: {
                display: false,
            },
            border: {
                width: 0
            },
            ticks: {
                display: false
            },

        }
    }
    ,
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            backgroundColor: '#E2EFFF',
            titleAlign: 'center',
            titleColor: '#0177FB',
            displayColors: false,
            yAlign: 'bottom',
            bodyAlign: 'center',
            bodyColor: '#0177FB',
        }
    }
}



const MyChart = () => (

    <Line
        data={data()}
        options={options}
    />

)


export default MyChart