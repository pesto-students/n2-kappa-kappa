import { combineReducers } from 'redux';

import {
  categoryReducer,
} from '../pages/category/category.reducers';

export default combineReducers({
  products: categoryReducer,
});
