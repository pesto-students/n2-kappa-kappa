function handleError(error) {
  return Promise.reject(error);
}

export default async function callApi(url, config) {
  try {
    const res = await fetch(url, config);
    const data = await res.json();
    return data;
  } catch (err) {
    return handleError(err);
  }
}
