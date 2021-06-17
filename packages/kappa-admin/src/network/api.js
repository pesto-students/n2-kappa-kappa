import endpoint from './config';

const BASE_URL = endpoint.base.development;
// const { username, password } = endpoint.base;
// const basicAuth = `Basic ${btoa(`${username}:${password}`)}`;

// const STATUS_OK = 200;
// const NOT_FOUND = 406;

function handleError(error) {
  return Promise.reject(error);
}

export const httpConfig = {
  headers: {
    'Content-Type': 'application/json',
    // Authorization: basicAuth,
  },
};

function getPostFormConfig(data, files) {
  const formData = new FormData();
  // const fileField = document.querySelector('input[type="file"]');
  // formData.append('data', JSON.stringify(data));
  // for (let i = 0; i < file.length; i++) {
  formData.append('data', JSON.stringify(data));
  if (files) {
    Array.from(files).forEach((file) => formData.append('image', file));
  }

  // }

  for (const value of formData.values()) {
    console.log('wdok', value);
  }

  console.log('wodkw', data, files, formData);

  return {
    method: 'POST',
    body: formData,
    // headers: {
    //   'Content-Type': 'application/json',
    //   // Authorization: basicAuth,
    // },
  };
}

function getPostConfig(data) {
  return {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      // Authorization: basicAuth,
    },
  };
}

// eslint-disable-next-line no-unused-vars
export async function callApi(url, config) {
  try {
    const res = await fetch(url, config);
    console.log('wodkwodkw', url, config, res);
    const data = await res.json();
    // if (resJSON.statusCode === STATUS_OK || resJSON.status === STATUS_OK) {
    return data;
    // }
    // if (resJSON.statusCode === NOT_FOUND || resJSON.status === NOT_FOUND) {
    //   return { listData: [], data: [] };
    // }
    // throw new Error('Response status not OK');
  } catch (err) {
    return handleError(err);
  }
}

function objToQueryString(obj) {
  const keyValuePairs = [];
  for (let i = 0; i < Object.keys(obj).length; i += 1) {
    keyValuePairs.push(`${encodeURIComponent(Object.keys(obj)[i])}=${encodeURIComponent(Object.values(obj)[i])}`);
  }
  return keyValuePairs.join('&');
}

export function getAllProducts(data) {
  const url = `${BASE_URL}/api/v1/products?${objToQueryString(data)}`;
  return callApi(url);
}

export function addProduct(data, file) {
  const url = `${BASE_URL}/api/v1/products`;
  const config = getPostFormConfig(data, file);
  return callApi(url, config);
}

export function getAllCategories(data) {
  const url = `${BASE_URL}/api/v1/categories?${objToQueryString(data)}`;
  return callApi(url);
}

export function addCategory(data) {
  const url = `${BASE_URL}/api/v1/categories`;
  const config = getPostConfig(data);
  return callApi(url, config);
}

// export function getAllProducts(data) {
//   const url = `${BASE_URL}/api/v1/products?${objToQueryString(object)}`;
//   const config = getPostConfig(data);
//   return callApi(url, config);
// }
