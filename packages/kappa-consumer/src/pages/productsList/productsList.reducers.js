export default function productsListReducer(state = {
  productsList: [],
  fetching: false,
  fetched: false,
}, action) {
  switch (action.type) {
    case 'FETCHING_PRODUCTS_LIST':
      return {
        ...state,
        fetching: true,
        fetched: false,
      };
    case 'FETCHED_PRODUCTS_LIST':
      return {
        ...state,
        productsList: action.payload.data,
        fetching: false,
        fetched: true,
      };
    default:
      return state;
  }
}
