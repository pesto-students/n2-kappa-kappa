// actions
import * as categoryServices from './category.services';

const handleError = (error) => console.log(error);

// export function authenticate() {
//   return (dispatch) => {
//     dispatch({ type: 'LOGGED_IN' });
//   };
// }

// eslint-disable-next-line import/prefer-default-export
export function getAllProducts(productsQuery) {
  return (dispatch) => {
    dispatch({
      type: 'FETCHING_PRODUCTS',
    });

    return categoryServices.getAllProducts(productsQuery).then((data) => {
      dispatch({
        type: 'FETCHED_PRODUCTS',
        payload: data,
      });
    }, handleError);
  };
}
