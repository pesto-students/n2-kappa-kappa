const getItemsCount = (arr) => arr.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0);

export default getItemsCount;
