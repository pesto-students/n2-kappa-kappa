export default function productReducer(state = {
  product: {},
  isValid: true,
  fetching: true,
}, action) {
  switch (action.type) {
    case 'FETCHING_PRODUCT':
      return {
        ...state,
        isValid: true,
        fetching: true,
      };
    case 'FETCHED_PRODUCT':
      return {
        ...state,
        product: action.payload.data,
        isValid: action.payload.success,
        fetching: false,
      };
    default:
      return state;
  }
}
