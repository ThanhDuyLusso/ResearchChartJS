import React from 'react';
import { Bubble } from 'react-chartjs-2';

const rand = () => Math.round(Math.random() * 5);

const data = {
    datasets: [
        {
            label: 'Data 1',
            data: [
                { x: rand(), y: rand() },
                { x: rand(), y: rand() },
                { x: rand(), y: rand() },
                { x: rand(), y: rand() },
                { x: rand(), y: rand() },
                { x: rand(), y: rand() },
                { x: rand(), y: rand() },
            ],
            backgroundColor: 'rgba(255, 99, 132, 1)',
        },
        {
            label: 'Data 2',
            data: [
                { x: rand(), y: rand() },
                { x: rand(), y: rand() },
                { x: rand(), y: rand() },
                { x: rand(), y: rand() },
                { x: rand(), y: rand() },
                { x: rand(), y: rand() },
                { x: rand(), y: rand() },
            ],
            backgroundColor: 'black',
        },
    ],
};


const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

const BubbleChart = () => (
    <>
        <div>
            <h1>Bubble Chart</h1>
            <Bubble 
                data={data}
                options={options}
                height={400}
                width={600}
            />
        </div>
        
    </>
);

export default BubbleChart;