import axios from 'axios';
import { endpoint, handleError } from 'config';
import { fetchWrapper } from 'utils';

export const instanceAxios = axios.create({
  baseURL: endpoint,
});

instanceAxios.interceptors.request.use(
  async config => {
    // console.log("req config", config);
    var Auth = true;
    if (config.url === '/users/login') {
      //api -> without token
      Auth = false;
    }
    const value = await localStorage.getItem('token');
    const token = JSON.parse(value);
    config.headers = {
      ...(Auth ? { Authorization: `Bearer ${token}` } : {}),
      Accept: 'application/json',
    };
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

instanceAxios.interceptors.response.use(
  response => {
    // console.log("response", response);
    return response;
  },
  error => handleError(error)
);

export const getDataReq = (param1, param2) => {
  return instanceAxios
    .get('/test', {
      params: {
        param1,
        param2,
      },
    })
    .catch(error => ({ error }));
};

export const getLogin = (username, password) => {
  return fetchWrapper(`${endpoint}/`, {
    body: {
      userid: username,
      pwd: password,
      cmd: 'login',
      skinname: 'bet-engine',
    },
  });
};

export const requestLogOut = token => {
  return fetchWrapper(`${endpoint}/logout?token=${token}`);
};

export const getMovimenti = (from, to, filter, token) => {
  return fetchWrapper(`${endpoint}/`, {
    body: {
      from: from,
      to: to,
      filter: filter,
      token: token,
      cmd: 'get_movements',
      skinname: 'bet-engine',
    },
  });
};

export const getReportSport = (from, to, token) => {
  return fetchWrapper(`${endpoint}/`, {
    body: {
      from: from,
      // to: to,
      token: token,
      cmd: 'list_ticket',
      // skinname: 'bet-engine',
    },
  });
};