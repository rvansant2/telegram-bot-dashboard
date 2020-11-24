import React, { useState, useEffect, useCallback } from 'react';
import { Line } from 'react-chartjs-2';
import get from 'lodash/get';
import moment from 'moment';

import { getGlucoseAPIURL } from '../../lib/utils';
import { getGlucoseData } from '../../lib/api/axiosFetchHandler';

const Dashboard = () => {
  const [glucoseData, setGlucoseData] = useState('');
  const [glucoseLabels, setGlucoseLabels] = useState('');

  const fetchGlucoseData = useCallback(async () => {
    const glucoseDataFetchUrl = getGlucoseAPIURL();
    const resp = await getGlucoseData(glucoseDataFetchUrl);
    const patientGlucoseReadings = get(resp, 'data.user.glucose', []);
    const glucoseValues = patientGlucoseReadings.map(({ glucose }) => glucose);
    const glucoseLabelValues = patientGlucoseReadings.map(({ createdAt }) => moment(createdAt).format('MMM Do YY, h:mm:ss a'));
    setGlucoseData(glucoseValues);
    setGlucoseLabels(glucoseLabelValues);
  }, []);

  useEffect(() => {
    fetchGlucoseData();
  }, [fetchGlucoseData]);

  const data = {
    labels: glucoseLabels,
    datasets: [
      {
        label: 'Blood glucose',
        data: glucoseData,
        fill: true,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
      // {
      //   label: 'Avg. Blood glucose (2 hrs. after food)',
      //   data: [133, 125, 135, 151, 154, 176],
      //   fill: false,
      //   borderColor: '#742774',
      // },
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

  return (
    <div>
      {/* {JSON.stringify(glucoseLabels)} */}
      <Line data={data} legend={legend} options={options} />
    </div>
  );
};
export default Dashboard;
