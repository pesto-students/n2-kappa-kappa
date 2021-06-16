export default function productReducer(state = {
  product: [],
  fetching: true,
}, action) {
  switch (action.type) {
    case 'FETCHING_PRODUCT':
      return {
        ...state,
        fetching: true,
      };
    case 'FETCHED_PRODUCT':
      return {
        ...state,
        product: action.payload.data,
        fetching: false,
      };
    default:
      return state;
  }
}
