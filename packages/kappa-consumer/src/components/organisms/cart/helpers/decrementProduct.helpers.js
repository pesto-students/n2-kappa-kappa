/* READERS */
import cartReaders from '../../../../readers/cart.readers'

const decrementProduct = (data, updateCart, deleteProductFromCart) => () => {
  cartReaders.id(data);
  cartReaders.countInStock(data.product);
  cartReaders.quantity(data.product);

  if (cartReaders.quantity(data) > 1) {
    updateCart({
      itemId:  cartReaders.id(data),
      type: 'dec',
    });
  } else {
    deleteProductFromCart(cartReaders.id(data))
  }
};

export default decrementProduct;
