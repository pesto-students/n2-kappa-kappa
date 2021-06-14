function handleError(error) {
  return Promise.reject(error);
}

// eslint-disable-next-line no-unused-vars
export default async function callApi(url, config) {
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
