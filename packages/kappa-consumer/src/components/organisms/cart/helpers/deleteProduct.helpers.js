const deleteProduct = (id, deleteProductFromCart) => () => {
  deleteProductFromCart(id);
};

export default deleteProduct;
