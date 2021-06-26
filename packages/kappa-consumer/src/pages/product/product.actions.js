// actions
import * as productServices from './product.services';

const handleError = (error) => console.log(error);

// eslint-disable-next-line import/prefer-default-export
export function getAProduct(productParams) {
  return (dispatch) => {
    dispatch({
      type: 'FETCHING_PRODUCT',
    });

    return productServices.getAProduct(productParams).then((res) => {
      dispatch({
        type: 'FETCHED_PRODUCT',
        payload: res,
      });
    }, handleError);
  };
}
