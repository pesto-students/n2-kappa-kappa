// actions
import * as categoriesServices from '../services/categories.services';

const handleError = (error) => console.log(error);

// eslint-disable-next-line import/prefer-default-export
export function getAllCategories(categoriesParams) {
  return (dispatch) => {
    dispatch({
      type: 'FETCHING_CATEGORIES',
    });

    return categoriesServices.getAllCategories(categoriesParams).then((data) => {
      dispatch({
        type: 'FETCHED_CATEGORIES',
        payload: data,
      });
    }, handleError);
  };
}
