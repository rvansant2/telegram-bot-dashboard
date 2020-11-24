import axios from 'axios';
import map from 'lodash/map';
import keys from 'lodash/keys';

export const createDynamicURL = (base, url, params = {}) => {
  const durl = new URL(url, base);
  map(keys(params), (key) => {
    return durl.searchParams.append(key, params[key]);
  });
  return durl.toString();
};

export const getGlucoseData = async (url) => {
  const glucoseResponseData = await axios.get(url, {});
  return glucoseResponseData;
};

export default {
  getGlucoseData,
  createDynamicURL,
};
