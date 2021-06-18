export default function productsListReducer(state = {
  productsList: [],
  fetching: false,
}, action) {
  switch (action.type) {
    case 'FETCHING_PRODUCTS_LIST':
      return {
        ...state,
        fetching: true,
      };
    case 'FETCHED_PRODUCTS_LIST':
      return {
        ...state,
        productsList: action.payload,
        fetching: false,
      };
    default:
      return state;
  }
}
