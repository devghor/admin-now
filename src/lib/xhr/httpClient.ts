import axios from 'axios';
import store from '../../store';
import { onSignOutSuccess } from '../../store/auth/sessionSlice';
import { apiConstant, appConstant } from '../../constants';

const unauthorizedCode = [401];

const httpClient = axios.create({
  timeout: apiConstant.timeout,
  baseURL: apiConstant.baseUrl,
});

httpClient.interceptors.request.use(
  (config) => {
    const rawPersistData = localStorage.getItem(appConstant.persistStoreName);
    const persistData = JSON.parse(rawPersistData as string);
    if (persistData) {
      const { token } = persistData.data;
      config.headers[
        apiConstant.requestHeaderAuthKey
      ] = `${apiConstant.tokenType}${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response, code } = error;
    if (code === 'ERR_NETWORK') {
      console.log('Can not connect to server');
    }

    if (response && unauthorizedCode.includes(response.status)) {
      store.dispatch(onSignOutSuccess());
    }

    return Promise.reject(error);
  }
);

export default httpClient;
