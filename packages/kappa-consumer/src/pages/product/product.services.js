/* CONSTANTS */
import BASE_URL from '../../constants/baseURL';

/* HELPERS */
import callApi from '../../helpers/callApi';

// eslint-disable-next-line import/prefer-default-export
export function getAProduct(productParam) {
  const url = `${BASE_URL}/api/v1/products/${(productParam)}`;
  return callApi(url);
}
