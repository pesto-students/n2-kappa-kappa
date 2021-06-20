/* CONSTANTS */
import BASE_URL from '../constants/baseURL';

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
  formData.append('data', JSON.stringify(data));
  if (files) {
    Object.values(files[0]).map((file) => formData.append('image', file))
  }

  return {
    method: 'POST',
    body: formData,
  };
}

function getPutFormConfig(data, files) {
  const formData = new FormData();
  formData.append('data', JSON.stringify(data));
  if (files) {
    Object.values(files[0]).map((file) => formData.append('image', file))
  }

  return {
    method: 'PUT',
    body: formData,
  };
}

function getPutConfig(data) {
  return {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      // Authorization: basicAuth,
    },
  };
}

function getDeleteConfig() {
  return {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: basicAuth,
    },
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

// Products
export function getAllProducts(data) {
  const url = `${BASE_URL}/api/v1/products?${objToQueryString(data)}`;
  return callApi(url);
}

export function addProduct(data, file) {
  const url = `${BASE_URL}/api/v1/products`;
  const config = getPostFormConfig(data, file);
  return callApi(url, config);
}

export function updateProduct(data, file) {
  const url = `${BASE_URL}/api/v1/products/${data._id}`;
  const config = getPutFormConfig(data, file);
  return callApi(url, config);
}

export function deleteProduct(id) {
  const url = `${BASE_URL}/api/v1/products/${id}`;
  const config = getDeleteConfig();
  return callApi(url, config);
}

// Categories
export function getAllCategories(data) {
  const url = `${BASE_URL}/api/v1/categories?${objToQueryString(data)}`;
  return callApi(url);
}

export function addCategory(data) {
  const url = `${BASE_URL}/api/v1/categories`;
  const config = getPostConfig(data);
  return callApi(url, config);
}

export function updateCategory(data, categoryId) {
  const url = `${BASE_URL}/api/v1/categories/${categoryId}`;
  const config = getPutConfig(data);
  return callApi(url, config);
}


// Orders
export function getAllOrders(data) {
  const url = `${BASE_URL}/api/v1/order?${objToQueryString(data)}`;
  return callApi(url);
}

export function updateOrder(orderId) {
  const url = `${BASE_URL}/api/v1/order/${orderId}/deliver`;
  const config = getPutConfig(orderId);
  return callApi(url, config);
}