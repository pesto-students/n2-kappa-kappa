/* READERS */
import cartReaders from '../../../../readers/cart.readers'

const incrementProduct = (data, updateCart) => () => {
  cartReaders.id(data);
  cartReaders.countInStock(data.product);
  cartReaders.quantity(data.product);

  if (cartReaders.quantity(data) < cartReaders.countInStock(data.product)) {
    updateCart({
      itemId:  cartReaders.id(data),
      type: 'inc',
    });
  }
};

export default incrementProduct;
