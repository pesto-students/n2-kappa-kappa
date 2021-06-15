/* eslint-disable import/prefer-default-export */
export function categoryReducer(state = {
  products: [],
  fetching: true,
}, action) {
  switch (action.type) {
    case 'FETCHING_PRODUCTS':
      return {
        ...state,
        fetching: true,
      };
    case 'FETCHED_PRODUCTS':
      return {
        ...state,
        products: action.payload.data,
        fetching: false,
      };
    default:
      return state;
  }
}
