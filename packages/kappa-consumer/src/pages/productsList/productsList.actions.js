// actions
import * as productsServices from './productsList.services';

const handleError = (error) => console.log(error);

// export function authenticate() {
//   return (dispatch) => {
//     dispatch({ type: 'LOGGED_IN' });
//   };
// }

// eslint-disable-next-line import/prefer-default-export
export function getProductsList(productsQuery) {
  return (dispatch) => {
    dispatch({
      type: 'FETCHING_PRODUCTS_LIST',
    });

    return productsServices.getProductsList(productsQuery).then((data) => {
      dispatch({
        type: 'FETCHED_PRODUCTS_LIST',
        payload: data,
      });
    }, handleError);
  };
}
