import config from '../../config/default.json';
import { createDynamicURL } from '../api/axiosFetchHandler';

export const getGlucoseAPIURL = () => {
  const glucoseDataBaseUrl = config.application.botAPIHost.port ? `${[config.application.botAPIHost.baseURL, config.application.botAPIHost.port].join(':')}` : config.application.botAPIHost.baseURL;
  const glucoseDataEndpoint = `${[config.application.botAPIHost.dashboardEndpoint, config.application.botAPIHost.patientId].join('/')}`;
  const glucoseDataFetchUrl = createDynamicURL(glucoseDataBaseUrl, glucoseDataEndpoint);
  return glucoseDataFetchUrl;
};

export const getTrendingGlucose = (glucoseData) => {
  const trendingData = [];
  if (glucoseData.length > 0) {
    let summary = 0;
    trendingData.push(glucoseData[0]);
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < glucoseData.length; i++) {
      summary += parseInt(glucoseData[i], 10);
    }
    summary = Math.round(summary / glucoseData.length);
    trendingData.push(summary);
  }

  return trendingData;
};

export default {
  getGlucoseAPIURL,
  getTrendingGlucose,
};
