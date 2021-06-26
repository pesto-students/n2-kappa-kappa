const getPrice = (price, discount) => {
  const res = (price / 100) * discount;
  return price - res;
};

export default getPrice;
