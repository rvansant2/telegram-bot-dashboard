import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Avg. Blood glucose',
      data: [133, 153, 125, 141, 144, 165],
      fill: true,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
    },
    {
      label: 'Avg. Blood glucose (2 hrs. after food)',
      data: [133, 125, 135, 151, 154, 176],
      fill: false,
      borderColor: '#742774',
    },
  ],
};

const legend = {
  display: true,
  position: 'bottom',
  labels: {
    fontColor: '#323130',
    fontSize: 14,
  },
};

const options = {
  title: {
    display: true,
    text: 'Blood Glucose Dashboard',
  },
  scales: {
    yAxes: [
      {
        ticks: {
          suggestedMin: 0,
          suggestedMax: 100,
        },
      },
    ],
  },
};

const Dashboard = () => {
  return (
    <div>
      <Line data={data} legend={legend} options={options} />
    </div>
  );
};
export default Dashboard;
