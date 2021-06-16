export default function cartReducer(state = {
  cart: [],
  fetching: true,
}, action) {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART':
      return {
        ...state,
        fetching: true,
      };
    case 'ADDED_PRODUCT_TO_CART':
      return {
        ...state,
        fetching: false,
      };
    case 'FETCHING_CART':
      return {
        ...state,
        fetching: true,
      };
    case 'FETCHED_CART':
      return {
        ...state,
        cart: action.payload.data,
        fetching: false,
      };
    default:
      return state;
  }
}
