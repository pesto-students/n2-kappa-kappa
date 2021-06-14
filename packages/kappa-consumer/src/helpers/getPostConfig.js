export default function getPostConfig(data) {
  return {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      // Authorization: basicAuth,
    },
  };
}
