import config from '../../config/default.json';
import { createDynamicURL } from '../api/axiosFetchHandler';

export const getGlucoseAPIURL = () => {
  const glucoseDataBaseUrl = config.application.botAPIHost.port ? `${[config.application.botAPIHost.baseURL, config.application.botAPIHost.port].join(':')}` : config.application.botAPIHost.baseURL;
  const glucoseDataEndpoint = `${[config.application.botAPIHost.dashboardEndpoint, config.application.botAPIHost.patientId].join('/')}`;
  const glucoseDataFetchUrl = createDynamicURL(glucoseDataBaseUrl, glucoseDataEndpoint);
  return glucoseDataFetchUrl;
};

export default {
  getGlucoseAPIURL,
};
