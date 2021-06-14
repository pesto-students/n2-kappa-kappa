import { Endpoint } from '../config/endpoint';

const { username, password } = Endpoint.base;
const basicAuth = `Basic ${btoa(`${username}:${password}`)}`;
const BASE_URL = Endpoint.base.pro_boot;

const STATUS_OK = 200;
const NOT_FOUND = 406;

function handleError(error) {
  return Promise.reject(error);
}

export const httpConfig = {
  headers: {
    'Content-Type': 'application/json',
    Authorization: basicAuth,
  },
};

function getPostConfig(data) {
  return {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json', Authorization: basicAuth },
  };
}

function getDeleteConfig() {
  return {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', Authorization: basicAuth },
  };
}

export function callApi(url, config = httpConfig) {
  return fetch(url, config)
    .then((res) => res.json())
    .then((res) => {
      if (res.statusCode === STATUS_OK) {
        return res;
      }
      if (res.statusCode === NOT_FOUND) {
        return { listData: [], data: [] };
      }
      throw new Error('Response status not OK');
    })
    .catch((err) => handleError(err));
}

function callGraphApi(url, config = httpConfig) {
  return fetch(url, config)
    .then((res) => res.json())
    .catch((err) => handleError(err));
}
