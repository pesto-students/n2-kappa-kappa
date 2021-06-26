import property from '../utils/property.utils';

const id = property('_id');
const quantity = property('quantity');
const countInStock = property('countInStock');
const name = property('title');
const price = property('price');

export default {
  id,
  countInStock,
  quantity,
  name,
  price,
};
