import React, { useState, useEffect, useCallback } from 'react';
import { Line } from 'react-chartjs-2';
import get from 'lodash/get';
import moment from 'moment';

import { getGlucoseAPIURL, getTrendingGlucose } from '../../lib/utils';
import { getGlucoseData } from '../../lib/api/axiosFetchHandler';

const Dashboard = () => {
  const [glucoseData, setGlucoseData] = useState('');
  const [glucoseLabels, setGlucoseLabels] = useState('');
  const [trendingGlucoseData, setTrendingGlucoseData] = useState('');
  const [trendingGlucoseDataLabels, setTrendingGlucoseDataLabels] = useState('');

  const fetchGlucoseData = useCallback(async () => {
    const trendingGlucoseLabels = [];
    const glucoseDataFetchUrl = getGlucoseAPIURL();
    const resp = await getGlucoseData(glucoseDataFetchUrl);
    const patientGlucoseReadings = get(resp, 'data.user.glucose', []);
    const glucoseValues = patientGlucoseReadings.map(({ glucose }) => glucose);
    const glucoseLabelValues = patientGlucoseReadings.map(({ createdAt }) => moment(createdAt).format('MMM Do YY, h:mm:ss a'));
    const trendingGlucoseLabelStartDate = Date(glucoseLabelValues[0]).toString();
    const trendingGlucoseLabelEndDate = Date(glucoseLabelValues[glucoseLabelValues.length - 1]).toString();
    const trendingGlucose = getTrendingGlucose(glucoseValues);

    // Todo: fix date bug
    trendingGlucoseLabels.push(moment(trendingGlucoseLabelStartDate).format('MMM Do YY'));
    trendingGlucoseLabels.push(moment(trendingGlucoseLabelEndDate).format('MMM Do YY'));
    setTrendingGlucoseData(trendingGlucose);
    setGlucoseData(glucoseValues);
    setGlucoseLabels(glucoseLabelValues);
    setTrendingGlucoseDataLabels(trendingGlucoseLabels);
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
    ],
  };

  const data2 = {
    labels: trendingGlucoseDataLabels,
    datasets: [
      {
        label: 'Trending Avg. Blood glucose',
        data: trendingGlucoseData,
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

  const options2 = {
    title: {
      display: true,
      text: 'Trending Average Blood Glucose Dashboard',
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
      <div>
        <Line data={data} legend={legend} options={options} />
      </div>
      <div>
        <Line data={data2} legend={legend} options={options2} />
      </div>
    </div>
  );
};
export default Dashboard;
