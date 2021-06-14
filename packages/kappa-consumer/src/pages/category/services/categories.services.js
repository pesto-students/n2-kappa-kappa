/* CONSTANTS */
import BASE_URL from '../../../constants/baseURL';

/* UTILS */
import objToQueryString from '../../../utils/objToQueryStrings';

/* HELPERS */
import callApi from '../../../helpers/callApi';

// eslint-disable-next-line import/prefer-default-export
export function getAllProducts(productsQuery) {
  const url = `${BASE_URL}/api/v1/products?${objToQueryString(productsQuery)}`;
  return callApi(url);
}
