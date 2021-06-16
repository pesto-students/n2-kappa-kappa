// actions
import * as productServices from './product.services';

const handleError = (error) => console.log(error);

// export function authenticate() {
//   return (dispatch) => {
//     dispatch({ type: 'LOGGED_IN' });
//   };
// }

// eslint-disable-next-line import/prefer-default-export
export function getAProduct(productParams) {
  return (dispatch) => {
    dispatch({
      type: 'FETCHING_PRODUCT',
    });

    return productServices.getAProduct(productParams).then((data) => {
      dispatch({
        type: 'FETCHED_PRODUCT',
        payload: data,
      });
    }, handleError);
  };
}
