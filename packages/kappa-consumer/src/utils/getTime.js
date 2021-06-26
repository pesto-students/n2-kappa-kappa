const getTime = (dateStr) => {
  const d = new Date(dateStr);
  return d.toLocaleString();
};

export default getTime;
