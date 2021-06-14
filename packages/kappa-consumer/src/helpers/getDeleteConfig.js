export default function getDeleteConfig() {
  return {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      // Authorization: basicAuth
    },
  };
}
